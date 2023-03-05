import { render, screen } from '@testing-library/react';
import DashBoard from './DashBoard';

test('renders app title.', () => {
  render(<DashBoard />);
  const linkElement = screen.getByText(/TODOアプリ2022/i);
  expect(linkElement).toBeInTheDocument();
});
