import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

export default function RootLayout({ children }) {
  return (
    <html className="h-full antialiased" lang="en">
      <head />
      <body className="bg-black m-0 p-0 scroll-smooth">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}