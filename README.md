# Deploying simple app with FastAPI and React, using Azure

## Frontend

### Create React Vite project

Make sure `Node.js`, `npm`, and `pnpm` are installed.

1. Run `pnpm create vite@latest <project name>` in the folder you want to save your project and select `React` as the framework and `JavaScript` as the variant.

2. `cd` into the project directory.

3. Run `npm install react-query@latest react@latest react-dom@latest` to install missing dependencies.

4. Run `npm run dev` to start the localhost. The default port for vite projects is `5173`. You can change the port by modifying the `vite.config.js` like below:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: '3000'
  }
})
```

### Tailwind Setup

### GitHub Repository

1. Initialise the project directory as a Git repository with `git init`.

2. Stage your changes by running `git add .` and make the initial commit with a message `git commit -m "Create React Vite project"`

3. Publish your repository: `git remote add origin git@github.com:<accname>/<reponame>.git`

4. Finally, push your changes: `git push -u origin main`

### Deploy to Azure Static Web Pages

1. Create Static Web App

2. Update workflow file: build output location and actions checkout version

## Backend

### Azure Functions API (not FastAPI)

1. In VS Code, run: Azure Static Web Apps: Create HTTP Function...

2. JavaScript, V3, message

### FastAPI server

1. Create a project directory for the FastAPI server and install `npm install azure-functions-core-tools`

2. Create a virtual env `python3 -m venv venv` and activate it `source venv/bin/activate`

3. Install FastAPI dependencies, `pip install fastapi uvicorn azure-functions requests`

4. Create your function `.py` file and add origins

5. Create a `requirements.txt` file and run `pip freeze > requirements.txt`

6. Create a `host.json` file in the root for the AF host and a `local.settings.json` file for local development

8. And you’ll need a `function.json` file in the function directory that defines the configuration for the Azure Function

9. Run the function locally: `npx azure-functions-core-tools start --verbose`

## Connect FE and BE

### Call API from FE

1. Run `npm install axios` and create a file for the api configurations `index.js`

2. Create the baseUrl configuration and a function to call the api

3. Import the function to `App.jsx`