import { NextResponse } from 'next/server'
const { render } = require('@react-email/render')

export function GET(req) {
  const html = render(<StepMail />)
  return NextResponse.json({ subj: title, msg: html })
}

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

import {
  DownloadButton,
  ProfilePhoto,
  Signature,
  Footer,
  ToClient,
  listing,
} from '@/components/NewsletterUtils'

const title = 'ご協力ありがとうございます。治療家エイド・治療院テンプレート集テスト販売モニター'

const productName = '治療院テンプレート集'
const offerTitle = '治療家エイド・治療院テンプレート集テスト販売モニター'
const site_url = process.env.SITE_URL || 'https://www.alizza-ideal.com'

const TextCenter = ({ children, className }) => {
  return <Text className={`text-center my-4 ${className}`}>{children}</Text>
}

function StepMail({
  userImage = `${site_url}/static/client-shop.png`,
  offeredByUsername = '堤',
  offeredByEmail = 'kikuo@alizza-ideal.com',
  teamName = 'Alizza Ideal',
  teamImage = `${site_url}/static/therapistaid-profile.png`,
  offerLink = 'https://drive.google.com/file/d/1MPB0hO6OsKWUPfSsrls8PdqqY1eZN9WF/view?usp=sharing',
  offerFromIp = '126.166.5.245',
  offerFromLocation = '茨城県、水戸市',
  profImage = `${site_url}/static/profile-round.png`,
}) {
  const previewText =
    'ご登録ありがとうございました。HTMLメールでお送りしています。うまく表示できない場合は、メールアプリの設定変更をお願いします'

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[4px] mx-auto p-[1em] w-[465px]">
            <Text className="text-black text-[14px] leading-[24px]">
              おはようございます、%%NAME%% さん、堤と申します。
            </Text>
            <ToClient userImage={userImage} teamImage={profImage} />
            <Text>このたびは</Text>
            <TextCenter>『{offerTitle}』</TextCenter>
            <Text>へのご協力ありがとうございます。わたしは、</Text>
            <TextCenter>Alizza Ideal (アリザ・アイデアル)</TextCenter>
            <Text>
              創業者の <b>堤</b> と申します
              <span className="text-[8pt]">(アリザは「愛である」と覚えてください)</span>。
            </Text>
            <Text>{offerTitle}にご協力くださった方への破格のご提案</Text>
            <TextCenter>
              ≪<b>治療院集客まるごとお任せ代行サービス</b>»
            </TextCenter>
            <Text>
              の初回打ち合わせの調整をする前に、
              <br />
              メールアドレスをご登録いただきましたので、 少しだけご挨拶させてください。
              <br />
              <br />
              初回打ち合わせの日程調整方法につきましては、メールの末尾でご案内いたします。
            </Text>
            <Heading size="2"></Heading>
            <Text>{offerTitle}にご協力くださったということは、 きっとあなたは</Text>
            <Container>
              <ul style={listing}>
                <li>もっと多くの患者さんに、あなたの治療院を知ってもらいたい</li>
                <li>患者さんにもっと充実した生活をしてもらいたい</li>
                <li>たくさんの人に、健康を届けたい</li>
              </ul>
            </Container>
            <Text>
              そんな気持ちを持たれていて、 自分のことよりも患者さんの利益を優先する、
              ごく一部の意識の高い真面目な方なのだと思います。
            </Text>
            <Text>でも、そんな気持ちとは裏腹に、</Text>
            <Container>
              <ul style={listing}>
                <li>思うように集客できない・・・</li>
                <li>一生懸命やっているのに、結果につながらない・・・</li>
                <li>必死で集客の勉強をしているのに、結果につながらず、自信が持てない・・・</li>
              </ul>
            </Container>
            <Text>そんな悩みも、同時に抱えているのだと思います。</Text>
            <Text>
              もしあなたが、そんな気持ちだったとしたら・・・
              <br />
              今回おわたしする「{productName}」が、
              きっとあなたの悩みを解決するはじめの一歩になるはずです。
            </Text>
            <Text>
              なぜならわたしは、副業時代も含めて２０１５年から延べ８年以上に渡って、
              小規模な店舗の集客のアドバイスをしてきた経験があるからです。
            </Text>
            <Text>
              たとえば、整骨院を始めとして、 工務店、ネイルサロン、食品雑貨店、パブ・スナック
            </Text>
            <Text>などの業種の集客のお手伝いをしてきました。</Text>
            <Text>
              つまり、何がいいたいかというと、 多種多様な状況下での集客に
              関わらせていただいたということです。
            </Text>
            <Text>
              それらの集客をしてきたなかで、治療院の売上向上に特化した集客ツールが、
              水戸市城東で『まきせ鍼灸整骨院』を開かれている牧瀬洋人院長に監修していただいた、
            </Text>
            <TextCenter>
              「<b>{productName}</b>」
            </TextCenter>
            <Text>なのです。</Text>
            <Text>そのため、実際に治療院の現場で使える内容になっていると自負しております。</Text>
            <Heading size="2">机上の空論じゃない現場の最前線で使える集客ノウハウ</Heading>
            <Text>
              とはいえ、わたし自身も始めからトントン拍子でうまく集客できていたわけではありません。
            </Text>
            <Text>
              集客のアドバイスのしごとを始めた頃は、本当に結果が出せなくて結構苦しい思いもしました。
            </Text>
            <Text>初めてやった、Emailでの営業は、何件送っても反応ゼロでした・・・</Text>
            <Text>
              見様見真似でやったGoogle広告では、知らず知らずに設定した内容で、
              思ったとおりの広告が表示されなくなってしまい、
              月５万円以上かけても２〜３件しか反応がありませんでした。
            </Text>
            <Text>それ以外にも思い出しくもない痛い目を、かなりたくさん味わってきました。</Text>
            <Text>
              でも、そうした失敗を現場でたくさんしてきたからこそ、
              集客を生業とするわたしの８年間の経験から見つけた
              机上の空論ではない現場の最前線で使える集客ノウハウを得ることができたのです。
            </Text>
            <Text>
              なので、この厳選した集客ノウハウを使うことで、
              100%成果が出る！というお約束はできませんが・・・
            </Text>
            <Text>
              あなたはこれまでよりも、高い確率で集客で結果を出すことができるようになるでしょう。
            </Text>
            <Heading size="2">なぜ、高確率で成果を出せるのか？その秘密は・・・</Heading>
            <Text>
              もしかするとあなたは、多くの業界での経験や知識があっても
              治療院の集客にも使えるのか、疑問に思っているかもしれません。
            </Text>
            <Text>
              ですが歴史上、大きな成果を上げてきた仕事は、 同じ業界の延長線上には現れませんでした。
              常に、別の業界の事例をうまく取り入れることができた人が成功してきました。
            </Text>
            <Text>
              たとえば、マクドナルドのドライブスルーは、当時のアメリカの銀行の受付の仕組みから発想して出来上がりました。
              いまでは、多くのファストフード店で取り入れられています。
            </Text>
            <Text>
              もちろん、あなたの治療院にドライブスルーを取り入れろといっているわけではありません。
              また、こうすればうまく行くよというアイデアだけ渡して、
              使い方は自分で考えてねといいたいわけでもありません。
            </Text>
            <Text>
              アイデアの一つ一つをつなげて、新しいアイデアを作るのは非常に難しいことです。
            </Text>
            <Text>
              たとえば、アイスクリームが発明されたのは、紀元前２０００年と言われています。
              しかし、アイスクリームのコーンが考え出されたのは、それから３９００年後でした。
            </Text>
            <Text>
              パンが焼かれたのは紀元前２６００年と言われていますが、
              パンに肉を挟んでハンバーガーが作られたのは、それから４５００年後です。
            </Text>
            <Text>
              ですから、集客のアイデアをそのまま生でお渡ししても、
              きっとあなたは何千年も待つことはできないでしょう。
            </Text>
            <Text>
              今回の{productName}
              では、『まきせ鍼灸整骨院』の牧瀬院長の力を借りて、
              あなたがすぐに使えるように治療院向けのテンプレートにしてあります。
            </Text>
            <Text>
              また、今回テスト販売モニターにご協力いただいたあなたには、
              あなたの治療院にピッタリ合った形にオーダーメイドで仕立てさせていただきます。
            </Text>
            <Text>
              さらに、仕立て上がったものを使って、あなたの代わりに実践させていただきます。
            </Text>
            <Text>
              小難しい理論や知識、高価なパソコンやホームページを買ったり作ったりしなくても、
              あなたはあなたの得意なことをいつも通りにしているだけで、
              集客・売上アップを実現いたします。
            </Text>
            <Text>
              さらに、制作したチラシやダイレクトメールといったデーターもＰＤＦ形式にして一緒にお渡しします。
              ですので、今回のまるごとお任せ代行サービス以外でも、あなたが独自に集客活動をするときに利用していただけます。
            </Text>
            <Text>
              患者さんがたくさん来院するようになれば、あなたの価値ある技術を提供することができ、
              ひいては、お客さんのクオリティ・オブ・ライフ（QoL;人生の質）を向上させることができます。
            </Text>
            <Text>だからこそ、長くリピートしてくれるようになるのです。</Text>
            <Text>
              きっとあなたに、これまで以上の結果をもたらすはじめの一歩になることをお約束します。
            </Text>
            <Heading size="2">リピートを促進するツールの数々・・・</Heading>
            <Text>
              今回、水戸市城東の『まきせ鍼灸整骨院』の牧瀬院長のこれまでの経験にもとづいて、
              多くのアドバイスを受けながら、簡単に手間なく使えるリピートを促進するためのツールを作りました。
            </Text>
            <Text>
              それらを、「いつ、どんなとき、どんな方法」で使えば、高い確率でリピートしてもらえるのかのノウハウも一緒にご提供します。
              もちろん今回は私が実践いたします。
            </Text>
            <Text>
              このニュースレターでは、これからわたしが蓄積してきた、
              うまく行った集客ノウハウの数々を、 治療院に合った形であなたにお送りしていきます。
              楽しみに、お待ちしていてくださいね！
            </Text>

            <Text>最後までメールを読んでいただいてありがとうがざいました！</Text>
            <Text>では、長くなりましたが、こちらが初回打ち合わせの日程調整手順です。</Text>
            <TextCenter>&darr; &darr; &darr;</TextCenter>
            <Container>
              <ol style={listing}>
                <li>わたしのほうで、決済がうまくできていることを確認します。</li>
                <li>
                  確認できたら、メールとお電話をいたします。
                  お電話は営業日の日中に「堤」の名前で「治療院集客代行の件」と
                  いうことでおかけします。
                </li>
                <ul>
                  <li>もし、ご希望の時間帯がありましたら、このメールの返信にてご連絡ください。</li>
                  <li>お電話では、初回打ち合わせの場所、日付、時間を調整いたします</li>
                  <li>場所は、あなたの治療院または私の事務所にてお願いします</li>
                  <li>遠方の場合、Zoomなどでのお打ち合わせも可能です。</li>
                  <li>私の事務所の住所は、</li>
                  <ul>
                    <li>水戸市東前町１３９７番地の２</li>
                    <li>国道５１号線沿い、FOOD OFF ストッカー常澄店近く</li>
                    <li>事務所前に駐車スペースがございますのでお車でいらしていただいて結構です</li>
                    <li>
                      <a href="https://bit.ly/alizza-ideal-on-maps">Googleマップで確認</a>
                    </li>
                  </ul>
                </ul>
              </ol>
            </Container>

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
