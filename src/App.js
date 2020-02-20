import React from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Header />
        <Table />
      </Wrapper>
    </div>
  );
}

export default App;