# Authentication with Remix js

## Description

This is a simple example of how to authenticate with Remix js using session based authentication.
where we can refresh the session and the user will still be authenticated and logout to destroy the session.

## Authentication

The authentication is done using a simple cookie session storage, where the user is authenticated by setting a cookie with the user id and the user is logged out by destroying the cookie.

## How to run

1. Clone the repository
2. Run `pnpm/npm install` to install the dependencies
3. Run `pnpm/npm run dev` to start the development server
4. Open your browser and go to `http://localhost:3000`

### Tools used:

- Remix js
- Cookie session storage
- Tailwind CSS
