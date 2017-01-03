'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var copydir = require('copy-dir');

module.exports = generators.Base.extend({

  writing: {
    everything: function () {
      copydir.sync(this.sourceRoot(), this.destinationRoot());
      var confirm_text = '\n' +
        chalk.green.bold('✓ File installation complete.') +
        '\n\nInstalling NPM dependencies...\n\n' +
        chalk.gray('If this fails, fix the necessary problems and run ') +
        chalk.yellow('npm install') +
        chalk.gray(' again.\n\n\n');
      this.log(confirm_text);
    }
  },

  install: function () {
    // this.npmInstall();
  },

  end: function () {
    var complete_text = '\n\n\n' +
      chalk.green.bold('✓ Dependency installation complete.') +
      '\n\nStart your app by running: ' + chalk.yellow.bold('npm run dev') + '\n\n' +
      chalk.gray('See http://lexxi.hexgirlfriend.com for documentation.\n(っ◕‿◕)っ♥\n\n\n\n');
    this.log(complete_text);
    return;
  }
});
