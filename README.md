<img src="./public/images/tech-blog-banner.jpeg" width="100%">

# Tech-Blog
Project by: Aaron Au Yoong

Deployed on Heroku: [insert link here]
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


```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Installation
This application has been deployed to Heroku. 
<br>
You may access it [here](https://heroku.com/).

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

## Questions
Any questions? Feel free to contact me via my GitHub profile: [Aaron Au Yoong's GitHub Profile](https://github.com/aaronauyoong)
