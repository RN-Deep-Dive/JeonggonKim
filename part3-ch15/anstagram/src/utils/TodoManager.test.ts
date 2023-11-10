// TodoManager.test.ts

import TodoManager from './TodoManager';

describe('TodoManager', () => {
  it('should add a todo to the list', () => {
    const todoManager = new TodoManager();
    todoManager.addTodo('Buy groceries');
    todoManager.addTodo('Go to gym');
    expect(todoManager.getTodos()).toStrictEqual(['Buy groceries','Go to gym']);
  });
});
