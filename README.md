##Sync In

This is a music compilation app that brings your music in one place! Users are able to create and save playlists from music/video results from the YouTube, Vimeo, and SoundCloud APIs. This was built with React/Redux, NodeJs, Mongo, Express, Passport, Google & Facebook OAuth2 Authentication.


* Live Demo: https://kevl927.github.io/ASyncIn-Client/#/
* GitHub - Client: https://github.com/KevL927/ASyncIn-Client
* GitHub - Server: https://github.com/Lavioli/ASyncIn-Server

## Directory layout

```
.
├── public                  Html file
├── src                     Client-side code
│   ├── assets              Images, videos, etc.
│   ├── js                  JavaScript
│        └── actions        Redux actions
│        └── components     React components
│        └── reducers       Redux reducers
│        └── routes         React routes
│        └── store          React store


```

## Deployment

Requires the [Heroku CLI client](https://devcenter.heroku.com/articles/heroku-command-line).

### Setting up the project on Heroku

* Move into the project directory: `cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME`
* Create the Heroku app: `heroku create PROJECT_NAME`
* Instruct Heroku to install the development dependencies: `heroku config:set NPM_CONFIG_PRODUCTION=false`

### Deploying to Heroku

* Push your code to Heroku: `git push heroku master`


### Create a new mlab database

* Log in to https://mlab.com/
* Create a new database by pressing Create new
* On plan, click Single-node
* Check Sandbox (It's the free one)
* Scroll down to Database Name and enter your name of choice
* Press Create new MongoDB deployment

### Link your mlab database to your project

* On your mlab dashboard, click the database that you would like to use
* Press Users
* Press Add database user
* Type in credentials that you will remember and press Create
* Copy and paste the link at the top that looks something like this: mongodb://<dbuser>:<dbpassword>@ds117929.mlab.com:17929/dbname
* In the heroku command line, set the database uri: heroku config:set DATABASE_URI=mongodb://<dbuser>:<dbpassword>@ds117929.mlab.com:17929/dbname


