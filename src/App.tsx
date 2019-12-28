import React from 'react';
import './scss/app.scss';

import {Header} from './components/header/Header';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />     
    </div>
  );
}
export default App;
