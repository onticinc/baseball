import { render, screen } from '@testing-library/react';
import Forum from './Player'

test('renders Dashboard tag', () => {
  render(<Player />);
  const spanElement = screen.getByText(/Dashboard/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders Customers tag', () => {
  render(<Forum />);
  const spanElement = screen.getByText(/Customers/i);
  expect(spanElement).toBeInTheDocument();
});