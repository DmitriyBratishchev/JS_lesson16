import React from 'react'
import ReactDOM from 'react-dom'
import '../CSS/style.css'

import Coments from './containers/app';
import { createStore } from 'redux';
import coments from './reducers/index';

let initialState;

if(!localStorage.comentsList){
  initialState = [{
    id: 0,
    author: "First",
    textComent: "textComenttextComent",
    data: "15.10.2020,14:00:00",
    display: false}   
   ]
} else {
  initialState =  JSON.parse(localStorage.comentsList)
}  

const store = createStore( coments, initialState )

const element = (
  <div>
    <Coments store={store} />
  </div>);

ReactDOM.render(element,
  document.querySelector("#comentsList")
)   
