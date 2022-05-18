import { getQuote } from "./utils/utils.js";

getQuote()
$("#new-quote").on("click", async () => {
  await getQuote()
})