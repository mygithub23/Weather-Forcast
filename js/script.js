$(function () {
    /*  import * as weather from '../data/oneCall.json'; */
    /*    import * as cities from '../weather_14.json'; */

    /* const data = require('./data/cities.json') */
    /*  console.log (JSONcities[0] */
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let hour = d.getHours();
    let output =
        (month < 10 ? '0' : '') + month + '/' +
        (day < 10 ? '0' : '') + day + '/' + year;

    const form = document.querySelector('#searchForm');
    //const cityQuery = document.querySelector('#city-search');
    let cardDeck = document.querySelector('.card-deck');
    let card = cardDeck.querySelectorAll('.card');
    let cardBody = cardDeck.querySelectorAll('.card-body')
    let cardTitle = cardDeck.querySelectorAll('h5.card-title');
    let cardTemp = cardDeck.querySelectorAll('.card-text #temp');
    let cardHumidity = cardDeck.querySelectorAll('.card-text #humidity');
    let cardIcon = cardDeck.querySelectorAll('span.weather-icon > img');

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


    function UpdateCurrentWeather(weatherData) {

        $('#city-name').text(weatherData.timezone + ' ' + `${output}`);
        $('#city-name').css({
            'color': 'block',
            'font-size': '2rem'
        })
        $('#current-temp').text(weatherData.current.temp)
        $('#current-humidity').text(weatherData.current.humidity)
        $('#current-wind').text(weatherData.current.wind_speed)
        $('#current-index').text(weatherData.current.uvi)
    }

    function convertDate(unixDate) {
        var monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const date = new Date(unixDate * 1000);
        const year = date.getFullYear();
        /* const month = monthArray[date.getMonth()]; */
        const month = date.getMonth();
        const day = date.getDate();
        const currentDate = month + '/' + day + '/' + year;
        return currentDate;
    }

    function UpdateWeeklyForcast(weatherData) {

        for (i = 0; i < card.length; i++) {

            $(cardTitle[i]).text(convertDate(weatherData.daily[i].dt));
            $(cardTemp[i]).text(weatherData.daily[i].temp.day);
            $(cardHumidity[i]).text(weatherData.daily[i].humidity);
            $(cardIcon[i]).attr("src", (weatherData.daily[i].weather.icon));

        }
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        console.log("sumitted")

        let cityQuery = $('#city-search').val();

        getCityCoord(`${cityQuery}`);

        //'https://api.openweathermap.org/data/2.5/onecall?lat=40.714272&lon=-74.005966&exclude=hourly,minutely&appid=345fb44947503a9fb445dfe861d317af',
    
        try {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=345fb44947503a9fb445dfe861d317af`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                    weatherData = JSON.parse(result);
                  // data1 = JSON.parse(response);
                    console.log(weatherData);
                    console.log(weatherData.timezone)
                    //console.log(data1);
                    
                    /* weather.main.humidity
                    weather.main.temp
                    weather.wind.speed
                    weather.icon  */
                    //"icon": "04n"
                   // http://openweathermap.org/img/wn/10d@2x.png
        
                   UpdateCurrentWeather(weatherData);
                   UpdateWeeklyForcast(weatherData);
        
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