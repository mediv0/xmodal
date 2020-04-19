<template>
    <div>
        <button @click="isModalOpen = !isModalOpen">open</button>
        <xmodal v-model="isModalOpen" :params="options" />
    </div>
</template>

<script>
import Vue from "vue";
import xmodal from "../src/entry";

Vue.use(xmodal);

export default {
    data() {
        return {
            isModalOpen: false,
            options: {
                component: require("./modal.vue").default,
                backgroundColor: "#000000",
                opacity: "0.7",
                mounted: this.modalOpen,
                destroyed: this.modalClose
            }
        };
    },
    methods: {
        modalOpen() {
            console.log("modal is mounted");
        },
        modalClose() {
            console.log("modals closed");
        }
    }
};
</script>
