define({ "api": [
  {
    "type": "delete",
    "url": "/api/children/:child",
    "title": "Удалить ребенка",
    "name": "DeleteChild",
    "group": "Child",
    "version": "1.0.0",
    "error": {
      "fields": {
        "Error 403": [
          {
            "group": "Error 403",
            "type": "Object",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Ребенка с id :child либо не существует, либо он не принадлежит авторизированному пользователю</p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "Unauthenticated",
            "description": "<p>Не был предоставлен токен авторизации, или же он недействителен</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 403:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"message\": \"Forbidden\",\n    \"errors\": {\n        \"child\": \"Этот ребенок вам не принадлежит\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Error 401:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
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
            "field": "message",
            "description": "<p>Сообщение об удалении ребенка</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Ребенок удален\"\n}",
          "type": "json"
        }
      ]
    },
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "child",
        "description": "<p>Id ребенка</p>"
      }
    ],
    "filename": "docSrc/children.php",
    "groupTitle": "Child",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/children/:child"
      }
    ],
    "permission": [
      {
        "name": "Авторизованный пользователь"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer $token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{ \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9eyJhdWQiO\" }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/children",
    "title": "Получить список детей",
    "name": "GetChildren",
    "group": "Child",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[child]",
            "optional": false,
            "field": "children",
            "description": "<p>Массив детей авторизированного пользователя</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child.id",
            "description": "<p>Id ребенка</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child.name",
            "description": "<p>Имя ребенка</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child.year_of_birth",
            "description": "<p>Год рождения ребенка</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child.parent_id",
            "description": "<p>Id родителя ребенка</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child.created_at",
            "description": "<p>Дата создания ребенка</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child.updated_at",
            "description": "<p>Дата обновления ребенка</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n     \"id\": 2,\n     \"name\": \"Дима\",\n     \"year_of_birth\": \"2015\",\n     \"parent_id\": \"1\",\n     \"created_at\": \"2021-09-01T10:32:22.000000Z\",\n     \"updated_at\": \"2021-09-01T10:32:22.000000Z\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "docSrc/children.php",
    "groupTitle": "Child",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/children"
      }
    ],
    "permission": [
      {
        "name": "Авторизованный пользователь"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer $token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{ \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9eyJhdWQiO\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "Unauthenticated",
            "description": "<p>Не был предоставлен токен авторизации, или же он недействителен</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 401:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/children",
    "title": "Создать ребенка",
    "name": "StoreChild",
    "group": "Child",
    "version": "1.0.0",
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "name_required",
            "description": "<p>Параметр name обязателен</p>"
          },
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "year_of_birth_required",
            "description": "<p>Параметр year_of_birth обязателен</p>"
          },
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "year_of_birth_numeric",
            "description": "<p>Параметр year_of_birth должен состоять из цифр</p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "Unauthenticated",
            "description": "<p>Не был предоставлен токен авторизации, или же он недействителен</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"message\": \"The given data was invalid.\",\n   \"errors\": {\n       \"name\": [\n           \"Укажите имя ребенка\",\n       ],\n       \"year_of_birth\": [\n           \"Укажите год рождения ребенка\",\n           \"Год рождения должен быть числом\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "Error 401:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Новый ребенок</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id ребенка</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Имя ребенка</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "data.year_of_birth",
            "description": "<p>Год рождения ребенка</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "data.parent_id",
            "description": "<p>Id родителя ребенка</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "data.created_at",
            "description": "<p>Дата создания ребенка</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "data.updated_at",
            "description": "<p>Дата обновления ребенка</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Сообщение о создании ребенка</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 201:",
          "content": "HTTP/1.1 201 Created\n{\n    \"message\": \"Ребенок создан\",\n    \"data\": {\n        \"name\": \"Настя\",\n        \"year_of_birth\": \"2014\",\n        \"parent_id\": 1,\n        \"updated_at\": \"2021-09-01T14:26:32.000000Z\",\n        \"created_at\": \"2021-09-01T14:26:32.000000Z\",\n        \"id\": 3\n    }\n}",
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
            "field": "name",
            "description": "<p>Имя ребенка</p>"
          },
          {
            "group": "Parameter",
            "type": "String|Number",
            "optional": false,
            "field": "year_of_birth",
            "description": "<p>Год рождения ребенка</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request:",
          "content": "{\n    \"name\": \"Настя\",\n    \"year_of_birth\": \"2014\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docSrc/children.php",
    "groupTitle": "Child",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/children"
      }
    ],
    "permission": [
      {
        "name": "Авторизованный пользователь"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer $token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{ \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9eyJhdWQiO\" }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/users/login",
    "title": "Авторизация",
    "name": "LoginUser",
    "group": "User",
    "version": "1.0.0",
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "email_required",
            "description": "<p>Параметр email обязателен</p>"
          },
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "email_email",
            "description": "<p>Email не корректен</p>"
          },
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "user_does_not_exist",
            "description": "<p>Email не связан ни с одним аккаунтом</p>"
          },
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "password_required",
            "description": "<p>Параметр password обязателен</p>"
          },
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "password_wrong",
            "description": "<p>Пароль неверный</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"message\": \"The given data was invalid.\",\n   \"errors\": {\n       \"email\": [\n           \"Укажите email\",\n           \"Укажите корректный email\",\n           \"Веденный вами электронный адрес не связан ни с одним аккаунтом\"\n       ],\n       \"password\": [\n           \"Укажите пароль\",\n           \"Вы ввели неверный пароль\",\n       ],\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docSrc/users.php",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/users/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/users/register",
    "title": "Регистрация",
    "name": "RegisterUser",
    "group": "User",
    "version": "1.0.0",
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "name_required",
            "description": "<p>Параметр name обязателен</p>"
          },
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "email_required",
            "description": "<p>Параметр email обязателен</p>"
          },
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "email_email",
            "description": "<p>Email не корректен</p>"
          },
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "email_unique",
            "description": "<p>Пользователь с такими email уже существует</p>"
          },
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "password_require",
            "description": "<p>Параметр password обязателен</p>"
          },
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "password_format",
            "description": "<p>Пароль должен содержать от 8 символов, включая как минимум одну строчную букву, одну заглавную букву и одну цифру</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"message\": \"The given data was invalid.\",\n   \"errors\": {\n       \"name\": [\n           \"Укажите ФИО\",\n       ],\n       \"email\": [\n           \"Укажите email\",\n           \"Укажите корректный email\",\n           \"Пользователь с такими email уже существует\"\n       ],\n       \"password\": [\n           \"Укажите пароль\",\n           \"Пароль должен содержать от 8 символов, включая как минимум одну строчную букву, одну заглавную букву и одну цифру\",\n       ],\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Новый пользователь</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "user.id",
            "description": "<p>Id пользователя</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>Имя пользователя</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Email пользователя</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "user.created_at",
            "description": "<p>Дата создания пользователя</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "user.updated_at",
            "description": "<p>Дата обновления пользователя</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Сообщение о создании пользователя</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Токен авторизации</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 201:",
          "content": "HTTP/1.1 201 Created\n{\n    \"message\": \"Вы успешно зарегистрировались\",\n    \"data\": {\n        \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9\",\n        \"user\": {\n            \"id\": 2\n            \"name\": \"Максим Поздняков Алексеевич\",\n            \"email\": \"maximpozdnyakow@gmail.com\",\n            \"created_at\": \"2021-09-01T15:35:04.000000Z\",\n            \"updated_at\": \"2021-09-01T15:35:04.000000Z\",\n        }\n    }\n}",
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
            "field": "name",
            "description": "<p>ФИО пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Пароль пользователя</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request:",
          "content": "{\n    \"name\": \"Максим Поздняков Алексеевич\",\n    \"email\": \"maximpozdnyakow@gmail.com\",\n    \"password\": \"SDGsdfn735F\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docSrc/users.php",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/users/register"
      }
    ]
  }
] });
