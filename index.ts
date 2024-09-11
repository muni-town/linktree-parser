import * as cheerio from "cheerio";
import { LINKTREE_BASE_URL, USER_NOT_FOUND } from "./constants";
import type { LinktreeResponse, ScrapeLinktreeProfile } from "./types";

export async function scrapeLinktreeAccount(
  username: string
): Promise<ScrapeLinktreeProfile> {
  const initialData: ScrapeLinktreeProfile = {
    account: null,
    error: null,
    raw: null,
    statusCode: null,
  };
  const url = `${LINKTREE_BASE_URL}/${username}`;
  try {
    // Fetch the Linktree profile page
    const resp = await fetch(url);
    const data = await resp.text();

    // Load the HTML into cheerio
    const $ = cheerio.load(data);

    const scriptContent = $("#__NEXT_DATA__").html();

    if (scriptContent) {
      // Parse the JSON content from the script tag
      const jsonData = JSON.parse(scriptContent) as LinktreeResponse;
      if (jsonData.props.pageProps.account) {
        return {
          ...initialData,
          account: jsonData.props.pageProps.account,
          raw: jsonData.props.pageProps,
        };
      }
      return {
        ...initialData,
        error: USER_NOT_FOUND,
      };
    }
    return {
      ...initialData,
      error: USER_NOT_FOUND,
    };
  } catch (error: any) {
    return {
      ...initialData,
      error: USER_NOT_FOUND,
    };
  }
}
