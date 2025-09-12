# PATH MODULE

```js
import path form 'path

// 1 : Joining 2 or more files
const fullPath = path.join('/folder', 'file1.py', 'file2.py');

// 2 : Finding path from scrath
const absolutePath = path.resolve();

// 3 : To check type/extenion of file
const extName = path.extname('resume.pdf') 
if(extName=='.pdf'){
    console.log("Ok");
}
else{
    console.log("Not Suppported");
}
```