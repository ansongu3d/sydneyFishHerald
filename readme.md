# Sydney Fishing Herald App

<img src="https://github.com/ansongu3d/sydneyFishHerald/blob/main/frontend/src/assets/sfh_logo.png " width="200" height="200">

Fishing News application built with the MERN stack.  MangoDB + ExpressJs + React + NodeJs.
The application is blog style one, which allow Anglers post their fishing result to share online.
The results will be presented as Newspaper style at the app's NEWS page.

# Function - Create a Topic

<img src="https://github.com/ansongu3d/sydneyFishHerald/blob/main/frontend/src/assets/Form.png" width="800">


# Data Structure
There are 3 Collections in the database: users, posts, notes.
[![data structure](https://github.com/ansongu3d/sydneyFishHerald/blob/main/frontend/src/assets/data%20structure.png)]

# App Structure (MVC)
It contains: Frontend & Backend parts.<br>
Frontend: [pages: 8 routes] [features: auth, notes, topics function hooks] [components: header,headlineTopic,noteitem...] <br>
Backend: [routes: 3 routes] [models: database schema] [controllers: noteController, topicController, userController]
 [middleware: auth & error] [config: connection to database]

# Deloyed Site
https://fast-tor-14073.herokuapp.com/

## Usage
 
### Set Environment Variables

Rename the .envexample to .env and add your [MongoDB](https://www.mongodb.com/) database URI and your JWT secret

### Install backend dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd frontend
npm install
```

### Run app in development (frontend & backend)

```bash
npm run dev
```
