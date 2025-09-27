// tina/config.ts
import { defineConfig } from "tinacms";

// tina/schema.ts
var posts = {
  name: "posts",
  label: "Yaz\u0131lar",
  path: "src/posts",
  format: "md",
  fields: [
    { type: "string", name: "title", label: "Ba\u015Fl\u0131k", isTitle: true, required: true },
    { type: "rich-text", name: "body", label: "\u0130\xE7erik", isBody: true }
  ],
  ui: {
    router: ({ document }) => `/posts/${document._sys.filename}/`
  }
};
var schema = { collections: [posts] };
var schema_default = schema;

// tina/config.ts
var config_default = defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: { outputFolder: "admin", publicFolder: "." },
  media: { tina: { mediaRoot: "public/uploads", publicFolder: "." } },
  schema: schema_default
});
export {
  config_default as default
};
