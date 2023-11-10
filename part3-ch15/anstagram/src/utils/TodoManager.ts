// TodoManager.ts

class TodoManager {
  private todos: string[];

  constructor() {
    this.todos = [];
  }

  addTodo(todo: string): void {
    this.todos.push(todo);
  }

  getTodos(): string[] {
    return this.todos;
  }

  // 다른 필요한 메서드들...
}

export default TodoManager;
