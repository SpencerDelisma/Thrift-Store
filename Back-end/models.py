from sqlalchemy_serializer import SerializerMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

from config import db

# Models go here!
class Tshirt(db.Model, SerializerMixin):
    __tablename__ = 'tshirts'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.Text)
    image_url = db.Column(db.String(255))
    price = db.Column(db.Float)

    @validates('name')
    def validate_name(self, key, name):
        if len(name) < 1:
            raise ValueError('Name must be at least 1 character long')
        return name

    @validates('description')
    def validate_description(self, key, description):
        if len(description) < 1:
            raise ValueError('Description must be at least 1 character long')
        return description

    @validates('image_url')
    def validate_image_url(self, key, image_url):
        if len(image_url) < 1:
            raise ValueError('Image URL must be at least 1 character long')
        return image_url

    def __repr__(self):
        return f'<Tshirt {self.name}>'


class Hoodie(db.Model, SerializerMixin):
    __tablename__ = 'hoodies'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.Text)
    image_url = db.Column(db.String(255))
    price = db.Column(db.Float)

    @validates('name')
    def validate_name(self, key, name):
        if len(name) < 1:
            raise ValueError('Name must be at least 1 character long')
        return name

    @validates('description')
    def validate_description(self, key, description):
        if len(description) < 1:
            raise ValueError('Description must be at least 1 character long')
        return description

    @validates('image_url')
    def validate_image_url(self, key, image_url):
        if len(image_url) < 1:
            raise ValueError('Image URL must be at least 1 character long')
        return image_url

    def __repr__(self):
        return f'<Hoodie {self.name}>'


class Shoe(db.Model, SerializerMixin):
    __tablename__ = 'shoes'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.Text)
    image_url = db.Column(db.String(255))
    price = db.Column(db.Float)

    @validates('name')
    def validate_name(self, key, name):
        if len(name) < 1:
            raise ValueError('Name must be at least 1 character long')
        return name

    @validates('description')
    def validate_description(self, key, description):
        if len(description) < 1:
            raise ValueError('Description must be at least 1 character long')
        return description

    @validates('image_url')
    def validate_image_url(self, key, image_url):
        if len(image_url) < 1:
            raise ValueError('Image URL must be at least 1 character long')
        return image_url

    def __repr__(self):
        return f'<Shoe {self.name}>'


class Pant(db.Model, SerializerMixin):
    __tablename__ = 'pants'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.Text)
    image_url = db.Column(db.String(255))
    price = db.Column(db.Float)

    @validates('name')
    def validate_name(self, key, name):
        if len(name) < 1:
            raise ValueError('Name must be at least 1 character long')
        return name

    @validates('description')
    def validate_description(self, key, description):
        if len(description) < 1:
            raise ValueError('Description must be at least 1 character long')
        return description

    @validates('image_url')
    def validate_image_url(self, key, image_url):
        if len(image_url) < 1:
            raise ValueError('Image URL must be at least 1 character long')
        return image_url

    def __repr__(self):
        return f'<Pant {self.name}>'


if __name__ == '__main__':
    db.create_all()