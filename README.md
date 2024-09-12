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

const { account, error, raw, statusCode } =
  await scrapeLinktreeAccount("harshmangalam_");

if (statusCode === 404) {
  throw new Error("Oops! We couldn't find the username you're looking for");
}
if (error) {
  console.error(error);
}

if (account) {
  const { username, links, socialLinks, profilePictureUrl } = account;
}
```

This project was created using `bun init` in bun v1.1.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
