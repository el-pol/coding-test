# Coding Test

## Live version

[Deployed on Netlify](https://cocky-payne-dfc1d9.netlify.com/)

## Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the TypeScript template.

I am using `create-react-app` because it already includes a Webpack configuration and is already setup for TypeScript usage and for writing tests.

In order to see the configuration, you can run `yarn eject` or `npm run eject`, which will expose all the settings to be checked or modified. Please bear in mind that once you run the `eject` command, there is no going back.

In the API response, the image sources did not exist. I have written the query as I would if the sources were valid, but you will see console errors and empty placeholders where the images are supposed to be. I have included a comment in `ProductGrid.tsx` as to how to display with a mock test image.

This app is **not supported in IE11**. It was not specified in the requirements. If needed, polyfills should be added for `fetch`, `es6` among others.

## Usage

You will have to run `yarn install`. To run the development version, run `yarn start`. To run the tests, run `yarn test`. You can also build a production-ready app by running `yarn build`. If you use NPM, replace `yarn` with `npm run`.

Feel free to check out a deployed live version by clicking [this link](https://cocky-payne-dfc1d9.netlify.com/)

## Tests

Unit tests for this application were written using `jest` as a test runner and `@testing-library/react` as the assertions library.

All the major components were tested. Feel free to check out the `__tests__` folder to read and modify the tests.

- **App.tsx:** ensuring that it renders an element and does not crash.
- **Card.tsx:** based on props, ensuring that all data is displayed correctly.
- **Navbar.tsx:** heading text is in the document and the size selector contains all the sizes.
- **ProductGrid.tsx:** testing of all possible outcomes: a successful API call, an error in the API call, and a correct display of filtered items.

## Packages added

- `styled-components`: to style the application using CSS-in-JS and modify styling based on props.
- `styled-normalize`: a base [normalize.css](https://necolas.github.io/normalize.css/) to ensure the base styles remain the same for all browsers.
- `jest-fetch-mock`: a Fetch API mock used for testing purposes.
- `@testing-library/react`: simple and complete testing utilities that encourage good testing practices.
