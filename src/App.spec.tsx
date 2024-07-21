import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const renderComponent = () => {
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

describe('<App/>', () => {
  it('should render the <App/>', () => {
    const app = renderComponent();
    expect(app).not.toBeNull();
  });
});
