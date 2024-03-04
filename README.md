# Fillout Form Submission Filter

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
    - [Try the application](#try-the-application)
- [Technologies Used](#technologies-used)
- [License](#license)

## Introduction
This project implements a REST API server designed to interact with Fillout.com's API to fetch responses from a specific form. It extends the functionality of the standard responses endpoint by introducing a filtering mechanism that allows users to retrieve form responses based on specific criteria. This server is intended for demonstration purposes and utilizes a demo account and API key provided by Fillout.com.

## Getting Started
## Prerequisites
Make sure your environment has the following installed:

- Nodejs (version - 16^)
- Docker (You need docker to be installed to run application)

### Installation
To clone this repo onto your local machine:

1. Clone the repository from [GitHub Repo URL](https://github.com/mayorscript/fillout-form-api).

   ```bash
   git clone https://github.com/mayorscript/fillout-form-api.git

2. To get started, navigate to the project directory:

    ```bash
     cd fillout-form-api
    ```
3. Install project dependencies:
    ```
    yarn install
    ```
4. Run docker compose:
    ```
    docker compose up
    ```
5.  Api Endpoint
    ```
    https://localhost:8080/:formId/filteredResponses
    ```
___

# Project
## Project Structure

The project follows a standard directory structure:

```
fillout-form-api/
│
├── dist/                # Output folder for compiled Javascript files
├── logs/                # Auto-generated app logs
├── src/                 # Source code
    |── config/          # App configuration
       └── ... 
    |── controllers/     # Http request
    │   └── ...
    |── lib/             # Utility functions & API Services
       └── ...
    |── middlewares/     # App middlewares
    │   └── ...
    |── routes/          # App routes
    │   └── ...
    |── schema/          # Validation schema
    │   └── ...
    |── services/        # App business logic
    │   └── ...
    |── types/           # Typescript type declarations
    │   └── ...
    |── index.ts         # App entry point
    |── server.ts        # Server setup
├── .env.local           # Local environment variable
├── package.json         # Project dependencies and scripts
├── README.md            # Project documentation
└── ...

```

## Try the application

Starting from the root directory of your local repository, run:

The `src` folder contains the project's `package.json` file, `index.ts` which is the entry point to the application, and a `.env` file for managing environments.
The `NODE_ENV` variable in the `.env` file is used to set the application's environment configuration. As listed by the files within `src/config`, `NODE_ENV` can take one of 4 possible values: `local`, `development`, `production` - and if `NODE_ENV` is not set, the application uses the `default` configuration. For example, you can set the application to use the `local` configuration by updating `.env` with:
```
NODE_ENV=local
```

Do not add secrets directly into `.env`; any secret values should be managed by a Secret Manager.

## Technologies Used
- Node.js
- Express.js
- Docker
- Axios
- Winston
- Nodemon
- Jest
- Husky
- Github Actions

## License
This project is licensed under the MIT License.