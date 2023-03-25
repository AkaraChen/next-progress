# Next-progress

Yet another progressbar for next.js

## Installation

```bash
pnpm install @akrc/next-progress
```

## Usage

```js
/* pages/app.[jt]sx */
import { useProgress } from '@akrc/next-progress';

export default function MyApp({ Component, pageProps }: AppProps) {
    useProgress();
    return <Component {...pageProps} />;
}
```
