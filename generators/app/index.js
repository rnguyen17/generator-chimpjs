'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
  }

  start() {
    this.log('Do something...');
    this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter a name for the new component (i.e.: myNewComponent):',
      },
    ]).then(answers => {
      this.destinationRoot();
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath(`${answers.name}/package.json`),
        {
          name: answers.name,
        }
      );

      this.fs.copy(this.templatePath('./'), this.destinationPath(`./${answers.name}`), {
        name: answers.name,
        globOptions: {
          dot: true,
          ignore: ['**/node_modules/**', '**/yarn.lock', '**/package.json', '**/_package.json'],
        },
      });
    });
  }
};
