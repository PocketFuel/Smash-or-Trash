import dynamic from 'next/dynamic'
import './globals.css'

const App = dynamic(() => import('./pages/app'), { ssr: false })
export default function Home() {
  return (
    <>
      <App />
    </>
  )
}
