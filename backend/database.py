from sqlalchemy import create_engine, Column, Integer, String, DateTime 
# from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import declarative_base, sessionmaker
from models import Student

Base = declarative_base()

def get_comments_for_post (post_id :int) -> any :
    pass

# Create the database engine
engine = create_engine('sqlite:///db.sqlite3')

# Create the tables
Base.metadata.create_all(engine)

# Create a session factory
Session = sessionmaker(bind=engine)

def insert_student(first_name, last_name, age, email, dob, tutor_id):
    session = Session()
    try:
        new_student = Student(first_name=first_name, last_name=last_name, age=age, email=email, dob=dob, tutor_id=tutor_id)
        result = session.add(new_student)
        type(result)
        session.commit()
        return True
    except Exception as e:
        print(e)
        session.rollback()
        return False
    finally:
        session.close()

# Example usage:
from datetime import datetime

success = insert_student("Joshua", "Brown", 20, "Joshua.Brown@example.com", datetime(2004, 8, 4),4)
if success:
    print("Student added successfully!")
else:
    print("Error: Could not add student to the database.") 
