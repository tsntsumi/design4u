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
        <section className="my-0 py-0 px-4 mx-0 flex flex-wrap text-justify">
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
          <div className="px-2 mx-auto md:w-1/2">
            <p>デザインが、あなたの理想を現実化します。</p>
            <p>
              心理学を使ったそそるデザインをマスターすれば、
              魅了するプレゼン資料が作れるようになります。
            </p>
            <p>
              口下手な人でも３つの
              <ruby>
                エーション<rp>(</rp>
                <rt>- A T I O N</rt>
                <rp>)</rp>
              </ruby>
              を解決できます：
            </p>
            <ul className="ml-2 pl-4 my-3 list-disc">
              <li>
                <ruby>
                  プレゼンテーション<rp>(</rp>
                  <rt>p r e s e n t - A T I O N</rt>
                  <rp>)</rp>
                </ruby>
                で伝えられ
              </li>
              <li>
                <ruby>
                  ネゴシエーション<rp>(</rp>
                  <rt>n e g t i - A T I O N</rt>
                  <rp>)</rp>
                </ruby>
                で分かり合え
              </li>
              <li>
                <ruby>
                  コミュニケーション<rp>(</rp>
                  <rt>c o m m u n i c - A T I O N</rt>
                  <rp>)</rp>
                </ruby>
                で繋がれるようになり
              </li>
            </ul>
            <p className="indent-0">
              ビジネスでもプライベートでも、人間関係もうまくいくようになり、
              あなたの理想へ前進するルートさえデザインできるんです。
            </p>
          </div>
          <div className="px-2 mx-auto md:w-1/2">
            <p>自分にはセンスがないから、、、とあきらめていませんか？</p>
            <p>大丈夫です。デザインはアートではありません。</p>
            <p>「デザイン」は、辞書にこう書かれています：</p>
            <dl className="ml-4 pl-2 my-3">
              <dt className="font-black">デザイン design （名）スル</dt>
              <dd>
                作ろうとするものの形態について，機能や生産工程などを考えて構想すること。意匠。
                <b className="text-red-600">設計</b>。図案。
              </dd>
            </dl>
            <p>
              つまり、センスがなくても、設計のルールを覚えて、レゴブロックのように、何をどこに配置するか決めるだけでいいんです。
              大切な人にあなたの思いが伝わり、惹きつけるプレゼン資料が、誰にでもデザインできるようになります。
            </p>
          </div>
          <p className="text-center w-full mt-4">もちろん、あなたにもできます。</p>
        </section>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
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
