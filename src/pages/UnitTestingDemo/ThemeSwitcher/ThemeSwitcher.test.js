import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeSwitcher from './ThemeSwitcher';

describe('ThemeSwitcher', () => {
  it('has toggle theme button', () => {
    render(<ThemeSwitcher />);
    const themeSwitcherBtn = screen.getByRole('button');
    userEvent.click(themeSwitcherBtn);

    expect(screen.getByText(/Current Theme/i)).toHaveTextContent(/dark/i);
  });

  // TODO: test wheather the parent div has
  // background-color: rgb(0, 0, 0) and color: rgb(255, 255, 255) or not when theme is dark
  // TODO: test wheather the parent div has
  // background-color: rgb(255, 255, 255) and rgb(0, 0, 0) or not when theme is light

  it('has light theme and changes to dark on button click', () => {
    render(<ThemeSwitcher />);
    const themeSwitcherBtn = screen.getByRole('button');
    expect(screen.getByTestId('themeSwitcher')).toHaveStyle('backgroundColor: #fff');
    expect(screen.getByTestId('themeSwitcher')).toHaveStyle('color: #000');
    userEvent.click(themeSwitcherBtn);
    expect(screen.getByTestId('themeSwitcher')).toHaveStyle('backgroundColor: #000');
    expect(screen.getByTestId('themeSwitcher')).toHaveStyle('color: #fff');
  });
});
