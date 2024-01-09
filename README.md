# Deploying simple app with FastAPI and React, using Azure

## Create React Vite project

Make sure `Node.js`, `npm`, and `pnpm` are installed.

1. Run `pnpm create vite@latest <project name>` in the folder you want to save your project and select `React` as the framework and `JavaScript` as the variant.

2. `cd` into the project directory.

3. Run `npm install react@latest react-dom@latest` to install missing dependencies.

4. Run `npm run dev` to start the localhost. The default port for vite projects is `5173`. You can change the port by modifying the `vite.config.js` like below:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: '3000'
  }
})
```

## 