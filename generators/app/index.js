var Generator = require('yeoman-generator');
var welcome = 
'\nHi there!\n' +
'\nAnswer a few questions below, and I\'ll scaffold a new Bot Framework Node.js app'   +
'\nTake a look at the SetupGuide on https://github.com/simonpo/generator-botscaffold/ if you need help. \n';
console.log(welcome);

module.exports = Generator.extend({
  prompting: function () {
    var prompts = [
      {
          type    : String,
          name    : 'botName',
          message : 'Bot name:',
          default : this.appname //default to current folder name
      }, {
          type    : String,
          name    : 'botDescription',
          message : 'A one-line description of your Bot:'
      }, {
          type    : String,
          name    : 'author',
          message : 'What\s your name?',
          store   : true
      }, {
          type    : String,
          name    : 'authorEmail',
          message : 'Your email address?',
          store   : true
      }, {
          type    : String,
          name    : 'botAppId',
          message : 'Enter your App ID:',
      }, {
          type    : String,
          name    : 'botAppPwd',
          message : 'Enter your App Password:',
      }, {
          type    : String,
          name    : 'botAppInsightsInstrumentationKey',
          message : 'Enter your AppInsights Instrumentation Key:',
      }, {
          type    : String,
          name    : 'luisEndpoint',
          message : 'Enter your LUIS endpoint url:',
      },  {
          type    : String,
          name    : 'luisEmbedCode',
          message : 'Enter your LUIS embed code:',
      }, {
          type    : String,
          name    : 'rootPath',
          message : 'Path where I should put files?',
          default : this.contextRoot // current folder name
      }
    ];
    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath(this.props['rootPath'] + '/index.html'),
      { 
        botname: this.props.botName,
        luisEmbedCode: this.props.luisEmbedCode
      }
    )
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath(this.props['rootPath'] + '/README.md'),
      { 
        botname: this.props.botName,
        botdescription: this.props.botDescription,
        authorname: this.props.author
      }
    )
    this.fs.copy(
      this.templatePath('app.js'),
      this.destinationPath(this.props['rootPath'] + '/app.js')
    );
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath(this.props['rootPath'] + '/.gitignore')
    );
    this.fs.copyTpl(
      this.templatePath('_vscode/launch.json'),
      this.destinationPath(this.props['rootPath'] + '/.vscode/launch.json'),
      {
        botAppId: this.props.botAppId,
        botAppPwd: this.props.botAppPwd,
        botAppInsight: this.props.botAppInsightsInstrumentationKey,
        luisEndpoint: this.props.luisEndpoint
      }
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath(this.props['rootPath'] + '/package.json'),
      {
          botname: this.props.botName,
          botdescription: this.props.botDescription, 
          authorname: this.props.author,
          authoremail: this.props.authorEmail
    }
    );
  },
  install: function () {
    this.npmInstall();
  }
});