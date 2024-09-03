import { render, screen, fireEvent } from '@testing-library/react';
import RenderLandingPage from '../components/pages/Landing/RenderLandingPage';
import { Router } from 'react-router-dom';
import React from 'react';
import { createMemoryHistory } from 'history';
describe('graphs section tests', () => {
  // each of these three following tests test if the graph image and Graph label exist for its respective label
  test('grant rates by office exists', () => {
    render(<RenderLandingPage />);
    let graphImg = screen.queryByAltText('grant rates by office img');
    expect(graphImg).toBeInTheDocument();

    graphImg = graphImg.nextElementSibling;
    expect(graphImg).toHaveTextContent('Search Grant Rates By Office');
  });

  test('Grant Rates By Nationality exists', () => {
    render(<RenderLandingPage />);
    let graphImg = screen.getByAltText('Grant Rates By Nationality Img');
    expect(graphImg).toBeInTheDocument();

    graphImg = graphImg.nextElementSibling;
    expect(graphImg).toHaveTextContent('Search Grant Rates By Nationality');
  });

  test('Grant Rates Over Time exists', () => {
    render(<RenderLandingPage />);
    let graphImg = screen.getByAltText('Grant Rates Over Time Img');
    expect(graphImg).toBeInTheDocument();

    graphImg = graphImg.nextElementSibling;
    expect(graphImg).toHaveTextContent('Search Grant Rates Over Time');
  });

  // view the data button exists and functions
  test('view the data button exists', () => {
    render(<RenderLandingPage />);
    let button = screen.getByText('View the Data');
    expect(button).toBeInTheDocument();
  });

  test('view the data button takes user to /graphs', () => {
    let history = createMemoryHistory();
    render(
      <Router history={history}>
        <RenderLandingPage />
      </Router>
    );
    let button = screen.getByText('View the Data');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(history.location.pathname).toBe('/graphs');
  });

  // download the data button exists and functions
  test('Download the data button exists', () => {
    render(<RenderLandingPage />);
    let button = screen.getByText('Download the Data');
    expect(button).toBeInTheDocument();
  });

  test('download the data button starts a download', () => {
    render(<RenderLandingPage />);
    global.URL.createObjectURL = jest.fn();

    const button = screen.getByText('Download the Data');

    fireEvent.click(button);

    expect(URL.createObjectURL).toHaveBeenCalledTimes(1);
  });
});

describe('bottom section tests', () => {
  beforeEach(() => {
    render(<RenderLandingPage />);
  });

  test('main H1 title appears', () => {
    const title = screen.getByText('Systemic Disparity Insights');

    expect(title).toBeInTheDocument();
  });

  // tests for all three statistics
  test('statistic 1 appears', () => {
    const title = screen.getByText('36%');

    expect(title).toBeInTheDocument();

    const bodyText = screen.getByText(
      `By the end of the Trump administration, the average asylum office grant rate had fallen 36 percent from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020`
    );

    expect(bodyText).toBeInTheDocument();
  });

  test('statistic 2 appears', () => {
    const title = screen.getByText('5%');

    expect(title).toBeInTheDocument();

    const bodyText = screen.getByText(
      'The New York asylum office grant rate dropped to 5 percent in fiscal year 2020'
    );

    expect(bodyText).toBeInTheDocument();
  });
  test('statistic 3 appears', () => {
    const title = screen.getByText('6x Lower');

    expect(title).toBeInTheDocument();

    const bodyText = screen.getByText(
      "Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was six times lower than the San Francisco asylum office"
    );

    expect(bodyText).toBeInTheDocument();
  });

  // tests for read more and scroll to top buttons
  test('read more button appears', () => {
    const button = screen.getByText('Read More');

    expect(button).toBeInTheDocument();
  });

  test('back to top button appears', () => {
    const button = screen.getByText(/back to top/i);

    expect(button).toBeInTheDocument();
  });

  test('back to top button calls window.scroll', () => {
    window.scrollTo = jest.fn();

    const button = screen.getByText('Back To Top ^');

    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledTimes(1);
  });
});
