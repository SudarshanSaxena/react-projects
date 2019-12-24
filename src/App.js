import React from "react";
import logo from "./logo.svg";
import faker from "faker";
import "./App.css";

function App() {
  return (
    <div className='ui container comments'>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img src={faker.image.avatar()} />
        </a>
        <div className='content'>
          <a href='#' className='author'>
            Sudarshan Saxena
          </a>
          <div class='metadata'>
            <span class='date'>Today at 5:42PM</span>
          </div>
          <div class='text'>How artistic!</div>
        </div>
      </div>

      <div className='comment'>
        <a href='/' className='avatar'>
          <img src={faker.image.avatar()} />
        </a>
        <div className='content'>
          <a href='#' className='author'>
            Sudarshan Saxena
          </a>
          <div class='metadata'>
            <span class='date'>Today at 5:42PM</span>
          </div>
          <div class='text'>How artistic!</div>
        </div>
      </div>

      <div className='comment'>
        <a href='/' className='avatar'>
          <img src={faker.image.avatar()} />
        </a>
        <div className='content'>
          <a href='#' className='author'>
            Sudarshan Saxena
          </a>
          <div class='metadata'>
            <span class='date'>Today at 5:42PM</span>
          </div>
          <div class='text'>How artistic!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
