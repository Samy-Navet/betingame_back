define({ "api": [
  {
    "type": "get",
    "url": "/user/:id",
    "title": "request user information",
    "name": "userDetails",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>User unique access-key.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-auth\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "admin",
            "description": "<p>state of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tokens",
            "description": "<p>array of tokens of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n      {\n      \"_id\": \"5ca3169662ca77093cc91f22\",\n      \"username\": \"toto\",\n      \"email\": \"toto@gmail.com\",\n      \"admin\": false,\n      \"tokens\": [\n          {\n              \"access\": \"auth\",\n              \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA\"\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/user/userDetails.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "request users list",
    "name": "userList",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>User unique access-key, user must be an admin !!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-auth\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>you only need to pass a admin token in parameters. for each item in the returned array, you have these followings success properties</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "admin",
            "description": "<p>state of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tokens",
            "description": "<p>array of tokens of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n      {\n          \"_id\": \"5ca3169662ca77093cc91f22\",\n          \"username\": \"toto\",\n          \"email\": \"toto@gmail.com\",\n          \"admin\": false,\n          \"tokens\": [\n              {\n                  \"access\": \"auth\",\n                  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA\"\n              }\n          ]\n      }\n  ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/user/userList.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login and request user information",
    "name": "userLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password string.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "admin",
            "description": "<p>state of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tokens",
            "description": "<p>array of tokens of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"_id\": \"5ca3169662ca77093cc91f22\",\n      \"username\": \"toto\",\n      \"email\": \"toto@gmail.com\",\n      \"admin\": false,\n      \"tokens\": [\n          {\n              \"access\": \"auth\",\n              \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA\"\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/user/userLogin.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/:id/logout/",
    "title": "Deletes a user from the app",
    "name": "userLogout",
    "group": "User",
    "description": "<p>only an admin our the user himself can delete an account</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>User unique access-key.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-auth\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/user/userDelete.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/:id/logout/",
    "title": "Disconnect user from the app",
    "name": "userLogout",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>User unique access-key.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-auth\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/user/userLogout.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "Register and request user information",
    "name": "userRegister",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email string.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "admin",
            "description": "<p>Users state boolean.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "admin",
            "description": "<p>state of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tokens",
            "description": "<p>array of tokens of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"_id\": \"5ca3169662ca77093cc91f22\",\n      \"username\": \"toto\",\n      \"email\": \"toto@gmail.com\",\n      \"admin\": false,\n      \"tokens\": [\n          {\n              \"access\": \"auth\",\n              \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA\"\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/user/userRegister.js",
    "groupTitle": "User"
  }
] });
