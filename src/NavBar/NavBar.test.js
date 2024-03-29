import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<BrowserRouter>
                    <NavBar />
                  </BrowserRouter>, div);
  ReactDom.unmountComponentAtNode(div)
})