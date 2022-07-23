import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import { store } from './store/store';

import App from './app';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('App', () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        {
          id: 'afbc4d04-8fc8-45be-bbab-2ceb48ef49c7',
          title: "More Than You'll Ever Know ",
          author: 'Katie Gutierrez',
          ISBN: 9780063118454,
          description:
            "In 1985, Dolores “Lore” Rivera marries Andres Russo in Mexico City, even though she is already married to Fabian Rivera in Laredo, Texas, and they share twin sons. Through her career as an international banker, Lore splits her time between two countries and two families—until the truth is revealed and one husband is arrested for murdering the other. In 2017, while trawling the internet for the latest, most sensational news reports, struggling true-crime writer Cassie Bowman encounters an article detailing that tragic final act. Cassie is immediately enticed by what is not explored: Why would a woman—a mother—risk everything for a secret double marriage? Cassie sees an opportunity—she'll track Lore down and capture the full picture, the choices, the deceptions that led to disaster. But the more time she spends with Lore, the more Cassie questions the facts surrounding the murder itself. Soon, her determination to uncover the truth could threaten to derail Lore's now quiet life—and expose the many secrets both women are hiding.",
          shortDescription:
            'In 1985, Dolores “Lore” Rivera marries Andres Russo in Mexico City, even though she is already married to Fabian Rivera in Laredo, Texas, and they share twin sons. Through her career as an international banker, Lore splits her time between two countries and two families—until the truth is revealed and one husband is arrested for murdering the other.',
          publishingYear: 2022,
          price: '40',
          publicationAddress: 'William Morrow & Company ',
          subject: ['Mystery', 'Thriller'],
        },
      ],
    });
  });
  afterAll(() => {
    jest.resetAllMocks;
  });
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    expect(getByText(/Xan Book Catalogue/gi)).toBeTruthy();
  });
});
