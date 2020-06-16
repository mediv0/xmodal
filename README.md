<p align=center>

![](https://i.imgur.com/WguzBpv.gif)

[![npm version](https://badge.fury.io/js/xmodal-vue.svg)](https://badge.fury.io/js/xmodal-vue)
[![npm](https://img.shields.io/npm/dm/xmodal-vue.svg)](https://www.npmjs.com/package/xmodal-vue)
[![npm](https://img.shields.io/npm/dt/xmodal-vue.svg)](https://www.npmjs.com/package/xmodal-vue)

------------

# 🎉 Xmodal-Vue 
[demo](https://xeniac.ir/github/xmodal "demo")

==================================

## get rid of those ugly 💩 predefined modals
xmodal will let you define custom components and show them as modal. **YOUR APP YOUR RULES!** - too simple and easy

</p>

This little component comes with customization tools that will make your life a little bit easier.


**📗 Installation**
```bash
npm i xmodal-vue
```
or

```bash
yarn add xmodal-vue
```

------------



**📕 How to use**

For using as a plugin:
```javascript
import Vue from "vue";
import xmodal from "xmodal-vue";

// install xmodal
Vue.use(xmodal);
```

In nuxt: 
```javascript
// in plugins folder xmodal.js
import Vue from "vue"
import xmodal from "xmodal-vue";

Vue.use(xmodal);
```

then in your nuxt.config.js
```javascript
plugins: ['~/plugins/xmodal.js' ]
```

**⚠️ Mismatching childNodes vs. VNodes warn**
if you got this error/warn you can add your plugin like this.
```javascript
plugins: [{ src: '~/plugins/xmodal.js', ssr: false} ]
```
or when using xmodal component in your html
```html
<no-ssr>
	<xmodal />
</no-ssr>
```

------------


Create modal: 
```javascript
<xmodal v-model="isModal" :params="your options here" />
```

------------
xmodal can have 2 props as input.
- 1- params
- 2- v-model

### 📝 Params
Params prop is an object that will pass data to the modal. You can see available options for params in the list below.

| option | type  |  default  |  description  |
| ------------ | ------------ | ------------ | ------------ |
|  component  | component  | null  | a reference to your component  | 
|  backgroundColor  | String  | #000000  | control the color of modal backdrop  | 
|  opacity  | String  | 0.7  | control transparency of the modal backdrop  | 
|  hasTimer  | String,Number  |  false  | you can add timer to your modal by this option  | 
|  animation  | String  |  fade  | change animation of modal  | 
|  isDisable  | Boolean  |  false  | disable click events on modal  | 
|  props  | Object  |  null  | by this option, you can send props to the mounted component  | 

**You need to specify a component for each modal instance. All other options are not necessary ⚠️**


### v-model 📝
You can bind xmodal to a boolean value and control it. This boolean value can be a vuex getter, a function, etc...
It is an optional property.




------------
**How to use this in your project 💡**
You have to use this modal in routes and not inside of other components. Also, you only need one instance on each route.
✅ For example, you can do something like this:
```javascript
<template>
	<div id="#app">
		 <!-- your code here -->
		<xmodal />
	</div>
</template>
```
❌ This way of using xmodal is wrong and not supported:
```javascript
<template>
	<div id="#app">
		 <!-- your code here -->
		<xmodal v-model="modal1" />
		<xmodal v-model="modal2"/>
	</div>
</template>
```

** ⚠️ You can open different modals with just one instance, so you don't need to create multiple instances for multiple modals!**


Also, every modal that you creating, needs a default params as options.
These params will act as a parent for all other modals that you going to create in that specific page.


------------

example: 
app.vue
```javascript
<template>
    <div id="app">
		<h1>Toilet Paper</h1>
        <button @click="isModal = !isModal">Open my Modal now !</button>
        <xmodal :params="options" />
    </div>
</template>


<script>
export default {
    name: "App",
    data() {
        return {
            isModal: false,
			
			// basic modal options
            options: {
                component: require("./components/no.vue").default,
                backgroundColor: "#000000",
                opacity: "0.7",
                animation: "scaleLeft",
            }
        };
    }
};
</script>
```
# Params prop options

- ##### component
You need to pass a reference of your component to modal. In that way, modal can render your component on the page.

*import components using require()*
```javascript
params: {
	// you have to require it like this !
	component: require("./components/no.vue").default,
}
```
**🔴 Don't forget to add .default to the end of your require function. If you don't put .default at the end of require, xmodal can't render your component and show it on the page!!**


*import components using import()*
also you can use import() method to import your components. with this method you don't need .default keyword at the end of component property
```javascript
params: {
	// you have to import it like this !
	component: import("./components/no.vue"),
}
```

------------


- ##### backgroundColor and opacity
You can control modal backdrop color and opacity like this:
```javascript
params: {
	opacity: "0.5" // need to be between 0 - 1
	backgroundColor: "#00fffdf"
}
```

------------

##### animations
You can set animations for modal by defining its name.

#### animation list 

|  fade  | 
| ------  |
| scaleIn  |
| scaleOut  |
| scaleBottom  |
| scaleTop  |
| scaleLeft  |
| scaleRight  |
| ------  |
| slideBottom |
| slideTop |
| slideLeft |
| slideRight |

------------

##### hasTimer
It will set a timer based on seconds for your modal.
hasTimer comes with an indicator on top of the page, default color is white.
🟢 hasTimer can be a number, string or object. If you want to change indicator color you can pass an object for hasTimer.

Example: 
```javascript
params: {
	hasTimer: "10s"  // 10 seconds as string
	hasTimer: 10 // 10 seconds as number
	
	// customize indicator
	hasTimer: {
		duration: 10    // you can send String too !
		color: "#00ff4d" // change color of indicator
	}
}
```

------------

##### props
You can send props to the component that you mounted to show as modal.

```javascript
params: {
	props: {
		firstName: "myName",
		lastName: "Senpai"
		....
		// more props
	} 
}
```

You can send props to the component, as many as you want.



------------

##### isDisable
You can disable modal click events to preventing users to close the modal.
🟢 isDisable is useful when you want to close modal based on some condition. ( like: checking if the input is correct or etc...)

Example:
```javascript
params: {
	isDisable: true // prevent user click
}
```
 ** ⚠️ hasTimer will not work with isDisable**
 

------------


 
 # Global Functions
You have access to 2 global methods for controlling the modal instance.
You can call them by calling this.$xmodal

| Open  | Close  |
| :------------ | :------------ |
| this.$xmodal.open(params)  | this.$xmodal.close()  |


------------

##### this.$xmodal.open(params)
This is where you can open multiple modals!
The open function can take params as its argument.

By default, open() is inheriting from default options. you can overwrite it by passing options that you want to change

**💡 For example we want to open new modal on click with default options**

```javascript
<template>
    <div id="app">
        <button @click="Open">Open modal with global fnction</button>
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

**🔴 Do not forget that this.$xmodal.open() accepts object type as params.**

------------

- ##### this.$xmodal.close(callback)
It will close all open modals in the current view(route) at once.

like: 
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


# Callback functions
there are two callbacks that you can use to write code on when modal is mounted or destroyed

| Callback | Description |
| --- | --- |
| mounted | this callback will run after the modal is fully mounted |
| destroyed | this callback will run after the modal is fully destroyed |

### example
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
                destroyed: this.modalDestroyed
            }
        };
    },
    methods: {
        modalMounted() {
            console.log("modal is mounted at this point!");
        },
        modalDestroyed() {
            console.log("modal is destroyed at this point!");
        }
    }
};
```

### using with global methods
```javascript
export default {
    name: "App",
    data() {
        return {
            // default options
            options: {
                component: require("./components/no.vue").default,

                // callbacks
                mounted: this.default_modalMounted,
                destroyed: this.default_modalDestroyed
            }
        };
    },
    methods: {
        Open() {
            this.$xmodal.open({
                component: require("./components/newComponent.vue").default,

                // you can overwrite callbacks like other options !
                mounted: this.overwrite_modalMounted,
                destroyed: this.overwrite_modalDestroyed
            })
        },
        Close() {
            this.$xmodal.close(() => {
                console.log("this will run after modal is destroyed");
            })
        }
    }
};
```

------------


 
 # Modal shortkeys
There are some shortcuts that you can use to modify xmodal.

| Short keys  | Usage
| :------------ | :------------ |
| ESC  | if user press ESC key, modal will be closed |



------------
## Contributing

This project is open to and encourages contributions! Feel free to discuss any bug fixes/features in the [issues](https://github.com/XeniacDev/xmodal/issues). If you wish to work on this project:

1.  [Fork the project](https://github.com/XeniacDev/xmodal/archive/master.zip)
2.  Create your feature branch (`git checkout -b new-feature-branch`)
3.  Commit your changes (`git commit -am 'add new feature'`)
4.  Push to the branch (`git push origin new-feature-branch`)
5.  [Submit a pull request!](https://github.com/XeniacDev/xmodal/pulls)


## contributors 🍰 
[![William Gates](https://avatars1.githubusercontent.com/u/50080886?s=96&v=4")](https://github.com/WilliamGates99 "William Gates")

------------
## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.
