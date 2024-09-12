# linktree-parser

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.


## Example

```ts
import { scrapeLinktreeAccount } from "./src";

const { account, error, raw, statusCode } = await scrapeLinktreeAccount(
  "harshmangalam_"
);

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