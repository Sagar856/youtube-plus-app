import { fireEvent, render, screen } from '@testing-library/react';
import CompanyInfo from './CompanyInfo';
import renderer from 'react-test-renderer';

describe('CompanyInfo', () => {
  it('should have companyName Cognizant', () => {
    render(<CompanyInfo />);
    const companyNameElement = screen.getByTestId('companyName');
    console.log(companyNameElement.textContent);
    expect(companyNameElement.textContent).toBe('Cognizant');
  });

  // testing Props
  it('receives founderYear prop and dispaly in JSX', () => {
    // when you're testing prop, render the comp with necessary props
    render(<CompanyInfo foundedYear="2006" />);
    const foundedYearElement = screen.getByTestId('foundedYearElement');
    expect(foundedYearElement).toHaveTextContent('Founded in: 2006');
  });

  // TODO: test weather comp is receiving a prop 'employeeCount'
  it('receives employeeCount prop and dispaly in JSX', () => {
    render(<CompanyInfo employeeCount="4 lac" />);
    const employeeCountElement = screen.getByTestId('employeeCountElement');
    expect(employeeCountElement).toHaveTextContent('Employee Count : 4 lac');
  });

  // Form input with placeholder
  it("has an input with 'Enter Your Country Name' as placeholder text", () => {
    render(<CompanyInfo />);
    expect(screen.getAllByPlaceholderText('Enter Your Country Name')).toBeTruthy();
  });

  // Inline styles testing
  it('has foundedYear is with text color green--inline style', () => {
    render(<CompanyInfo foundedYear="2006" />);
    const foundedYearElement = screen.getByTestId('foundedYearElement');
    expect(foundedYearElement).toHaveStyle('color : rgb(0, 255, 0)');
  });

  // TODO: test weather button has 'btn-primary' class
  it("has css class 'btn-primary'", () => {
    render(<CompanyInfo />);
    const classNameElement = screen.getByTestId('classNameElement');
    expect(classNameElement).toHaveClass('btn-primary');

    const buttonTextElement = screen.getByTestId('classNameElement');
    expect(classNameElement).toHaveTextContent('Join Cognizant');
  });

  // Events and states
  it('displays countryName by default and updates UI onChange of input', () => {
    render(<CompanyInfo />);
    //find the input element
    const countryNameInput = screen.getByPlaceholderText('Enter Your Country Name');
    //Now checking wheather the onChange event handler is working or not
    // let's trigger the event -- thru program
    const mockEventObj = {
      // preparing the mock event obj with target value being china
      target: {
        value: 'Japan'
      }
    };
    fireEvent.change(countryNameInput, mockEventObj);
    //finally checking if the input element is showing the change
    expect(countryNameInput.value).toBe('Japan');

    // Have expectation
    expect(screen.getByTestId('visitCognizant')).toHaveTextContent('Visit Cognizant Japan Website');
  });

  // Snapshot testing
  it('has right snapshot with all requirements completed', () => {
    // to take snapshot we need react-test-renderer.  // npm i react-test-renderer
    // taking snapshot and also converting into JSON
    //[RECOMMENDED]: take snapshot with all possible props as well as props children
    const snapshotInJson = renderer.create(<CompanyInfo foundedYear="2006" />).toJSON();
    // let assert with a matchrer toMatchSnapshot()
    expect(snapshotInJson).toMatchSnapshot();
  });
});
