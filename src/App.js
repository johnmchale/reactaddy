import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/johnmchale/demo');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="jobs" list={ListGuesser} />
  </Admin>
);

export default App;
