import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '.';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const handleSubmit = jest.fn();
      render(<SignInContainer onSubmit={handleSubmit} />);

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'testuser');
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
      fireEvent.press(screen.getByText('Sign in'));

      await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalledTimes(1);
        expect(handleSubmit.mock.calls[0][0]).toEqual({
          username: 'testuser',
          password: 'password',
        });
      });
    });
  });
});
