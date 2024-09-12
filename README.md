# linktree-parser

### Installation

#### NPM

```bash
npm install linktree-parser
```

#### PNPM

```bash
pnpm add linktree-parser
```

#### BUN

```bash
bun add linktree-parser
```

### Example

```ts
import { scrapeLinktreeAccount } from "linktree-parser";

const { account, error, raw } = await scrapeLinktreeAccount("harshmangalam");

if (error) {
  console.error(error);
}

if (account) {
  const { username, links, socialLinks, profilePictureUrl } = account;
}
```

This project was created using `bun init` in bun v1.1.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
