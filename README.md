## Simple Backend Example to demonstrate how API works, JWT tokens and storing and retriving info from MongoDB


[this folder](https://github.com/parthvadhadiya/fakebook_node_backend/tree/master/mongoInfraDocker) contains mongodb docker image to getting started


- api aliveness test
```
curl -X GET \
  http://localhost:5000/api
```

- signup admin user
```
curl -X POST \
  http://localhost:5000/api/signup \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"user": "admin",
	"firstname": "abcadmin",
	"lastname": "xyz",
	"surname": "pql",
	"mobilenumber": "13531513531",
	"email": "abc@gmail.com",
	"address": "assaalfslkf",
	"dob": "2 april",
	"password": "abcPass"
}'
```

- signup user
```
curl -X POST \
  http://localhost:5000/api/signup \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: d98ceb76-96bd-aecb-31c6-af2ac3eb435a' \
  -d '{
	"user": "normal",
	"firstname": "abcadmin",
	"lastname": "xyz",
	"surname": "pql",
	"mobilenumber": "13531513531",
	"email": "abc@gmail.com",
	"address": "assaalfslkf",
	"dob": "2 april",
	"password": "abcPass"
}'
```

- login user
```
curl -X POST \
  http://localhost:5000/api/login \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"email": "abc@gmail.com",
	"password": "abcPass"
}'
```

- create post
```
curl -X POST \
  http://localhost:5000/api/posts \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVlZmM4ZDM0MDhjYmU5M2MwOTJlNTk0YiIsInVzZXIiOiJhZG1pbiIsImZpcnN0bmFtZSI6ImFiY2FkbWluIiwibGFzdG5hbWUiOiJ4eXoiLCJzdXJuYW1lIjoicHFsIiwibW9iaWxlbnVtYmVyIjoiMTM1MzE1MTM1MzEiLCJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJhZGRyZXNzIjoiYXNzYWFsZnNsa2YiLCJkb2IiOiIyIGFwcmlsIiwicGFzc3dvcmQiOiIkMmIkMTAkTGFHLnJSNmw2T0NucWkvQ0pETFZFLkhVcVNKZUJ2dGNFOVhxQ2ozRHRvNWFZWEx0SFZYdFMifSwiaWF0IjoxNTkzNjEwMDY3fQ.1mNiRYpmn4nt7evT-cRXW6KcrzUWAeD6wv0IZKPbaoY' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"title":"deep learning",
	"body": "blah blah blah about DL"
}'
```

- get users post
```
curl -X GET \
  http://localhost:5000/api/getposts \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVlZmM4ZDM0MDhjYmU5M2MwOTJlNTk0YiIsInVzZXIiOiJhZG1pbiIsImZpcnN0bmFtZSI6ImFiY2FkbWluIiwibGFzdG5hbWUiOiJ4eXoiLCJzdXJuYW1lIjoicHFsIiwibW9iaWxlbnVtYmVyIjoiMTM1MzE1MTM1MzEiLCJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJhZGRyZXNzIjoiYXNzYWFsZnNsa2YiLCJkb2IiOiIyIGFwcmlsIiwicGFzc3dvcmQiOiIkMmIkMTAkTGFHLnJSNmw2T0NucWkvQ0pETFZFLkhVcVNKZUJ2dGNFOVhxQ2ozRHRvNWFZWEx0SFZYdFMifSwiaWF0IjoxNTkzNjEwMDY3fQ.1mNiRYpmn4nt7evT-cRXW6KcrzUWAeD6wv0IZKPbaoY' \
  -H 'cache-control: no-cache' \
  
```

