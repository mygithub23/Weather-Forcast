$(function () {

var data = '{"characters":[{"name":"Tommy Vercetti","location":"Vice City"},{"name":"Carl Johnson","location":"Grove Street"},{"name":"Niko Bellic","location":"Liberty City"}]}'



var data2 = {
    "characters":[
       {
          "name":"Tommy Vercetti",
          "location":"Vice City"
       },
       {
          "name":"Carl Johnson",
          "location":"Grove Street"
       },
       {
          "name":"Niko Bellic",
          "location":"Liberty City"
       },
       {
          "name":"Ken Rosenberg",
          "location":"Vice City"
       },
       {
        "name":"jlskjdfljsdf Rosenberg",
        "location":"Vice tesssss"
     }
    ]
 }

 var cityArr = [
   ["New York","NY",40.6943,-73.9249,1840034016  ],
   ["Los Angeles","CA",34.1139,-118.4068,1840020491  ],
   ["Chicago","IL",41.8373,-87.6862,1840000494  ],
   ["Miami","FL",25.7839,-80.2102,1840015149  ],
   ["Dallas","TX",32.7936,-96.7662,1840019440  ],
   ["Philadelphia","PA",40.0077,-75.1339,1840000673  ],
   ["Houston","TX",29.7863,-95.3889,1840020925  ],
   ["Atlanta","GA",33.7627,-84.4224,1840013660  ],
   ["Washington","DC",38.9047,-77.0163,1840006060  ],
   ["Boston","MA",42.3188,-71.0846,1840000455  ],
   ["Phoenix","AZ",33.5722,-112.0891,1840020568  ],
   ["Seattle","WA",47.6211,-122.3244,1840021117  ],
   ["San Francisco","CA",37.7562,-122.443,1840021543  ],
   ["Detroit","MI",42.3834,-83.1024,1840003971  ],
   ["San Diego","CA",32.8312,-117.1225,1840021990  ],
   ["Minneapolis","MN",44.9635,-93.2678,1840007830  ],
   ["Tampa","FL",27.9942,-82.4451,1840015982  ],
   ["Denver","CO",39.7621,-104.8759,1840018789  ],
   ["Brooklyn","NY",40.6501,-73.9496,1840034030  ],
   ["Queens","NY",40.7498,-73.7976,1840034002  ],
   ["Riverside","CA",33.9381,-117.3948,1840020551  ],
   ["Baltimore","MD",39.3051,-76.6144,1840001592  ],
   ["Las Vegas","NV",36.2333,-115.2654,1840020364  ],
   ["Portland","OR",45.5372,-122.65,1840019941  ],
   ["San Antonio","TX",29.4658,-98.5253,1840022220  ],
   ["St. Louis","MO",38.6358,-90.2451,1840001651  ],
   ["Sacramento","CA",38.5667,-121.4683,1840021491  ],
   ["Orlando","FL",28.4772,-81.3369,1840015099  ],
   ["San Jose","CA",37.3019,-121.8486,1840021570  ],
   ["Cleveland","OH",41.4767,-81.6804,1840000596  ],
   ["Pittsburgh","PA",40.4396,-79.9762,1840001254  ],
   ["Austin","TX",30.3004,-97.7522,1840019590  ],
   ["Cincinnati","OH",39.1413,-84.5061,1840003814  ],
   ["Kansas City","MO",39.1239,-94.5541,1840008535  ],
   ["Manhattan","NY",40.7834,-73.9662,1840034000  ],
   ["Indianapolis","IN",39.7771,-86.1458,1840030084  ],
   ["Columbus","OH",39.9862,-82.985,1840003760  ],
   ["Charlotte","NC",35.208,-80.8304,1840014557  ],
   ["Virginia Beach","VA",36.7335,-76.0435,1840003871  ],
   ["Bronx","NY",40.8501,-73.8662,1840033999  ],
   ["Milwaukee","WI",43.0642,-87.9673,1840003046  ],
   ["Providence","RI",41.823,-71.4187,1840003289  ],
   ["Jacksonville","FL",30.3322,-81.6749,1840015031  ],
   ["Salt Lake City","UT",40.7777,-111.9306,1840021383  ],
   ["Nashville","TN",36.1715,-86.7843,1840036155  ],
   ["Richmond","VA",37.5295,-77.4756,1840001698  ],
   ["Memphis","TN",35.1046,-89.9773,1840015457  ],
   ["Raleigh","NC",35.8325,-78.6435,1840014497  ],
   ["New Orleans","LA",30.0687,-89.9288,1840001839  ],
   ["Louisville","KY",38.1663,-85.6485,1840030815  ],
   ["Oklahoma City","OK",35.4676,-97.5136,1840020428  ],
   ["Bridgeport","CT",41.1918,-73.1953,1840004836  ],
   ["Buffalo","NY",42.9016,-78.8487,1840000386  ],
   ["Fort Worth","TX",32.7811,-97.3473,1840020696  ],
   ["Hartford","CT",41.7661,-72.6834,1840004773  ],
   ["Tucson","AZ",32.1545,-110.8782,1840022101  ],
   ["Omaha","NE",41.2627,-96.0522,1840009315  ],
   ["El Paso","TX",31.8479,-106.4309,1840023252  ],
   ["Honolulu","HI",21.3294,-157.846,1840013305  ],
   ["McAllen","TX",26.2273,-98.2471,1840021024  ],
   ["Albuquerque","NM",35.1053,-106.6464,1840019176  ],
   ["Birmingham","AL",33.5277,-86.7987,1840006507  ],
   ["Sarasota","FL",27.3386,-82.5431,1840015988  ],
   ["Dayton","OH",39.7797,-84.1998,1840034249  ],
   ["Rochester","NY",43.168,-77.6162,1840000373  ],
   ["Fresno","CA",36.7831,-119.7941,1840020319  ],
   ["Allentown","PA",40.5961,-75.4756,1840001044  ],
   ["Tulsa","OK",36.1284,-95.9042,1840021672  ],
   ["Cape Coral","FL",26.6446,-81.9956,1840015130  ],
   ["Concord","CA",37.9722,-122.0016,1840018905  ],
   ["Colorado Springs","CO",38.8674,-104.7606,1840018825  ],
   ["Charleston","SC",32.8153,-79.9628,1840015163  ],
   ["Springfield","MA",42.1155,-72.5395,1840000466  ],
   ["Grand Rapids","MI",42.962,-85.6562,1840002928  ],
   ["Mission Viejo","CA",33.6095,-117.655,1840020580  ],
   ["Albany","NY",42.6664,-73.7987,1840000417  ],
   ["Knoxville","TN",35.9692,-83.9496,1840014486  ],
   ["Bakersfield","CA",35.3529,-119.0359,1840019148  ],
   ["Ogden","UT",41.2278,-111.9682,1840020135  ],
   ["Baton Rouge","LA",30.4418,-91.131,1840013941  ],
   ["Akron","OH",41.0798,-81.5219,1840000791  ],
   ["New Haven","CT",41.3112,-72.9246,1840004850  ],
   ["Columbia","SC",34.0376,-80.9037,1840014730  ],
   ["Mesa","AZ",33.4017,-111.718,1840020566  ],
   ["Palm Bay","FL",27.955,-80.6627,1840015094  ],
   ["Provo","UT",40.2457,-111.6457,1840020174  ],
   ["Worcester","MA",42.2705,-71.8079,1840000434  ],
   ["Murrieta","CA",33.572,-117.1909,1840020553  ],
   ["Greenville","SC",34.8353,-82.3647,1840013501  ],
   ["Wichita","KS",37.6896,-97.3442,1840001686  ],
   ["Toledo","OH",41.6639,-83.5822,1840000572  ],
   ["Staten Island","NY",40.5834,-74.1496,1840034032  ],
   ["Des Moines","IA",41.5725,-93.6105,1840007069  ],
   ["Long Beach","CA",33.7981,-118.1675,1840020490  ],
   ["Port St. Lucie","FL",27.2796,-80.3883,1840015119  ],
   ["Denton","TX",33.2176,-97.1419,1840019390  ],
   ["Madison","WI",43.0826,-89.3931,1840002915  ],
   ["Reno","NV",39.5497,-119.8483,1840020121  ],
   ["Harrisburg","PA",40.2752,-76.8843,1840001288  ],
   ["Little Rock","AR",34.7256,-92.3576,1840015509  ],
   ["Oakland","CA",37.7903,-122.2165,1840020296  ],
   ["Durham","NC",35.9794,-78.9031,1840013364  ],
   ["Winston-Salem","NC",36.1029,-80.2611,1840015324  ],
   ["Bonita Springs","FL",26.3559,-81.7861,1840014227  ],
   ["Indio","CA",33.7346,-116.2346,1840019304  ],
   ["Palm Coast","FL",29.5392,-81.246,1840015064  ],
   ["Chattanooga","TN",35.0657,-85.2488,1840014569  ],
   ["Spokane","WA",47.6671,-117.433,1840021093  ],
   ["Syracuse","NY",43.0409,-76.1438,1840000378  ],
   ["Lancaster","PA",40.0421,-76.3012,1840003718  ],
   ["Arlington","TX",32.6998,-97.125,1840019422  ],
   ["Stockton","CA",37.9765,-121.3109,1840021517  ],
   ["Poughkeepsie","NY",41.6949,-73.921,1840000500  ],
   ["Augusta","GA",33.3645,-82.0708,1840029462  ],
   ["Boise","ID",43.6007,-116.2312,1840027142  ],
   ["Oxnard","CA",34.1963,-119.1815,1840020474  ],
   ["Scranton","PA",41.4044,-75.6649,1840003389  ],
   ["Modesto","CA",37.6374,-121.0028,1840020287  ],
   ["Kissimmee","FL",28.3042,-81.4164,1840015109  ],
   ["Aurora","CO",39.7087,-104.7273,1840018794  ],
   ["Youngstown","OH",41.0993,-80.6463,1840003563  ],
   ["Fayetteville","AR",36.0713,-94.166,1840013368  ],
   ["Anaheim","CA",33.839,-117.8572,1840019322  ],
   ["Pensacola","FL",30.4427,-87.1886,1840015005  ],
   ["Victorville","CA",34.5277,-117.3536,1840021731  ],
   ["Lancaster","CA",34.6935,-118.1753,1840020516  ],
   ["Greensboro","NC",36.0956,-79.8269,1840013356  ],
   ["Corpus Christi","TX",27.726,-97.3755,1840019718  ],
   ["Fort Wayne","IN",41.0886,-85.1437,1840008261  ],
   ["Santa Ana","CA",33.7366,-117.8819,1840021964  ],
   ["Flint","MI",43.0235,-83.6922,1840002949  ],
   ["San Juan","PR",18.4037,-66.0636,1630035577  ],
   ["Fayetteville","NC",35.0846,-78.9776,1840013490  ],
   ["Jackson","MS",32.3163,-90.2124,1840014895  ],
   ["Santa Rosa","CA",38.4458,-122.7067,1840021488  ],
   ["Lansing","MI",42.7142,-84.5601,1840003102  ],
   ["Ann Arbor","MI",42.2755,-83.7312,1840003172  ],
   ["Henderson","NV",36.0133,-115.038,1840020361  ],
   ["Huntsville","AL",34.6988,-86.6412,1840005061  ],
   ["Lexington","KY",38.0423,-84.4587,1840015211  ],
   ["Mobile","AL",30.6783,-88.1162,1840006009  ],
   ["Fort Collins","CO",40.5478,-105.0656,1840020151  ],
   ["Asheville","NC",35.5704,-82.5536,1840013411  ],
   ["Santa Clarita","CA",34.4175,-118.4964,1840021864  ],
   ["St. Paul","MN",44.9477,-93.104,1840008940  ],
   ["Antioch","CA",37.9789,-121.7958,1840018903  ],
   ["Lakeland","FL",28.0556,-81.9545,1840015108  ],
   ["Trenton","NJ",40.2236,-74.7641,1840001383  ],
   ["Lincoln","NE",40.809,-96.6788,1840009357  ],
   ["Springfield","MO",37.1943,-93.2916,1840009904  ],
   ["Plano","TX",33.0502,-96.7487,1840020662  ],
   ["Irvine","CA",33.6772,-117.7738,1840019325  ],
   ["Davenport","IA",41.5563,-90.6052,1840007081  ],
   ["Rockford","IL",42.2597,-89.0641,1840009132  ],
   ["Newark","NJ",40.7245,-74.1725,1840002791  ],
   ["South Bend","IN",41.6767,-86.2696,1840009241  ],
   ["Shreveport","LA",32.4656,-93.7956,1840015768  ],
   ["Round Lake Beach","IL",42.379,-88.0811,1840011171  ],
   ["Savannah","GA",32.0281,-81.1784,1840015830  ],
   ["Myrtle Beach","SC",33.7096,-78.8843,1840014717  ],
   ["Chula Vista","CA",32.6281,-117.0145,1840019350  ],
   ["Eugene","OR",44.0563,-123.1173,1840020007  ],
   ["Canton","OH",40.8075,-81.3677,1840000963  ],
   ["Lubbock","TX",33.5659,-101.8878,1840020604  ],
   ["Reading","PA",40.34,-75.9267,1840001185  ],
   ["Winter Haven","FL",28.0118,-81.7017,1840015970  ],
   ["Salem","OR",44.9231,-123.0246,1840021224  ],
   ["St. Petersburg","FL",27.7931,-82.6652,1840015977  ],
   ["Lafayette","LA",30.2084,-92.0323,1840015044  ],
   ["Laredo","TX",27.5629,-99.4875,1840021002  ],
   ["Jersey City","NJ",40.7161,-74.0682,1840003600  ],
   ["Concord","NC",35.3933,-80.6366,1840014559  ],
   ["Columbus","GA",32.51,-84.8771,1840014887  ],
   ["Chandler","AZ",33.2826,-111.8516,1840019309  ],
   ["McKinney","TX",33.2015,-96.6669,1840020657  ],
   ["Scottsdale","AZ",33.6872,-111.8651,1840021940  ],
   ["Killeen","TX",31.0754,-97.7296,1840020854  ],
   ["Tallahassee","FL",30.4551,-84.2526,1840015913  ],
   ["Peoria","IL",40.752,-89.6153,1840009373  ],
   ["Wilmington","NC",34.21,-77.8866,1840015576  ],
   ["Montgomery","AL",32.3473,-86.2666,1840008353  ],
   ["Gilbert","AZ",33.3101,-111.7463,1840021947  ],
   ["Glendale","AZ",33.5791,-112.2311,1840020563  ],
   ["North Las Vegas","NV",36.288,-115.0901,1840020363  ],
   ["Anchorage","AK",61.1508,-149.1091,1840023385  ],
   ["Chesapeake","VA",36.6778,-76.3024,1840003874  ],
   ["Barnstable","MA",41.6722,-70.3599,1840031233  ],
   ["Norfolk","VA",36.8945,-76.259,1840003869  ],
   ["Fremont","CA",37.5265,-121.9852,1840020292  ],
   ["Kennewick","WA",46.1978,-119.1732,1840018481  ],
   ["Garland","TX",32.91,-96.6305,1840020707  ],
   ["Irving","TX",32.8584,-96.9702,1840019438  ],
   ["Visalia","CA",36.3276,-119.3269,1840021639  ],
   ["Atlantic City","NJ",39.3797,-74.4527,1840003798  ],
   ["Nashua","NH",42.7491,-71.491,1840002984  ],
   ["Paradise","NV",36.0807,-115.1369,1840033743  ],
   ["Hialeah","FL",25.8696,-80.3046,1840015157  ],
   ["York","PA",39.9651,-76.7315,1840001472  ],
   ["Arlington","VA",38.8786,-77.1011,1840006112  ],
   ["Evansville","IN",37.9881,-87.5341,1840013730  ],
   ["Avondale","AZ",33.3858,-112.3236,1840019310  ],
   ["Brownsville","TX",25.998,-97.4565,1840019743  ],
   ["Gulfport","MS",30.4271,-89.0703,1840013947  ],
   ["Appleton","WI",44.2779,-88.3891,1840002400  ],
   ["Bremerton","WA",47.5436,-122.7122,1840018410  ],
   ["Hickory","NC",35.7425,-81.323,1840014524  ],
   ["Tacoma","WA",47.2431,-122.4531,1840021129  ],
   ["San Bernardino","CA",34.1417,-117.2946,1840021728  ],
   ["College Station","TX",30.5852,-96.296,1840019570  ],
   ["Kalamazoo","MI",42.2749,-85.5882,1840003185  ],
   ["Thousand Oaks","CA",34.1914,-118.8755,1840021844  ],
   ["Roanoke","VA",37.2785,-79.958,1840003858  ],
   ["Fontana","CA",34.0968,-117.4599,1840020402  ],
   ["Moreno Valley","CA",33.9244,-117.2045,1840020552  ],
   ["North Port","FL",27.0577,-82.1975,1840015120  ],
   ["Fargo","ND",46.8652,-96.8292,1840000177  ],
   ["Green Bay","WI",44.515,-87.9896,1840002344  ],
   ["Amarillo","TX",35.1988,-101.8311,1840019156  ],
   ["Portland","ME",43.6773,-70.2715,1840000327  ],
   ["Santa Barbara","CA",34.4285,-119.7202,1840021829  ],
   ["Gainesville","FL",29.6804,-82.3458,1840014022  ],
   ["Olympia","WA",47.0417,-122.8959,1840019865  ],
   ["Frisco","TX",33.1555,-96.8215,1840020654  ],
   ["Yonkers","NY",40.9466,-73.8674,1840003478  ],
   ["Norwich","CT",41.5495,-72.0882,1840004828  ],
   ["Spring Valley","NV",36.0987,-115.2619,1840033832  ]
 ]

 let str="<datalist id='citiesList'>";
        let htmlstring = cityArr.forEach((city) => {
            str += '<option value="' + city[0] + '" >';
          });
          str+= '</datalist>'
          console.log(str);

const obj = JSON.parse(data);

obj["characters"].push({ name: "Test", location: "Chicago" });
/* obj["characters"].push({ name: data2.characters[0].name, location: data2.characters[0].location }); */


for (i=0; i< data2.characters.length; i++) {
    
    obj["characters"].push({ name: data2.characters[i].name, location: data2.characters[i].location });
}

function getCityCoord() {
   const search1 = cityArr.find(element => element[0] ==='Chicago');
   console.log(search1);

}
getCityCoord();
var mycities = '{"cities":[{"id":4887398,"coord":{"lon":-87.650047,"lat":41.850029},"country":"US","name":"Chicago"}]}'
const objcities =  JSON.parse(mycities);
//const objc = JSON.parse(citiesmin.json);


//const objcities = JSON.parse(cities);

//objcities["characters"].push({ name: "Test", location: "Chicago" });
/* obj["characters"].push({ name: data2.characters[0].name, location: data2.characters[0].location }); */


for (i=0; i< cityArr.length; i++) {
   // objcities["characters"].push({ name: data2.characters[i].name, location: data2.characters[i].location });
    /* objcities["cities"].push({
        "id": objc.cities[i].id, 
        "name":objc.cities[i].name,
        "lon":objc.cities[i].coord.lon,
        "lat":objc.cities[i].coord.lat}); */
   
         objcities["cities"].push({
            "id":    cityArr[i][4],
            "name":  cityArr[i][0],
            "lon":   cityArr[i][3],
            "lat":   cityArr[i][2]
         });
        
}
console.log(objcities);
});
/* 
try {
   var config = {
       method: 'get',
       url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=345fb44947503a9fb445dfe861d317af`,           
       headers: {}
   };

   axios(config)
       .then(function (response) {
           console.log(JSON.stringify(response.data));
           weatherData = response.data;
       })
       .catch(function (error) {
           console.log(error);
       });
   
} catch (err) {
   console.log(err)
   
}
 */