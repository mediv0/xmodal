import component from "./wrapper.vue";
import { events } from "./events";

function install(Vue) {
    if (this.installed) {
        return;
    }
    this.installed = true;

    Vue.prototype.$xmodal = {
        close() {
            events.$emit("close");
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
