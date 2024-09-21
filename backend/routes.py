from flask import Flask, jsonify, request
from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime
from models import Student, Tutor

app = Flask(__name__)

# DB setup 
Base = declarative_base()
engine = create_engine('sqlite:///db.sqlite3')
Session = sessionmaker(bind=engine)


@app.route("/api/v1/student/<int:student_id>", methods=['GET'])
def get_student_info(student_id):
    session = Session()
    try:
        student = session.query(Student).filter_by(id=student_id).first()
        if student:
            return jsonify({
                'id': student.id,
                'first_name': student.first_name,
                'last_name': student.last_name,
                'age': student.age,
                'email': student.email,
                'dob': student.dob.isoformat()
            }), 200
        else:
            return jsonify({'error': 'Student not found'}), 404
    finally:
        session.close()

@app.route("/api/v1/tutor/<int:tutor_id>/students", methods=['GET'])
def get_students_from_tutor_id(tutor_id):
    session = Session()
    try:
        students = session.query(Student).filter_by(tutor_id=tutor_id).all()
        return jsonify([{
            'id': student.id,
            'first_name': student.first_name,
            'last_name': student.last_name,
            'age': student.age,
            'email': student.email,
            'dob': student.dob.isoformat()
        } for student in students]), 200
    finally:
        session.close()

@app.route("/api/v1/sign_up/<string:person_type>", methods=['POST'])
def post_sign_up_person(person_type):
    data = request.json
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    age = data.get('age')
    email = data.get('email')
    dob = datetime.strptime(data.get('dob'), '%Y-%m-%d')  # Assuming date format is YYYY-MM-DD
    tutor_id = data.get('tutor_id')  # Optional for students
    
    if person_type == 'student':
        return insert_student(first_name, last_name, age, email, dob, tutor_id)
    # Handle tutor sign-up here as well
    return jsonify({'error': 'Invalid person type'}), 400


@app.route("/api/v1/login/<string:email>", methods = ['POST'])
def login_user(email: str):
    session = Session()
    try:
        student = session.query(Student).filter_by(email=email).first()
        if student:
            return jsonify({'exists': True,})  # Add URL if needed
        else:
            return jsonify({'exists': False}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        session.close()
	
def insert_student(first_name, last_name, age, email, dob, tutor_id):
    session = Session()
    try:
        new_student = Student(first_name=first_name, last_name=last_name, age=age, email=email, dob=dob, tutor_id=tutor_id)
        session.add(new_student)
        session.commit()
        return jsonify({'message': 'Student added successfully'}), 201
    except Exception as e:
        print(e)
        session.rollback()
        return jsonify({'error': 'Failed to add student'}), 500
    finally:
        session.close()

# Main function
if (__name__ == "__main__"): 
	app.run(debug=True)
