in your html file:

```html
<template>
	<div id="#app">
         <!-- your code here -->
         <button @click="isOpen = !isOpen">
		<xmodal v-model="isOpen" :params="options" />
	</div>
</template>
```

xmodal can have 2 props as input ( we will read about this later).
- 1- params
- 2- v-model

```html
<xmodal v-model="isOpen" :params="options" />
```


in your js file:

```javascript

export default {
    data() {
        return {
            isOpen: false,
            options: {
                component: import("./modal.vue"), // a ref to your modal

                // other options
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





final file:
<br>
```javascript

<template>
	<div id="#app">
         <!-- your code here -->
         <button @click="isOpen = !isOpen">
		<xmodal v-model="isOpen" :params="options" />
	</div>
</template>

export default {
    data() {
        return {
            isOpen: false,
            options: {
                component: import("./modal.vue"), // a ref to your modal

                // other options
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
congratulations. you created your first modal

<br>
<br>

**How to use this in your project 💡**
<br>
You have to use this modal in routes and not inside of other components. Also, you only need one instance on each route.
<br>
✅ For example, you can do something like this:
```html
<template>
	<div id="#app">
		 <!-- your code here -->
		<xmodal />
	</div>
</template>
```
❌ This way of using xmodal is wrong and not supported:
```html
<template>
	<div id="#app">
         <!-- your code here -->
         
         <!-- multiple xmodal on same page is not supported! -->
		<xmodal v-model="modal1" />
		<xmodal v-model="modal2"/>
	</div>
</template>
```