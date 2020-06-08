import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/reducers/store'
import './index.css';
import TableComponent from './components/TableComponent'
import StatusComponent from './components/StatusComponent'

function App() {
  console.log('Hi')
  return (
    <Provider store={store}>
      <div>
        <TableComponent/>
        <StatusComponent/>
      </div>
    </Provider>
  );
}

export default App;
