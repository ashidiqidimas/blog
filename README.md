# Blog

## API Docs
http://localhost:8000/api-docs/

## API Endpoints
### Registration Page
> POST blogsaya.com/user/register

**Body:**
``` json
{
    fullName: string,
    email: String,
    password: string
}
```

**Response:**
Email already exist
**409** `Email already exist.`
Success
**200** `Success`

### Login Page
> POST blogsaya.com/user/login

**Body:**
``` json
{
    email: String,
    password: string
}
```

**Response:**
Password/email is wrong
**401** `Email or password is wrong.`
Success
**200** `Success`

### Show Posts in Dashboard for a Given User ID
> GET blogsaya.com/dashboard/:userID

**Response:**
**200** Success
``` json
[
    {
        post_id: string,
        post_title: string,
        photoURL: string
    }, 
    {
        post_id: string,
        post_title: string,
        photoURL: string
    },
]
```

### Create Post
> POST blogsaya.com/posts/:postID

**Body:**
``` json
[
    {
        post_title: string,
        photoURL: string,
        postBody: string
    }
]
```

**Response:**
Success
**200** `Success`

Error post id not exist
**404** `Post ID not exist`
### Edit Post
> UPDATE blogsaya.com/posts/:postID

**Body:**
``` json
[
    {
        post_title: string,
        photoURL: string,
        postBody: string
    }
]
```

**Response:**
Success
**200** `Success`

Error post id not exist
**404** `Post ID not exist`

### Show post for a given ID
> GET blogsaya.com/:postID

**Response:**
**200** Success
``` json
[
	{
		post_title: string,
		photoURL: string,
		postBody: string
	}
]
```

Error post id not exist
**404** `Post ID not exist`
### Delete Post
> DELETE blogsaya.com/posts/:postID

**Response:**
Success
**200** `Success`

Error post id not exist
**404** `Post ID not exist`

### Show Posts of all Users
> GET blogsaya.com/

**Response:**
**200** Success
``` json
[
	{
		post_id: string,
		username: string,
		post_title: string,
		photoURL: string
	}, 
	{
		post_id: string,
		username: string,
		post_title: string,
		photoURL: string
	},
	...
]
```

## Class Models
```
User [
	user_id: PK
	username: string
	password: string
]

Post [
	post_id: PK
	user_id: FK belongs to User
	photo_URL: string
	post_title: string
	post_body: string
]
```
