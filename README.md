# GraphQL server in NodeJS

Simple implementation of GraphQL application in Node.js using Apollo server.

# Features

- NodeJs
- GraphQL
- ExpressJS
- Mysql
- Apollo Server

# Prerequisites

- Install Node.js version 18.16.0
- Running MySQL on port 3306.
- Create graphQL database with current user access.

# Installation and running

#### 1. Clone this repo

```bash
git clone https://github.com/tecoreng/graphql-nodejs-server.git
```

#### 2. Go to the cloned folder

```bash
cd ./graphql-nodejs-server
```

#### 3. Install dependencies

```bash
npm install
```

#### 4. Update `.env` file with connection URL for Mysql:

```bash
DB_HOST  = "localhost"
DB_PORT  = 3306
DB_NAME  = "graphQL"
DB_USERNAME = "root"
DB_PASSWORD = "root"

```

#### 5. Run the development server:

```bash
npm run dev
```

####  6. Go to http://localhost:4444 See graphQL Playground.


# CURD GraphQL functions

##### Insert new records to table

```bash
  mutation{
    createUser(name:"Ram",email:"Ram@gmail.com",gender:"Male",status:0){
      name,
      email
    }
  }
```
##### List of all records

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
##### Get specific record by id

```bash
 query{
    getSpecificUser(id:1){
        id,
        name,
        email
  	}
  }	
```
##### Update specific record

```bash
mutation{
  updateUser(id:1,name:"tecoreng",email:"info@tecoreng.com",gender:"Male",status:1){
    id,
    name,
    email
  }
}
```
#####  Delete specific record by id

```bash
mutation{
  deleteUser(id:9){
    status,
    message,
    error
  }
}
```

# Social media Link	

<a href="https://www.facebook.com/Tecoreng" target="_blank"><img src="https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" width="40" height="40"/></a>
<a href="https://www.instagram.com/Technical_Core_Engineers" target="_blank"><img src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg" width="40" height="40"/></a>
<a href="https://twitter.com/tecoreng" target="_blank"><img src="https://www.vectorlogo.zone/logos/twitter/twitter-icon.svg" width="40" height="40"/></a>
<a href="https://linkdin.com/company/tecoreng" target="_blank"><img src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" width="40" height="40"/></a>
<a href="https://in.pinterest.com/TechnicalCoreEngineers" target="_blank"><img src="https://www.vectorlogo.zone/logos/pinterest/pinterest-icon.svg" width="40" height="40"/></a>
<a href="https://medium.com/@Tecoreng" target="_blank"><img src="https://www.vectorlogo.zone/logos/medium/medium-icon.svg" width="40" height="40"/></a>
<a href="https://dribbble.com/TechnicalCoreEngineers" target="_blank"><img src="https://www.vectorlogo.zone/logos/dribbble/dribbble-icon.svg" width="40" height="40"/></a>
<a href="https://www.behance.net/Tecoreng" target="_blank"><img src="https://www.vectorlogo.zone/logos/behance/behance-icon.svg" width="40" height="40"/></a>
