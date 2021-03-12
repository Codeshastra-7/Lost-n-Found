const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");

const homeStartingContent = "This is a collabarative site for developers and coders who often and obviously get stuck at a point during their development journey.This platform can help those who are seeking answers and those who are able to give correct answers."
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



mongoose.connect('mongodb+srv://admin-yash:Yash123@cluster0-1lje1.mongodb.net/LostFound', {useNewUrlParser: true, useUnifiedTopology: true});


const lostSchema = {
  name: String,
  email: String,
  phone: String,
  category: String,
  props: String
}

const foundSchema = {
  name: String,
  email: String,
  phone: String,
  category: String,
  props: String
}

const Lost = mongoose.model("Lost", lostSchema);
const Found = mongoose.model("Found", foundSchema);
const Electronics = mongoose.model("Electronics", lostSchema);
const Vehicle = mongoose.model("Vehicle", lostSchema);
const Wallet = mongoose.model("Wallet", lostSchema);
const Briefcase = mongoose.model("Briefcase", lostSchema);
const Card = mongoose.model("Card", lostSchema);
const Other = mongoose.model("Other", lostSchema);


app.get("/", function(req, res){
  Lost.find({}, function(err, lostItems){
    res.render("home", {
      startingContent: homeStartingContent,
      personSell: lostItems
      });
  });
});


app.get("/lostForm", function(req, res){
  res.render("lostForm");
});

app.get("/manual", function(req, res){
  res.render("manual");
});

app.get("/lost", function(req, res){
  Lost.find({}, function(err, lostItems){
    res.render("lostItems", {personBuy: lostItems});
  });
});

app.get("/found", function(req, res){
  Found.find({}, function(err, foundItems){
    res.render("foundItems", {personBuy: foundItems});
  });
});

app.get("/foundForm", function(req, res){
  res.render("foundForm");
});

app.get("/category", function(req, res){
  res.render("category");
});

app.get("/electronics", function(req, res){
  Electronics.find({}, function(err, electronics){
    res.render("categoryDetail", {
      item: electronics,
      name: "ELECTRONICS"
    });
  });
});

app.get("/vehicles", function(req, res){
  Vehicle.find({}, function(err, vehicles){
    res.render("categoryDetail", {
      item: vehicles,
      name: "VEHICLES"
    });
  });
});

app.get("/wallets", function(req, res){
  Wallet.find({}, function(err, wallets){
    res.render("categoryDetail", {
      item: wallets,
      name: "WALLETS"
    });
  });
});

app.get("/briefcases", function(req, res){
  Briefcase.find({}, function(err, briefcases){
    res.render("categoryDetail", {
      item: briefcases,
      name: "BRIEFCASES"
    });
  });
});

app.get("/cards", function(req, res){
  Card.find({}, function(err, cards){
    res.render("categoryDetail", {
      item: cards,
      name: "CARDS"
    });
  });
});

app.get("/others", function(req, res){
  Other.find({}, function(err, others){
    res.render("categoryDetail", {
      item: others,
      name: "OTHER PRODUCTS"
    });
  });
});


app.post("/lostForm", function(req, res){
  const type = req.body.category;
  const lostItem = new Lost({
    name: req.body.personName,
    email: req.body.PersonEmail,
    phone: req.body.personPhone,   
    category: req.body.category,
    props: req.body.props
  });

  lostItem.save(function(err){
    if(!err){
      console.log("success");
    }
  });

  if(type == "electronics"){
    const electronics = new Electronics({
      name: req.body.personName,
      email: req.body.PersonEmail,
      phone: req.body.personPhone,
      category: req.body.category,
      props: req.body.props
    });
    electronics.save(function(err){
      if(!err){
        console.log("success");
      }
    })
  }  else if(type == "vehicles"){
    const vehicle = new Vehicle({
      name: req.body.personName,
      email: req.body.PersonEmail,
      phone: req.body.personPhone,
      category: req.body.category,
      props: req.body.props
    });
    vehicle.save(function(err){
      if(!err){
        console.log(Vehicle);
      }
    })
  } else if(type == "laptops"){
    const wallet = new Wallet({
      name: req.body.personName,
      email: req.body.PersonEmail,
      phone: req.body.personPhone,
      category: req.body.category,
      props: req.body.props
    });
    wallet.save(function(err){
      if(!err){
        console.log(Wallet);
      }
    })
  } else if(type == "briefcases"){
    const briefcase = new Briefcase({
      name: req.body.personName,
      email: req.body.PersonEmail,
      phone: req.body.personPhone,
      category: req.body.category,
      props: req.body.props
    });
    briefcases.save(function(err){
      if(!err){
        console.log(Briefcase);
      }
    })
  } else if(type == "cards"){
    const card = new Card({
      name: req.body.personName,
      email: req.body.PersonEmail,
      phone: req.body.personPhone,
      category: req.body.category,
      props: req.body.props
    });
    card.save(function(err){
      if(!err){
        console.log(Card);
      }
    })
  } else {
    const other = new Other({
      name: req.body.personName,
      email: req.body.PersonEmail,
      phone: req.body.personPhone,
      category: req.body.category,
      props: req.body.props
    });
    other.save(function(err){
      if(!err){
        console.log(Other);
      }
    })
  }
  res.redirect("/");
});

app.post("/foundForm", function(req, res){
  const found = new Found({
      name: req.body.personName,
      email: req.body.PersonEmail,
      phone: req.body.personPhone,
      category: req.body.category,
      props: req.body.props
  });
  found.save(function(err){
    if(!err){
      res.redirect("/found");
    }
  })
});

app.post("/search", function(req, res){
  const requestedItem = _.lowerCase(req.body.search);
  let x = 0;
  Sell.find({}, function(err, personSell){
    personSell.forEach(function(item){
      const storedTitle = _.lowerCase(item.itemName);
      if (storedTitle === requestedItem) {
        res.render("product", {
          SellerName: item.name,
          ItemName: item.itemName,
          Quantity: item.quantity,
          Price: item.price,
          Address: item.address,
          Phone: item.phone,
          Email: item.email,
          Description: item.description,
          Image: item.image,
          Category: item.category
        });
        x=1;
      }
    });
    if(x==0){
      res.render("notFound");
    }
  });
});

app.get("/products/:productName", function(req, res){
  const requestedItem = req.params.productName;
  Sell.find({}, function(err, personSell){
    personSell.forEach(function(item){
      const mainName = item.itemName;
      if(mainName === requestedItem){
        res.render("product", {
          SellerName: item.name,
          ItemName: item.itemName,
          Quantity: item.quantity,
          Price: item.price,
          Address: item.address,
          Phone: item.phone,
          Email: item.email,
          Description: item.description,
          Image: item.image,
          Category: item.category
        });
      }
    });
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully");
});
