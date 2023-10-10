import * as React from 'react'
import { NextResponse } from 'next/server'
const { render } = require('@react-email/render')

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

import {
  DownloadButton,
  ProfilePhoto,
  Signature,
  Footer,
  ToClient,
  listing,
} from '@/components/NewsletterUtils'

const SITE_URL = process.env.SITE_URL || 'https://www.alizza-ideal.com'

const PRODUCT_NAME = '地域ビジネス・ストーリー・ブランディング'
const LETTER_TITLE = `[AI.BRANDING] ${PRODUCT_NAME}・ニュースレターのご購読ありがとうございます`
const OFFER_TITLE = `${PRODUCT_NAME} PDF`
const DEFAULT_OFFER_URL =
  'https://drive.google.com/file/d/1MPB0hO6OsKWUPfSsrls8PdqqY1eZN9WF/view?usp=sharing'

export function GET(req) {
  const html = render(<StepMail />)
  return NextResponse.json({ subj: LETTER_TITLE, msg: html })
}

const TextCenter = ({ children, className }) => {
  return <Text className={`text-center my-4 ${className}`}>{children}</Text>
}

function StepMail({
  userImage = `${SITE_URL}/images/letter/user-image-shop.png`,
  offeredByUsername = '堤',
  offeredByEmail = 'kikuo@alizza-ideal.com',
  teamName = 'Alizza Ideal',
  teamImage = `${SITE_URL}/images/letter/logo.png`,
  offerTitle = OFFER_TITLE,
  offerUrl = DEFAULT_OFFER_URL,
  offerFromIp = '126.166.5.245',
  offerFromLocation = '茨城県、水戸市',
  profImage = `${SITE_URL}/images/letter/profile-round.png`,
}) {
  const previewText =
    'ご登録ありがとうございました。HTMLメールでお送りしています。うまく表示できない場合は、メールアプリの設定をご確認ください'

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[4px] mx-auto p-[1em] w-[465px]">
            <Text className="text-black text-[14px] leading-[24px]">
              おはようございます、%%NAME%% さん、はじめまして。堤と申します。
            </Text>
            <ToClient userImage={userImage} teamImage={profImage} />
            <Text>このたびは</Text>
            <TextCenter>『{PRODUCT_NAME}・ニュースレター』</TextCenter>
            <Text>（メルマガ）のご購読ありがとうございます。</Text>
            <TextCenter>
              わたしは、Alizza Ideal (アリザ・アイデアル) 創業者の <b>堤</b> と申します
              <span className="text-[8pt]">(「アリザはアイである」と覚えてください)</span>。
            </TextCenter>
            <Text>お約束の {offerTitle} のダウンロード方法は、メール末尾に記載しました。</Text>
            <Text>
              せっかくメールアドレスをご登録いただきましたので、 少しだけご挨拶させてください。
            </Text>
            <Heading size="2"></Heading>
            <Text>{offerTitle}に興味を持っていただいたということは、 きっとあなたは</Text>
            <Container>
              <ul style={listing}>
                <li>もっと多くの方に、あなたの店舗を知ってもらいたい</li>
                <li>たくさん方に、あなたの商品・サービスを届けたい</li>
                <li>それによって、みんなに、よりよい暮らしをしてほしい</li>
              </ul>
            </Container>
            <Text>
              そんな気持ちを持たれていて、 自分のことよりも他の方の利益を優先する、
              ごく一部の意識の高い真面目な方なのだと思います。
            </Text>
            <Text>でも、そんな気持ちとは裏腹に、</Text>
            <Container>
              <ul style={listing}>
                <li>思うように集客できない・・・</li>
                <li>一生懸命やっているのに、結果につながらない・・・</li>
                <li>必死で集客の勉強をしているのに、自信が持てずに行動が停滞してる・・・</li>
              </ul>
            </Container>
            <Text>そんな悩みも、同時に抱えているのだと思います。</Text>
            <Text>
              もしあなたが、そんな気持ちだったとしたら・・・
              <br />
              今回おわたしする「{offerTitle}」が、
              きっとあなたの悩みを解決するはじめの一歩になるはずです。
            </Text>
            <Text>
              なぜならわたしは、インターネット以前、パソコン通信の時代の１９９１年から
              ３０年以上にわたって、ネット上で文章を書いて自己表現をしてきた経験があるからです。
            </Text>
            <Text>
              その経験を通じて、たとえば、
              工務店、ネイルサロン、食品雑貨店、パブ・スナック、整骨院さまなどの
            </Text>
            <Text>様々な業種の集客のお手伝いをしてきました。</Text>
            <Text>
              つまり、何がいいたいかというと、 多種多様な状況下での集客に
              関わらせていただいたということです。
            </Text>
            <Text>
              文章以外にも、
              <ul>
                <li>小学生時代から漫画やイラストを書いたり、</li>
                <li>高校では漫画研究会の部長をつとめたり、</li>
                <li>大学生になってからは、</li>
                <ul>
                  <li>パソコンでイラストを書くプログラムを作ったり、</li>
                  <li>自主制作映画を作ったり、</li>
                  <li>キヤノンの一眼レフカメラを担いで撮影旅行にでかけたり、</li>
                  <li>８mmフィルムカメラでコマ撮りアニメーションを撮影したり</li>
                </ul>
                <li>社会人になってからも、</li>
                <ul>
                  <li>デジタルカメラを集めたり</li>
                  <li>演劇の舞台に上がって演技をしたりと</li>
                </ul>
              </ul>
              様々なメディアで表現することを実践してきました。
            </Text>
            <Text>それらの経験智の集大成が、これからお送りする</Text>
            <TextCenter>
              「<b>{PRODUCT_NAME}・ニュースレター</b>」
            </TextCenter>
            <Text>なのです。</Text>
            <Heading size="2">{PRODUCT_NAME}とは、、、</Heading>
            <Text>
              {PRODUCT_NAME}とは、
              <ul>
                <li>あなたのストーリーとあなたのお客様のストーリーを語ることで、</li>
                <li>あなたのお店の信用と信頼を高め、</li>
                <li>あなたと関わった方からの深い愛着を獲得する、</li>
              </ul>
              ブランディングの施策です。
            </Text>
            <Text>
              地域ビジネスが、このブランディング施策に加えて、
              地域ビジネス・マーケティングを合わせて行うことで、
              <ul>
                <li>地域での存在感が増幅し、</li>
                <li>集客がうまくまわりだし、</li>
                <li>あなたのビジネスがドンドンと成長</li>
              </ul>
              することができるのです。
            </Text>
            <Heading size="2">
              とはいえ、わたし自身も始めからトントン拍子でうまく集客できていたわけではありません。
            </Heading>
            <Text>私がビジネスを始めた頃は、本当に結果が出せなくて苦しい思いもしました。</Text>
            <Text>初めてやった、Emailでの営業は、何件送っても反応ゼロでした・・・</Text>
            <Text>
              見様見真似でやったGoogle広告では、知らず知らずに設定した内容で、
              思ったとおりの広告が表示されなくなってしまい、
              月５万円以上かけても２〜３件しか反応がありませんでした。
            </Text>
            <Text>それ以外にも思い出しくもない痛い目を、かなりたくさん味わってきました。</Text>
            <Text>
              そんな経験に加え、私の過去を振り返って掘り起こした
              ストーリーを語ってブランディングしたところ、
              ビジネスでのポジションを確保することが可能になり、
              一定の成果を生み出し続けることができるようになったのです。
            </Text>
            <Text>
              このニュースレターでは、これからわたしが蓄積してきた、
              うまく行ったブランディングとマーケティングのノウハウの数々を、あなたにお送りしていきます。
            </Text>
            <Text>楽しみに、お待ちしていてくださいね！</Text>

            <Text>最後までメールを読んでいただいてありがとうがざいました！</Text>
            <Text>
              では、長くなりましたが、こちらがお約束していた特別限定プレゼントの 「{offerTitle}
              」です。 以下のボタンからダンロードしてご覧ください。
            </Text>
            <TextCenter>&darr; &darr; &darr;</TextCenter>

            <DownloadButton downloadLink={offerUrl} />
            <Text>それでは！</Text>
            <Signature profImage={profImage} teamImage={teamImage} />
            <Footer
              userId="%%SUBSC_ID%%"
              userName="%%NAME%%"
              teamName={teamName}
              inviteFromLocation={offerFromLocation}
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
