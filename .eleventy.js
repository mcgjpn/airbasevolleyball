module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".", // root directory
      output: "_site", // output directory
    }
  };
};