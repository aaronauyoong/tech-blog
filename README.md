<img src="./public/images/tech-blog-banner.jpeg" width="100%">

# Tech-Blog
Project by: Aaron Au Yoong

Deployed on Heroku: [Tech Blog](https://aaronauyoong-techblog.herokuapp.com/)
<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)

## Table of Contents
* [Description](#Description)
* [License](#License)
* [Features](#Features)
* [Installation](#Installation)
* [Contributions](#Contributions)
* [Credits](#Credits)
* [Tests](#Tests)
* [Questions](#Questions)

## Description

This project will be a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site will be built completely from scratch and deployed to Heroku. This app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.


Below is the defined `User Story` for this application:

```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## License
MIT License
<br>
Copyright © 2021-Present Aaron Au Yoong. All rights reserved.
<br>

## Features
This is a CMS-style blog site, with basic features such as:
* Homepage displaying list of existing posts
* A dynamic navigation bar that changes depending on whether user is logged in or not. 
* Login and signup capabilities (Signing up requires the user to input an email address, username and password. Credentials are then saved and they are automatically logged into the site).
* Users can click on any post to view the entirety of the post, including any associated comments.
* Users are required to be signed up AND logged in, in order to add posts and comments.
* If they are logged in, users have the ability to update and delete any posts they own. 
* An auto-logout function (a.k.a. session expiry) will occur if the user is idle for 24 hours.

## Installation
This application has been deployed to Heroku. 
<br>
You may access it [here](https://aaronauyoong-techblog.herokuapp.com/).

## Contributions
For contributions, you may follow the industry standard: [Contributor Covenant](https://www.contributor-covenant.org/).
<br>

## Credits

* License badges used in this project were retrieved from GitHub user's `lukas-h` license-badge markdown file: [Markdown License badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba).

* Basic NPM Packages were used: [NPM Packages](https://www.npmjs.com/).
* [Node Express](https://expressjs.com/)
* [NPM express-session](https://www.npmjs.com/package/express-session)
* [NPM express-handlebars](https://www.npmjs.com/package/express-handlebars)
* [connect-session-sequelize](https://github.com/mweibel/connect-session-sequelize)
* [Sequelize](https://sequelize.org/master/index.html).

README banner obtained from freewebheaders - [Technology Background with Electrical Design in Rainbow Colors](https://www.freewebheaders.com/technology-industry/high-tech-designs-headers/).



## Tests
1. Iterative testing - each addition of a new function/feature was tested. 
2. Upon app development completion - End-to-end testing was conducted. 

## Questions
Any questions? Feel free to contact me via my GitHub profile: [Aaron Au Yoong's GitHub Profile](https://github.com/aaronauyoong)
