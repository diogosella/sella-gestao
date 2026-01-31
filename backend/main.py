from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/members")

def list_members():
    return [
  { "id": 1, "name": "momoi", "tel": 21124123213, "email": "momoi@gmail.com" },
  { "id": 2, "name": "eu", "tel": 20312412313, "email": "eu@gmail.com" },
  { "id": 3, "name": "algum bebe", "tel": 11231241231, "email": "algumbebe@gmail.com" },
  { "id": 4, "name": "joao", "tel": 11987654321, "email": "joao@gmail.com" },
  { "id": 5, "name": "maria", "tel": 11976543210, "email": "maria@gmail.com" },
  { "id": 6, "name": "carlos", "tel": 11865432109, "email": "carlos@gmail.com" },
  { "id": 7, "name": "ana", "tel": 11754321098, "email": "ana@gmail.com" },
  { "id": 8, "name": "pedro", "tel": 11643210987, "email": "pedro@gmail.com" },
  { "id": 9, "name": "lucas", "tel": 11532109876, "email": "lucas@gmail.com" },
  { "id": 10, "name": "paula", "tel": 11421098765, "email": "paula@gmail.com" },
  { "id": 11, "name": "rafael", "tel": 11310987654, "email": "rafael@gmail.com" },
  { "id": 12, "name": "beatriz", "tel": 11209876543, "email": "beatriz@gmail.com" },
  { "id": 13, "name": "diego", "tel": 11198765432, "email": "diego@gmail.com" },
  { "id": 14, "name": "juliana", "tel": 11987654320, "email": "juliana@gmail.com" },
  { "id": 15, "name": "felipe", "tel": 11876543219, "email": "felipe@gmail.com" },
  { "id": 16, "name": "camila", "tel": 11765432118, "email": "camila@gmail.com" },
  { "id": 17, "name": "thiago", "tel": 11654321117, "email": "thiago@gmail.com" },
  { "id": 18, "name": "larissa", "tel": 11543211116, "email": "larissa@gmail.com" },
  { "id": 19, "name": "bruno", "tel": 11432111115, "email": "bruno@gmail.com" },
  { "id": 20, "name": "renata", "tel": 11321111114, "email": "renata@gmail.com" },
  { "id": 21, "name": "andre", "tel": 11211111113, "email": "andre@gmail.com" },
  { "id": 22, "name": "aline", "tel": 11111111112, "email": "aline@gmail.com" },
  { "id": 23, "name": "gustavo", "tel": 11922223333, "email": "gustavo@gmail.com" },
  { "id": 24, "name": "fernanda", "tel": 11933334444, "email": "fernanda@gmail.com" },
  { "id": 25, "name": "leonardo", "tel": 11944445555, "email": "leonardo@gmail.com" },
  { "id": 26, "name": "patricia", "tel": 11955556666, "email": "patricia@gmail.com" },
  { "id": 27, "name": "rodrigo", "tel": 11966667777, "email": "rodrigo@gmail.com" },
  { "id": 28, "name": "vanessa", "tel": 11977778888, "email": "vanessa@gmail.com" },
  { "id": 29, "name": "marcos", "tel": 11988889999, "email": "marcos@gmail.com" },
  { "id": 30, "name": "sabrina", "tel": 11999990000, "email": "sabrina@gmail.com" },
  { "id": 31, "name": "henrique", "tel": 11910101010, "email": "henrique@gmail.com" },
  { "id": 32, "name": "isabela", "tel": 11920202020, "email": "isabela@gmail.com" },
  { "id": 33, "name": "matheus", "tel": 11930303030, "email": "matheus@gmail.com" },
  { "id": 34, "name": "gabriela", "tel": 11940404040, "email": "gabriela@gmail.com" },
  { "id": 35, "name": "eduardo", "tel": 11950505050, "email": "eduardo@gmail.com" },
  { "id": 36, "name": "natalia", "tel": 11960606060, "email": "natalia@gmail.com" },
  { "id": 37, "name": "vinicius", "tel": 11970707070, "email": "vinicius@gmail.com" },
  { "id": 38, "name": "carolina", "tel": 11980808080, "email": "carolina@gmail.com" },
  { "id": 39, "name": "daniel", "tel": 11990909090, "email": "daniel@gmail.com" },
  { "id": 40, "name": "priscila", "tel": 11900001111, "email": "priscila@gmail.com" }
]