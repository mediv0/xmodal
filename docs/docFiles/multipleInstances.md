in scenarios like having multiple components in the same page and two or more of them using xmodal for showing something as modal, because those components are in the same route, in the end we will have multiple xmodal components in same route

the problem with having multiple xmodal in a route is that it does not use an ID to distinguish between those xmodal instances. so in a simple way when you call one of them, all of xmodal instances in the same page will launch and you will have multiple modals opening at the same time. not cool !

to fix that problem you can do something like this:

```html
<template>
    <div id="#app">
        <button @click="isModalOpen1 = !isModalOpen1">open</button>
        <button @click="open">open second instance</button>
        <!-- one of our modals use v-model -->
        <xmodal v-model="modal1" :params="options1" />

        <!-- dont not add v-model or params to second xmodal instance. because you are going to use open method so they are useless anyway -->
        <!-- but you must give it a name -->
        <xmodal name="second" />
    </div>
</template>
```

```javascript
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
            },
            options2: {
                component: import("./modal2.vue"),
                backgroundColor: "#000000",
                opacity: "0.7",
                animation: "scaleIn",
            }
        };
    },
    methods: {
        open() {
            // pass option 2 and a name to the open method
            this.$xmodal.open(this.options2, "modal2");
        }
    },
};
```


## name parameter
you must pass a name to the open method if you want to prevent the default behavior of xmodal

## notes
- if you are using v-model for xmodal you always have to pass params to that instance
- if you want to use `this.$xmodal.open()` instead of v-model, you don't have to pass params or v-model options to it, you can pass it on the fly.