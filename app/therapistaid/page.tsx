import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { BsFacebook, BsTwitter, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'

export default async function Page() {
  const invert = false
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <h1 className="w-full mx-0 mb-4">
          治療院集客テンプレート集発売前テストモニター募集、参加応募ページ
        </h1>
        <section className="my-0 py-0 px-4 mx-0 flex flex-wrap text-justify">
          <div className="px-2 mx-auto md:w-1/2">
            <p>楽しみに開いてくれたのにごめんなさい。 募集はすでに締め切りました。</p>
            <p>もし機会があれば、またお願いします。 ありがとうございました。</p>
            <p>
              治療院集客テンプレート集の正式販売開始は、わたしの{' '}
              <Link
                href="https://www.facebook.com/alizza.ideal"
                aria-label="Facebookページ"
                className={clsx(
                  'transition',
                  invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700'
                )}
              >
                <BsFacebook className="h-6 w-6 fill-current inline-block" /> Facebookページ
              </Link>{' '}
              や{' '}
              <Link
                href="https://www.instagram.com/alizza.ideal"
                aria-label="Instagramアカウント"
                className={clsx(
                  'transition',
                  invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700'
                )}
              >
                <BsInstagram className="h-6 w-6 fill-current inline-block" /> Instagramアカウント
              </Link>
              でも発表しますので、 ご興味があれば、フォローしておいてください。
            </p>
            <p>よろしくおねがいします。</p>
          </div>
          <Image
            src="/images/promotions/therapist-aid-book-and-tablet.png"
            width={640}
            height={640}
            alt="Therapist AID templates"
            className="px-2 mx-auto md:w-1/2"
          />
        </section>
      </div>
    </>
  )
}
