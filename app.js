const express = require('express');
const app = express();
const path = require('path')
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req,res)=> {
    res.render("home.ejs");
});

app.get("/login", (req,res)=> {
    res.render("login.ejs");
});
app.get("/feature", (req,res)=> {
    res.render("feature.ejs");
});
app.get("/about", (req,res)=> {
    res.render("about.ejs");
});
app.get("/contact", (req,res)=> {
    res.render("contact.ejs");
});

app.get("/dash1", (req,res)=> {
    res.render("dash1.ejs");
});

 app.get("/feature/alumini_directory", (req,res)=> {
    res.render("directory.ejs");
    });

 app.get("/feature/alumini_event", (req,res)=> {
        res.render("event.ejs");
        });

app.get("/feature/alumini_job", (req,res)=> {
            res.render("job.ejs");
            });
            
app.get("/feature/alumini_mentor", (req,res)=> {
                res.render("mentor.ejs");
                }); 
                
                
app.get("/feature/alumini_forum", (req,res)=> {
                    res.render("forum.ejs");
                    });  
app.get("/login/signup", (req,res)=> {
                        res.render("signup.ejs");
                        });           
        

app.listen(port, ()=> {
    console.log(`Server started on port ${port}`);
});