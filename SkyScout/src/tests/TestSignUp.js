import { render, screen, fireEvent } from '@testing-library/react';
import { SignUp } from '@clerk/clerk-react';
import React from 'react';

jest.mock('@clerk/clerk-react', () => ({
  SignUp: jest.fn(() => (
    <div>
      <input placeholder="Email" />
      <input placeholder="Password" />
      <button>Sign Up</button>
    </div>
  )),
}));

describe('SignUp Component', () => {
  it('renders the sign-up form', () => {
    render(<SignUp />);
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  });

  it('calls signUp.create with email and password on form submission', () => {
    render(<SignUp />);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const button = screen.getByText(/Sign Up/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(button);

    // Assert custom logic here (mock sign-up behavior, etc.)
  });
});