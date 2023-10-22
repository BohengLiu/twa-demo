import { Inter } from 'next/font/google'
import React from 'react'
import { SwapWidget, darkTheme } from "@uniswap/widgets";
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] })

const SwawpComp = dynamic(() => import('@/components/Swap'), {ssr: false})

export default function Home() {
  const [count, setCount] = React.useState(0)
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <p>{`count: ${count}`}</p>
      <button onClick={() => {
        setCount(count + 1)
      }}>Add</button>
      <button onClick={() => {
        setCount(count - 1)
      }
      }>Subtract</button>

      <SwawpComp />
    </main>
  )
}
