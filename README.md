# GraphQL server in Node.js

Simple implementation of GraphQL application in Node.js using Apollo server.

#Features

-NodeJs
-GraphQL
-ExpressJS
-Mysql
-Apollo Server

#Prerequisites

-Install Node.js version 18.16.0 
-Running MySQL on port 3306.
-Create graphQL database with current user access.

# Project Name

- GraphQL server in Node.js with Mysql.

#Installation and running

1. Clone this repo

```bash
git clone https://github.com/tecoreng/graphql-nodejs-server.git
```

2. Go to the cloned folder

```bash
cd ./graphql-nodejs-server
```

3. Install dependencies

```bash
npm install
```

4. Update `.env` file with connection URL for Mysql:

```bash
DB_HOST  = "localhost"
DB_PORT  = 3306
DB_NAME  = "graphQL"
DB_USERNAME = "root"
DB_PASSWORD = "root"

```

5. Run the development server:

```bash
npm run dev
```

6. Go to http://localhost:4444 See graphQL Playground.


#Functions

Insert new records to table

```bash
  mutation{
    createUser(name:"Ram",email:"Ram@gmail.com",gender:"Male",status:0){
      name,
      email
    }
  }
```
List of all records

```bash
query{
  getUserList{
  id,
    name,
    email,
    status
  }
}
```
Get specifc record by id

```bash
 query{
    getSpecificUser(id:1){
        id,
        name,
        email
  	}
  }	
```
Update specifc record

```bash
mutation{
  updateUser(id:1,name:"tecoreng",email:"info@tecoreng.com",gender:"Male",status:1){
		id,
    name,
    email
	}
}
```
Delete specifc record by id

```bash
mutation{
  deleteUser(id:9){
		status,
    message,
    error
	}
}
```

#Social media Link	

-facebook  : https://www.facebook.com/Tecoreng/
-instagram : https://www.instagram.com/Technical_Core_Engineers/
-twitter   : https://twitter.com/tecoreng
-linkedin  : https://linkdin.com/company/tecoreng/
-pintrest  : https://in.pinterest.com/TechnicalCoreEngineers/
-medium    : https://medium.com/@Tecoreng
-dribbble  : https://dribbble.com/TechnicalCoreEngineers
-behance   : https://www.behance.net/Tecoreng
	

