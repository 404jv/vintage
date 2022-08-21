import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/auth'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Head>
        <title>Vintage</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div style={{ width: '100vw', textAlign: 'center' }}>
        <span style={{ fontSize: '1rem' }}>
          Feito com ❤️ por <a target='_blank' href="https://instagram.com/404jv" rel="noreferrer">João Victor Ramalho Alves</a>
        </span>
      </div>
    </AuthProvider>
  )
}

export default MyApp
