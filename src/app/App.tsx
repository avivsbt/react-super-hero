import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Provider store={store}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
