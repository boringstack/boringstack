module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addWatchTarget('./src/css/speedlify-score.css');
  eleventyConfig.addPassthroughCopy('./src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy('./src/css/speedlify-score.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy({ "./src/favicon": "/" });
  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}