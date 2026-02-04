from flask import Flask, render_template, request, redirect, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Enum
import enum
from datetime import datetime

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:sqlpass@localhost:3306/tamirisgestao'
db = SQLAlchemy(app)

class PaymentMethod(enum.Enum):
    monthly = "Mensal"
    quarterly = "Trimestal"
    yearly = "Anual"


class Members(db.Model):
    id = db.Column(db.Integer, primary_key = True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    tel = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    birth = db.Column(db.Date, nullable=False)
    cpf = db.Column(db.String(15), nullable=False)
    street = db.Column(db.String(255), nullable=False)
    housenum = db.Column(db.String(10), nullable=False)
    district = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    cep = db.Column(db.String(15), nullable=False)
    registerDate = db.Column(db.Date, nullable=False)
    paymentDay = db.Column(db.String(5), nullable=False)
    subscription = db.Column(Enum(PaymentMethod))

# Read

@app.route('/members')
def shortlist_members():
    members = Members.query.all()

    result = []
    for m in members:
        result.append({
            "id": m.id,
            "name": m.name,
            "tel": m.tel,
            "email": m.email,
            "paymentDay": m.paymentDay,
            "subscription": m.subscription.name
        })

    return jsonify(result)

# Create

@app.route('/create', methods=['POST'])
def add_member():
   data = request.form

   member = Members(
        name = data.get('name'),
        tel = data.get('tel'),
        email = data.get('email'),
        birth = datetime.strptime(data.get('birth'), '%Y-%m-%d'),
        cpf = data.get('cpf'),
        cep = data.get('cep'),
        street = data.get('street'),
        housenum = data.get('housenum'),
        district = data.get('district'),
        city = data.get('city'),
        registerDate = datetime.strptime(data.get('registerDate'), '%Y-%m-%d'),
        paymentDay = data.get('paymentDate'),
        subscription = PaymentMethod[data.get('subscription')]
    )
   
   db.session.add(member)
   db.session.commit()
   return jsonify({"msg": "ok"}), 200


if __name__ == '__main__':
    with app.app_context():
        db.create_all()

    app.run(debug=True, port=5153) 