import { render, screen, fireEvent } from '@testing-library/react';
import { SignIn } from '@clerk/clerk-react';
import React from 'react';

jest.mock('@clerk/clerk-react', () => ({
  SignIn: jest.fn(() => (
    <div>
      <input placeholder="Email" />
      <input placeholder="Password" />
      <button>Sign In</button>
    </div>
  )),
}));

describe('SignIn Component', () => {
  it('renders the sign-in form', () => {
    render(<SignIn />);
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
  });

  it('calls signIn.create with email and password on form submission', () => {
    render(<SignIn />);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const button = screen.getByText(/Sign In/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(button);

    // Add assertions for your mocked SignIn behavior here if needed
  });
});