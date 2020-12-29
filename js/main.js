
$(function () {
   /*  import * as weather from '../data/oneCall.json'; */
 /*    import * as cities from '../weather_14.json'; */
    
   /* const data = require('./data/cities.json') */
   /*  console.log (JSONcities[0] */
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth()+1;
    let day = d.getDate();
    let hour = d.getHours();
    let output =
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day + '/' + year;
    
    
    let lat = 0;
    let lon = 0;
    let myCities1 ={};

    var objCities ={};
   // var products =   {"productData”:[]};

/* $('li').each(function(index)
{
  products.productData.push({
    "code": $(this).data('code'), 
    "quantity":parseInt($(this).data('quantity')), 
    "price":parseInt($(this).data('price'))
  });
}); */

var products ={"productData":[]};

var sitePersonel = {};
var employees = []
sitePersonel.employees = employees;
console.log(sitePersonel);

    function transferObj(){


var firstName = "John";
var lastName = "Smith";
var employee = {
  "firstName": firstName,
  "lastName": lastName
}
sitePersonel.employees.push(employee);
console.log(sitePersonel);

var manager = "Jane Doe";
sitePersonel.employees[0].manager = manager;
console.log(sitePersonel);

console.log(JSON.stringify(sitePersonel));


       /*  for (i=0; i< cities.length; i++){
            myCities1[i].name = cities[i].name;
            for(i=0; i< cities.length; i++){
                if (cities[i].city.name === cityName) {
                    console.log(cities[i].city.coord.lon);
                    console.log(cities[i].city.coord.lat);
                    "id": cities[i].city.id, 
                    "name":cities[i].city.name,, 
                    "lon":cities[i].city.coord.lon,
                    "lat":cities[i].city.coord.lat
                   // return cities[i].city.coord.lon
                }
            }
        } */
    }

    transferObj();

    function updateCities(cityId, cityName, cityLon, cityLan) {
        this.cityid = cityId;
        this.cityname= cityName;
        this.citylon=cityLon;
        this.citylan=cityLan;

        
    }

    function extractCities(searchCity){
        objCities = cities.map(function (c){
            var objCities={};
            if(c.city.name === searchCity && c.city.country === "US") {
                console.log("Hi");
                let cityId = c.city.id;
                let cityName = c.city.name;
                let cityLon = c.city.coord.lon;
                let cityLan = c.city.coord.lat;
                objCities = new updateCities(cityId, cityName, cityLon, cityLan);
              // console.log(objCities);
              // objCities['cityId'].push('test1'); cityName, cityLon, cityLan);

             //  myCities1("myCities").push({id: cityId, name: cityName , lon: cityLon, lat: cityLat  }); 
            }

            console.log("Hi");
            return(objCities);
        })
    }
    
    myobjCities = extractCities("Chicago");

    let cardDeck = document.querySelector('.card-deck');
    let card = cardDeck.querySelectorAll('.card');
    let cardBody = cardDeck.querySelectorAll('.card-body')
    let cardTitle = cardDeck.querySelectorAll('h5.card-title');
    let cardTemp = cardDeck.querySelectorAll('.card-text #temp');
    let cardHumidity = cardDeck.querySelectorAll('.card-text #humidity');
    let cardIcon = cardDeck.querySelectorAll('span.weather-icon > img') 

    
    function getLat(cityName) { 

        for(i=0; i< cities.length; i++){
            if (cities[i].city.name === cityName) {
                console.log(cities[i].city.coord.lon);
                console.log(cities[i].city.coord.lat);
                return cities[i].city.coord.lon
            }

        }
         
    }
        getLat("Chicago") ;

    function UpdateCurrentWeather(){
        
        $('#city-name').text( weatherData[0].timezone + ' ' + `${output}`);
        $('#city-name').css({
            'color': 'block',
            'font-size': '2rem'
        })
        $('#current-temp').text(weatherData[0].current.temp)
        $('#current-humidity').text(weatherData[0].current.humidity)
        $('#current-wind').text(weatherData[0].current.wind_speed)
        $('#current-index').text(weatherData[0].current.uvi)        
    }

    UpdateCurrentWeather(); 

    function convertDate(unixDate){
        var monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const date = new Date(unixDate * 1000);
        const year = date.getFullYear();
        /* const month = monthArray[date.getMonth()]; */
        const month = date.getMonth();
        const day = date.getDate();
        const currentDate = month + '/'+ day +'/'+ year;
        return currentDate;

    }

    function UpdateWeeklyForcast(){
        
        for(i=0; i<card.length; i++) {

            $(cardTitle[i]).text(convertDate(weatherData[0].daily[i].dt));
            $(cardTemp[i]).text(weatherData[0].daily[i].temp.day);
            $(cardHumidity[i]).text(weatherData[0].daily[i].humidity);
            $(cardIcon[i]).attr("src",(weatherData[0].daily[i].weather.icon));
          
        }
         
    

      
     }
     UpdateWeeklyForcast();
/* 
     function UpdateFromLocalStorage() {
        for(i=0; i< txtArea.length; i++) {
            txtArea[i].value = localStorage.getItem(`${txtArea[i].id}`)
        }
    }
    UpdateFromLocalStorage();

    function saveToLocalStorage() {
        for(i=0; i< txtArea.length; i++) {
            localStorage.setItem(`${txtArea[i].id}`, txtArea[i].value);  
        }
    } */

});
  

    /* var JSONcities = JSON.parse(cities); 
    cities[0].city.name
    cities[0].city.coord.lat
    */


   

   /*  for (key in JsonObj) { if(JsonObj[key] === "Keyvalue") { return key; } } } share.function() 
    { var JsonObj= { "one":1, "two":2, "three":3, "four":4, "five":5 }; for (key in JsonObj) 
    { if(JsonObj[key] === "Keyvalue") { return key; } } } share. */
/* 
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&units=imperial&appid={{id-1}}", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            weather = JSON.parse(result);
           // data1 = JSON.parse(response);
            console.log(weather);
            //console.log(data1);
            /*
            weather.main.humidity
            weather.main.temp
            weather.wind.speed
            "icon": "04n"
            http://openweathermap.org/img/wn/10d@2x.png

            

        })
        .catch(error => console.log('error', error)); */


       /*  function UpdateFromLocalStorage() {
            for(i=0; i< txtArea.length; i++) {
                txtArea[i].value = localStorage.getItem(`${txtArea[i].id}`)
            }
        }
        UpdateFromLocalStorage();
    
        function saveToLocalStorage() {
            for(i=0; i< txtArea.length; i++) {
                localStorage.setItem(`${txtArea[i].id}`, txtArea[i].value);  
            }
        }
    
        btnSave.addEventListener('click', (e) => {
            saveToLocalStorage();
        }) */
    
   
    // let userQuery = document.querySelector("#NaturalLangQuery");
  /*   let btnQuery = document.querySelectorAll("#query");
    let dvResult1 = document.querySelectorAll(".result1");
    let dvResult2 = document.querySelector(".result2");
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    let forcast = {};
    let data1 = {};
    let data2 = {}; */

     /* 
         cardTitle[i].texContent(weatherData[0].daily[i].dt);
            cardTemp[i].texContent(weatherData[0].daily[i].temp);
            cardHumidity[i].texContent(weatherData[0].daily[i].humidity)
            cardIcon[i].attribute.src(weatherData[0].daily[i].weather.icon)

         $(cardTitle[i]).text(weatherData[0].daily[i].dt);
            $(cardTemp[i]).text(weatherData[0].daily[i].temp);
            $(cardHumidity[i]).text(weatherData[0].daily[i].humidity)
            $(cardIcon[i]).src(weatherData[0].daily[i].weather.icon) 
          */
         /* $(card[i]).cardTitle.texContent(weatherData[0].daily[i].dt)
         $(card[i]).cardTemp.text(weatherData[0].daily[i].temp);
         $(card[i]).cardHumidity.text(weatherData[0].daily[i].humidity)
         $(card[i]).cardIcon.src(weatherData[0].daily[i].weather.icon) */
         


         /* $(cardTtitle[i]).text(weatherData[0].daily[i].dt) */


