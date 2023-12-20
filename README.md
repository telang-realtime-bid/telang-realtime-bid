# telang-realtime-bid

Telang - Real Time Bid

# Endpoints

## List Of Available Endpoints

## 1. User

- POST /register
- POST /login

## 2. Product

- GET /products
- POST /products
- DELETE /products/:productId
- GET /product/:productId
- GET /products/:productId
- POST /bid
- GET /user/products
- GET /bid/:productId
- GET /user/me

## * User Endpoints

### 1. POST /register

Request

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

Response (201 - Created)

```json
{
  "id": "integer",
  "email": "string"
}
```

Response (400 - Bad Request)

```json
{
    "message": "Full Name is required"
}
OR
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
OR
{
    "message": "Email must be unique"
}
OR
{
    "message": "Invalid email format"
}

```

### 2. POST /login

Request

- body:

```json
{
  "fullname": "string",
  "email": "string",
  "password": "string"
}
```

Response (200 - OK)

```json
{
  "access_token": "string"
}
```

Response (400 - Bad Request)

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

Response (401 - invalidUser)

```json
{
  "message": "Invalid email/password"
}
```

## * Product Endpoints

### 1. GET /products

Request

- headers:

```json
{
    "access_token": "string"
}
```

Response (200 - OK)

- body:

```json

{
    "message": "Successfully get the data",
    "data": [
        {
            "id": 1,
            "name": "iPhone 12 Pro Max",
            "description": "iPhone 12 Pro Max.Layar Super Retina XDR 6,7 inci yang lebih besar. Ceramic Shield dengan ketahanan jatuh empat kali lebih baik.",
            "imageUrl": "https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/18e036402fb6f9a6fd805fbabad24f39/helix/01-APPLE-8DVPHAPP0-APPMGDL3ID-A-PacificBlueRevSS.jpg",
            "currentBid": 0,
            "sold": false,
            "UserId": 1,
            "createdAt": "2023-12-19T12:58:32.538Z",
            "updatedAt": "2023-12-19T12:58:32.538Z",
            "User": {
                "id": 1,
                "fullname": "user1",
                "email": "user1@mail.com",
                "createdAt": "2023-12-19T12:58:32.528Z",
                "updatedAt": "2023-12-19T12:58:32.528Z"
            }
        },
        {
            "id": 2,
            "name": "MacBook Pro M1 2020 13inch",
            "description": "Dilengkapi CPU 8-core yang mampu menangani berbagai tahapan kerja yang kompleks dalam fotografi, pemrograman, pengeditan video, dan lainnya, dengan mudah.",
            "imageUrl": "https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/46f3b2ddfd2ff4f56a858f4aed015692/helix/01-APPLE-8DVLPAPP0-APPMYDC2ID-A-SilverRevSS.jpg",
            "currentBid": 0,
            "sold": false,
            "UserId": 2,
            "createdAt": "2023-12-19T12:58:33.538Z",
            "updatedAt": "2023-12-19T12:58:33.538Z",
            "User": {
                "id": 2,
                "fullname": "user2",
                "email": "user2@mail.com",
                "createdAt": "2023-12-19T12:58:33.528Z",
                "updatedAt": "2023-12-19T12:58:33.528Z"
            }
        },
        {
            "id": 3,
            "name": "AirPods (3rd generation) Lightning Charging Case",
            "description": "Dilengkapi CPU 8-core yang mampu menangani berbagai tahapan kerja yang kompleks dalam fotografi, pemrograman, pengeditan video, dan lainnya, dengan mudah.",
            "imageUrl": "https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/796a057befc678808bbaf7f419f7ccc6/helix/01-APPLE-846EAAPP0-APPMPNY3ID-A-White.jpg",
            "currentBid": 0,
            "sold": false,
            "UserId": 1,
            "createdAt": "2023-12-19T12:58:34.538Z",
            "updatedAt": "2023-12-19T12:58:34.538Z",
            "User": {
                "id": 1,
                "fullname": "user1",
                "email": "user1@mail.com",
                "createdAt": "2023-12-19T12:58:32.528Z",
                "updatedAt": "2023-12-19T12:58:32.528Z"
            }
        },
        ...,
    ]
}
```

### 2. POST /products

Request

- headers:

```json
{
    "access_token": "string"
}
```

Response (200 - OK)

- body:

```json
{
    "id": 25,
    "name": "Mac 24 inci (M1, Dua Port, 2021)",
    "description": "Dengan desain luar biasa tipis berkat chip Apple M1. Layar Retina 4.5K 24 inci yang menghanyutkan dengan lebih dari satu miliar warna yang memberikan gambar besar dengan detail yang menakjubkan.",
    "imageUrl": "https://cdn.eraspace.com/media/catalog/product/i/m/imac_24_inch_2_port_blue_1_2.jpg",
    "UserId": 6,
    "updatedAt": "2023-12-19T14:09:03.336Z",
    "createdAt": "2023-12-19T14:09:03.336Z",
    "currentBid": 0,
    "sold": false
}
```

### 3. DELETE /products/:productId

Request

- headers:

```json
{
    "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

Response (200 - OK)

```json
{
    "message": "Successfully Deleted Product"
}
```

Response (400 - Bad Request)

```json
{
    "message": "Invalid product ID"    
}
```

Response (404 - Not Found)

```json
{
    "message": "Product not found"
}
```

### 4. GET /products/:productId

Request

- headers:

```json
{
    "access_token": "string"
}
```

Response (200 - OK)

```json
        {
            "id": 3,
            "name": "AirPods (3rd generation) Lightning Charging Case",
            "description": "Dilengkapi CPU 8-core yang mampu menangani berbagai tahapan kerja yang kompleks dalam fotografi, pemrograman, pengeditan video, dan lainnya, dengan mudah.",
            "imageUrl": "https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/796a057befc678808bbaf7f419f7ccc6/helix/01-APPLE-846EAAPP0-APPMPNY3ID-A-White.jpg",
            "currentBid": 0,
            "sold": false,
            "UserId": 1,
            "createdAt": "2023-12-19T12:58:34.538Z",
            "updatedAt": "2023-12-19T12:58:34.538Z",
            "User": {
                "id": 1,
                "fullname": "user1",
                "email": "user1@mail.com",
                "createdAt": "2023-12-19T12:58:32.528Z",
                "updatedAt": "2023-12-19T12:58:32.528Z"
            }
        },
```

Response (404 - Not Found)

```json
{
    "message": "Product not found"
}
```

### 5. GET /products/:productId

Request

- headers:

```json
{
    "access_token": "string"
}
```

Response (200 - OK)

```json
[
    {
        "id": 1,
        "bidAmount": 50000,
        "UserId": 1,
        "ProductId": 1,
        "createdAt": "2023-12-19T13:09:30.061Z",
        "updatedAt": "2023-12-19T13:09:30.061Z",
        "User": {
            "id": 1,
            "fullname": "user1",
            "email": "user1@mail.com",
            "createdAt": "2023-12-19T12:58:15.823Z",
            "updatedAt": "2023-12-19T12:58:15.823Z"
        }
    }
]
```

Response (404 - Not Found)

```json
{
    "message": "Product not found"
}
```

### 6. POST /products/:productId

Request

- headers:

```json
{
    "access_token": "string"
}
```

Response (201 - OK)

```json
{
    "id": 1,
    "name": "iPhone 12 Pro Max",
    "description": "iPhone 12 Pro Max.Layar Super Retina XDR 6,7 inci yang lebih besar. Ceramic Shield dengan ketahanan jatuh empat kali lebih baik.",
    "imageUrl": "https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/18e036402fb6f9a6fd805fbabad24f39/helix/01-APPLE-8DVPHAPP0-APPMGDL3ID-A-PacificBlueRevSS.jpg",
    "currentBid": 5000000,
    "sold": true,
    "UserId": 1,
    "createdAt": "2023-12-19T12:58:32.538Z",
    "updatedAt": "2023-12-19T12:58:32.538Z",
}
```

### 7. POST /bid

Request

- headers:

```json
{
    "access_token": "string"
}
```

Response (201 - OK)

```json
{
      "id": 1,
      "UserId": 1,
      "ProductId": 1,
      "bidAmount": 500000,
      "createdAt": "2023-12-19T13:09:30.061Z",
      "updatedAt": "2023-12-19T13:09:30.061Z",
}
```

Response (400 - Bad Request)

```json
{
  "message": "Input your amount!"
}
```

### 8. GET /user/products

Request

- headers:

```json
{
    "access_token": "string"
}
```

Response (201 - OK)

```json
{
 [
  {
    "id" : 1,
    "orderId": "ORD-TELANG-17025839075241",
    "name" :"iPhone 12 Pro Max",
     "imageUrl" : "https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/18e036402fb6f9a6fd805fbabad24f39/helix/01-APPLE-8DVPHAPP0-APPMGDL3ID-A-PacificBlueRevSS.jpg)",
    "description": "iPhone 12 Pro Max.Layar Super Retina XDR 6,7 inci yang lebih besar. Ceramic Shield dengan ketahanan jatuh empat kali lebih baik.",
    "amount": 500000,
    "status": "paid",
    "UserId" : 1,
    "createdAt": "2023-12-19T13:09:30.061Z",
    "updatedAt": "2023-12-19T13:09:30.061Z",
  },
  {
    "id" : 2,
    "orderId": "ORD-TELANG-17025839075245",
    "name" : "MacBook Pro M1 2020 13inch",
     "imageUrl" : "https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/46f3b2ddfd2ff4f56a858f4aed015692/helix/01-APPLE-8DVLPAPP0-APPMYDC2ID-A-SilverRevSS.jpg",
    "description":"Dilengkapi CPU 8-core yang mampu menangani berbagai tahapan kerja yang kompleks dalam fotografi, pemrograman, pengeditan video, dan lainnya, dengan mudah.",
    "amount":"Dengan desain luar biasa tipis berkat chip Apple M1. Layar Retina 4.5K 24 inci yang menghanyutkan dengan lebih dari satu miliar warna yang memberikan gambar besar dengan detail yang menakjubkan.",
    "status": "paid",
    "UserId" : 2,
    "createdAt": "2023-12-19T12:58:33.528Z",
    "updatedAt": "2023-12-19T12:58:33.528Z",
  },
  ...,
 ]
}

```

### 9. GET /bid/:productId

Request

- headers:

```json
{
    "access_token": "string"
}
```

Response (200 - OK)

```json
{
      "id": 1,
      "bidAmount": 500000,
      "UserId": 7,
      "ProductId": 7,
      "createdAt": "2023-12-19T13:09:30.061Z",
      "updatedAt": "2023-12-19T13:09:30.061Z",
}
```

Response (404 - Not Found)

```json
{
    "message": "Product not found"
}
```

### 10. GET /user/me

Request

- headers:

```json
{
    "access_token": "string"
}
```

Response (200 - OK)

```json
{
    "id": 1,
    "bidAmount": 500000,
    "orderId": "ORD-TELANG-17025839075245",
    "createdAt": "2023-12-19T12:58:33.528Z",
    "updatedAt": "2023-12-19T12:58:33.528Z",

}
```

Response (404 - Not Found)

```json
{
    "message": "Product not found"
}
OR
{
    "message": "Not Found!"
}
```


### Global Error

Response (401 - invalidToken)

```json
{
  "message": "Invalid token"
}
```

Response (500 - Internal Server Error)

```json
{
  "message": "Internal server error"
}
```
