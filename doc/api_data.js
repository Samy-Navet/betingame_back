define({ "api": [
  {
    "type": "post",
    "url": "/match/",
    "title": "create a match",
    "name": "matchCreate",
    "group": "Match",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>match title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>game name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "datematch",
            "description": "<p>Date(&quot;<a href=\"YYYY-mm-ddTHH:MM:ss\">YYYY-mm-ddTHH:MM:ss</a>&quot;) of the beginning of the match.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "participantnom",
            "description": "<p>in the array of object &quot;participant&quot;, participantname is the property of the name of the participant</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "participantcote",
            "description": "<p>in the array of object &quot;participant&quot;, participantcote is the property of the betting odds of the participant</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n      \"title\" : \"LEC - G2 vs MSF\",\n      \"game\": \"League of Legends\",\n      \"datematch\": \"2018-10-26T15:45:00\",\t\n      \"participant\":[{\n          \"participantnom\": \"G2\",\n          \"coteparticipant\": 1.02\n      },\n      {\n          \"participantnom\": \"MSF\",\n          \"coteparticipant\": 2.25\n      }]\n  }",
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
    "filename": "controllers/match/matchCreate.js",
    "groupTitle": "Match"
  },
  {
    "type": "delete",
    "url": "/match/:id",
    "title": "Delete a match from the app",
    "name": "matchDelete",
    "group": "Match",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>User unique token, ONLY admin token.</p>"
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
    "filename": "controllers/match/matchDelete.js",
    "groupTitle": "Match"
  },
  {
    "type": "get",
    "url": "/match/:id",
    "title": "get the match details",
    "name": "matchDetails",
    "group": "Match",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-auth\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzM3MjBjMWJjZGY0NDFjYjQzNzVmYzciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ3MTE2NzM4fQ.qPdV5j5Rq4aR9sdSydHpbRfGkzjKT84--KRQtM\"\n}",
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
            "field": "title",
            "description": "<p>match title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>game name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "matchdate",
            "description": "<p>Date(&quot;<a href=\"YYYY-mm-ddTHH:MM:ss\">YYYY-mm-ddTHH:MM:ss</a>&quot;) of the beginning of the match.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time",
            "description": "<p>Date(&quot;<a href=\"YYYY-mm-ddTHH:MM:ss\">YYYY-mm-ddTHH:MM:ss</a>&quot;) of the creation of the match in the database.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>state of the match : 0 =&gt; créé, 1=&gt; en cours, 2 =&gt; terminé.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "winner",
            "description": "<p>_id of the participant that won (participant[x]._id), null if the match is not ended.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>score of the participant (participant[x].score), 0 by default.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "participantnom",
            "description": "<p>name of the participant (participant[x].participantnom)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "participantcote",
            "description": "<p>betting odds of the participant (participant[x].participantcote)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"dates\": {\n          \"matchdate\": \"2018-11-03T05:30:00.000Z\",\n          \"time\": \"2019-01-10T12:34:24.576Z\"\n      },\n      \"game\": \"League of Legends\",\n      \"state\": 2,\n      \"_id\": \"5c373bd0cde84e428ce07d3d\",\n      \"title\": \"FNC VS IG\",\n      \"participant\": [\n          {\n              \"score\": 0,\n              \"_id\": \"5c373bd0cde84e428ce07d3f\",\n              \"participantnom\": \"Fnatic\",\n              \"coteparticipant\": 2.5\n          },\n          {\n              \"score\": 3,\n              \"_id\": \"5c373bd0cde84e428ce07d3e\",\n              \"participantnom\": \"Invictus Gaming\",\n              \"coteparticipant\": 1.5\n          }\n      ],\n      \"winner\": \"5c373bd0cde84e428ce07d3e\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/match/matchDetails.js",
    "groupTitle": "Match"
  },
  {
    "type": "get",
    "url": "/match/",
    "title": "get the match list",
    "name": "matchList",
    "group": "Match",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-auth\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzM3MjBjMWJjZGY0NDFjYjQzNzVmYzciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ3MTE2NzM4fQ.qPdV5j5Rq4aR9sdSydHpbRfGkzjKT84--KRQtM\"\n}",
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
            "field": "title",
            "description": "<p>match title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>game name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "matchdate",
            "description": "<p>Date(&quot;<a href=\"YYYY-mm-ddTHH:MM:ss\">YYYY-mm-ddTHH:MM:ss</a>&quot;) of the beginning of the match.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time",
            "description": "<p>Date(&quot;<a href=\"YYYY-mm-ddTHH:MM:ss\">YYYY-mm-ddTHH:MM:ss</a>&quot;) of the creation of the match in the database.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>state of the match : 0 =&gt; créé, 1=&gt; en cours, 2 =&gt; terminé.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "winner",
            "description": "<p>_id of the participant that won (participant[x]._id), null if the match is not ended.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>score of the participant (participant[x].score), 0 by default.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "participantnom",
            "description": "<p>name of the participant (participant[x].participantnom)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "participantcote",
            "description": "<p>betting odds of the participant (participant[x].participantcote)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\n      \"dates\": {\n          \"matchdate\": \"2018-11-03T05:30:00.000Z\",\n          \"time\": \"2019-01-10T12:34:24.576Z\"\n      },\n      \"game\": \"League of Legends\",\n      \"state\": 2,\n      \"_id\": \"5c373bd0cde84e428ce07d3d\",\n      \"title\": \"FNC VS IG\",\n      \"participant\": [\n          {\n              \"score\": 0,\n              \"_id\": \"5c373bd0cde84e428ce07d3f\",\n              \"participantnom\": \"Fnatic\",\n              \"coteparticipant\": 2.5\n          },\n          {\n              \"score\": 3,\n              \"_id\": \"5c373bd0cde84e428ce07d3e\",\n              \"participantnom\": \"Invictus Gaming\",\n              \"coteparticipant\": 1.5\n          }\n      ],\n      \"winner\": \"5c373bd0cde84e428ce07d3e\"\n  }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/match/matchList.js",
    "groupTitle": "Match"
  },
  {
    "type": "put",
    "url": "/match/:id",
    "title": "update match",
    "name": "matchUpdate",
    "group": "Match",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>unique token, ONLY admin token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-auth\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzM3MjBjMWJjZGY0NDFjYjQzNzVmYzciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ3MTE2NzM4fQ.qPdV5j5Rq4aR9sdSydHpbRfGkzjKT84--KRQtM\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n      \"title\" : \"LEC - G2 vs MSF\",\n      \"game\": \"League of Legends\",\n      \"datematch\": \"2018-10-26T15:45:00\",\t\n      \"participant\":[{\n          \"participantnom\": \"G2\",\n          \"coteparticipant\": 1.02\n      },\n      {\n          \"participantnom\": \"MSF\",\n          \"coteparticipant\": 2.25\n      }]\n  }",
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
            "field": "title",
            "description": "<p>match title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>game name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "matchdate",
            "description": "<p>Date(&quot;<a href=\"YYYY-mm-ddTHH:MM:ss\">YYYY-mm-ddTHH:MM:ss</a>&quot;) of the beginning of the match.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time",
            "description": "<p>Date(&quot;<a href=\"YYYY-mm-ddTHH:MM:ss\">YYYY-mm-ddTHH:MM:ss</a>&quot;) of the creation of the match in the database.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>state of the match : 0 =&gt; créé, 1=&gt; en cours, 2 =&gt; terminé.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "winner",
            "description": "<p>_id of the participant that won (participant[x]._id), null if the match is not ended.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>score of the participant (participant[x].score), 0 by default.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "participantnom",
            "description": "<p>name of the participant (participant[x].participantnom)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "participantcote",
            "description": "<p>betting odds of the participant (participant[x].participantcote)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"dates\": {\n          \"matchdate\": \"2018-11-03T05:30:00.000Z\",\n          \"time\": \"2019-01-10T12:34:24.576Z\"\n      },\n      \"game\": \"League of Legends\",\n      \"state\": 2,\n      \"_id\": \"5c373bd0cde84e428ce07d3d\",\n      \"title\": \"FNC VS IG\",\n      \"participant\": [\n          {\n              \"score\": 0,\n              \"_id\": \"5c373bd0cde84e428ce07d3f\",\n              \"participantnom\": \"Fnatic\",\n              \"coteparticipant\": 2.5\n          },\n          {\n              \"score\": 3,\n              \"_id\": \"5c373bd0cde84e428ce07d3e\",\n              \"participantnom\": \"Invictus Gaming\",\n              \"coteparticipant\": 1.5\n          }\n      ],\n      \"winner\": \"5c373bd0cde84e428ce07d3e\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/match/matchUpdate.js",
    "groupTitle": "Match"
  },
  {
    "type": "put",
    "url": "/match/:id",
    "title": "update match score and status",
    "name": "matchUpdateScore",
    "group": "Match",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>unique token, ONLY admin token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-auth\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzM3MjBjMWJjZGY0NDFjYjQzNzVmYzciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ3MTE2NzM4fQ.qPdV5j5Rq4aR9sdSydHpbRfGkzjKT84--KRQtM\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n      \"state\" : 2,\n      \"participant\" : [3,0],\n      \"winner\" : \"5c530a65b328b6280cd4d1b0\"\n  }",
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
            "field": "title",
            "description": "<p>match title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>game name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "matchdate",
            "description": "<p>Date(&quot;<a href=\"YYYY-mm-ddTHH:MM:ss\">YYYY-mm-ddTHH:MM:ss</a>&quot;) of the beginning of the match.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time",
            "description": "<p>Date(&quot;<a href=\"YYYY-mm-ddTHH:MM:ss\">YYYY-mm-ddTHH:MM:ss</a>&quot;) of the creation of the match in the database.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>state of the match : 0 =&gt; créé, 1=&gt; en cours, 2 =&gt; terminé.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "winner",
            "description": "<p>_id of the participant that won (participant[x]._id), null if the match is not ended.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>score of the participant (participant[x].score), 0 by default.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "participantnom",
            "description": "<p>name of the participant (participant[x].participantnom)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "participantcote",
            "description": "<p>betting odds of the participant (participant[x].participantcote)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"dates\": {\n          \"matchdate\": \"2018-11-03T05:30:00.000Z\",\n          \"time\": \"2019-01-10T12:34:24.576Z\"\n      },\n      \"game\": \"League of Legends\",\n      \"state\": 2,\n      \"_id\": \"5c373bd0cde84e428ce07d3d\",\n      \"title\": \"FNC VS IG\",\n      \"participant\": [\n          {\n              \"score\": 0,\n              \"_id\": \"5c373bd0cde84e428ce07d3f\",\n              \"participantnom\": \"Fnatic\",\n              \"coteparticipant\": 2.5\n          },\n          {\n              \"score\": 3,\n              \"_id\": \"5c373bd0cde84e428ce07d3e\",\n              \"participantnom\": \"Invictus Gaming\",\n              \"coteparticipant\": 1.5\n          }\n      ],\n      \"winner\": \"5c373bd0cde84e428ce07d3e\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/match/matchUpdateScore.js",
    "groupTitle": "Match"
  },
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
    "title": "Delete an user from the app",
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