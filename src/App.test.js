import { render, screen } from '@testing-library/react';
import App from './App';

test('Pac - Man Game ', () => { //PLUT¨T DU JEU LUI MEME
  render(<App />);
  const linkElement = screen.getByText(/Pac - Man Game/i);
  expect(linkElement).toBeInTheDocument();
});

//lien explicative
//https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete/7256829-testez-vos-composants-avec-react-testing-library