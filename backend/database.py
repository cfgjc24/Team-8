from sqlalchemy import create_engine, Column, Integer, String, DateTime 
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class Student(Base):
    __tablename__ = 'students'
    
    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    age = Column(Integer, nullable=False)
    email = Column(String, nullable=False, unique=True)
    dob = Column(DateTime, nullable=False)

# Create the database engine
engine = create_engine('sqlite:///mydatabase.sql')

# Create the tables
Base.metadata.create_all(engine)

# Create a session factory
Session = sessionmaker(bind=engine)

def insert_student(first_name, last_name, age, email, dob):
    session = Session()
    try:
        new_student = Student(first_name=first_name, last_name=last_name, age=age, email=email, dob=dob)
        session.add(new_student)
        session.commit()
        return True
    except:
        session.rollback()
        return False
    finally:
        session.close()

# Example usage:
from datetime import datetime
success = insert_student("Joshua", "Brown", 20, "Joshua.Brown@example.com", datetime.now())
if success:
    print("Student added successfully!")
else:
    print("Error: Could not add student to the database.")