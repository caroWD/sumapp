import React from 'react'
import Header from '@modules/organisms/Header'
import Footer from '@modules/organisms/Footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100dvh-120px)] mt-15">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
