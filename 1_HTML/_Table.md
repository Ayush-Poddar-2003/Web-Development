# HTML Tables

HTML tables are used to display data in rows and columns,  
similar to spreadsheets.


```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
````





## 🎨 Table Attributes



```html
<table border="1" cellpadding="10" cellspacing="5">
```

```html
<tr>
  <td colspan="2">Merged across 2 columns</td>
</tr>

<tr>
  <td rowspan="2">Merged over 2 rows</td>
  <td>Row 1</td>
</tr>
<tr>
  <td>Row 2</td>
</tr>
```