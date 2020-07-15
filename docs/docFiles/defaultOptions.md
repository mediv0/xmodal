when we are using xmodal, we always have to initialize default options for it.
<br>
these options will be shared between all other modals on the same page unless your overwrite them
<br>
**in other word: These params will act as a parent for all other modals that you going to create in that specific page.**
<br>
<br>
<br>

#### You always have to provide a component for modal. otherwise, it will throw an error

```javascript
export default {
    data() {
        return {
            isOpen: false,
            options: {

                // component is required
                component: import("./modal.vue"), // a ref to your modal

                // other options are not necessary
                backgroundColor: "#000000",
                opacity: "0.7",
                mounted: this.modalOpen,
                destroyed: this.modalClose,
                animation: "scaleIn"
            }
        };
    }
};

```

**⚠️ You can open different modals with just one instance, so you don't need to create multiple instances for multiple modals!**
