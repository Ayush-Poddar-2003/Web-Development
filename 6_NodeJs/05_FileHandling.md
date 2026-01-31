# File Handing

#### Writing/creating file

```js
const fs = require('fs');
fs.writeFileSync("dummy.txt", "Write anything in your dummy.txt")
```

```js
import {writeFile} form 'fs/promises'

const write_fun = async(fileName, Content) =>{
    await writeFile(fileName, Content);
}

write_fun('Ayush.txt', "This is a text file");
```

---
#### Reading File
Lets read text from sample.txt
```js
import {readFile} from 'fs/promises'

const read_fun = async(fileName) => {
    const data = await readFile(fileName, 'utf-8');
    console.log(data);
}

read_fun('sample.txt')
```
---
