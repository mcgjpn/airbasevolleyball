module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("_includes");
  return {
    dir: {
      input: ".", // root directory
      output: "_site", // output directory
    }
  };
};