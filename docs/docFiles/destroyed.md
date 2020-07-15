## destroyed

this callback will run after the modal is fully destroyed

<br>

example:

```javascript
export default {
    name: "App",
    data() {
        return {
            // default options
            options: {
                component: require("./components/no.vue").default,

                // callbacks
                destroyed: this.modalDestroyed
            }
        };
    },
    methods: {
        modalDestroyed() {
            console.log("modal is destroyed at this point!");
        }
    }
};
```

<br>

### using with global methods

```javascript
export default {
    methods: {
        Open() {
            this.$xmodal.open({
                component: require("./components/newComponent.vue").default,

                // you can overwrite callbacks like other options !
                destroyed: this.overwrite_modalDestroyed
            })
        },

        Close() {
            this.$xmodal.close(() => {
                // close callback
                console.log("this will run after modal is destroyed");
            })
        }
    }
};
```
