import React from 'react';
import Viewer from './Containers/Viewer';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Viewer />
      <div>COCO</div>
    </Provider>
  );
}

export default App;
