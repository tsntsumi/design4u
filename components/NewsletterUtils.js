import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import * as React from 'react'
const { render } = require('@react-email/render')

export const imageUrl = 'https://gmap.alizza-ideal.com/images'

export function ToClient({ userImage, teamImage }) {
  return (
    <Section>
      <Row>
        <Column align="right">
          <Img className="rounded-full" src={userImage} width="64" height="64" alt="user image" />
        </Column>
        <Column align="center">
          <Img src={`${imageUrl}/arrow-left.png`} width="12" height="9" alt="message you from" />
        </Column>
        <Column align="left">
          <Img className="rounded-full" src={teamImage} width="64" height="64" alt="team image" />
        </Column>
      </Row>
    </Section>
  )
}

export function ProfilePhoto(props) {
  return <Img src={`${imageUrl}/profile.png`} width="32" height="32" alt="profile" />
}

export function Signature({ profImage, teamImage }) {
  return (
    <>
      <Hr />
      <Container className="h-fit mt-[26px]">
        <Row>
          <Column align="left">
            <Img src={profImage} width="64" height="64" className="rounded-full" alt="profile" />
          </Column>
          <Column className="text-center text-[10pt]" align="center">
            <Link href="mailto:gbp.agent@alizza-ideal.com">堤へのメッセージや相談</Link>
            はこちらからどうぞ。 &lt;
            <Link href="mailto:gbp.agent@alizza-ideal.com">mailto:gbp.agent@alizza-ideal.com</Link>
            &gt;
          </Column>
          <Column align="right">
            <Img src={teamImage} width="64" height="64" className="rounded-full" alt="team image" />
          </Column>
        </Row>
      </Container>
    </>
  )
}

export function Footer({ userName, userId, teamName, inviteFromLocation }) {
  return (
    <>
      <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
      <Text className="text-[#666666] text-[12px] leading-[24px] text-justify">
        このメールは、
        <span className="text-black">{userName} </span> 様あてにお送りしています。 こちらの情報は、{' '}
        <span className="text-black">{teamName}</span> が
        <span className="text-black">{inviteFromLocation}</span> よりお送りしました。
        {userId && (
          <>
            もし、この種の情報を受信したくない場合は、
            <Link href={`https://gmap.alizza-ideal.com/unsub/${userId}`}>
              こちらの登録解除フォーム
            </Link>
            から何時でも発信停止することができます。
          </>
        )}
      </Text>
    </>
  )
}

export const listing = {
  lineHeight: '1.6em',
  fontSize: '14px',
  fontWeight: 'normal',
}
