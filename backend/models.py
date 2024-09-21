from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker

Base = declarative_base()

class Student(Base):
    __tablename__ = 'students'
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    age = Column(Integer, nullable=False)
    email = Column(String, nullable=False, unique=True)
    dob = Column(DateTime, nullable=False)
    tutor_id = Column(Integer, ForeignKey('tutors.id', ondelete='SET NULL'))
    tutor = relationship('Tutor', back_populates='students')
    posts = relationship('Post', back_populates='student', cascade='all, delete-orphan')
    comments = relationship('Comment', back_populates='student', cascade='all, delete-orphan')  
    
    class Tutor(Base):
    __tablename__ = 'tutors'
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    age = Column(Integer, nullable=False)
    email = Column(String, nullable=False, unique=True)
    students = relationship('Student', back_populates='tutor')