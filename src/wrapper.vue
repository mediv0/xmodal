<template>
    <transition name="fade" v-on:after-leave="modalLeft">
        <div v-if="setIsModalOpen" class="xmodal-wrapper">
            <xmodalbase
                :component="modalParams.component"
                :backgroundColor="modalParams.backgroundColor"
                :opacity="modalParams.opacity"
                :hasTimer="modalParams.hasTimer"
                :isDisable="modalParams.isDisable"
                :animation="modalParams.animation"
                :props="modalParams.props"
                @modalMounted="modalMounted"
            >
            </xmodalbase>
        </div>
    </transition>
</template>

<script>
import { events } from "./events";
import xmodalbase from "./xmodal.vue";
export default {
    props: {
        value: {
            default: null
        },
        params: {
            type: Object,
            default: () => {}
        },
        name: {
            type: String,
            default: undefined
        }
    },
    components: {
        xmodalbase
    },

    data() {
        return {
            isModalOpen: false,
            // this will send to xmodal component
            modalParams: {},
            // use this Object as cache for default param options
            cached: {},
            isBind: undefined,
            modalCloseCallBackFromEvent: null
        };
    },
    computed: {
        setIsModalOpen() {
            return this.isModalOpen;
        }
    },
    methods: {
        showModal() {
            if (this.isBinded()) {
                this.isBind = false;
                this.$emit("input", !this.value);
            }
            this.isModalOpen = false;
        },
        modalMounted() {
            // refactor later
            if (this.modalParams.mounted) {
                this.modalParams.mounted();
            }
        },
        modalLeft() {
            // refactor later
            if (this.modalParams.destroyed) {
                this.modalParams.destroyed();
            }
            if (this.modalCloseCallBackFromEvent) {
                this.modalCloseCallBackFromEvent();
            }
        },
        async isComponentImported(params = this.params) {
            if (typeof params.component.then == "function") {
                await params.component.then(value => {
                    params.component = value.default;
                });
            }
        },
        isBinded() {
            if (this.isBind === undefined || this.isBind === false) {
                return false;
            } else {
                return true;
            }
        }
    },
    watch: {
        value(newVal) {
            if (newVal) {
                this.isBind = true;
                this.modalParams = Object.assign({}, this.cached);
                this.isModalOpen = true;
            }
        }
    },
    beforeMount() {
        // INITILIZE PROPS
        if (this.value !== null) {
            if (this.params.component) {
                // check if user used import() keyword
                this.isComponentImported().then(() => {
                    this.modalParams = this.params;
                    this.cached = Object.assign({}, this.params);
                });
            } else {
                throw new Error(
                    `Please provide a component. check component's path and try again, 404 component not found`
                );
            }
        } else {
            this.cached = Object.assign({}, {});
        }

        // listen to global events
        events.$on("close", modalCallBack => {
            this.showModal();
            this.modalCloseCallBackFromEvent = modalCallBack;
        });
        events.$on("open", (params, name) => {
            console.log("hello", this.name, name);
            if (this.name === name) {
                this.isBind = false;
                this.isComponentImported(params).then(() => {
                    this.modalParams = Object.assign(
                        {},
                        this.cached,
                        params,
                        name
                    );
                    this.isModalOpen = true;
                });
            }
        });
    }
};
</script>

<style scoped>
.xmodal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 997;
    overflow: hidden;
}

/* base fade style */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
    opacity: 1;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
