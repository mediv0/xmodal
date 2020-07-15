## this.$xmodal.close(callback) : void
It will close all open modals in the current view(route) at once.

<br>
example: 

```javascript
<template>
    <div id="app">
        <img alt="Modal logo" src="./assets/Modal.png" />
        <button @click="Close">Close modal with global fnction</button>
		<h1>i'm about to end this man's whole career !</h1>
    </div>
</template
		
<script>
export default {
    name: "close",
    methods: {
        Close() {
            // using without callback
            this.$xmodal.close();
        }
    }
};
</script>
```


also there is **callback** available for this method.
<br>
<br>
<br>

read more about these callbacks:
- [Mounted Callback](docFiles/mounted)
- [Destroyed Callback](docFiles/destroyed)