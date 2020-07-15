## this.$xmodal.entries(name) : Array

The entries() method returns a new Iterator object that contains the [key, value] pairs for each modal in the Collection

<br>

example:

```javascript
getAllModals() {
    let modals = this.$xmodal.entries();
    console.log(modals);

    // output:
    /*
        0: (2) ["Login-modal", {…}]
        1: (2) ["contact-modal", {…}]
        2: (2) ["email-modal", {…}]
    */
}
```
