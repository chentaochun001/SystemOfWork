import { observable } from 'mobx';
class TodoModel {
    store;
    id = Math.random();
    @observable title = "";
    @observable finished = false;
    @observable destoryed = false;
    @observable isEdition = false;
    @observable type = 'Shopping';
    @observable priority = false

    constructor (store, title, priority, type) {
        this.store = store;
        this.title = title;
        this.finished = finished;
        this.destoryed = false;
        this.isEdition = false;
        this.type = type;
        this.priority = priority;
    }
    setTitle(title) {
        this.title = title;
    }
    setType(type) {
        this.type = type;
    }
    destory() {
        this.destory = true;
        this.store.todos.remove(this);
    }
    toggleCheck() {
        this.finished = !this.finished;
    }
    handlePriority() {
        this.priority = !this.priority;
    }
}

export default TodoModel;