import { observable, computed } from 'mobx'
// 装饰器 decorator  observable 被订阅
class Store {
    @observable name = 'Bartek';
    @computed get decorated() {
        return `${this.name} is awesome`
    }
}
export default Store;