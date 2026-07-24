from fastapi import FastAPI

app = FastAPI()

@app.get("/notes")
def get_notes():
    return {"notes": ["Buy groceries", "Finish backend project", "Call mom"]}