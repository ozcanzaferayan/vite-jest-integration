import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { fireEvent, screen } from '@testing-library/react'
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from './../../utils/test-utils'
import UserDisplay from './UserDisplay'
import { handlers } from '../../mocks/handlers'



const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

test('fetches & receives a user after clicking the fetch user button', async () => {
    renderWithProviders(<UserDisplay />)

    // should show no user initially, and not be fetching a user
    expect(screen.getByText(/no user/i)).toBeInTheDocument()
    expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()

    // after clicking the 'Fetch user' button, it should now show that it is fetching the user
    fireEvent.click(screen.getByRole('button', { name: /Fetch user/i }))
    expect(screen.getByText(/no user/i)).toBeInTheDocument()

    // after some time, the user should be received
    expect(await screen.findByText(/Zafer/i)).toBeInTheDocument()
    expect(screen.queryByText(/no user/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()
})