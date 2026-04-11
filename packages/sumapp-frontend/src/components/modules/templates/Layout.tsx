import React from 'react'
import Header from '@modules/organisms/Header'
import Footer from '@modules/organisms/Footer'
import { Toaster } from '@shadcn/sonner'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100dvh-120px)] mt-15 py-8 flex flex-col">
        {children}
      </main>
      <Footer />
      <Toaster />
    </>
  )
}

export default Layout
