import time
#Track and log the performance of functions it wraps 
#(Extra process not implemented idea - later use for non profit) 

def track_performance(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} took {end_time - start_time:.4f} seconds to execute.")
        return result
    return wrapper

#Fetch all students from the database, wrapped with the performance tracker

@track_performance
def get_students():
    session = Session()
    students = session.query(Student).all()
    session.close()
    return students
