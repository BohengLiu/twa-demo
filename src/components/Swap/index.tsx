import { SwapWidget, darkTheme } from "@uniswap/widgets";

export default function Swap() {

  return (
      <SwapWidget theme={darkTheme} width="calc(100vw - 32px)" />
  )
}