from sqlalchemy.ext.declarative import declarative_base 

class Student(Base):
    __tablename__ = 'students'
    
    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    age = Column(Integer, nullable=False)
    email = Column(String, nullable=False, unique=True)
    dob = Column(DateTime, nullable=False)

class Tutor(Base):
    __tablename__ = 'students'
    
    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    age = Column(Integer, nullable=False)
    email = Column(String, nullable=False, unique=True)
    dob = Column(DateTime, nullable=False)


