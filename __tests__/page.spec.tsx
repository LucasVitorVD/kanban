import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Home from '@/app/page'
import { describe } from 'node:test'

describe('Home', () => {
  it('renders a initial message', () => {
    const { getByRole } = render(<Home />)

    const message = getByRole('heading', { level: 1, name: 'Kanban' })

    expect(message).toBeInTheDocument()
  })
})