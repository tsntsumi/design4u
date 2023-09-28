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
          <div className="newspaper max-h-full md:max-h-[18rem] border-2 dark:border-0 border-slate-100 rounded-lg">
            <p>
              コロナ後の仕事がリモートワーク・メインになってから、
              会議での説明がやりにくくなったと感じていませんか？
            </p>
            <ul>
              <li>会議だけでなく、上司へのプロジェクト進捗の説明</li>
              <li>新企画の提案のときとかでも、、、</li>
              <li>企業によっては、お客様との打ち合わせ</li>
              <li>商談のときの商品の提案説明</li>
            </ul>
            <p>
              仕事の上だけでなく、遠く離れた両親や親戚などとも、
              ビデオチャットで会話することも多くなってきました。
              あるいは、大切に思っているヒトとかとも・・・。
            </p>
            <p>
              こんな時代、仕事でもプライベートでも、
              なかなか思いが伝わらないと悩んでいる人が大勢います。
            </p>
            <p>
              実は私も、うちのカミさんの実家とビデオチャットするとき、
              思いが通じないでヤキモキすることが多々ありありました。
            </p>
            <p>
              いま、
              <Link
                href="/blog/rules-for-presentaitions-that-stick-in-the-brain-directly"
                className="underline decoration-dotted text-blue-900"
              >
                脳に刺さるデザインの重要性が増しています。
              </Link>
            </p>
          </div>
          <div className="text-right w-full px-4">
            <Link
              href="/blog/rules-for-presentaitions-that-stick-in-the-brain-directly"
              className="text-xs underline decoration-dotted text-blue-400"
            >
              ブログへつづく...
            </Link>
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
