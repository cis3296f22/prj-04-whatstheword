import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import Score from '../Score'
import App from '../../App';
import Button from '@mui/material/Button';

afterEach(() => {
    cleanup();
});

// Testing if the react test works
test('test', () => {
    expect(true).toBe(true);
})

// Testing the title of the Landing Page
test ('renders the landing page', () => {
    render(<App/>);
    const linkElement = screen.getByText(/What's The Word/i);
    expect(linkElement).toBeInTheDocument();

    /*const scoreElement = screen.getByTestId('game-display');
    expect(scoreElement).toHaveTextContent('0');*/
});

test ('renders the Play Button', () => {
    render(<App />);
    const Button = screen.getByRole('button', {name: /PLAY/i});
    expect(Button).toHaveClass('p-2');
});


