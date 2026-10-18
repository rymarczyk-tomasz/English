// Builds dist/angielski.html: the whole app in one file, ready to publish as a claude.ai artifact
// or to open straight from disk. Usage: node tools/build.js
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const read = f => fs.readFileSync(path.join(root, f), "utf8");

function bundle() {
  const html = read("index.html");
  const head = /<head>([\s\S]*?)<\/head>/.exec(html)[1];
  const body = /<body>([\s\S]*?)<\/body>/.exec(html)[1];
  const css = [...head.matchAll(/<link rel="stylesheet" href="(css\/[^"]+)">/g)].map(m => m[1]);
  const scripts = [...body.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
  // head tags the page keeps: title, claude meta, web fonts (the charset/viewport come from the wrapper below)
  const keep = head.split("\n").filter(l => /^<(title|meta name="claude|link rel="preconnect"|link rel="stylesheet" href="https)/.test(l.trim()));
  const markup = body.replace(/<script src="[^"]+"><\/script>\s*/g, "").trim();
  const reset = css.includes("css/reset.css") ? read("css/reset.css").trim() : "";
  const styles = css.filter(f => f !== "css/reset.css").map(read).join("\n");
  const js = scripts.map(f => `// ---- ${f} ----\n` + read(f)).join("\n");
  // The same wrapper claude.ai puts around a published page, so publishing replaces it instead of nesting it.
  const wrapper = `<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><style>${reset}</style></head><body>`;
  return { html: `${wrapper}\n\n${keep.join("\n")}\n<style>\n${styles}</style>\n\n${markup}\n\n<script>\n${js}</script>\n\n</body></html>`, js };
}

module.exports = { bundle };

if (require.main === module) {
  const { html } = bundle();
  fs.mkdirSync(path.join(root, "dist"), { recursive: true });
  fs.writeFileSync(path.join(root, "dist", "angielski.html"), html);
  console.log(`dist/angielski.html – ${Math.round(html.length / 1024)} KB`);
}
