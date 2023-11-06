import { render, screen } from '@testing-library/react';
import Users from './Users';
import { fetchApi } from '../../../utils/fetchApi/fetchApi';
// setting up mock for fetchApi 
// mocking a module with an automocked version when needed
jest.mock('../../../utils/fetchApi/fetchApi');  // 


// Positive test spec
describe('Users', () => {
  it('fetches userLidt properly via API call [MOCKING]', async () => {
    // 1. prepare the mock data for the users
    const mockUserList = [
      {
        id: 1,
        name: 'Steve',
        phone: '3453464342'
      },
      {
        id: 2,
        name: 'John',
        phone: '9876531434'
      }
    ];

    // 2. resolve the req with the above  mock data
    // 2.1 setup mock for fetchApi (see before describe block)
    // 2.2 resolve the req
    fetchApi.mockResolvedValue(mockUserList);
    // 3. render the comp
    render(<Users />);
    // 4. then, assert
    const userNameEl = await screen.findByText('Steve');
    expect(userNameEl).toBeInTheDocument();
  });

  // NEGATIVE SPEC
  it('[MOCKING]: renders errors properly during API Call', async() => {
    // preparing mock error obj
    const error = {
      errorCode: '101',
      errorInfo: 'Sorry! Unable to fetch users! Try again later.'
    };

    fetchApi.mockRejectedValue(error);
    render(<Users />);
    expect(
      await screen.findByText(/Sorry! Unable to fetch users! Try again later./i)
    ).toBeInTheDocument();
  });
});
