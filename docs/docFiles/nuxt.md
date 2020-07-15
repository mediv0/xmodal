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