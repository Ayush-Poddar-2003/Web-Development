# STYLING

1. INLINE
2. EXTERNAL
3. CSS MODULES
4. STYLED COMPONENETS
5. UI LIBRARIES

---
# INLINE
Regular inline css vs React inline
```html
<div style="color:blue; background-color: red;"> Hii </div>
```
```jsx 
<div style={{color'red', backgroundColor:'green'}}> </div>
```

# EXTERNAL
Make a css file, import it using
`import 'filelocation'`

now where you want to apply add className
```jsx
return(
    <>
      <h1 className = 'Heading'> Hii Ayush </h1>
    </>
)
```
```css
.Heading{
    color : 'green';
}
```
---
But once imported anywhere, this css is available everywhere  
To avoid this rename file as
`fileName.module.css`

```jsx
import style from './location'
return(
    <>
      <h1 className = {style.heading}> Hii  </h1>
    </>
)
```
```css
.heading{
    color : 'green';
}