# CHALLANGE PROJECT

## Introduction

Firstly, the project set-up is the absolute bare minimum, only including a tiny build process and a tsconfig.json.

The project itself contains a framework, a caching fetch library, and a web application.

The framework is complete. It contains:

- a server
- a client runtime
- an MSW mock server, to allow you to run this project without a network connection.

The application is also complete. It will render a very basic directory of people.

The caching fetch library, however, is incomplete, and needs work.

# Prerequisites

```bash
npm i
npm start
```

### Environment variables

This project depends on some environment variables.
If you are running this project locally, copy the `.env.copy` file and rename it to `.env` at the root for these variables.
Your host provider should included a feature to set them there directly to avoid exposing them.

Here are the required ones:

```
CLIENT_API_URL=https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole&seed=123

```

## Dependencies

### Development Dependencies

- **`@types/node`**: TypeScript definitions for Node.js.
- **`@types/react`**: TypeScript definitions for React.
- **`@types/react-dom`**: TypeScript definitions for React DOM.
- **`dotenv`**: Loads environment variables from a `.env` file.
- **`dotenv-webpack`**: Webpack plugin to manage environment variables.
- **`esbuild`**: JavaScript bundler for client and server code.

### Dependencies

- **`fastify`**: Fast and low-overhead web framework for Node.js.
- **`msw`**: Mock Service Worker library for API mocking.
- **`react`**: React library for building user interfaces.
- **`react-dom`**: React package for DOM rendering.
- **`valibot`**: Validation library.

## Notes

- This is a very barebones project. I added an esbuild config to handle environment variables. I recommend adding an `.eslintrc.js` file to handle the eslint configuration in the future - this will help with finding and fixing problems with javascript code.

- Consider adding hot reload support in the esbuild configuration to accelerate dev feedback.

I've reorganized the client side code in the `src` directory:

- `Name.tsx` and `Person.tsx` not exist in a components folder.
- `*.d.ts` files and shared interface definitions are handled in the types directory
