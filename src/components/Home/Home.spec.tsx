import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { mockItem } from '../../tests/mocks/dataMocks';

const mockFetch = jest
  .fn()
  .mockImplementation(() => Promise.resolve([mockItem]));
const mockUseFetchData = {
  fetch: mockFetch,
  loading: false,
  error: false,
};

jest.mock('../../hooks/useFetchData', () => {
  return () => mockUseFetchData;
});

const renderComponent = () => {
  render(<Home />);
};

describe('<Home/> specs', () => {
  it('should fetch the data on init', () => {
    mockUseFetchData.error = false;
    renderComponent();
    expect(mockFetch).toHaveBeenCalled();
  });

  it('should show error text if hook returns error', () => {
    mockUseFetchData.error = true;
    renderComponent();
    const errorDiv = screen.findByText('Üzgünüz ama bir hata meydana geldi.');
    expect(errorDiv).not.toBeNull();
  });
});
