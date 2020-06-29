This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Redux middleware use case project

Agenda: We take simple TODO app and demonstrate how it can be built
with/without Redux and how different middleware works with Redux (Thunk, Saga, no middleware)
approaching `localStorage`, API calls, and no DB at all

## Saga-in-Depth extras

- Non-blocking loader
- Calls concurrency (takeEvery vs takeLatest)
- Count actions (take and select)
- Cancellation: sync tasks with API with "stop" option
- Undo action
- Search with throttling
- Tags for Todos
- Routing (with Todo details)
- Channels

## Branches

`saga-in-depth` - Based on redux-saga with all Extras from the section above implemented

`master` - Simple Redux in-browser app, no storage ("good" example, but not so much)

`no-redux` - In-browser app without Redux

`no-redux-storage` - App without Redux with sync local storage (+error handling)

`no-redux-storage-async` - App without Redux with async local storage (+loader)

`local-storage` - Sync layer to save changes within localStorage

`local-storage-middleware` - local-storage branch with middleware example

`async-storage` - Async layer to save changes within localStorage (not working)

`redux-thunk` - Fully functional with redux-thunk middleware

`redux-saga` - Fully functional with redux-saga middleware

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Author

@Oleg.Barinov, member of Prism UI core team from Berlin

## Copyright

Nutanix