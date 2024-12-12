import type { Metadata } from 'next'
import '@/global.css'
import '../modules/shared/stylesheet/shared.css'
import ProviderClient from './ProviderClient'
import { ReactNode } from 'react'
import KeyBox from '@/components/KeyBox'
import Header from '@/modules/shared/library/Header'
import Wrapper from '@/modules/shared/library/Wrapper'
import Footer from '@/modules/shared/library/Footer'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderClient>
          <KeyBox />
          <Header />
          <Wrapper>{children}</Wrapper>
          <Footer />
        </ProviderClient>
      </body>
    </html>
  )
}
