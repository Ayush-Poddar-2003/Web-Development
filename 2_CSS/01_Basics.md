# What is CSS?
**Hakom won lee** - Father of css 

CSS : Cascading Style Sheets  
Cascade : waterfall, Stylesheets let us design web pages  
Some more stylesheets are : SASS ,LESS etc

---
There are three ways of inserting a style sheet:
1. External CSS
    ```html
    <head>
        <link rel="stylesheet" href="mystyle.css">
    </head>
    ```
2. Internal CSS
    ```html
    <head>
        <style>
            selector {
                property:value;
            }
        </style>
    </head>
    ```

3. Inline CSS  
    ```html
    <element style="property:value;"> ABC </p>
    ```

PRIORITY : 
Inline > External | Internal style <br><br>


    selector {
        property : value;
        property : value;
    }

**Note:** Do not add a space b/w the value and the unit `20px` 

## <center>EXTRA KNOWLEDGE
1 px = 1/96th of inch = 0.26mm  
1 pt = 1/72nd of inch = 0.35mm ,(ms word uses point for size)  
1 em = relative size if parent increases it also increases  
1 rem = relative size if root increases it also increases parent doesnot affect it 
