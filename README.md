# Movies Search App 🎭

A responsive React application built using React, Redux, and SCSS that allows users to search for movies by actor's name and genre. It leverages [TMDB API 🔗](https://developer.themoviedb.org/reference/intro/getting-started) endpoints to fetch movie data. This README provides instructions on how to set up and run the app and also covers running test cases.

### [Deployment Link 🔗](https://movie-search-app-rho-lovat.vercel.app/)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Frontend Libraries](#libraries)
- [Prerequisites](#prerequesites)
- [Screenshots](#screenshots)
- [License](#license)

<a name="features"></a>

## Features 🏆

- Project setup with Redux state management
- Search by actor & genre functionality
- Responsive web app across different screen resolutions
- Beautiful UI along with wonderful animations & transitions
- Performance optimisation techniques like throttling API requests employed
- Covered by unit test cases.
- Automatic deployment pipeline setup

<a name="installation"></a>

## Installation 💿

👉🏼 Clone this repository to your local machine:

```bash
git clone https://github.com/chiraag918/movie-search-app.git
```

👉🏼 Navigate to the project directory:

```bash
cd movie-search-app
```

👉🏼 Install the required dependencies:

```bash
npm install
```

👉🏼 Build using:

```bash
npm run build
```

<a name="usage"></a>

## Usage 🍽️

👉🏼 Start the app using:

```bash
npm start
```

Open your browser and visit http://localhost:3000 to access the app.

<a name="testing"></a>

## Testing 📝

👉🏼 Test the app using:

```bash
npm run test
```

All the test cases will run and the report will be shown on the terminal.

<a name="libraries"></a>

## Frontend Libraries 🖼️

[React JS(UI)](https://reactjs.org/docs/getting-started.html),
[Redux](https://redux.js.org/introduction/getting-started),
[sass](https://sass-lang.com/documentation/),
[npm](https://www.npmjs.com/)

<a name="prerequesites"></a>

## Prerequisites

For local developments, the application requires NodeJS (version 18 and above). To make sure this is available on the local machine, try running the following command:

```bash
$ node --version
v18.x.x
```

Include .env file in the root level with the following contents:

```bash
REACT_APP_MOVIES_API_URL = "https://api.themoviedb.org"
REACT_APP_MOVIES_API_KEY = "69095fdcd1010ebcc6b1fa56f2537602"
REACT_APP_MOVIES_IMG_URL = "https://image.tmdb.org/t/p/"
```

<a name="screenshots"></a>

## Screenshots/ Screen Recordings 📸

#### Desktop:
<img width="1792" alt="Screenshot 2023-10-31 at 2 17 06 PM" src="https://github.com/chiraag918/movie-search-app/assets/39455997/562f4ebb-deb8-456c-a47f-8c02a09be27c">

#### Tablet:
<img width="836" alt="Screenshot 2023-10-31 at 2 18 21 PM" src="https://github.com/chiraag918/movie-search-app/assets/39455997/b0719a79-1ec2-47fa-a480-5c9f327e519d">

#### Mobile:
![IMG_4567](https://github.com/chiraag918/movie-search-app/assets/39455997/e1bbb425-dbfe-447b-9fb2-bf9f605d375a)


<a name="license"></a>

## License

[MIT](https://choosealicense.com/licenses/mit/)
