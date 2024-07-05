import azure.functions as func
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins  = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins
)

@app.get("/api")
async def root():
    return {"message": "Hello all!"}

async def main(req: func.HttpRequest, context: func.Context):
    return await func.AsgiMiddleware(app).handle_async(req, context)