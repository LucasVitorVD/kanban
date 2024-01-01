import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Kanban',
  description: 'Gerencie seus projetos utilizando o kanban!',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} ${poppins.className}`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex flex-1 p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
