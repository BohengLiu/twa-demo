import { SwapWidget, darkTheme } from "@uniswap/widgets";

export default function Swap() {
  return (
    <div>
      <p>Swap Widget</p>
      <SwapWidget theme={darkTheme} width="calc(100vw - 32px)" />
    </div>
  );
}
