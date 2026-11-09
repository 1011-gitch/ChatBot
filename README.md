# Crime Registration & Crime Awareness System

A React web application focused on crime awareness and registration. It includes a home page, project information, a blog page, and a chatbot interface with crime-related information.

## Features

- Navigate between the Home, About, Blog, and chatbot pages.
- View crime categories and access the external crime-registration form from the chatbot page.
- Interact with a chatbot for crime-awareness information.

> The crime-registration form is hosted externally. Check its destination and handling of submitted information before using it.

## Requirements

- Node.js and npm
- Windows PowerShell or Git Bash (commands for both are shown below)

## Getting started

Clone or download the repository, then open a terminal in the project directory.

Install dependencies:

```bash
npm install --legacy-peer-deps
```

The legacy peer-dependency option is needed because `react-simple-chatbot` expects `styled-components` v4 while this project declares v5.

### Start the development server

This project uses an older Create React App / webpack toolchain. With newer Node.js versions (including Node.js 26), start the app with Node's legacy OpenSSL provider enabled.

**PowerShell:**

```powershell
$env:NODE_OPTIONS="--openssl-legacy-provider"
npm start
```

**Git Bash:**

```bash
export NODE_OPTIONS=--openssl-legacy-provider
npm start
```

The development server prints the local URL when it starts (commonly `http://localhost:3000`). The environment variable applies only to the current terminal session.

## Production build

Use the same `NODE_OPTIONS` setting shown above, then run:

```bash
npm run build
```

The optimized static files are generated in the `build` directory.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the development server |
| `npm test` | Run tests in watch mode |
| `npm run build` | Create a production build |
| `npm run eject` | Eject the Create React App configuration (one-way operation) |

## Built with

- React 16
- Create React App (`react-scripts` 3.3)
- React Router
- Material-UI, React Bootstrap, Semantic UI, and `react-simple-chatbot`