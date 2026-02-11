# Next Aggregate ERC1155 Swap

This project is a small Next.js app that renders the `aggregate-1155-swap-widget` on the home page.

## Stack

- Next.js 13
- TypeScript
- React 18
- `aggregate-1155-swap-widget`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Widget configuration

The widget is mounted in `pages/index.tsx` with client-side dynamic import:

```tsx
const NftExchangeWidget = dynamic(() => import("aggregate-1155-swap-widget"), { ssr: false });
```

Current widget props in `pages/index.tsx`:

- `appId`: `0x3946fb7bd818532c15370fe059de80783d3fae31070dd3e0730838fd20cb1aa5`
- `chainId`: `80001`

## Scripts

- `npm run dev` - start dev server
- `npm run build` - build production bundle
- `npm run start` - run production server
- `npm run lint` - run Next.js lint
