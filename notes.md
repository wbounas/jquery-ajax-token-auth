## Delivery Notes

### Framing

#### Authentication vs Authorization

##### Authentication
- identification (R)

##### Authorization
- access control
- ownership (C U D)

### Curl requests
- is curl a client?
- is ajax a client?
- what is the api? (server)
- what language is curl? (NOT JS)
- what language is ajax (JS)
- what language is the server? (doesn't matter - we are working with the client)

#### Curl HEADER
- response header
- request header

### API
- what does the I stand for?
  - interface: something goes in, something comes out
- server is a black box. Don't worry about the server in the game project...just read the documentation
- the documentation provides the _contract_ that explains what will happen when a request comes in, and something comes out
- read the docs != you are an idiot. It means, the explanation for how it works is there, and that's the authoritative source.

### Token
- Token is a string that you get back after authenticating
- Send it with each authenticated request. It's a string. You pass it in the header of the request.
- APIs are stateless. Servers are stateless. HTTP is a stateless protocol.
 - it knows nothing about you. 
- Even though you are storing something locally in a cookie, it doesn't mean it knows who you are.
  - You need to send the token with each request so the server knows who you are
  - we are going to store it in memory. meaning if you refresh the app, it goes away!
    - how does facebook store the token? In memory?

