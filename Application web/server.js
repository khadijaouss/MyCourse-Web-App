// call all the required packages
const express = require('express')
const bodyParser= require('body-parser')
const multer = require('multer');
var cors = require('cors')
var path = require('path');
var bodyPa = require('body-parser');
var urlEncoded = bodyPa.urlencoded({extended:false});

const app = express()
const mysql=require('mysql');
var file1NV="";
var file2NV="";
var file3NV="";
var nomNVmatiere="";

app.use(cors({
  origin: '*'
}))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const con=mysql.createConnection({
  host:       'localhost',
  user:       'root',
  password:   '',
  database:   'matiere'
});
con.connect((err,connection)=>{
  
  console.log('connected')
});





 
//ROUTES WILL GO HERE
// '/' la route pour plus de sécurité
app.get('/',function(req,res){
  res.sendFile(__dirname +"/"+"1S1sud.html");//dirname: récupere le chemin absolu du dossier courant
 
});


 
app.get("/courses" , (req,res) => {
  con.query("SELECT * from matiere",(err,result,fields) => {
    if (err) throw err;
    res.send(result);
  })
})

// SET STORAGE
const data= []
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  
  filename: function (req, file, cb) {
    const filename=file.fieldname + '-' +Date.now()+ path.extname(file.originalname)
    data.push(filename)
    
    cb(null, filename)
  }
})

 
var upload = multer({ storage: storage })
var multipleUploads=upload.fields([{name:'file1',maxCount:1},{name:'file2',maxCount:1},{name:'file3',maxCount:1},{name:'file4',maxCount:1},{name:'file5',maxCount:1},{name:'file6',maxCount:1}])
app.post('/uploadfile', multipleUploads, (req, res, next) => {
  const files = req.files
  console.log(req.files);

  if (files) {
    const datat= {
      'nomMatiere':req.body.matiere,
      'file1':data[0],
      'file2':data[1],
      'file3':data[2]
    }
    nomNVmatiere=req.body.matiere;
    file1NV=data[0];
    file2NV=data[1];
    file3NV=data[2];
    
    console.log(nomNVmatiere);
    console.log(file1NV);
    console.log(file2NV);
    console.log(file3NV);
    
   
    console.log(datat);
    con.connect((err)=>{
      con.query('INSERT INTO matiere SET ?',datat,(err,rows)=>{
        if(!err){
          res.send(`matiere avec le nom ${datat.nomMatiere} est ajoutée`);
    
        }else{console.log(err)}
      })


    })
    

  }
   
  
})





const port = 2000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
