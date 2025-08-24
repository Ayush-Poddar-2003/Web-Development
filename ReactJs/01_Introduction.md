# <CENTER>INTRODUCTION

**WHAT IS REACT ?**  
Open source Js **library** for building UI,  
Developed by Facebook SDE **Jordan Walke** (2013),  
Got Open Sourced in 2015.   

React Native - for Mobile Apps

---
**HOW IT WORKS?**  
Creates virtual DOM  
Only changes what needs to be changed as previously, DOM used to refresh the whole webpage

---
React Porject Essentials -
- NodeJs - LTS (Long term support)
- Vite  
Recommended in Offical documentation  
Super fast dev server & Build tool
- Bun can be used instead of npm as 29x faster

---
### Our First React App

   Go to https://vite.dev/guide/ for steps
1. Open terminal and go to folder location.
2. `npm create vite@latest`
3. Will ask to name project, Select framework - choose react, variant - select Javascript
4. `cd ProjectName` 
5. `npm install`  
All above steps will add needed files for the App.
1. `npm run dev`

Your project should now run on **localhost : 5173** (Vite’s default port).

---

### <center> WorkFlow
1. index.html is loaded  
`<div id="root"></div>` Everything displayed inside this div   
`<script type="module" src="/src/main.jsx"></script>`   Links main.jsx
2. main.jsx   
    ```jsx
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <App /> //App.jsx & other to be used jsx
        </StrictMode>,
    )
    ```


---
### <CENTER>Updating Project to Latest Version
RC - Release Candidate : Almost ready for final release  

**TO CHECK CURRENT VERSION**  
Open Project Folder -> Open Package.json -> Check Dependancies

**TO UPGRADE**  
Open root folder in terminal  
Run `npm install react@rc react-dom@rc` 