## this.$xmodal.get(name) : Object

The get() method returns a specified modal from the Collection.

<br>

example:

```javascript
createModal() {
    this.$xmodal.get("Login-modal")

    // output:
    /*
         {
            component: import("./modal.vue"),
            backgroundColor: "#000000",
            opacity: "0.7",
            mounted: this.modalOpen,
            destroyed: this.modalClose,
            animation: "scaleIn"
        }
    */
}
```
