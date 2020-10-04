import { action, computed, makeObservable, observable, runInAction } from "mobx";
import { toast } from 'react-toastify';
import { loginCommand } from '../api/IdentityClient';
import { LoginReply } from '../generated/Identity/identity_pb';
import { RootStore } from './rootStore';

export default class UserStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            user: observable,
            isLoggedIn: computed,
            login: action,
            logout: action
        })

    }
    user: LoginReply | null = null;

    get isLoggedIn() {
        return !!this.user
    }

    logout = () => { this.rootStore.commonStore.setToken(null); this.user = null };
    login = async (email: string, password: string) => {
        try {
            var response = await loginCommand(email, password);
            runInAction(() => {
                this.user = response;
            });
            this.rootStore.commonStore.setToken(response.getToken());
        } catch (error) {
            toast.error("Cannot login");
            console.log(error)
        }
    }
}