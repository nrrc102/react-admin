import * as React from 'react';
import {Admin, EditGuesser, ListGuesser, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import AuthProvider from './firebase/AuthProvider';
import DataProvider from './firebase/DataProvider';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import {UserList} from './components/Users';
import {PostCreate, PostEdit, Posts} from './components/Posts';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => 
  <Admin 
  title="Cebugi" 
  dashboard={Dashboard} 
  dataProvider={dataProvider} 
  authProvider={AuthProvider} 
  dataProvider={DataProvider}
  catchAll={NotFound}>
      <Resource name="posts" list={Posts} create={PostCreate} edit={PostEdit} icon={PostIcon}  />
      <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>

export default App;
