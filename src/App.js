import React from 'react';
import './style/base.scss';
import {Provider} from 'react-redux';
import store from './redux/reducers/store'
import TableComponent from './components/TableComponent'

function App() {
  console.log('Hi')
  return (
    <Provider store= {store}>
      <div>
        <TableComponent/>
      </div>
    </Provider>
  );
}

export default App;
