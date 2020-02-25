# Soccer Players API
---
## RESTful CRUD API DGM 4790
---
### Mongoose as your data modeling tool
Her is the link to the Schema created using mongoose as the modeling tool
[https://github.com/josecis0216/RESTful-CRUD/blob/master/models/post.js]
### Cloud-based MongoDB as your data store
I am using MongoDB Atlas as the data store 
[https://github.com/josecis0216/RESTful-CRUD/blob/master/app.js]
### At least 3 endpoints to GET data from your server
I have 2 endpoints in [players.js](https://github.com/josecis0216/RESTful-CRUD/blob/master/routes/players.js)
### At least 1 endpoint allowing user to update an item via PUT or PATCH HTTP verbs
[players.js](https://github.com/josecis0216/RESTful-CRUD/blob/master/routes/players.js) contains the endpoint
Using POST, the path /player/post/:postId along with the id of the post that will get updated will update post. You must select
"form data" in the body and use either *name*, *position*, *team* key field along with value to edit soccer player data
in the DB
### At least 1 endpoint allowing user to create an item via POST
[players.js](https://github.com/josecis0216/RESTful-CRUD/blob/master/routes/players.js) contains the endpoint
the path /player/post/:postId and using *name*, *position*, *team* key field along with value in the body plus also selecting
form data will create a post in the DB
### At least 1 endpoint allowing user to delete an item via DELETE
[players.js](https://github.com/josecis0216/RESTful-CRUD/blob/master/routes/players.js) contains the endpoint
the path /player/post/:postId including the id of the post in Postman will delete the selected player from the DB
### Your datastore will contain at least 25 items
I have created 25 soccer players that play different positions and for different teams
[Get All Players](https://shrouded-depths-60268.herokuapp.com/player/posts)
### Your app will be deployed to production using some service like Heroku, Digital Ocean, etc.
(https://shrouded-depths-60268.herokuapp.com/)
### All of your source code will be properly uploaded to GitHub
[GitHub Repo](https://github.com/josecis0216/RESTful-CRUD)
### Your ReadMe file will accurately describe the server install process (if any) and how to use the APIs