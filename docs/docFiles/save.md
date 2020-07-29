## this.$xmodal.save(name, options) : Boolean

the save() method will add new modal to the collection or update an existing modal. return type is boolean

<br>
example:

```javascript
newModal() {
    this.$xmodal.save("Login-modal", {
        component: import("./login.vue"),
        backgroundColor: "#000000",
        opacity: "0.7",
        animation: "scaleIn"
    });
}
```


<br>

Since the return type is boolean you can use if-else for checks

```javascript
newModal() {
    if(this.$xmodal.save("Login-modal",options)) {
        console.log("modal created!");
    } 
    else {
        throw new Error("Something is wrong");
    }
}
```
