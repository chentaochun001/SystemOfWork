import { observable, computed } from 'mobx'
import TodoModel from '../models/TodoModel';
class TodoStore {
    @observable filter = '';
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
    @computed get finishedCount() {
        return this.todos.length - this.unfinishedTodoCount
    }
    @action addTodo(title, priority) {
        let item = new TodoModel(
            this, title, priority
        );
        this.todos.push(item);
    }
}
export default TodoStore;