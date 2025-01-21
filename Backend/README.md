# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
    - `firstname` (string, required): User's first name (minimum 3 characters).
    - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
    - `fullname` (object).
        - `firstname` (string): User's first name (minimum 3 characters).
        - `lastname` (string): User's last name (minimum 3 characters).
    - `email` (string): User's email address (must be a valid email).
    - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token

## `/users/login` Endpoint

### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
    - `fullname` (object).
        - `firstname` (string): User's first name (minimum 3 characters).
        - `lastname` (string): User's last name (minimum 3 characters).
    - `email` (string): User's email address (must be a valid email).
    - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token

## `/users/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated user.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header: `Authorization: Bearer <token>`

### Example Response

- `user` (object):
    - `fullname` (object).
        - `firstname` (string): User's first name (minimum 3 characters).
        - `lastname` (string): User's last name (minimum 3 characters).
    - `email` (string): User's email address (must be a valid email).

## `/users/logout` Endpoint

### Description

Logout the current user and blacklist the token provided in cookie or headers

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header or cookie:


## `/captains/register` Endpoint

### Description

Registers a new captain by creating a captain account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
    - `firstname` (string, required): User's first name (minimum 3 characters).
    - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).
- `vehicle` (object):
    - `color` (string, required): vehicle color (minimum 3 characters).
    - `plate` (string, required): vehicle number plate (minimum 3 characters).
    - `capacity` (number, required): vehicle passenger capacity(Capacity must be at least 1).
    - `vehicleType` (string, required): vehicle type (must be 'car', 'motorcycle', 'auto').

### Example Response

- `captain` (object):
    - `fullname` (object).
        - `firstname` (string): Captain's first name (minimum 3 characters)
        - `lastname` (string): Captain's last name (minimum 3 characters).
    - `email` (string): Captain's email address (must be a valid email).
    - `password` (string): Captain's password (minimum 6 characters).
    - `vehicle` (object).
        - `color` (string): Vehicle color.
        - `plate` (string): Vehicle number plate.
        - `capacity` (number): Vehicle passenger capacity.
        - `vehicleType` (string): type of vehicle.
- `token` (String): JWT Token


## `/captains/login` Endpoint

### Description

Authenticates a captain using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): Captain's email address (must be a valid email).
- `password` (string, required): Captain's password (minimum 6 characters).

### Example Response

- `captain` (object):
    - `fullname` (object).
        - `firstname` (string): Captain's first name (minimum 3 characters)
        - `lastname` (string): Captain's last name (minimum 3 characters).
    - `email` (string): Captain's email address (must be a valid email).
    - `password` (string): Captain's password (minimum 6 characters).
    - `vehicle` (object).
        - `color` (string): Vehicle color.
        - `plate` (string): Vehicle number plate.
        - `capacity` (number): Vehicle passenger capacity.
        - `vehicleType` (string): type of vehicle.
- `token` (String): JWT Token

## `/captains/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated captain.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header: `Authorization: Bearer <token>`

### Example Response

- `captain` (object):
    - `fullname` (object).
        - `firstname` (string): Captain's first name (minimum 3 characters)
        - `lastname` (string): Captain's last name (minimum 3 characters).
    - `email` (string): Captain's email address (must be a valid email).
    - `vehicle` (object).
        - `color` (string): Vehicle color.
        - `plate` (string): Vehicle number plate.
        - `capacity` (number): Vehicle passenger capacity.
        - `vehicleType` (string): type of vehicle.
- `token` (String): JWT Token

## `/captains/logout` Endpoint

### Description

Logout the current captain and blacklist the token provided in cookie or headers

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header or cookie: