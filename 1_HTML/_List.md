#  Lists

## 1. Ordered List (`<ol>`)
Used to display items in a specific order (numbered list).

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
````
Output -
1. First item
2. Second item
3. Third item

---

## 2. Unordered List (`<ul>`)

Used to display items with no specific order (bulleted list).

```html
<ul>
  <li>Item A</li>
  <li>Item B</li>
  <li>Item C</li>
</ul>
```
Output:
* Item A
* Item B
* Item C

---

## 3. Description List (`<dl>`)

Used to define a list of terms and their descriptions.
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```


**HTML**
↪️ HyperText Markup Language  
**CSS**
↪️ Cascading Style Sheets

---

## Nesting Lists

You can nest lists inside other lists.
```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>
```

* Frontend

  * HTML
  * CSS
* Backend

---

## <center> Customizing Lists

### Changing Ordered List Type:

```html
<ol type="A">
  <li>Apple</li>
  <li>Banana</li>
</ol>
```

Types can be:

* `1` (default)
* `A` / `a` (uppercase/lowercase letters)
* `I` / `i` (uppercase/lowercase Roman numerals)

### Changing Unordered List Marker:

```html
<ul style="list-style-type: square;">
  <li>Square bullet</li>
</ul>
```

Types can be:

* `disc` (default)
* `circle`
* `square`
* `none`

---

