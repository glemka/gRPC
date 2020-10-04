import { RootStore } from './rootStore';

import { ListRequest, ListReply } from '../generated/Product/product_pb';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { listCommand } from '../api/ProductClient';
import { toast } from 'react-toastify';

export default class ProductStore {
    rootStore: RootStore
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            products: observable,
            loadProducts: action
        })
    }
    products: ListReply | null = null;

    loadProducts = async () => {
        try {
            var prods = await listCommand(this.rootStore.commonStore.jwtToken!);
            runInAction(() => {
                this.products = prods
            })
        }
        catch (error) {
            toast.error("Cannot load products")
            runInAction(()=>{
                this.products = null;
            })
            console.log(error);
        }
    }
}