const express = require("express");
const app = express();
const routes = require('./routes/main');
const hbs = require('hbs');
const mongoose = require('mongoose');
const Detail=require("./models/Detail");
const Slider = require("./models/Slider");
const Service= require("./models/Service");
 const bodyParser=require('body-parser');



//bodyparser
app.use(bodyParser.urlencoded({
  extended:true
}))

//express
app.use('',routes)
app.use('/static',express.static("public"))
//bodyparser



//(template engine set)
app.set('view engine','hbs')
app.set("views","views")
//for usin partials we need to set the parials path
hbs.registerPartials("views/partials")

//db connection
mongoose.connect('mongodb://localhost/website_tut',()=>{
    console.log("db connected")

      //  Service.create([{
      //   icon:'fab fa-accusoft',
      //   title:'provide Best Course',
      //   description:' we provide courses that helps our student in learning and in placement',
      //   linkText:'https://www.filmyquotes.com/songs/137',
      //   link:'Check'


      //  },
      //  {
      //   icon:'fab fa-accusoft',
      //   title:'provide Best Course',
      //   description:' we provide courses that helps our student in learning and in placement',
      //   linkText:'https://www.filmyquotes.com/songs/137',
      //   link:'Check'


      //  },
      //  {
      //   icon:'fab fa-affiliatheme',
      //   title:'provide Best Course',
      //   description:' we provide courses that helps our student in learning and in placement',
      //   linkText:'https://www.filmyquotes.com/songs/137',
      //   link:'Check'


      //  },
      
      // ])


  //   Slider.create([ {
  //     title:'learn java in ver easy manner',
  //     subTitle:'JAva is one of the most popular language',
  //     imageUrl:"/static/images/spdrman.jpg"


  //   },
  //    {
  //     title:'learn python in ver easy manner',
  //     subTitle:' python is one of the most popular language',
  //     imageUrl:"/static/images/spdrman.jpg"


  //   },
  //    {
  //     title:'learn  C++ in ver easy manner',
  //     subTitle:' C++ is one of the most popular language',
  //     imageUrl:"/static/images/spdrman.jpg"


  //   }
  
  // ])

    //Detail.create({
        //beandName:"Info Technical solution",
       // brandIconUrl:"https://www.google.com/search?q=spider+man&rlz=1C1CHBD_enIN975IN975&sxsrf=ALiCzsb2sUY3jl11oy74IT6l3bpC0DCA-g:1672311684643&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjtx6q_1p78AhWdFLcAHZ5wBYsQ_AUoAXoECAEQAw&biw=767&bih=704&dpr=1.25#imgrc=kdV62wYHdI-YhM",
      //  links:[{
            //label:"Home",
          //  url:"/"

        //},
        //{
            //label:"Services",
          //  url:"/services"

        //},
        //{
            //label:"Gallery",
          //  url:"/gallery"

        //},
        //{
           // label:"About",
         //   url:"/about"

       // },
        //{
      //      label:"Contact Us",
    //        url:"contact-us"

    //    },
       
    
   // ]
  //  })

})

//express connection
app.listen(process.env.PORT | 5556,()=>{
    console.log("server started");

});
