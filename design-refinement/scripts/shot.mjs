import { createRequire } from "node:module"
const require = createRequire(`${process.cwd()}/`)
const { chromium } = require(process.env.PLAYWRIGHT ?? "playwright")
const DIR = process.env.SHOT_DIR
const URL = process.env.SHOT_URL
const READY = process.env.SHOT_READY ?? "[data-block]"
const BLOCK = process.env.SHOT_BLOCK ?? "data-block"
const [tag = "before", scheme = "light", width = "1440"] = process.argv.slice(2)
const browser = await chromium.launch({ args: ["--disable-gpu"] })
const context = await browser.newContext({ viewport: { width: Number(width), height: 1000 }, colorScheme: scheme, storageState: `${DIR}/state.json` })
const page = await context.newPage()
await page.addInitScript((s) => { try { localStorage.setItem("theme", s) } catch {} }, scheme)
await page.goto(URL, { timeout: 180000 })
await page.waitForSelector(READY, { timeout: 120000 })
await page.waitForLoadState("networkidle").catch(() => {})
await page.waitForTimeout(3000)
await page.addStyleTag({ content: `[data-sonner-toaster], nextjs-portal { display: none !important; } ${process.env.SHOT_CSS ?? ""}` })
const blocks = page.locator(`[${BLOCK}]`)
const ids = []
for (let i = 0; i < (await blocks.count()); i++) {
  const b = blocks.nth(i)
  const id = await b.getAttribute(BLOCK)
  if (ids.includes(id)) continue
  ids.push(id)
  await b.scrollIntoViewIfNeeded()
  await page.waitForTimeout(800)
  await b.screenshot({ path: `${DIR}/shots/${tag}-${scheme}-${String(ids.length - 1).padStart(2, "0")}-${id}.png` })
}
await page.evaluate(() => { for (const el of document.querySelectorAll("*")) if (el.scrollTop > 0) el.scrollTop = 0 })
await page.waitForTimeout(500)
await page.screenshot({ path: `${DIR}/shots/${tag}-${scheme}-page-top.png` })
console.log(ids.join(" "))
await browser.close()
