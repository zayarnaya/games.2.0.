import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from './test-utils'
import { Line } from '../Line';
import '@testing-library/jest-dom'

describe('line testing', () => {
  renderWithProviders(<Line />)
  test('it renders ok', () => {
    expect(screen.getAllByText('1').length).toBeGreaterThanOrEqual(7);
    expect(screen.getAllByText('1').length).toBeLessThanOrEqual(10);
    fireEvent.click(screen.getByTestId('submit_button'));
    expect(screen.getAllByText('1').length).toBeGreaterThanOrEqual(14);
    // expect(screen.getAllByText('1').length).toBeLessThanOrEqual(10); // очень хорошо, работает

  })
})

// test('fetches & receives a user after clicking the fetch user button', async () => {
//   renderWithProviders(<Line />)

//   // should show no user initially, and not be fetching a user
//   expect(screen.getByText(/no user/i)).toBeInTheDocument()
//   expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()

//   // after clicking the 'Fetch user' button, it should now show that it is fetching the user
//   fireEvent.click(screen.getByRole('button', { name: /Fetch user/i }))
//   expect(screen.getByText(/no user/i)).toBeInTheDocument()

//   // after some time, the user should be received
//   expect(await screen.findByText(/Vasya/i)).toBeInTheDocument()
//   expect(screen.queryByText(/no user/i)).not.toBeInTheDocument()
//   expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()
// })
