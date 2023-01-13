## Type:GET fetch all customers
`http://localhost:5000/api/v1/customers/`

API endpoint to get all customers from the database.

> This request will always be successful and return an array of customers with Status code of 200.

> If There are no users in the database this will just return an empty array.

***

## Type:GET fetch customer
`http://localhost:5000/api/v1/customers/:id`

API endpoint to fetch a single customer with Id field.

> A succesfull API request will return a single customer object with status code of 200.

> Request for a non existing customer will return status code of 404

***
## Type:POST create customer
`http://localhost:5000/api/v1/customers/`

API endpoint to create a customer.

> A Successful API request will return status code of 201.

**The body structure of this request is following (all fields are mandatory):**
`{
    username: string,
    email: string,
    first_name: string,
    last_name: string
}`

***

## Type:PATCH update customer
`http://localhost:5000/api/v1/customers/:id`

API endpoint to update a customer with an Id field.

> A Successful API request will return status code of 200 with the body of updated customer.

**Sample body:**
`{
    "username": "johnn-doe",
    "email": "johnn.doe@mail.com",
    "firstName": "Johnn"
}`

***

## Type:DELETE delete customer
`http://localhost:5000/api/v1/customers/:id`

API endpoint to delete customer with an Id field.
