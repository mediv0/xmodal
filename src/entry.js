import component from "./wrapper.vue";
import { events } from "./events";
import store from "./store";

function install(Vue) {
    if (this.installed) {
        return;
    }
    this.installed = true;

    Vue.prototype.$xmodal = {
        close(closeCallback) {
            events.$emit("close", closeCallback);
        },

        /**
         *
         * @param {(string|Object)} params
         *
         * @example
         *
         * this.$xmodals.open({path: "./your/component/path", props: {prop1: "something"} })
         */
        open(params) {
            events.$emit("open", params);
        },

        openFromStore(name) {
            if (store.has(name)) {
                this.open(store.get(name));
            } else {
                throw new Error(`Modal with the name of ${name} not found`);
            }
        },

        save(name, options) {
            return store.save(name, options);
        },

        get(name) {
            return store.get(name.toString());
        },

        delete(name) {
            return store.delete(name);
        },

        entries() {
            return store.entries();
        }
    };

    Vue.component("xmodal", component);
}

const plugin = {
    install
};

// To auto-install when vue is found
let GlobalVue = null;
if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
component.install = install;

// Export component by default
export default component;
