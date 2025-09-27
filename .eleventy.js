export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('public')
  eleventyConfig.addPassthroughCopy({ 'admin': 'admin' })
  eleventyConfig.addCollection('post', c => c.getFilteredByGlob('src/posts/*.md'))
  return { dir: { input: 'src', includes: '_includes', data: '_data', output: '_site' } }
}
