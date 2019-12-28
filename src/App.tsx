import React from 'react';
import './scss/app.scss';

import {Header} from './components/header/Header';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
       
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>       
     
    </div>
  );
}
export default App;
