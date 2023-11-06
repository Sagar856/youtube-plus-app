import { fireEvent, render, screen } from '@testing-library/react';
import CounterUnitTesting from './CounterUnitTesting';

describe('CounterUnitTesting', () => {
  it('has counter with initial value 0', () => {
    render(<CounterUnitTesting />);
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toEqual('0');
  });

  it('has properly working increment button', () => {
    render(<CounterUnitTesting />);

    // fetching counter element
    const counterValueElement = screen.getByTestId('counterValue');
    expect(counterValueElement.textContent).toEqual('0');

    // find the increment button
    const incrementBtn = screen.getByTestId('incrementBtn');

    // trigger the click
    fireEvent.click(incrementBtn);
    // fetch the counter value again -- find wheather it is incremented or not
    expect(counterValueElement.textContent).toEqual('1');

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(counterValueElement.textContent).toEqual('3');
  });

  it('has properly working decrement button', () => {
    render(<CounterUnitTesting />);

    // fetching counter element
    const counterValueElement = screen.getByTestId('counterValue');
    expect(counterValueElement.textContent).toEqual('0');

    // find the decrement button
    const decrementBtn = screen.getByTestId('decrementBtn');

    // trigger the click
    fireEvent.click(decrementBtn);
    // fetch the counter value again -- find wheather it is decremented or not
    expect(counterValueElement.textContent).toEqual('0');

    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    expect(counterValueElement.textContent).toEqual('0');
  });

  it('has counter with max value of 10 upon increment and min value of 0 upon decrement', () => {
    render(<CounterUnitTesting />);

    const counterValueElement = screen.getByTestId('counterValue');
    const incrementBtn = screen.getByTestId('incrementBtn');
    const decrementBtn = screen.getByTestId('decrementBtn');

    for (let i = 0; i < 10; i++) {
      // for increment
      fireEvent.click(incrementBtn);
    }

    fireEvent.click(incrementBtn); // clicking 11th time // fire event for increment
    expect(counterValueElement.textContent).toEqual('10');

    for (let i = 10; i > 0; i--) {
      // for decrement
      fireEvent.click(decrementBtn);
    }

    fireEvent.click(decrementBtn); // fire event for decrement
    expect(counterValueElement.textContent).toEqual('0');
  });
});
