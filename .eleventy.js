const {EleventyI18nPlugin} = require('@11ty/eleventy');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'en',
    errorMode: 'allow-fallback'
  });

  [
    'src/favicon.ico',
    'src/styles.css',
    'src/assets/bolt.svg',
    'src/assets/star.svg',
    'src/assets/unlock.svg',
    'src/assets/logicdan_logo.svg',
  ].forEach(item =>
    eleventyConfig.addPassthroughCopy(item)
  );

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};
