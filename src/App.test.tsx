import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

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

test('renders arbitrary count correctly', () => {
  const setStateMock = jest.fn();
  const useStateMock: any = (useState: any) => [5, setStateMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);
  render(<App />);
  const countParagraph = screen.getByText(/count: 5/i);
  expect(countParagraph).toBeInTheDocument();
});

test('check click event', () => {
  const setStateMock = jest.fn();
  const useStateMock: any = (useState: any) => [useState, setStateMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);
  render(<App />);
  const button = screen.getByTestId("btn");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  expect(setStateMock).toHaveBeenCalled();
  expect(setStateMock).toHaveBeenCalledTimes(1);
});