## mounted

this callback will run after the modal is fully mounted

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
                mounted: this.modalMounted,
            }
        };
    },
    methods: {
        modalMounted() {
            console.log("modal is mounted at this point!");
        },
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
                mounted: this.overwrite_modalMounted,
            })
        },
    }
};
```
