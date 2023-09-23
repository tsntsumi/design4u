'use client'
import React, { useRef, useState } from 'react'

const NewsletterForm = ({
  title = 'ニュースレターを読んでみる',
  subscUrl = '/db/leads',
  letterUrl = '/letters/stepmail-001',
}) => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()
    const res = await fetch(subscUrl, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error, id } = await res.json()
    if (error) {
      setError(true)
      setMessage('登録エラーです。入力した Email アドレスが正しくないか、すでに登録してあります')
      return
    }

    const email = inputEl.current.value
    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    sendFirstLetter(id, email, letterUrl)
  }

  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div>
      <form className="flex flex-col sm:flex-row" onSubmit={subscribe}>
        <div>
          <label htmlFor="email-input">
            <span className="sr-only">Emailアドレス</span>
            <input
              autoComplete="email"
              className="focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black"
              id="email-input"
              name="email"
              placeholder={subscribed ? '購読頂きました !  🎉' : 'Emailアドレスを入力'}
              ref={inputEl}
              required
              type="email"
              disabled={subscribed}
            />
          </label>
        </div>
        <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
          <button
            className={`bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 ${
              subscribed ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400'
            } focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? 'ありがとうございます!' : '読んでみる'}
          </button>
        </div>
      </form>
      {error && (
        <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
      )}
    </div>
  )
}

const sendFirstLetter = async (id, email, letterUrl) => {
  const letter = await fetch(letterUrl, { method: 'GET' })
  const { msg, subj } = await letter.json()
  const path = process.env.NEXT_PUBLIC_FUNCTION_SENDNEWSLETTER_PATH
  // const path = 'https://us-central1-dgn4biz.cloudfunctions.net/sendNewsletters'
  const res = await fetch(path, {
    body: JSON.stringify({
      to: email,
      subscid: id,
      msg: msg,
      subj: subj,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
}

export default NewsletterForm
