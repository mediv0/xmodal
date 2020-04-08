<template>
    <div class="xmodal">
        <div
            class="xmodal__backdrop"
            :style="[{ backgroundColor: backgroundColor, opacity: opacity }]"
            @click="closeModal"
        ></div>
        <transition :name="animation">
            <component
                v-if="isComponentAnimationRdy"
                @before-leave="componentAnimationState(false)"
                @enter-active="componentAnimationState(true)"
                :is="componentRef"
                class="modalComponents"
                ref="componentWrapper"
                v-bind="componentProps"
            ></component>
        </transition>
        <div
            class="modal-progress"
            ref="modalProgress"
            v-if="!isDisable"
            :class="{ progressAnimation: hasTimer }"
            :style="{
                'animation-duration': getProgressBarDuration,
                backgroundColor: getProgressBarColor
            }"
        ></div>
    </div>
</template>

<script>
export default {
    props: {
        //GLOBAL
        component: {
            default: null
        },

        // MODAL OPTIONS
        backgroundColor: {
            type: String,
            default: "#000000"
        },
        opacity: {
            type: String,
            default: "0.7"
        },
        hasTimer: {
            default: false
        },
        animation: {
            type: String,
            default: "fade"
        },
        isDisable: {
            type: Boolean,
            default: false
        },

        // COMPONENT OPTIONS
        props: {
            type: Object,
            default: null
        }
    },

    data() {
        return {
            hasTimerInterval: false,

            // progress bar styles
            duration: 5,
            progressBarColor: "#ffffff",

            // control loaded component animation timing with this variable
            isComponentAnimationRdy: false,
            componentRef: null,
            componentProps: null
        };
    },

    computed: {
        getIsModalOpen() {
            return this.isModalOpen;
        },
        componentLoader() {
            return this.componentRef;
        },

        // timer animation
        getProgressBarDuration() {
            if (this.hasTimer) {
                if (typeof this.duration === "string") {
                    this.normalizeDuration();
                }
                this.runHasTimer();
                return this.duration + "s";
            }
            return null;
        },
        getProgressBarColor() {
            return this.progressBarColor;
        }
    },

    methods: {
        closeModal() {
            if (!this.isDisable) {
                this.componentAnimationState(false).then(() => {
                    this.$xmodal.close();
                });
            } else {
                this.$nextTick(() => {
                    if (!this.wrapper) {
                        this.wrapper = this.$refs.componentWrapper.$el;
                    }
                    this.disableAlertAnimation();
                });
            }
        },
        onEscKeyUp(event) {
            if (event.which === 27) {
                this.closeModal();
            }
        },
        resetHasTimerInterval() {
            clearTimeout(this.hasTimerInterval);
            this.hasTimerInterval = false;
        },
        disableAlertAnimation() {
            this.wrapper.style.transform = "scale(1.03)";
            setTimeout(() => {
                this.wrapper.style.transform = "scale(1)";
            }, 25);
        },
        componentAnimationState(state = false) {
            return new Promise(resolve => {
                this.$nextTick(() => {
                    state
                        ? (this.isComponentAnimationRdy = true)
                        : (this.isComponentAnimationRdy = false);
                    resolve();
                });
            });
        },
        normalizeDuration() {
            let durationTmp = Object.assign([], this.duration);
            for (let inc = 0; inc < durationTmp.length; inc++) {
                if (isNaN(durationTmp[inc])) {
                    durationTmp.splice(inc, 1);
                }
            }
            this.duration = durationTmp.join("");
        },
        runHasTimer() {
            this.hasTimerInterval = setTimeout(() => {
                this.closeModal();
            }, this.duration * 1000);
        }
    },

    beforeMount() {
        // INITILIZE DATA
        window.addEventListener("keyup", this.onEscKeyUp);
        this.componentRef = this.component;
        this.componentProps = Object.assign({}, this.props);

        // render mounted component in next thick
        this.componentAnimationState(true);

        // getTimerValues
        if (this.hasTimer && !this.isDisable) {
            if (
                typeof this.hasTimer === "string" ||
                typeof this.hasTimer === "number"
            ) {
                this.duration = this.hasTimer;
            } else if (typeof this.hasTimer === "object") {
                this.duration = this.hasTimer["duration"];
                this.progressBarColor = this.hasTimer["color"];
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener("keyup", this.onEscKeyUp);

        // make sure we clear hasTimer before destroy the modal
        this.resetHasTimerInterval();
        this.hasTimerInterval = null;
    }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition-property: all;
    transition-duration: 0.32s;
    transition-timing-function: cubic-bezier(0.63, 0.14, 0.09, 1.02);
    transition-delay: 0s;
    opacity: 1;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.scaleBottom-enter-active,
.scaleBottom-leave-active {
    transition-property: all;
    transition-duration: 0.32s;
    transition-timing-function: cubic-bezier(0.63, 0.14, 0.09, 1.02);
    transition-delay: 0s;
    opacity: 1;
    transform: scale(1);
}
.scaleBottom-enter,
.scaleBottom-leave-to {
    transform: scale(0);
    opacity: 0;
    transform-origin: bottom center;
}
.scaleIn-enter-active,
.scaleIn-leave-active {
    transition-property: all;
    transition-duration: 0.32s;
    transition-timing-function: cubic-bezier(0.63, 0.14, 0.09, 1.02);
    transition-delay: 0s;
    transform: scale(1);
}
.scaleIn-enter,
.scaleIn-leave-to {
    opacity: 0;
    transform: scale(1.23);
}
.scaleLeft-enter-active,
.scaleLeft-leave-active {
    transition-property: all;
    transition-duration: 0.32s;
    transition-timing-function: cubic-bezier(0.63, 0.14, 0.09, 1.02);
    transition-delay: 0s;
    opacity: 1;
    transform: scale(1);
}
.scaleLeft-enter,
.scaleLeft-leave-to {
    transform: scale(0);
    opacity: 0;
    transform-origin: left center;
}
.scaleOut-enter-active,
.scaleOut-leave-active {
    transition-property: all;
    transition-duration: 0.32s;
    transition-timing-function: cubic-bezier(0.63, 0.14, 0.09, 1.02);
    transition-delay: 0s;
    transform: scale(1);
}
.scaleOut-enter,
.scaleOut-leave-to {
    opacity: 0;
    transform: scale(0.5);
}
.scaleRight-enter-active,
.scaleRight-leave-active {
    transition-property: all;
    transition-duration: 0.32s;
    transition-timing-function: cubic-bezier(0.63, 0.14, 0.09, 1.02);
    transition-delay: 0s;
    opacity: 1;
    transform: scale(1);
}
.scaleRight-enter,
.scaleRight-leave-to {
    transform: scale(0);
    opacity: 0;
    transform-origin: right center;
}
.scaleTop-enter-active,
.scaleTop-leave-active {
    transition-property: all;
    transition-duration: 0.32s;
    transition-timing-function: cubic-bezier(0.63, 0.14, 0.09, 1.02);
    transition-delay: 0s;
    opacity: 1;
    transform: scale(1);
}
.scaleTop-enter,
.scaleTop-leave-to {
    transform: scale(0);
    opacity: 0;
    transform-origin: top center;
}
.slideBottom-enter-active,
.slideBottom-leave-active {
    transition-property: all;
    transition-duration: 0.32s;
    transition-timing-function: cubic-bezier(0.63, 0.14, 0.09, 1.02);
    transition-delay: 0s;
    opacity: 1;
}
.slideBottom-enter,
.slideBottom-leave-to {
    transform: translateY(70px);
    opacity: 0;
}
.slideLeft-enter-active,
.slideLeft-leave-active {
    transition-property: all;
    transition-duration: 0.32s;
    transition-timing-function: cubic-bezier(0.63, 0.14, 0.09, 1.02);
    transition-delay: 0s;
    opacity: 1;
}
.slideLeft-enter,
.slideLeft-leave-to {
    transform: translateX(-70px);
    opacity: 0;
}
.slideRight-enter-active,
.slideRight-leave-active {
    transition-property: all;
    transition-duration: 0.32s;
    transition-timing-function: cubic-bezier(0.63, 0.14, 0.09, 1.02);
    transition-delay: 0s;
    opacity: 1;
}
.slideRight-enter,
.slideRight-leave-to {
    transform: translateX(70px);
    opacity: 0;
}
.slideTop-enter-active,
.slideTop-leave-active {
    transition-property: all;
    transition-duration: 0.32s;
    transition-timing-function: cubic-bezier(0.63, 0.14, 0.09, 1.02);
    transition-delay: 0s;
    opacity: 1;
}
.slideTop-enter,
.slideTop-leave-to {
    transform: translateY(-70px);
    opacity: 0;
}
.xmodal {
    z-index: 997;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.xmodal__backdrop {
    z-index: 998;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.xmodal .modalComponents {
    position: relative;
    z-index: 999;
}
.modal-progress {
    position: absolute;
    z-index: 999;
    width: 0%;
    height: 2px;
    top: 0;
    left: 0;
    transition: all 0.4s ease;
}
.progressAnimation {
    animation-name: progressbar;
    animation-timing-function: linear;
    animation-fill-mode: backwards;
}
@keyframes progressbar {
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
}
</style>
