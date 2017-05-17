# Generator-botscaffold

This Yeoman Generator creates the scaffolding of a Node.js app leveraging the [Microsoft Bot Framework](https://dev.botframework.com/) and [LUIS](https://www.luis.ai/), helping you focus on delivering a great conversational experience rather than the setup process. 

You will need to provide pointers to some Azure services during the setup process, so take a look at the [Setup Guide](./SetupGuide.md) as you walk through the generator.

## Features

- Scaffolds a Node.js Bot Framework app
- Creates a launch.json skeleton for easy inclusion of environment variables using VS Code
- Creates a basic README.md
- Builds your package.json

## Getting started
- Assume you already have Node.js v4.0.x or better installed
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install -g generator-botscaffold`
- Create a directory to hold your bot's code, and cd into it
- Run: `yo botscaffold`
- Follow along in the [Setup Guide](./SetupGuide.md)

## Why?

I've been building a lot of small Node.js apps using the Microsoft Bot Framework. This generator scaffolds a new app with a common structure and template files, saving a ton of time. 

## Support

Feel free to create an Issue. Pull requests are encouraged.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)

## Acknowledgments

* Hat tip to [PurpleBooth's README-Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)