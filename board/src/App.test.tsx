import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Create a board', () => {
  render(<App />);

  const boardNameElement = screen.getByPlaceholderText(/board name/i) as HTMLInputElement;
  boardNameElement.value = 'my board'; // 타입 해결~
  expect(boardNameElement).toHaveValue('my board');

  const buttonElement = screen.getByText(/add board/i);
  buttonElement.click();

  test('boardListElement가 있다', ()=>{
    const firstBoardElement = screen.getByText(/board-1/i);
    expect(firstBoardElement).toBeInTheDocument();
  });

  test('boardListElement', ()=>{
    
  })
});

test('보드를 클릭하면 상세 페이지로 넘어간다', ()=>{
  
})