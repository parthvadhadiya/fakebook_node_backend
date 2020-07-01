```
curl -X GET \
  http://localhost:5000/api
```

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
curl -X POST \
  http://localhost:5000/api/login \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"email": "abc@gmail.com",
	"password": "abcPass"
}'
```

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

