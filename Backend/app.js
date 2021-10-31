


const express = require('express');

const mongoose = require('mongoose');

const bcrypt = require('bcrypt');



const User = require('./models/user');

const Add=require('./models/add');

const bodyParser = require('body-parser');

const fs=require('fs');
const PDFDocument = require('./pdfkit');




const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/stage', { useNewUrlParser: true, useUnifiedTopology: true });




app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});


app.post("/api/addUser", (req, res) => {

    console.log("here in create user", req.body);

    bcrypt.hash(req.body.password, 10).then(cryptedPwd => {



        let user = {};
        if (req.body.role == "employe") {




            user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: cryptedPwd,

                tel: req.body.tel,
                role: req.body.role,
                Department: req.body.Department




            });
        }
        else {
            user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: cryptedPwd,
                tel: req.body.tel,
                role: req.body.role,
            });

        }

        user.save();//save lel user 

        res.status(200).json({
            message: "User created"

        })

    })







});


app.get("/api/allUsers", (req, res) => {

    console.log("here in get all users");

    User.find((err, docs) => {
        if (err) {

            console.log('error in DB');

        }

        else {
            res.status(200).json({
                users: docs

            });

        }
    });
});


app.post("/api/login", (req, res) => {
    console.log("Here in login", req.body);

    User.findOne({ email: req.body.email }).then(
        (resultEmail) => {
            console.log("resultEmail", resultEmail);
            if (!resultEmail) {
                res.status(200).json({
                    findedUser: "Wrong Email"
                });
            }

            return bcrypt.compare(req.body.password, resultEmail.password);
        })
        .then(
            (resultPwd) => {
                console.log("resultPwd", resultPwd);
                if (!resultPwd) {
                    res.status(200).json({
                        findedUser: "Wrong password"
                    });
                }
                else {
                    User.findOne({ email: req.body.email }).then(
                        (result) => {
                            console.log("result", result);
                            res.status(200).json({
                                findedUser: result
                            })
                        }
                    )
                }
            })
});
app.post("/api/add", (req, res) => {

    console.log("here in create add", req.body);





    let add = {};
    if (req.body.type == "factur") {




        add = new Add({
            firstName: req.body.firstName,
            lastName:req.body.lastName ,
            email: req.body.email,
            tel: req.body.tel,
            Num: req.body.Num,
            Date: req.body.Date,
            code: req.body.code,
            Product: req.body.Product,
            Price: req.body.Price,
            TVA: req.body.TVA,
            amount: req.body.amount,
            total: req.body.total,
            Advance: req.body.Advance,
            Rest: req.body.Rest,
            type:req.body.type



        });
    }
    else {
        add = new Add({
            firstName: req.body.firstName,
            lastName:req.body.lastName ,
            email: req.body.email,
            tel: req.body.tel,
            Num: req.body.Num,
            Date: req.body.Date,
            code: req.body.code,
            Product: req.body.Product,
            Price: req.body.Price,
            TVA: req.body.TVA,
            amount: req.body.amount,
            total: req.body.total,
            Advance: req.body.Advance,
            Rest: req.body.Rest,
            type:req.body.type
           
        });

    }

    add.save();//save lel user 

    res.status(200).json({
        message: "add created"

    })









});

app.get("/api/alladds", (req, res) => {

    console.log("here in get all adds");

    Add.find((err, docs) => {
        if (err) {

            console.log('error in DB');

        }

        else {
            res.status(200).json({
                adds: docs

            });

        }
    });
});

app.delete("/api/deleteuser/:id", (req, res) => {
    console.log("delete user");

    let id;
    id = req.params.id;
    console.log(id);

    User.deleteOne({ _id: id }).then(
        (result) => {
            console.log(result);
            if (result) {
                res.status(200).json({
                    message: "delete sucess"
                })
            }
        }
    )

});

app.put("/api/updateuser/:id", (req, res) => {
    console.log("update user");
    bcrypt.hash(req.body.password, 10).then(cryptedpwd => {
        let user = {
            _id: req.body._id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            tel: req.body.tel,
            password: cryptedpwd,

            role: req.body.role
        }

        let id = req.params.id;
        User.updateOne({ _id: req.body._id }, user).then(
            (result) => {
                console.log(result);
                if (result) {
                    res.status(200).json({
                        message: "update sucess"
                    })
                }
            }
        )
    })




});


app.get("/api/allusers/:id", (req, res) => {
    let id;
    let user = {};

    id = req.params.id;
    console.log(id);
    //search

    User.findOne({ _id: id }).then(
        (doc) => {
            console.log(doc);
            //succes to front
            res.status(200).json({
                user: doc
            })
        }
    )
});

app.delete("/api/deleteadd/:id", (req, res) => {
    console.log("delete add");

    let id;
    id = req.params.id;
    console.log(id);

    Add.deleteOne({ _id: id }).then(
        (result) => {
            console.log(result);
            if (result) {
                res.status(200).json({
                    message: "delete sucess"
                })
            }
        }
    )

});

app.get("/api/alladds/:id", (req, res) => {
    let id;
    let add = {};

    id = req.params.id;
    console.log(id);
    //search

    Add.findOne({ _id: id }).then(
        (doc) => {
            console.log(doc);
            //succes to front
            res.status(200).json({
                add: doc
            })
        }
    )
});

app.put("/api/updateadd/:id", (req, res) => {
    console.log("update add");
    
        let add = {
            _id: req.body._id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            Num:req.body.Num,
            Date:req.body.Date,
            total:req.body.total,
            Advance:req.body.Advance,
            Rest:req.body.Rest
        }

        let id = req.params.id;
        Add.updateOne({ _id: req.body._id }, add).then(
            (result) => {
                console.log(result);
                if (result) {
                    res.status(200).json({
                        message: "update sucess"
                    })
                }
            }
        )
    




});


app.post("/api/addconges", (req, res) => {

    console.log("here in create addconges", req.body);





    let add = {};
    




        add = new Add({
            firstName: req.body.firstName,
            lastName:req.body.lastName ,
            email: req.body.email,
            type:req.body.type,
            datefrom:req.body.datefrom,
            dateto:req.body.dateto,
            message:req.body.message




        });
    
    
       
           


    

    add.save();//save lel user 

    res.status(200).json({
        message: "conges created"

    })









});
app.get("/api/allconges", (req, res) => {

    console.log("here in get all conges");

    Add.find((err, docs) => {
        if (err) {

            console.log('error in DB');

        }

        else {
            res.status(200).json({
                adds: docs

            });

        }
    });
});
app.delete("/api/deleteconges/:id", (req, res) => {
    console.log("delete conges");

    let id;
    id = req.params.id;
    console.log(id);

    Add.deleteOne({ _id: id }).then(
        (result) => {
            console.log(result);
            if (result) {
                res.status(200).json({
                    message: "delete sucess"
                })
            }
        }
    )

});

app.get("/api/allconge/:id", (req, res) => {
    let id;
    let add = {};

    id = req.params.id;
    console.log(id);
    //search

    Add.findOne({ _id: id }).then(
        (doc) => {
            console.log(doc);
            //succes to front
            res.status(200).json({
                add: doc
            })
        }
    )
});
app.put("/api/updateconges/:id", (req, res) => {
    console.log("update conges");
    
        let add = {
            _id: req.body._id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email:req.body.email,
            message:req.body.message,
            datefrom:req.body.datefrom,
            dateto:req.body.dateto
            
        }

        let id = req.params.id;
        Add.updateOne({ _id: req.body._id }, add).then(
            (result) => {
                console.log(result);
                if (result) {
                    res.status(200).json({
                        message: "update sucess"
                    })
                }
            }
        )
    




});



app.get("/adds/generateFile/pdf", (req, res) => {
    Add.find((err, docs) => {
    if (err) {
    console.log("ERROR");
    } else {
    // Create The PDF document
    const doc = new PDFDocument();
    // Pipe the PDF into a user's file
    doc.pipe(fs.createWriteStream(`Backend/pdfs/test.pdf`));
    // Add the header -
    https://pspdfkit.com/blog/2019/generate-invoices pdfkit-node/
    doc
    .image("Backend/images/téléchargement.jpg", 50, 45, { width: 50 })
    .fillColor("#444444")
    .fontSize(20)
    .text("Here Invoice", 110, 57)
    .fontSize(10)
    .text("Imm Yasmine Tower", 200, 65, { align: "right" })
    .text("Centre Urbain Nord", 200, 80, { align: "right" }) .moveDown();
    // Create the table -https://www.andronio.me/2017/09/02/pdfkit-tables/
    const table = {
    headers: [
    "NUM of Invoices",
    "firstName",
    "lastName",
    "Date",
    "Total",
    "Advance",
    "Rest",
    ],
    rows: [],
    };
    // Add the users to the table
    for (const add of docs) {
    table.rows.push([
    add.Num,


    add.firstName,
    add.lastName,
    add.Date,
    add.total,
    add.Advance,
    add.Rest
    ]);
    }
    // Draw the table
    doc.moveDown().table(table, 10, 125, { width: 590 }); // Finalizethe PDF and end the stream
    doc.end();
    res.status(200).json({
    message: "HERE PDF (success)",
    });
    }
    });
    });














module.exports = app;