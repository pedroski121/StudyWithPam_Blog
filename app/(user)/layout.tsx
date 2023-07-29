import '@/styles/global.css'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import ThemeProviders from './ThemeProviders'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="mx-auto  bg-zinc-100 dark:bg-zinc-800">
        <ThemeProviders>
          {/* Header */}
          <Header/>
          {/* Banner */}
          <Banner/>
          {children}
          <Footer/>
        </ThemeProviders>
      </body>
    </html>
  )
}
