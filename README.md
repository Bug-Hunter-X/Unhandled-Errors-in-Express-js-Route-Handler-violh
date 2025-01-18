# Express.js Unhandled Error Example

This repository demonstrates a common error in Express.js applications: insufficient error handling in route handlers.  The `bug.js` file shows a route that doesn't properly handle database errors or the case where a user is not found. This can lead to unexpected behavior for the client or even crashes on the server side. The `bugSolution.js` file provides an improved version with better error handling.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js`.  Attempt to access a non-existent user ID. Observe the server's response (or lack thereof).
4. Run `node bugSolution.js` to see the improved error handling.