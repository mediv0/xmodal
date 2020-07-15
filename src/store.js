class Store {
    constructor() {
        if (Store.instance == null) {
            this.modals = new Map();
        }
        return Store.instance;
    }

    // save new modal in the map
    save(name, options) {
        let saved = this.modals.set(name, options);
        return saved ? true : false;
    }

    // get all modals stored in the map
    entries() {
        return [...this.modals.entries()];
    }

    // get single modal options
    get(name) {
        if (this.modals.has(name)) {
            return this.modals.get(name);
        } else {
            throw new Error(
                "There is no modal in the store with provided name"
            );
        }
    }

    // delete modal from collection
    delete(name) {
        return this.modals.delete(name);
    }

    // check if modal is in the map
    has(name) {
        return this.modals.has(name);
    }
}

let store = new Store();
export default store;
