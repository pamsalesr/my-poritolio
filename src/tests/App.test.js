import React from 'react'
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Full app rendering', () => {
  it('should render the App component', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Welcome/);
    expect(home).toBeInTheDocument();
  });

  it('should render the About component', () => {
    const { getByText, getByTestId, history } = renderWithRouter(<App />);
    const linkToAbout = getByTestId('about-link');
    expect(linkToAbout).toBeInTheDocument();
    userEvent.click(linkToAbout);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
    const about = getByText(/Pamela/i);
    expect(about).toBeInTheDocument();
  });

  it('should render the Projects component', () => {
    const { getByText, getByTestId, history } = renderWithRouter(<App />);
    const linkToProjects = getByTestId('projects-link');
    expect(linkToProjects).toBeInTheDocument();
    userEvent.click(linkToProjects);
    const { pathname } = history.location;
    expect(pathname).toBe('/projects');
    const Projects = getByText(/Online Store/i);
    expect(Projects).toBeInTheDocument();
  });

  it('should render the Contact component', () => {
    const { getByText, getByTestId, history } = renderWithRouter(<App />);
    const linkToContact = getByTestId('contact-link');
    expect(linkToContact).toBeInTheDocument();
    userEvent.click(linkToContact);
    const { pathname } = history.location;
    expect(pathname).toBe('/contact');
    const Contact = getByText(/GitHub/i);
    expect(Contact).toBeInTheDocument();
  });
});
