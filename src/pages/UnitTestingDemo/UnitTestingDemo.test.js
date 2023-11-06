// Unit tests
// Arrange
import { render, screen } from '@testing-library/react';
import UnitTestingDemo from './UnitTestingDemo';

describe('Unit Testing Demo', () => {
  
  it("has 'Unit Testing Examples' as heading", () => {
    // Act
    render(<UnitTestingDemo />);
    const heading = screen.getByText('Unit Testing Examples');

    // Assert
    expect(heading).toBeInTheDocument();
  });

  it("has link with text 'Unit Testing Reference'", () => {
    render(<UnitTestingDemo />);
    const link = screen.getByText(/Unit testing reference/i);
    expect(link).toBeTruthy();
  });
});
