### 📝 Params
Params prop is an object that will pass data to the modal. You can see available options for params in the list below.

| option | type  |  default  |  description  | 
| ------------ | ------------ | ------------ | ------------ |
|  component *  | component  | null  | a reference to your component (this option is required) | 
|  backgroundColor  | String  | #000000  | control the color of modal backdrop  | 
|  opacity  | String  | 0.7  | control transparency of the modal backdrop  | 
|  hasTimer  | String,Number  |  false  | you can add timer to your modal by this option  | 
|  animation  | String  |  fade  | change animation of modal  | 
|  isDisable  | Boolean  |  false  | disable click events on modal  | 
|  props  | Object  |  null  | by this option, you can send props to the mounted component  | 

**You need to specify a component for each modal instance. All other options are not necessary ⚠️**