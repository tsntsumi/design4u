import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function SectionContainer({ children, className }: Props) {
  return (
    <section className={`${className} mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0`}>
      {children}
    </section>
  )
}
