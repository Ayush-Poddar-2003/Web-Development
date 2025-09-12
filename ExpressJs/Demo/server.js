import express from 'express'
const app = express();

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

//Using Post
app.post('/form-submit', (req, res)=>{
    res.json({
        message: 'Form Submitted',
        success: true
    })
})

const port = 3000;
app.listen(port, ()=>console.log(`Server started on port ${port}`));

