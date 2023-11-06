import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom'
import PageNotFoundPage from './PageNotFoundPage'

// page not found testing using async function
test('Page Not Found navigation testing rendering/navigating', async () => {
  render(<PageNotFoundPage />, {wrapper: BrowserRouter})
  const pageNotFound = userEvent;

  expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument()

  await pageNotFound.click(screen.getByText(/404 error/i))
  expect(screen.getByText(/404 error/i)).toBeInTheDocument()
})