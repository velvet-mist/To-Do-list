from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import todos
from app.database import engine
from app import models

models.todo.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Todo API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(todos.router, prefix="/api/v1")


@app.get("/")
def root():
    return {"message": "Todo API is running"}


@app.get("/health")
def health():
    return {"status": "ok"}