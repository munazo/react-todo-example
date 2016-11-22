import React from 'react';
import ReactDOM from 'react-dom';

require('./main.styl');

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <h1>Hello, World!!!!</h1>,
    document.getElementById('main'),
  );
});
