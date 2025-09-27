import { defineConfig } from "tinacms"
import schema from "./schema"

export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: { outputFolder: "admin", publicFolder: "." },
  media: { tina: { mediaRoot: "public/uploads", publicFolder: "." } },
  schema
})
