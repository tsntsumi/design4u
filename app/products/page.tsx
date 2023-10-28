import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Showcase
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            私たちの製品・サービスのショーケースです
          </p>
          <p>
            只今、１００％ディスカウント創業セール行ってます。限定１０名、１０月２８日２３：５９まで。
          </p>
          <p>
            プロモーションコード：<code>PROMO2023EX10</code>
          </p>
          <p>をお支払いの画面で入力してください</p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                videoSrc={d.videoSrc}
                href={d.href}
                cta={d.cta}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
