[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# API Token Authentication

## Introduction

Using curl and jQuery.ajax to access an authenticated API with html forms to
sign up, sign in, and sign out of an API. We'll also change our passwords. The
API uses Token authentication and we'll see how to make authenticated request
(sign out and change password).

## Prerequisites

- [http-study](https://git.generalassemb.ly/ga-wdi-boston/http-study)
- [json-study](https://git.generalassemb.ly/ga-wdi-boston/json-study)

## Objectives

By the end of this talk, developers should be able to:

- Make HTTP requests using `curl`, the browser address bar, and AJAX to:
  - access an authenticated API.

## Instructions

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
this repository.
1. Create a new branch, `training`, for your work.
1. Install dependencies with `npm install`.

## Using web APIs

Why is authentication an important topic?

Web APIs often require some sort of authentication.  The game API requires users
to register and then login to gain an authentication token.

We'll use `curl` and `jQuery.ajax` to explore HTTP further. Then we'll make
requests to and receive responses from a HTTP server hosted at
https://ga-library-api.herokuapp.com.

The operations we'll perform:

| verb   | path                   | parameters |
| ----   | ----                   | ---------- |
| POST   | `/sign-up`             | `credentials` containing `email`, `password`, `password_confirmation` |
| POST   | `/sign-in`             | `credentials` containing `email` and `password` (response contains auth data) |
| PATCH  | `/change-password/:id` | `passwords` containing `old` and `new` (requires Authorization header) |
| DELETE | `/sign-out/:id`        | None (requires Authorization header) |

## CURL Gotchas

We'll be using a lot of curl scripts as we send requests to our API, so it's
important to remember some of the common pitfalls in writing and running curl
scripts.

1. The following **are not** valid in a curl request:
    - Trailing commas in the json body.
    - Comments after the `curl` keyword.
    - Missing back slashes after each option.

1. We use constants in our curl requests, which are in `CAPITAL_LETTERS`.
    Your curl request will not work correctly if you don't assign values to
    those constants. (i.e. `TITLE='Ancillary Justice'`).
    - Spaces between values assigned to variables in the terminal **are not**
      valid and **will not** run your curl script.

## Registering with the API

### Code along: Write a sign-up script

Let's register with the API.

We'll first modify `scripts/url-encoded/sign-up.sh` to send a request with
_urlencoded_ data to the `ga-library-api`.

- What response do we receive from the API?

Now we'll modify `scripts/json/sign-up.sh` to send a request with _json_ data to
the `ga-library-api`.

How is the API response different from sending urlencoded vs json data?

### Code along: Sign-up from our client

Now let's put code into `assests/scripts/auth/*` to get another "e-mail" address
registered with the API.

## Logging into the API

### Code along: Write a sign-in script

Now with json data in `scripts/json/sign-in.sh`, let's sign in to the account
we just created.

### Lab: Sign-in from the client

Add a form to `index.html` and code to `assets/scripts/auth/*` to login to the
API.

What should we do with the data returned by the API?

## Changing the password

### Code along: Write/Execute a change-password scripts

We'll use `scripts/json/change-password.sh` to change a password. After that
we'll verify that we can no longer authenticate using the old password.

### Lab: Change password from the client

Add a change password form to `index.html` and code to `assets/scripts/auth/*`
to change the password.

## Signing out

Signing out invalidates the the current token.

### Code along: Write/Execute a sign-out script

We'll use `scripts/sign-out.sh` to sign out of the API. We'll verify that the
token we used is no longer valid.

### Lab: Sign out from the client

Add a sign out form to `index.html` and code to `assets/scripts/auth/*` to sign
out of the API.

## Authenticated Resources

Now that we can sign up and sign in to our API, let's add and modify our own
resources.

### Code along: Create an Example

First, we'll modify `scripts/examples/create.sh` to make an authenticated
request to our API to create an example.

Now, let's add code to `assests/scripts/examples/*` to create an example from
the browser.

### Lab: Destroy an Example

Modify `scripts/examples/destroy.sh` to make an authenticated request to our
API to destroy an example.

Add code to `assests/scripts/examples/*` to destroy an example from the browser.

### Lab: Update an Example

Modify `scripts/examples/update.sh` to make an authenticated request to our
API to update an example.

Add code to `assests/scripts/examples/*` to update an example from the browser.

## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt reformat`: reformats all your code in a standard style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt test`: runs any automated tests, depends on `grunt build`
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## Additional Resources

- [httpbin.org](http://httpbin.org/post)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
