# TIME-WORKERS

Demo Videos

* Version Web Demo:
https://www.dropbox.com/s/2au7ihxlezeh4wi/demoWeb.mov?dl=0

* Version Mobile Demo:
https://www.dropbox.com/s/cnk93sf0fqyybdp/demoMobile.mov?dl=0


# Intro

With this development, a worker can register the entry time, the out time and the lunch moments.

Some plus feature:
* I created my own Api.
* There is a timer that shows the worker on the screen the time that he is working so far on that day
* Can observe the record of all the worked days and know if it is below its expected hours or not.
* Can register and login a worker


## Techs

Some technologies used: React, React-Redux, Sequelize, Express, Node.

React-Hooks will be found in the code.

For the style I have decided to use 100% Styled Components and Sass.

LocalStorage, History and others are also implemented.

Docker.

Passport.


### Start Point

* Clone your fork to your own machine

To make everything easier, I have implemented Docker! 

* Go to the root of the directory
* Run `docker-compose build` and then `docker-compose-up`. You can have a coffee and be back in 5 minutes ...
* Start the webapp on http://localhost:8080/



#### Final Thoughts

I am aware that the ideal would be to do all the logic work in the Backend. As this challenge was focused on observing Frontend abilities, I have decided to do operations in this regard. For example, the calculation of hours worked and performance.

This development was created against the clock with a lot of effort and dedication. I will continue to improve it after the formal delivery. I plan to create an administrator user that can determine the expected hours of work for the workers, as well as the work periods. Finally, I can also create tests with mocha and chai