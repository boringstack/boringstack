module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
  const faviconPlugin = require("eleventy-favicon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(faviconPlugin, options);
};
}



