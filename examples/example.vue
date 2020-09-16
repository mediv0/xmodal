<template>
    <div>
        <button @click="isModalOpen1 = !isModalOpen1">open</button>
        <button @click="open">
            open with global functions
        </button>
        <xmodal v-model="isModalOpen1" :params="options1" />
        <xmodal name="mahdi" />
    </div>
</template>

<script>
import Vue from "vue";
import xmodal from "../src/entry";

Vue.use(xmodal);

export default {
    data() {
        return {
            isModalOpen1: false,
            isModalOpen2: false,
            options1: {
                component: import("./modal.vue"),
                backgroundColor: "#000000",
                opacity: "0.7",
                animation: "scaleIn",
                key: 3
            },
            options2: {
                component: import("./modal2.vue"),
                backgroundColor: "#000000",
                opacity: "0.7",
                animation: "scaleIn",
                key: 5
            }
        };
    },
    methods: {
        modalOpen() {
            console.log("modal is mounted");
        },
        modalClose() {
            console.log("modals closed");
        },
        open() {
            this.$xmodal.open(this.options2, "mahdi");
        }
    },

    mounted() {
        let modals = this.$xmodal.entries();
        console.log(modals);
    }
};
</script>
