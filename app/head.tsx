import Script from 'next/script'

export default function Head() {
  return (
    <>
      <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <script
        src="https://giscus.app/client.js"
        data-repo="tsntsumi/design4u"
        data-repo-id="R_kgDOKPQRsg"
        data-category="Announcements"
        data-category-id="DIC_kwDOKPQRss4CZE1C"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="ja"
        crossOrigin="anonymous"
        async
      ></script>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9498739221834067"
        crossOrigin="anonymous"
      ></script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-10785427580"></Script>
      <Script async src="https://www.googleoptimize.com/optimize.js?id=OPT-KBHVNG8"></Script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MB8NYG9JTC"></Script>
      <Script
        id="gad"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-10785427580');
          `,
        }}
      ></Script>
      <Script
        id="gan"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-MB8NYG9JTC');
          `,
        }}
      ></Script>
    </>
  )
}
