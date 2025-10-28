# <center> TAILWIND
- Utilily first CSS framework  
- Prebuilt Classes
- Build Modern websites without leaving HTML
- Responsive based on device size
- Compatible with reactJs

## INSTALLATION
### 1. Using CDN (Content Delivery Network)
1. Go to https://tailwindcss.com/
2. Click get started
3. Go to Play CDN
4. Add this line to your HTML inside head tag   
`  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>`

You will see lines of code in your style tag of html on inspection.   
It will remove defalut properties of html tags

---
### 2. Using CLI (Command Line Interface)
1. Go to https://tailwindcss.com/
2. Click get started
3. Go to Tailwind CLI and follow steps.  
    `npm install tailwindcss @tailwindcss/cli`  
    // this will add 
   - node_modules folder
   - package.json 
   - package-lock.json        
4. Add this to your self created css file  
    `@import "tailwindcss";`
5. Run  
   `npx @tailwindcss/cli -i ./style.css -o ./output.css --watch`  
   Here -i means input and -o is output
6. Paste HTML code
    ```html
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="./output.css" rel="stylesheet">
    </head>
    <body>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
    </body>
    </html>
    ```
    
---
