import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MetricsCard from './MetricsCard';

describe('MetricsCard', () => {
  test('renders the title and value correctly', () => {
    // Arrange
    const title = 'Total Users';
    const value = 10000;

    // Act
    render(<MetricsCard title={title} value={value} />);

    // Assert
    const titleElement = screen.getByText(title);
    const valueElement = screen.getByText(value.toString());

    expect(titleElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
