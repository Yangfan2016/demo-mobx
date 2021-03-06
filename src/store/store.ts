import { makeAutoObservable, observable, when, } from 'mobx';

class Store {
    // 被观察者，你可以理解成Vuex中的State，也就是说，声明一些想要观察的状态，变量。
    // 被观察者可以是：JS基本数据类型、引用类型、普通对象、类实例、数组和映射
    public num: number = 0;
    public num2: number = 0;
    public map: Map<string, object> = new Map();
    public list: string[] = ["a", "b"];
    public obj: object = { name: "Mobx" };

    constructor() {
        makeAutoObservable(this)
        when(() => this.num === 2, () => this.num2 = 100)
    }

    public get retunum() {
        return `${this.num}~~~~~~~~`
    }

    public get addNum() {
        return this.num + 10;
    }

    public add() {
        this.num++;
    }

}
export default Store
