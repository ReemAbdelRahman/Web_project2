import os

from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

engine = create_engine(os.getenv("DATABASE_URL"),pool_pre_ping=True)
db = scoped_session(sessionmaker(bind=engine))

def main():
    create_users()

def create_users():
    db.execute("CREATE TABLE chatusers (id SERIAL PRIMARY_KEY, name VARCHAR NOT NULL, display_name VARCHAR NOT NULL UNIQUE, password VARCHAR NOT NULL CHECK LENGTH(password>=4))")
    db.commit()

if __name__=="__main__":
    main()
