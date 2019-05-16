define({ "api": [
  {
    "type": "post",
    "url": "/user/:id/bet/",
    "title": "create a bet",
    "name": "betCreate",
    "group": "Bet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth",
            "description": "<p>User unique token, user token.</p>"
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "matchs",
            "description": "<p>that are in the cart.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bet",
            "description": "<p>bet of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n      \"matchs\" : [ \n          {\n              \"matchid\" : \"5c530a65b328b6280cd4d1ae\",\n              \"participantchoice\" : \"5c530a65b328b6280cd4d1b0\"\n          },\n          {\n              \"matchid\" : \"5c373bd0cde84e428ce07d3d\",\n              \"participantchoice\" : \"5c373bd0cde84e428ce07d3e\"\n          }\n      ],\n      \"bet\" : 50\n      \n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"_id\": \"5ca70546c5b2eb31fc57330c\",\n      \"userid\": \"5c3720c1bcdf441cb4375fc7\",\n      \"matchs\": [\n          {\n              \"_id\": \"5ca70546c5b2eb31fc57330e\",\n              \"matchid\": \"5c530a65b328b6280cd4d1ae\",\n              \"participantchoice\": \"5c530a65b328b6280cd4d1b0\"\n          },\n          {\n              \"_id\": \"5ca70546c5b2eb31fc57330d\",\n              \"matchid\": \"5c373bd0cde84e428ce07d3d\",\n              \"participantchoice\": \"5c373bd0cde84e428ce07d3e\"\n          }\n      ],\n      \"bet\": 50,\n      \"status\": 0,\n      \"cotetotale\": 2.52,\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/bet/betCreate.js",
    "groupTitle": "Bet"
  },
  {
    "type": "get",
    "url": "/user/:id/bet/:betid",
    "title": "get the bet details",
    "name": "betDetails",
    "group": "Bet",
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
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"_id\": \"5ca70546c5b2eb31fc57330c\",\n      \"userid\": \"5c3720c1bcdf441cb4375fc7\",\n      \"matchs\": [\n          {\n              \"_id\": \"5ca70546c5b2eb31fc57330e\",\n              \"matchid\": \"5c530a65b328b6280cd4d1ae\",\n              \"participantchoice\": \"5c530a65b328b6280cd4d1b0\"\n          },\n          {\n              \"_id\": \"5ca70546c5b2eb31fc57330d\",\n              \"matchid\": \"5c373bd0cde84e428ce07d3d\",\n              \"participantchoice\": \"5c373bd0cde84e428ce07d3e\"\n          }\n      ],\n      \"bet\": 50,\n      \"status\": 0,\n      \"cotetotale\": 2.52,\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/bet/betDetails.js",
    "groupTitle": "Bet"
  },
  {
    "type": "get",
    "url": "/bet/",
    "title": "get the bet list",
    "name": "betList",
    "group": "Bet",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\n      \"_id\": \"5ca70546c5b2eb31fc57330c\",\n      \"userid\": \"5c3720c1bcdf441cb4375fc7\",\n      \"matchs\": [\n          {\n              \"_id\": \"5ca70546c5b2eb31fc57330e\",\n              \"matchid\": \"5c530a65b328b6280cd4d1ae\",\n              \"participantchoice\": \"5c530a65b328b6280cd4d1b0\"\n          },\n          {\n              \"_id\": \"5ca70546c5b2eb31fc57330d\",\n              \"matchid\": \"5c373bd0cde84e428ce07d3d\",\n              \"participantchoice\": \"5c373bd0cde84e428ce07d3e\"\n          }\n      ],\n      \"bet\": 50,\n      \"status\": 0,\n      \"cotetotale\": 2.52,\n  }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/bet/betsList.js",
    "groupTitle": "Bet"
  },
  {
    "type": "get",
    "url": "/user/:id/bet/",
    "title": "get the user bet list",
    "name": "userBetList",
    "group": "Bet",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\n      \"_id\": \"5ca70546c5b2eb31fc57330c\",\n      \"userid\": \"5c3720c1bcdf441cb4375fc7\",\n      \"matchs\": [\n          {\n              \"_id\": \"5ca70546c5b2eb31fc57330e\",\n              \"matchid\": \"5c530a65b328b6280cd4d1ae\",\n              \"participantchoice\": \"5c530a65b328b6280cd4d1b0\"\n          },\n          {\n              \"_id\": \"5ca70546c5b2eb31fc57330d\",\n              \"matchid\": \"5c373bd0cde84e428ce07d3d\",\n              \"participantchoice\": \"5c373bd0cde84e428ce07d3e\"\n          }\n      ],\n      \"bet\": 50,\n      \"status\": 0,\n      \"cotetotale\": 2.52,\n  }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/bet/betsList.js",
    "groupTitle": "Bet"
  },
  {
    "type": "post",
    "url": "/match/",
    "title": "create a match",
    "name": "matchCreate",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "for_bets",
            "description": "<p>FOR THE APP : match list only for bets (in the app) =&gt; for_bets = 1.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"url\" : \"/match?for_bets=1\"\n  }",
          "type": "url"
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
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>state of the match : 0 =&gt; not started, 1=&gt; in progress, 2 =&gt; ended.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "winner",
            "description": "<p>participant id of the winner, null if match in progress.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "array",
            "description": "<p>containing the participants scores, first item is the first participant and second item the second participant.</p>"
          }
        ]
      },
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
    "url": "/rank/:rankid",
    "title": "get the ranking details",
    "name": "rankDetails",
    "group": "Rank",
    "description": "<p>if you wants to get the ranks by user, there is a different route : /user/:id/rank/</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n\"url\" : \"/rank/:rankid\"\n\"url2\": \"/user/:userid/rank/\"",
          "type": "url"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>ranking score of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "betsNumber",
            "description": "<p>number of bets.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "wonBets",
            "description": "<p>number of won bets</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "canceledBets",
            "description": "<p>number of canceledBets.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "coteAverage",
            "description": "<p>Average of all user bets betting odds</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "betAverage",
            "description": "<p>average of all the bets.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>_id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>last update of the ranking</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n      \"_id\": \"5cbdd44ab7ec0b0a806d3140\",\n      \"score\": 0,\n      \"betsNumber\": 0,\n      \"wonBets\": 0,\n      \"canceledBets\": 0,\n      \"coteAverage\": 0,\n      \"betAverage\": 23.5,\n      \"userid\": \"5cbdd44ab7ec0b0a806d313e\",\n      \"updatedAt\": \"2019-04-22T14:48:42.354Z\",\n      \"username\": \"tata\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/rank/rankDetails.js",
    "groupTitle": "Rank"
  },
  {
    "type": "get",
    "url": "/rank/",
    "title": "get the ranking list",
    "name": "rankList",
    "group": "Rank",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>user id IF CONNECTED : match to get the list AND the user Rank. if no id parameter =&gt; myRank = null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"url\" : \"/match?id=1asbzhz254fdz51\"\n  }",
          "type": "url"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>ranking score of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "betsNumber",
            "description": "<p>number of bets.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "wonBets",
            "description": "<p>number of won bets</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "canceledBets",
            "description": "<p>number of canceledBets.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "coteAverage",
            "description": "<p>Average of all user bets betting odds</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "betAverage",
            "description": "<p>average of all the bets.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>_id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>last update of the ranking</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"myRank\": {\n        \"_id\": \"5cbdd44ab7ec0b0a806d3140\",\n        \"score\": 0,\n        \"betsNumber\": 0,\n        \"wonBets\": 0,\n        \"canceledBets\": 0,\n        \"coteAverage\": 0,\n        \"betAverage\": 23.5,\n        \"userid\": \"5cbdd44ab7ec0b0a806d313e\",\n        \"updatedAt\": \"2019-04-22T14:48:42.354Z\",\n        \"username\": \"tata\"\n    },\n    \"ranking\": [\n        {\n            \"_id\": \"5cc1aeb4fecb2d19a42c9da0\",\n            \"score\": 225,\n            \"betsNumber\": 1,\n            \"wonBets\": 1,\n            \"canceledBets\": 0,\n            \"coteAverage\": 6,\n            \"betAverage\": 23.5,\n            \"userid\": \"5cc1aeb3fecb2d19a42c9d9f\",\n            \"updatedAt\": \"2019-04-25T12:57:24.215Z\",\n            \"username\": \"toto\"\n        },\n        {\n            \"_id\": \"5cc2c69f90f84d8d1bec62c6\",\n            \"score\": 126,\n            \"betsNumber\": 2,\n            \"wonBets\": 1,\n            \"canceledBets\": 0,\n            \"coteAverage\": 2.52,\n            \"userid\": \"5c3720c1bcdf441cb4375fc7\",\n            \"updatedAt\": \"2019-04-26T09:21:50.121Z\",\n            \"betAverage\": 50,\n            \"username\": \"Samy\"\n        },\n        {\n            \"_id\": \"5cbdd44ab7ec0b0a806d3140\",\n            \"score\": 0,\n            \"betsNumber\": 0,\n            \"wonBets\": 0,\n            \"canceledBets\": 0,\n            \"coteAverage\": 0,\n            \"userid\": \"5cbdd44ab7ec0b0a806d313e\",\n            \"updatedAt\": \"2019-04-22T14:48:42.354Z\",\n            \"username\": \"tata\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/rank/rankList.js",
    "groupTitle": "Rank"
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
