import Link from 'next/link'
import Script from 'next/script'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'

export const metadata = {
  title: siteMetadata.title,
  description: 'Pricing table',
}

export default function Page() {
  return (
    <>
      <Script async src="https://js.stripe.com/v3/pricing-table.js"></Script>
      <SectionContainer className="pricing">
        <div className="w-full mx-auto">
          <stripe-pricing-table
            pricing-table-id="prctbl_1NwAqXFI0fllSO6vcoLaZOuV"
            publishable-key={`${process.env.NEXT_APP_STRIPE_APIKEY}`}
          ></stripe-pricing-table>
        </div>
        <div className="w-full mx-auto">
          <stripe-pricing-table
            pricing-table-id="prctbl_1Nvmx7FI0fllSO6vzpd2UIou"
            publishable-key={process.env.NEXT_APP_STRIPE_APIKEY}
          ></stripe-pricing-table>
        </div>
      </SectionContainer>
    </>
  )
}
