import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { count } from 'console';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders initial count correctly', () => {
  render(<App />);
  const countParagraph = screen.getByText(/count: 0/i);
  expect(countParagraph).toBeInTheDocument();
});

test('renders count correctly', () => {
  render(<App />);
  const countParagraph = screen.getByText(/count: 5/i);
  expect(countParagraph).toBeInTheDocument();
})