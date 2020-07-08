import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeNavbar from './MemeNavbar';

describe('<MemeNavbar />', () => {
  test('it should mount', () => {
    render(<MemeNavbar />);
    
    const memeNavbar = screen.getByTestId('MemeNavbar');

    expect(memeNavbar).toBeInTheDocument();
  });
});