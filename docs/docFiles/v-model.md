### 📝 v-model

You can bind xmodal to a boolean value and control it. This boolean value can be a vuex getter, a function, etc...
It is an optional property.


example: 
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
            isOpen: false, // -> your binded value
            // ...
        };
    }
};

```