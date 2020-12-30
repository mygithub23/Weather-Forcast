$(function () {
    /*  import * as weather from '../data/oneCall.json'; */
    /*    import * as cities from '../weather_14.json'; */

    /* const data = require('./data/cities.json') */
    /*  console.log (JSONcities[0] */
   /*  let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let hour = d.getHours();
    let output =
        (month < 10 ? '0' : '') + month + '/' +
        (day < 10 ? '0' : '') + day + '/' + year; */
    var cityCounter = 0;
    const form = document.querySelector('#searchForm');
    //const cityQuery = document.querySelector('#city-search');
    let cardDeck = document.querySelector('.card-deck');
    let cardBody = cardDeck.querySelectorAll('.card-body')
    let cardTitle = cardDeck.querySelectorAll('h5.card-title');
    let cardTemp = cardDeck.querySelectorAll('.card-text #temp');
    let cardHumidity = cardDeck.querySelectorAll('.card-text #humidity');
    let ulCities = document.querySelector('#ulCitiesList');
    

    let lat = 0;
    let lon = 0;
    let weatherData = {};

   

    /* let str='';
       let htmlstring = cityArr.forEach((city) => {
           str += '<option value="' + city[0] + '" />';
         });
         console.log(htmlstring); */



    function getCityCoord(searchCity) {
        const cityInf = cityArr.find(element => element[0] === searchCity);
        //console.log(element);
        lat = cityInf[2];
        lon = cityInf[3];
    }

    function convertDate(unixDate) {
       // var monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const dateObject = new Date(unixDate * 1000);
        //const date = dateObject.toLocaleString()
        const year = dateObject.getFullYear();
        /* const month = monthArray[date.getMonth()]; */
        const month =(dateObject.getMonth()+1);
        const day = dateObject.getDate();
        const currentDate = month + '/' + day + '/' + year;
        return currentDate;
    }


    function UpdateCurrentWeather(cityQuery, weatherData) {

        try {
            $('#city-name').text(cityQuery + ' ' + convertDate(weatherData.current.dt));
            $('#city-name').css({
                'color': 'block',
                'font-size': '2rem'
            })
            $('#current-temp').text(weatherData.current.temp);
            $('#current-humidity').text(weatherData.current.humidity);
            $('#current-wind').text(weatherData.current.wind_speed);
            $('#current-index').text(weatherData.current.uvi);
        } catch (error) {
            console.log(error);
        }

       
    }

  

    /* const dateObject = new Date(1609606800 * 1000)
        const date = dateObject.toLocaleString()
        const year = date.getFullYear(); */

    function UpdateWeeklyForcast(weatherData) {
        const form = document.querySelector('#searchForm');
        let card = cardDeck.querySelectorAll('.card');
        let cardIcon = cardDeck.querySelectorAll('.weather-icon');
       // let cardIcon = cardDeck.querySelectorAll('span.weather-icon > img');
       try {
        for (i = 0; i < card.length; i++) {
            // http://openweathermap.org/img/wn/10d@2x.png
             $(cardTitle[i]).text(convertDate(''));
             $(cardTemp[i]).text('');
             $(cardHumidity[i]).text('');
             $(".cardIcon")[i].empty();
            // imgIcon.remove;
         }
        
    } catch (error) {
        console.log(error);
    }
    

        try {
            for (i = 0; i < card.length; i++) {
                // http://openweathermap.org/img/wn/10d@2x.png
                 $(cardTitle[i]).text(convertDate(weatherData.daily[i].dt));
                 $(cardTemp[i]).text(weatherData.daily[i].temp.day);
                 $(cardHumidity[i]).text(weatherData.daily[i].humidity);
                 let imgIcon = document.createElement('img');
                 imgIcon.src= "http://openweathermap.org/img/wn/" + weatherData.daily[i].weather[0].icon + "@2x.png"
                 cardIcon[i].append(imgIcon);


     
             }
            
        } catch (error) {
            console.log(error);
        }
        
    }

    
    function setCitiesHistory(cityQuery){
        const liCities = document.createElement('li');
       
        

        $(`<li id='${cityCounter}' class='city'></li>`).appendTo("#ulCitiesList");
        $(`<button class='${cityCounter} btn btn-primary btn-lg btn-block' id='${cityCounter}'></button>`).appendTo(`#${cityCounter}`)
        $(`.${cityCounter}`).append(cityQuery)
        cityCounter++
        
  
        
  
        $("#ulCitiesList").css({
            'list-style-type': 'upper-alpha',
            'color': 'white',
            'font-size': '2rem'
          })
          $("#ulCitiesList").css({
      
            'color': 'white',
            'font-size': '2rem'
          })
        //const ulCities = document.querySelector('#ulCitiesList');
       // const tag = document.createElement('b');
        //tag.append(`Your password ${time}`);
        //savedPass.append(tag);
       /*  liCities.append(cityQuery);
        ulCities.append(liCities); */
        /* console.log(savedPass);
        passHistory.append(savedPass) */;
    }
      
/* 
    function UpdateFromLocalStorage() {
        for(i=0; i< txtArea.length; i++) {
            txtArea[i].value = localStorage.getItem(`${txtArea[i].id}`)
        }
    }
    UpdateFromLocalStorage();

    function saveToLocalStorage() {
        for(i=0; i< txtArea.length; i++) {
            localStorage.setItem(cityQuery);  
        }
    }  */

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        


        let cityQuery = $('#city-search').val();
        let units = "imperial";
                     
        let appid = "345fb44947503a9fb445dfe861d317af";
        

        getCityCoord(`${cityQuery}`);
      //  console.log(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${appid}&units=${units}`)
        setCitiesHistory(cityQuery);
      
        try {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${appid}&units=${units}`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                    weatherData = JSON.parse(result);
                  // data1 = JSON.parse(response);
                    console.log(weatherData);
                    console.log(weatherData.timezone)
                   
        
                   UpdateCurrentWeather(cityQuery, weatherData);
                   UpdateWeeklyForcast(weatherData);
                   $('#city-search').val()='';

        
                })
                .catch(error => console.log('error', error));

        } catch (err) {
            console.log(err)
            
        }
       
            
        

    })










});

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
// var products =   {"productData”:[]};

/* $('li').each(function(index)
{
  products.productData.push({
    "code": $(this).data('code'), 
    "quantity":parseInt($(this).data('quantity')), 
    "price":parseInt($(this).data('price'))
  });
}); */


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