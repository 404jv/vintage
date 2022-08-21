import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/auth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <div style={{ width: '100vw', textAlign: 'center' }}>
        <span style={{ fontSize: '1rem' }}>
          Feito com ❤️ por <a target='_blank' href="https://instagram.com/404jv" rel="noreferrer">João Victor Ramalho Alves</a>
        </span>
      </div>
    </AuthProvider>
  )
}

export default MyApp
