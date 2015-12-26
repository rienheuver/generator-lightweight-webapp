var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  files: function() {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath()
    );
  }
});
