###### flips-challenge
# Flip's Challenge
## Powered By [Datapoint.Software](https://datapoint.software/pt/)

### Summary:

Your challenge is to develop an Angular App from zero, using a public API (https://openweathermap.org) and possibly deploy it.


## The challenge:

Your challenge will be to develop a website using an existing library in which it is possible to obtain the 5-day weather forecast for a city entered by the user. 

In all cases it must show the current temperature. If it is not possible to obtain the forecast, the API returns an error and you should expect it and throw/present it.

As a data source, the use of APIs in JSON format is preferred.

The UI/UX is not the target of evaluation here, but it should not be confusing. You can use [Tailwind CSS](https://tailwindcss.com/) or [SCSS](https://sass-lang.com/) to stylize. Use your preferred UI library at will.


## Extra Challenges (with no specified order of importance):

- The user must be able to select the temperature measurement unit between Celsius and Fahrenheit. When making this change, all temperatures presented must adapt to the new measurement without having a complete refresh of the page;
- Present a graph with the evolution of the temperature per day;
- Anything else you deem important to show on the website


## Useful Tips:

- The [OpenWeatherMap API](https://openweathermap.org/api) gives all the necessary data for the challenge execution:
    - The APPID for this challenge is
        ```js
        APPID=cb55177ca24b78ba405c195f7e842bcb
        ```
    - The weather API is:
        ```js
        GET
        https://api.openweathermap.org/data/2.5/weather?q=Lisboa&APPID={APPID}
        ```
    - The forecast API is:
        ```js
        GET
        https://api.openweathermap.org/data/2.5/forecast?q=Lisboa&APPID={APPID}
        ```
- To be able to make requests to an external API it may be necessary to change the hosts file;
- You should use GitHub Pages to deploy your finished app. But you can use any other tool, just make sure the app is accessible from an URL, and not just locally;
- The challenge should be approached by parts, committing everything that is working properly.


## Evaluation Metrics:

The evaluation parameters for this challenge are:
- Ability to develop a working app from zero, with working functionalities;
- Ability to read, interpret and implement features from API documentation;
- Ability to deploy;
- Ability to meet deadlines;
- Structure and quality of the code (review made on a date after the challenge)


## Deadline:

The challenge starts at 9:30.

At 16:15 the challenge will end, and at 16:30 you will present the results live.

## Have fun!