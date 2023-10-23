import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <section className="w-full flex flex-row flex-wrap">
          <div className="w-full mx-0 mb-4">
            <Image
              src="/images/banner.svg"
              alt="Founder"
              width={2048}
              height={1152}
              className="object-cover hidden lg:block"
            />
            <Image
              src="/images/banner-mobile.svg"
              alt="Founder"
              width={1600}
              height={900}
              className="object-cover block lg:hidden"
            />
          </div>
          <div className="newspaper md:max-h-[33vh] border-2 dark:border-0 border-slate-100 rounded-lg overflow-scroll">
            <p>あなたのお店がなかなか検索の上位に表示されなくて悩んでいませんか？</p>
            <p>
              SEOにもMEOにもお金をかけて検索上位に表示させたのに、来店数が伸びなくて困っていませんか？
            </p>
            <p>もしそうならストーリーの力でローカル・ブランディングをしてください。</p>
            <p>
              ローカル・ブランディングは、SEOやMEOといった
              「検索されたときだけ、店の名前を上位に表示して目立たさせる」のではありません。
            </p>
            <p>
              ローカル・ブランディングは、実際にお店に来店させる効果があります。
              いわば、「あなたのお店を、お客さんの心の中の上位に引き上げて目立たせる」ものなのです。
            </p>
            <p>
              お客さんがあなたのお店に愛着をもって、ファンになり、
              集客しなくてもひとりでにみんなが集まるようになる。
            </p>
            <p>あなたのお店がそんな風になったらどうでしょうか？</p>
            <p>
              売上が安定して、働く時間にも余裕が出て、あなたもお客さんもハッピーになれると思いませんか？
            </p>
            <p>
              ローカル・ブランディングでは、単にロゴやデザインでかっこよく魅せるのではなく、
              あなたのストーリーであなたの思いをブランディングします。
            </p>
            <p>だからこそ、お客さんの心に影響を与え、強固な愛着を得ることができるのです。</p>
          </div>
        </section>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
        </div>
        <ul className="blog-posts divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, images } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        {images && images.length > 0 && (
                          <Image
                            className="object-contain m-0 w-full mr-4 pr-4 mt-2"
                            alt="tr"
                            src={images[0]}
                            width={128}
                            height={128}
                          />
                        )}
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter?.provider && (
          <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
          </div>
          )} */}
    </>
  )
}
