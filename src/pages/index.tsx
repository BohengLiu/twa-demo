import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [count, setCount] = React.useState(0)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <p>{`count: ${count}`}</p>
      <button onClick={() => {
        setCount(count + 1)
      }}>Add</button>
      <button onClick={() => {
        setCount(count - 1)
      }
      }>Subtract</button>

    </main>
  )
}
