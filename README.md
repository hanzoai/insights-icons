# @hanzo/insights-icons

The product icon set used by [Hanzo Insights](https://github.com/hanzoai/insights) —
319 React SVG icon components.

```tsx
import { IconTrends } from '@hanzo/insights-icons'

<IconTrends />
```

Every icon renders an `<svg>` carrying the `Icon` class, which is the sizing hook
the `@hanzo/elements` design-system stylesheet keys on. Icons inherit `currentColor`
and size from that class, so colour and size are controlled by CSS, not props.

## Build

```bash
pnpm install
pnpm build      # -> dist/icons.es.js, dist/icons.cjs.js, dist/index.d.ts
```

## Provenance

Derived from the MIT-licensed `@posthog/icons`. See `NOTICE` for the list of
changes and `LICENSE` for the retained upstream copyright.

Prior to this repository, `@hanzo/insights-icons` was published without a source
tree of its own — version 0.36.6 on npm was a byte-identical republish of
`@posthog/icons@0.36.6` with only the package name changed. This repository is
that package's actual source.
