+++
title = "Getting Started"
subtitle="Microweb framework built in Python"
description = "Flask is a micro web framework written in Python with no extra baggage attached. You can build a Flask application up and running in couple of minutes. Flask comes with a simple web server to test the application during development. But you need a production ready web server, like Nginx, for final deployment. In this series I will discuss about some real world applications where we used Flask. There are lot of extensions available to build complex applications."

date = "2019-03-11"
+++
## Installation

Flask can be installed with `pip` using the following command:

```bash
$ pip3 install flask
```

> It is preferred to have a virtual environment enabled for all Python projects. Refer to this article on how to setup Virtual environments.

## Simple Web Application

Let's write a simple web application with `index` route.

{{< mygist url="https://gistify.saisyam.com/https://github.com/saisyam/python-flask/blob/master/simple/app.py" >}}

Write the above code in a file called, `app.py`. Execute the above code using the following command:

```bash
$ python3 app.py
```
The output will be:

```bash
 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 ```

Opening the browser with the above URL, `http://127.0.0.1:5000/` will open the page with **Welcome to Flask!** displayed.

## Understanding the application
Let's look bit deeper into the application:


{{< mygist url="http://gistify.saisyam.com/https://github.com/saisyam/python-flask/blob/master/simple/app.py/l/1,2" >}}


In the above two statements we are importing Flask class and creating an instance of Flask class, `app`. The `__name_` paramater to the Flask object is used to find the resources on the file system related to this application. We will discuss about this in our later articled.

{{< mygist url="http://gistify.saisyam.com/https://github.com/saisyam/python-flask/blob/master/simple/app.py/l/4-6" >}}


We have created our first route. Route is the URL which has some meaning. Here we are creating the route for base URL. Some examples of routes can be, `/users/`, `/products/` which represents list of users and products respectively. We will discuss about routes in future articles. We are returning a string `Welcome to Flask!` with H1 tag. Flask also supports templates where we have more detailed HTML pages.

The last section is where we run the application. By default Flask run on port `5000` and bind to `localhost`, but we can make it to run on different ports and accessible outside the localhost by providing `host` and '`port` paramteters.

{{< mygist url="http://gistify.saisyam.com/https://github.com/saisyam/python-flask/blob/master/simple/app.py/l/8,9" >}}








