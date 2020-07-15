### 📝 component

You need to pass a reference of your component to modal. In that way, modal can render your component on the page.


## import components using require()
```javascript
params: {
	// you have to require it like this !
	component: require("./components/no.vue").default,
}
```
**🔴 Don't forget to add .default to the end of your require function. If you don't put .default at the end of require, xmodal can't render your component and show it on the page!!**

<br>

## import components using import()

Also, you can use the import() method to import your components. With this method, you don't need .default keyword at the end of the component property.
```javascript
params: {
	// you have to import it like this !
	component: import("./components/no.vue"),
}
```