# Generator-botscaffold

[![npm version](https://badge.fury.io/js/generator-botscaffold.svg)](https://badge.fury.io/js/generator-botscaffold)

This Yeoman Generator creates the scaffolding of a Node.js app leveraging the [Microsoft Bot Framework](https://dev.botframework.com/), [LUIS](https://www.luis.ai/) and [Application Insights](https://azure.microsoft.com/services/application-insights/), helping you focus on delivering a great conversational experience rather than the setup process. 

You will need to provide pointers to some Azure services during the setup process, so look at the [comprehensive Setup Guide](./SetupGuide.md) as you walk through the generator. That document is long with screen-shots, so if you're familiar with Azure try the [TL;DR Guide](./TLDRGuide.md) which is much shorter.

## Features
This app delivers the skeleton of a bot, and includes the following:

- a .gitignore, preventing sensitive data (contained in .vscode\launch.json) being published to a public repo
- a .vscode\launch.json file containing your keys and passwords as environment variables, so you can run your bot locally
- a package.json with all the requirements for Bot Framework, LUIS and Application Insights
- an app.js Bot you can run locally in VS Code or remotely as an Azure Web App

## Getting started
You will need:

- [VS Code](https://code.visualstudio.com/docs/setup/setup-overview) installed to edit the app.js, and run the Bot locally in debug mode. It's available for Windows, Mac and Linux
- The [Bot Framework Emulator](https://docs.microsoft.com/bot-framework/debug-bots-emulator)
- [Node.js v4.0.x](https://nodejs.org/en/download/) or better
- [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- The botscaffold generator: `npm install -g generator-botscaffold`

## Running the Generator

- Create a directory to hold your bot's code, and cd into it
- Run: `yo botscaffold`
- Follow along in the [Setup Guide](./SetupGuide.md) or the [TL;DR version](./TLDRGuide.md)
- Test your Bot with the [Bot Framework Emulator](https://docs.microsoft.com/bot-framework/debug-bots-emulator)

## Why?

I've been building a lot of  Node.js apps using the Microsoft Bot Framework. This generator scaffolds a new app with a common structure and template files, saving a ton of time. 

## Support

Feel free to create an Issue. Pull requests are encouraged.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)

## Acknowledgments

* Hat tip to [PurpleBooth's README-Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)