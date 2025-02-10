import '../styles/global.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import Layout from '../shared-components/Layout'
import 'react-toastify/dist/ReactToastify.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import GlobalStyles from '../styles/GlobalStyles'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: 5 * 60 * 1000,
        },
    },
})

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={true} />
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </QueryClientProvider>
        </Provider>
    )
}

export default MyApp
