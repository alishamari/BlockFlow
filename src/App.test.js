// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockFlow title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockFlow/i);
    expect(titleElement).toBeInTheDocument();
});
