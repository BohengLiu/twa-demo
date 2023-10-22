import { Inter } from "next/font/google";
import React, { Suspense } from "react";
import { SwapWidget, darkTheme } from "@uniswap/widgets";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const SwawpComp = dynamic(() => import("@/components/Swap"), { ssr: false });
const LazyComponent = dynamic(() => import("@/components/LazyComponent"), { ssr: false });

export default function Home() {
  const [count, setCount] = React.useState(0);
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <p>{`count: ${count}`}</p>
      <div className="w-full justify-center space-x-4 flex items-center">
        <button
        className="w-24 h-12 bg-blue-500 text-white rounded-md"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </button>
        <button
          className="w-24 h-12 bg-orange-500 text-white rounded-md"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Subtract
        </button>
      </div>
      <LazyComponent />
      <Suspense fallback={<div>Loading...</div>}>
        <SwawpComp />
      </Suspense>
    </main>
  );
}
