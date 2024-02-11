import '/styles/globals.css'
import Navbarlayout from '@/components/Navbarlayout'
import { ThemeProvider } from '@material-tailwind/react'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbarlayout />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
