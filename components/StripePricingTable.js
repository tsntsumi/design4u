import Script from 'next/script'

const StripePricingTable = ({ pricingId, publishableKey, customerEmail }) => {
  return (
    <>
      <stripe-pricing-table
        pricing-table-id={pricingId}
        publishable-key={publishableKey}
        customer-email={customerEmail}
      ></stripe-pricing-table>
    </>
  )
}

export default StripePricingTable
