# `template-express-jwt`

node module containing jwt authentication

## Installation

clone this repository and navigate to api folder
    
```sh
$ npm install
```

## Usage

### Run Service
navigate to api folder
   
On windows open command prompt or Windows Powershell

```sh
$ npm run devWin
```

### On Linux open bash

```sh
$ npm run devLinux
```

### Routes

```
    GET /ping
    GET /login
    GET /protected
```

### Examples

method: GET
   
route : /ping

```sh
$ curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://yourdomain.com:3000/ping
```

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 6
ETag: W/"6-C99yNl2XblAeEPCZTW1AXA"
Vary: Accept-Encoding
Date: Wed, 14 Dec 2016 19:56:34 GMT
Connection: keep-alive
```

method: POST

route : /login # to get token

```sh
$ curl --data "username=admin&password=password" http://yourdomain.com:3000/login
```

```
{"token":"TOKEN_RESULT_HERE"}
```

method: GET
route : /protected
with token as a parameter

```sh
$ curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://yourdomain.com:3000/protected?token=TOKEN_HERE
```

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 7
ETag: W/"7-6R7QkjXkIaL/69Fsj4tj4A"
Vary: Accept-Encoding
Date: Wed, 14 Dec 2016 20:08:51 GMT
Connection: keep-alive
```

method: GET

route : /protected

with token as header parameter

```sh
$ curl -i -H "Accept: application/json" -H "Content-Type: application/json" -H "X-Access-Token: TOKEN_HERE" -X GET http://yourdomain.com:3000/protected
-or-
$ curl -i -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer TOKEN_HERE" -X GET http://yourdomain.com:3000/protected
```

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 7
ETag: W/"7-6R7QkjXkIaL/69Fsj4tj4A"
Vary: Accept-Encoding
Date: Wed, 14 Dec 2016 20:18:15 GMT
Connection: keep-alive
```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## Author

[Pedro William Baiardi de Moraes](https://github.com/PedroWilliam) ([william.baiardi@hotmail.com](mailto:william.baiardi@hotmail.com))
