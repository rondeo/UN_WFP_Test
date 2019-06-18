# UN_WFP_Test

https://un-wfp-test.herokuapp.com/
https://drive.google.com/file/d/1xZbuQ9bhAUSGBxnJWNmD6mdZRsw3BBXZ/view

## Background
A common scenario that we face in our unit at the World Food Programme is to read data
from APIs and store it in a database for it to be used by other pipelines, applications or
analysts. For this task we have data for a demo questionnaire that was collected using the
ONA platform. This platform has a RESTful API endpoint (docs here) that makes it possible to
retrieve the data. The unique identifier of the dataset that you will need is 185260. The form
is public, so no authentication is required. 

## Instructions
You will need to build an application that:
1. makes a GET request to pull the data from this endpoint
2. transform the data in the desired format
3. saves it into a database of your choice (bonus points for NoSQL)

Keep in mind that ideally this application should be scalable, i.e. in the future we may want
to use it to handle 10s or 100s of similar pipelines and we want you to keep this in mind for
the app’s architecture. Regarding the stack, you are free to use whatever you want to solve the task, however
bonus points if you use open source tools and python.

## Tools / Resources / Technologies
### Model
* MongoDB
* mLab

### View
* HTML
* CSS
* Javascript
* React
* Bootstrap

### Controller
* Node.js
* Express.js

### General
* Heroku
* Git
* VSCode
* Postman

