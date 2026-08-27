# Instrument - CMS + REST API

## Requirements
Before installing and running the project, make sure the following tools are installed:

| Dependency   |   Version |
| ------------ | --------: |
| Composer     |  `2.10.2` |
| Laravel Herd |  `1.30.0` |
| Node.js      | `22.18.0` |
| PHP          |   `8.5.8` |

## Getting Started
Follow these steps to set up and run the project locally:
1. Clone the repo `git@github.com:zborecki/instrument.git` and navigate to the project directory `cd instrument`.
2. Install all dependencies defined in composer.json and package.json using `composer install && npm i`.
3. Create a `.env` file and copy the contents of `.env.example` into it.
4. Generate a unique application key required by Laravel `php artisan key:generate`.
5. Update the database connection settings in the .env file.
6. Create tables by running the project's migrations `php artisan migrate`.
7. If you are using Laravel Herd, the application is served automatically through the local .test domain f.e. `https://instrument.test`.

## Database Credentials
The following credentials are intended for local development only.

| Field    | Value                   |
| -------- | ----------------------- |
| Email    | `admin@instrument.test` |
| Password | `password`              |

> **Note:** Do not use these credentials in production or commit production credentials to the repository.
