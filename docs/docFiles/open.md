## this.$xmodal.open(params, name): void
with this method, you can open multiple modals!
<br>
The open function can take params as its argument.
<br>
**By default, open() is inheriting from default options. you can overwrite it by passing options that you want to change**

<br>
<br>

**💡 For example we want to open new modal on click with default options**

```javascript
<template>
    <div id="app">
        <button @click="Open">Open modal with global function</button>
        <xmodal :params="options" />
    </div>
</template>

		
<script>
export default {
    name: "App",
    data() {
        return {
            // default options
            options: {
                component: require("./components/no.vue").default,
                backgroundColor: "#000000",
                opacity: "0.7",
                animation: "scaleLeft",
                props: {
                    name: "Mahdi Fakhr",
                    text: "Onii-chan help me"
                },
                hasTimer: "10s"
            }
        };
    },
    methods: {
        Open() {
            this.$xmodal.open({
				// change default component and show new one
                component: require("./components/newComponent.vue").default,
            })
        }
    }
};
</script>
```
you literally can open new modals by this.modal.open() with brand new options, or customize it based on default options

**🔴 Do not forget that this.$xmodal.open() accepts object type as its params. and a name**

for learn more how to use the name parameter check here: ## [how to use name](docFiles/multipleInstances.md);