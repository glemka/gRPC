import { createContext } from "react";
import { configure } from "mobx";
import CommonStore from "./commonStore";
import UserStore from './userStore';

configure({ enforceActions: "always" });

export class RootStore {
    commonStore: CommonStore
    userStore: UserStore

    constructor() {
        this.commonStore = new CommonStore(this);
        this.userStore = new UserStore(this);
    }
}
export const RootStoreContext = createContext(new RootStore());