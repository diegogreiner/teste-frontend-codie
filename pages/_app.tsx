import type { AppProps } from 'next/app'
import Header from '../src/components/Layouts/Header'
import './global.css'
import Footer from '../src/components/Layouts/Footer'
import { Container } from './styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SchedulingProvider from './scheduling/SchedulingContext'
import ScheduledProvider from './scheduling/ScheduledContext'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <Container>
      <Header />
      <SchedulingProvider>
        <ScheduledProvider>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </ScheduledProvider>
      </SchedulingProvider>
      <Footer />
    </Container>
  )
}
