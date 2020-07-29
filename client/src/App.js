import React from 'react';
import {Container} from 'reactstrap';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
        <AppNavBar/>
      <Container>
        <ItemModal/>
        <ShoppingList/>
      </Container>
   
    </div>
  );
}

export default App;
