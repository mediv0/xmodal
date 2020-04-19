<template>
    <transition name="fade" v-on:after-leave="modalLeft">
        <div v-if="setIsModalOpen" class="xmodal-wrapper">
            <xmodalbase
                :key="2"
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
            required: true
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

            isBind: false,

            modalCloseCallBackFromEvent: null
        };
    },
    computed: {
        setIsModalOpen() {
            return this.isModalOpen;
        },
        isComponentWrapperBinded() {
            return this.isBinded;
        }
    },
    methods: {
        showModal() {
            if (this.isBind) {
                this.$emit("input", !this.value);
            }
            this.isModalOpen = false;
        },
        clearProps(data) {
            let truthyProps = Object.assign({}, data);

            for (let prop in this.reducedXdata) {
                if (!this.truthyProps[prop]) {
                    delete this.truthyProps[prop];
                }
            }
            return truthyProps;
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
        this.cached = Object.assign({}, this.params);
        if (this.params.component) {
            this.modalParams = this.clearProps(this.params);
        } else {
            throw new Error(
                `Please provide a component. check component's path and try again`
            );
        }

        // listen to global events
        events.$on("close", modalCallBack => {
            this.showModal();
            this.modalCloseCallBackFromEvent = modalCallBack;
        });
        events.$on("open", params => {
            this.isBind = false;
            if (typeof params === "object") {
                params = this.clearProps(params);
            }
            this.modalParams = Object.assign({}, this.cached, params);

            this.isModalOpen = true;
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
