import React from 'react';
import ReactDOM from 'react-dom';
import App from './Resume';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Resume />, div);
  ReactDOM.unmountComponentAtNode(div);
});
