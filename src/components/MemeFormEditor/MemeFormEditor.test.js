import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeFormEditor from './MemeFormEditor';

describe('<MemeFormEditor />', () => {
  test('it should mount', () => {
    render(<MemeFormEditor />);
    
    const memeFormEditor = screen.getByTestId('MemeFormEditor');

    expect(memeFormEditor).toBeInTheDocument();
  });
});