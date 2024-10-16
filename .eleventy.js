module.exports = function(eleventyConfig) {
  // Passthrough copy for CSS, JS, and images
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".", // root directory (where your index.html is)
      output: "_site" // output directory
    }
  };
};
