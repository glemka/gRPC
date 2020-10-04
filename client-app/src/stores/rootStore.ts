import { createContext } from "react";
import { configure } from "mobx";
import CommonStore from "./commonStore";
import UserStore from './userStore';
import ProductStore from './productStore';

configure({ enforceActions: "always" });

export class RootStore {
    commonStore: CommonStore
    userStore: UserStore
    productStore: ProductStore
    constructor() {
        this.commonStore = new CommonStore(this);
        this.userStore = new UserStore(this);
        this.productStore = new ProductStore(this);
    }
}
export const RootStoreContext = createContext(new RootStore());