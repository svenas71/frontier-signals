const { DateTime } = require("luxon");
const rss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(rss);

  // passthroughs
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  // collections
  eleventyConfig.addCollection("posts", c =>
    c.getFilteredByGlob("./src/posts/*.md").sort((a,b)=>b.date-a.date)
  );
  eleventyConfig.addCollection("links", c =>
    c.getFilteredByGlob("./src/links/*.md").sort((a,b)=>b.date-a.date)
  );

  // filters + shortcodes
  eleventyConfig.addFilter("readableDate", d =>
    DateTime.fromJSDate(d, { zone: "utc" }).toFormat("LLLL d, yyyy")
  );
  eleventyConfig.addShortcode("year", () => new Date().getFullYear());

  return { dir: { input: "src", includes: "_includes", data: "_data" } };
};