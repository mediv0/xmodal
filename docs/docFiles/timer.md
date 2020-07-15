### 📝 Timer (hasTimer option)

It will set a timer based on seconds for your modal.
<br>
hasTimer comes with an indicator on top of the page, default color is white.
<br>
**🟢 hasTimer can be a number, string or object. If you want to change indicator color you can pass an object for hasTimer.**


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