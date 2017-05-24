import React from 'react';
import MyListIndex from './MyList/Index';
import MyListNew from './MyList/New';

import { Route } from 'react-router-dom'

const MyList = () => (
  <div>
    <Route exact path="/minha-lista" component={MyListIndex}/>
    <Route exact path="/minha-lista/adicionar-filme" component={MyListNew}/>
  </div>
)

export default MyList;
