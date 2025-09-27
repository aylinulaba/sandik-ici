import { Collection, Schema } from "tinacms"

const posts: Collection = {
  name: "posts",
  label: "Yazılar",
  path: "src/posts",
  format: "md",
  fields: [
    { type: "string", name: "title", label: "Başlık", isTitle: true, required: true },
    { type: "rich-text", name: "body", label: "İçerik", isBody: true }
  ],
  ui: {
    router: ({ document }) => `/posts/${document._sys.filename}/`
  }
}

const schema: Schema = { collections: [posts] }
export default schema
