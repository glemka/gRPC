import { observable, action, reaction, makeObservable } from "mobx";
import { RootStore } from './rootStore';

export default class CommonStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      jwtToken: observable,
      setToken: action
    })

  }

  jwtToken: string | null = null;

  setToken = (token: string | null) => {
    this.jwtToken = token
    console.log(token);
  }
}