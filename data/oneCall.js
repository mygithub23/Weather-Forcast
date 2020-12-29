const weatherData = [
{
    "lat": 33.44,
    "lon": -94.04,
    "timezone": "America/Chicago",
    "timezone_offset": -21600,
    "current": {
        "dt": 1608874124,
        "sunrise": 1608815873,
        "sunset": 1608851643,
        "temp": 32,
        "feels_like": 25.84,
        "pressure": 1021,
        "humidity": 81,
        "dew_point": 27.45,
        "uvi": 0,
        "clouds": 1,
        "visibility": 10000,
        "wind_speed": 3.36,
        "wind_deg": 240,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ]
    },
    "daily": [
        {
            "dt": 1608832800,
            "sunrise": 1608815873,
            "sunset": 1608851643,
            "temp": {
                "day": 40.48,
                "min": 29.66,
                "max": 43,
                "night": 32,
                "eve": 36.75,
                "morn": 30.78
            },
            "feels_like": {
                "day": 28.09,
                "night": 22.69,
                "eve": 30.58,
                "morn": 21.15
            },
            "pressure": 1025,
            "humidity": 59,
            "dew_point": 15.57,
            "wind_speed": 14.52,
            "wind_deg": 302,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 3,
            "pop": 0,
            "uvi": 2.21
        },
        {
            "dt": 1608919200,
            "sunrise": 1608902296,
            "sunset": 1608938077,
            "temp": {
                "day": 42.78,
                "min": 28.85,
                "max": 47.35,
                "night": 37.44,
                "eve": 39.76,
                "morn": 29.34
            },
            "feels_like": {
                "day": 34.95,
                "night": 30.4,
                "eve": 33.93,
                "morn": 21.7
            },
            "pressure": 1026,
            "humidity": 58,
            "dew_point": 20.59,
            "wind_speed": 6.82,
            "wind_deg": 299,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 2.44
        },
        {
            "dt": 1609005600,
            "sunrise": 1608988718,
            "sunset": 1609024512,
            "temp": {
                "day": 54.39,
                "min": 35.67,
                "max": 59.09,
                "night": 45.64,
                "eve": 48.94,
                "morn": 35.98
            },
            "feels_like": {
                "day": 47.97,
                "night": 38.34,
                "eve": 42.87,
                "morn": 29.57
            },
            "pressure": 1021,
            "humidity": 51,
            "dew_point": 36.81,
            "wind_speed": 6.38,
            "wind_deg": 205,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 2.59
        },
        {
            "dt": 1609092000,
            "sunrise": 1609075138,
            "sunset": 1609110949,
            "temp": {
                "day": 60.37,
                "min": 45.57,
                "max": 61,
                "night": 56.89,
                "eve": 59.16,
                "morn": 46.27
            },
            "feels_like": {
                "day": 53.56,
                "night": 53.92,
                "eve": 55.29,
                "morn": 39.69
            },
            "pressure": 1015,
            "humidity": 75,
            "dew_point": 52.47,
            "wind_speed": 13.44,
            "wind_deg": 203,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 43,
            "pop": 0.34,
            "rain": 0.4,
            "uvi": 1.58
        },
        {
            "dt": 1609178400,
            "sunrise": 1609161557,
            "sunset": 1609197388,
            "temp": {
                "day": 51.71,
                "min": 45.66,
                "max": 54.45,
                "night": 45.66,
                "eve": 47.34,
                "morn": 54.1
            },
            "feels_like": {
                "day": 43.2,
                "night": 36.19,
                "eve": 38.57,
                "morn": 51.03
            },
            "pressure": 1025,
            "humidity": 68,
            "dew_point": 41.76,
            "wind_speed": 11.7,
            "wind_deg": 62,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 88,
            "pop": 0.49,
            "rain": 0.32,
            "uvi": 2.36
        },
        {
            "dt": 1609264800,
            "sunrise": 1609247974,
            "sunset": 1609283827,
            "temp": {
                "day": 60.31,
                "min": 44.87,
                "max": 60.31,
                "night": 59.22,
                "eve": 58.32,
                "morn": 48.34
            },
            "feels_like": {
                "day": 50.68,
                "night": 51.28,
                "eve": 49.32,
                "morn": 41.52
            },
            "pressure": 1017,
            "humidity": 71,
            "dew_point": 51.21,
            "wind_speed": 17.67,
            "wind_deg": 165,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 0.78,
            "rain": 1.21,
            "uvi": 3
        },
        {
            "dt": 1609351200,
            "sunrise": 1609334389,
            "sunset": 1609370268,
            "temp": {
                "day": 47.8,
                "min": 37.98,
                "max": 50.34,
                "night": 37.98,
                "eve": 41.88,
                "morn": 47.77
            },
            "feels_like": {
                "day": 37.76,
                "night": 29.48,
                "eve": 32.54,
                "morn": 41.88
            },
            "pressure": 1013,
            "humidity": 60,
            "dew_point": 35.04,
            "wind_speed": 12.19,
            "wind_deg": 312,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 81,
            "pop": 1,
            "rain": 11.22,
            "uvi": 3
        },
        {
            "dt": 1609437600,
            "sunrise": 1609420803,
            "sunset": 1609456711,
            "temp": {
                "day": 43.41,
                "min": 31.24,
                "max": 46.31,
                "night": 33.69,
                "eve": 38.08,
                "morn": 31.24
            },
            "feels_like": {
                "day": 34.63,
                "night": 25.66,
                "eve": 30,
                "morn": 24.21
            },
            "pressure": 1025,
            "humidity": 60,
            "dew_point": 26.11,
            "wind_speed": 8.86,
            "wind_deg": 306,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": 39,
            "pop": 0,
            "uvi": 3
        }
    ]
}
]