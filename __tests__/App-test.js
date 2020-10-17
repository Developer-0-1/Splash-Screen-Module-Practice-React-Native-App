/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

// // __tests__/Login-page-test.js
// import 'react-native';
// import React from 'react';
// import Login from 'components/sessions/login';

// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   const tree = renderer.create(
//     <Login />
//     ).toJSON();
//   expect(tree).toMatchSnapshot();
// });
