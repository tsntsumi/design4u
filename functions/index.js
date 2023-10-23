/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require('firebase-functions/v2/https')
const logger = require('firebase-functions/logger')

const functions = require('firebase-functions')
const rfc2047 = require('rfc2047')
const cors = require('cors')({ origin: true })
const nodemailer = require('nodemailer')

const defaultSender = process.env.DEFAULT_SENDER
const gmailEmail = process.env.GMAIL_EMAIL
const gmailPassword = process.env.GMAIL_PASSWORD
const hostName = process.env.HOST_NAME

const leadById = async (subsc_id, status) => {
  const param = !subsc_id ? `status=${status}` : `subsc_id=${subsc_id}&status=${status}`
  const res = await fetch(`${hostName}/db/leads?${param}`, {
    method: 'GET',
  })
  const leads = await res.json()
  return leads
}

const letterByUrl = async (url) => {
  if (!url) {
    return { subj: '', msg: '' }
  }
  try {
    const res = await fetch(`${hostName}${url}`, { method: 'GET', cache: 'no-store' })
    const { subj, msg } = await res.json()
    return { subj, msg }
  } catch (e) {
    logger.error(` caught exception ${e.message}`)
    return { subj: '', msg: '' }
  }
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})

const sendByGmail = async (lead, letter) => {
  const { name, id, email } = lead
  const { subj, msg } = letter

  const rep = [
    { RE: /%%NAME%%/gi, TO: name || email },
    { RE: /%%SUBSC_ID%%/gi, TO: id },
    { RE: /%%TO%%/gi, TO: email },
    { RE: /%%SUBJ%%/gi, TO: subj },
    { RE: /%%SENDER%%/gi, TO: defaultSender },
  ]
  const replacedAll = rep.reduce((replaced, replacing) => {
    return replaced?.replaceAll(replacing.RE, replacing.TO)
  }, msg)

  const mailOptions = {
    from: gmailEmail,
    to: email,
    subject: subj,
    html: replacedAll,
    sender: rfc2047.encode(defaultSender),
  }

  try {
    const result = { error: null, success: true, to: email }
    const r = await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        result.error = JSON.stringify(err, null, 2)
        result.success = false
        logger.error(`Error on send mail by Gmail: ${err}`)
        return
      }
      const str = JSON.stringify(info, null, 2)
      return result
    })
    return result
  } catch (e) {
    return { error: e.message, success: false }
  }
}

exports.sendNewsletter = onRequest((request, response) => {
  cors(request, response, async () => {
    if (request.method !== 'POST') {
      logger.error(`Method not allowed: ${request.method}`)
      response.status(405).json({ message: 'Method not allowed' })
      return
    }
    const { subsc_id, status } = request.body
    const leads = await leadById(subsc_id || '', status)
    const sentResults = []
    for await (const lead of leads) {
      const letter = await letterByUrl(lead.letter)
      const sent = await sendByGmail(lead, letter)
      sentResults.push(sent)
    }
    return response.json(sentResults)
  })
})
