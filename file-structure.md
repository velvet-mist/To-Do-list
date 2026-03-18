todo-app/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py              # FastAPI app entry point
│   │   ├── config.py            # Settings & env vars
│   │   ├── database.py          # DB connection & session
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   └── todo.py          # SQLAlchemy ORM models
│   │   ├── schemas/
│   │   │   ├── __init__.py
│   │   │   └── todo.py          # Pydantic request/response schemas
│   │   ├── routers/
│   │   │   ├── __init__.py
│   │   │   └── todos.py         # CRUD route handlers
│   │   ├── services/
│   │   │   ├── __init__.py
│   │   │   └── todo_service.py  # Business logic layer
│   │   └── dependencies.py      # Shared deps (e.g. get_db)
│   ├── tests/
│   │   ├── __init__.py
│   │   ├── conftest.py          # Pytest fixtures
│   │   └── test_todos.py        # Route & service tests
│   ├── alembic/                 # DB migrations
│   │   ├── versions/
│   │   └── env.py
│   ├── alembic.ini
│   ├── requirements.txt
│   └── .env
│
├── frontend/      
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
├── docker-compose.yml
├── Dockerfile
├── .gitignore
└── README.md