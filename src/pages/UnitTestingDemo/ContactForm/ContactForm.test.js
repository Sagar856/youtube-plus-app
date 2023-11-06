import { fireEvent, render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  it('has proper contact form', () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText('Enter Name:');
    const phoneInput = screen.getByLabelText('Enter Phone:');
    const submitBtn = screen.getByRole('button');

    expect(nameInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    expect(nameInput).toHaveAttribute('type', 'text');
    expect(phoneInput).toHaveAttribute('type', 'number');
  });

  it('has the submit button in disabled state when first field is empty', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText('Enter Name:');
    const mockEventObj = {
      target: {
        value: ''
      }
    };
    // trigger change event
    fireEvent.change(nameInput, mockEventObj);
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toHaveAttribute('disabled');
  });

  // TODO: has submit button in enabled state when first name is not empty
  it('has the submit button in enabled state when first name is present', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText('Enter Name:');
    const mockEventObj = {
      // praparing the mock event obj with target value being China
      target: {
        value: 'sagar'
      }
    };

    // trigger change event
    fireEvent.change(nameInput, mockEventObj);
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeEnabled();
  });

  // TODO: trigger the submit button clicked and check success message is present
});
