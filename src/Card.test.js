import { render, screen } from '@testing-library/react';
import Card from './Card'

test('Renders Card Component', () => {
  render(<Card />);
  const spanElement = screen.getByText(/card-content/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders Customers tag', () => {
  render(<Card />);
  const spanElement = screen.getByText(/content/i);
  expect(spanElement).toBeInTheDocument();
});