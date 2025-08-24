# FORMS
To collect user input  

The `<form>` element is a container for different types of input elements  

---
`<input type="text">`	  
Displays a single-line text input field   

`<input type="radio">`	   
(for selecting one of many choices)    

`<input type="checkbox">`	  
(for selecting zero or more of many choices)

`<input type="submit">`  	   
(for submitting the form)     

`<input type="button">`	   
Displays a clickable button



## <center>LABEL
The `<label>` tag defines a label for many form elements  
The `for` attribute of the `<label>` tag should be equal to the `id` attribute of the `<input>` element to bind them together.  
The `value` attribute specifies an initial value for an input field:

## <center>FORM SUBMISSION
The `<input type="submit">` defines a button for submitting the form data to a form-handler.  
The form-handler is specified in the form's action attribute.  
To submit `name` attribute is must.  

```HTML
<form action="/action_page.php">

  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>

  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>

  <input type="submit" value="Submit">
</form>
```

![alt text](image.png)

---
### <center>GET POST
GET : The form-data can be sent as URL variables  
POST : Not visible on URL