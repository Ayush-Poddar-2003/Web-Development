# What ?
A file that describes your Node.js project — like its resume.  
It contains all the metadata like:
- Project name, version, author
- Scripts (like how to start the app)
- Dependencies (like express, mongoose, etc.)
- Project configuration

---
`npm init` : creates package.json  
`npm i packageName` : will install the package, adds node modules folder, name of packages will start appearing in dependencies section

`package-lock.json` will keep details of the packages we installed


---
| Field             | What it does                       |
| ----------------- | ---------------------------------- |
| `name`            | Your project name                  |
| `version`         | Current version                    |
| `main`            | Entry point file (like `app.js`)   |
| `scripts`         | Commands you can run via `npm run` |
| `dependencies`    | Packages required for production   |
| `devDependencies` | Packages for development only      |
| `author`          | Your name                          |
| `license`         | Open-source license                |
