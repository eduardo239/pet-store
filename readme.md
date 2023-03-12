# PET STORE API REST

## User

> url = http://localhost:3000/v1/users

- POST /sign-up - registration
- POST /sign-in - authentication
- GET / - get all users [pagination]
- GET /{id} - get user by user id
- PUT /{id} - edit user by user id
- GET /{id}/address - get user address by user id
- PUT /{id}/address - update user with new address
- GET /{id}/pets - get user pet list [pagination] by user id
- GET /{id}/orders - get user order list [pagination] by user id
- GET /{id}/sales - get user sales list [pagination] by user id
- DEL /{id} - delete user by user id

## Pets

> url = http://localhost:3000/v1/pets

- GET / - get all pets [pagination]
- GET /{id}/ - get pet by pet id
- POST / - add new pet and add to user pet list
- DEL /{id} - delete pet by pet id
- [[TODO]]: - POST /{id}/comments - add new comment to pet comment list
- DEL /{pid}/comments/{cid} - delete comment by comment id

## Orders

> url = http://localhost:3000/v1/orders

- GET / - get all orders [pagination]
- POST / - add new order and add to user orders list
- GET /{id} - get order by order id
- DEL /{id} - delete order by order id

## Comments

> url = http://localhost:3000/v1/comments

- GET / - get all comments [pagination]

## Admin

> url = http://localhost:3000/v1/users

- DEL /delete-all - delete all users

> url = http://localhost:3000/v1/pets

- DEL /delete-all - delete all pets

> url = http://localhost:3000/v1/orders

- DEL /delete-all - delete all orders
