# GamePedia

### Register :

```sh
URL: http://localhost:3000/users/register
METHOD : POST
Data Input / req.body:
    {
        name: invoker
        email: invoker@gmail.com
        password: invoker
    }
Response Status : 201
    {
        "_id": "5d02395d37a42c141044c4ff",
        "name": "invoker",
        "email": "invoker@gmail.com",
        "password": "$2a$10$uTZld7EJQ1RGQKDipBR39.8QkarmDqKcXuqym08dVvzb6HLwaXPga",
        "__v": 0
    }
Response Status : 500
    {
        "message": "Internal Server Error!"
    }
---------------------------------------------------------------
If email format wrong
Response Status : 400
    {
        "message": "User validation failed: email: Invalid format email"
    }
---------------------------------------------------------------
If email duplikat
Response Status : 400
    {
        "message": "User validation failed: email: Email is already registered"
    }
--------------------------------------------------------------
If name, email or password empty
Response Status : 400
    {
        "message": "User validation failed: name: Name is required, email: Email is required, password: Password is required"
    }
```


### Login :

```sh
URL: http://localhost:3000/users/login
METHOD : POST
Data Input / req.body:
    {
        email: invoker@mail.com
        password: invoker
    }
Response Status : 201
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMDIzOTVkMzdhNDJjMTQxMDQ0YzRmZiIsImVtYWlsIjoiaW52b2tlckBnbWFpbC5jb20iLCJpYXQiOjE1NjA0MjY5OTQsImV4cCI6MTU2MDUxMzM5NH0.OTskbR3U1arIFUjUPWAKzUk6_GdfaxlPUvLRRJDh9zU",
        "id": "5d02395d37a42c141044c4ff",
        "name": "invoker",
        "email": "invoker@gmail.com"
    }
Response Status : 500
    {
        "message": "Internal Server Error!"
    }
---------------------------------------------------------------
If email or password wrong
Response Status : 400
   {
        "message": "email/password wrong!"
    }
```
------------------------------------------------------

### Get Dota Heroes :

```sh
URL: http://localhost:3000/dota/heroes
METHOD : GET

Response Status : 200
 [
    {
        "id": 1,
        "name": "Anti-Mage",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Escape",
            "Nuker"
        ],
        "img": "https://api.opendota.com/apps/dota2/images/heroes/antimage_full.png?",
        "cm_enabled": true
    },
    {...},
    {...}
]
Response Status : 500
    {
        "message": "Internal Server Error!"
    }
---------------------------------------------------------------
```