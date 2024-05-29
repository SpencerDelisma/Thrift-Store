from flask import request, session
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import Tshirt, Hoodie, Shoe , Pant

from flask_cors import CORS
from flask import request, jsonify
from flask_migrate import Migrate

# Initialize Flask-Migrate
migrate = Migrate(app, db)



#routes for the app 
@app.route('/')
def index():
    return '<h1>Project Server</h1>'

@app.route('/tshirts', methods=['GET', 'POST'])
def tshirts():
    if request.method == 'GET':
        tshirts = Tshirt.query.all()
        tshirt_list = [tshirt.to_dict() for tshirt in tshirts]
        return jsonify(tshirt_list), 200
        
    elif request.method == 'POST':
        json_data = request.get_json()

        if not json_data:
            return jsonify({'error': 'No JSON data received'}), 400

        new_tshirt = Tshirt(
            name=json_data.get('name'),
            description=json_data.get('description'),
            image_url=json_data.get('image_url'),
            price=json_data.get('price')
        )
        try:
            db.session.add(new_tshirt)
            db.session.commit()
            return jsonify(new_tshirt.to_dict()), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500
    
    else:
        return 'Invalid request'

@app.route('/tshirts/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def tshirt(id):
    if request.method == 'GET':
        tshirt = Tshirt.query.filter(Tshirt.id == id).first()

        return tshirt.to_dict()
    
    elif request.method == 'PUT':
        tshirt = Tshirt.query.get(id)

        tshirt.name = request.form['name']
        tshirt.description = request.form['description']
        tshirt.image_url = request.form['image_url']
        tshirt.price = request.json.get('price', tshirt.price)
        
        db.session.commit()
        return jsonify(tshirt.to_dict())
    elif request.method == 'DELETE':
        tshirt = Tshirt.query.get(id)
        db.session.delete(tshirt)
        db.session.commit()
        return jsonify(tshirt.to_dict())
    else:   
        return 'Invalid request'

# Routes for Hoodies
@app.route('/hoodies', methods=['GET', 'POST'])
def hoodies():
    if request.method == 'GET':
        hoodies = Hoodie.query.all()
        hoodie_list = [hoodie.to_dict() for hoodie in hoodies]
        return jsonify(hoodie_list), 200
        
    elif request.method == 'POST':
        json_data = request.get_json()

        if not json_data:
            return jsonify({'error': 'No JSON data received'}), 400

        new_hoodie = Hoodie(
            name=json_data.get('name'),
            description=json_data.get('description'),
            image_url=json_data.get('image_url'),
            price=json_data.get('price')
        )
        try:
            db.session.add(new_hoodie)
            db.session.commit()
            return jsonify(new_hoodie.to_dict()), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500
    
    else:
        return 'Invalid request for Hoodies'

@app.route('/hoodies/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def hoodie(id):
    if request.method == 'GET':
        hoodie = Hoodie.query.get(id)
        if not hoodie:
            return jsonify({'error': 'Hoodie not found'}), 404
        return jsonify(hoodie.to_dict()), 200
    
    elif request.method == 'PUT':
        hoodie = Hoodie.query.get(id)
        if not hoodie:
            return jsonify({'error': 'Hoodie not found'}), 404
        
        json_data = request.get_json()

        if not json_data:
            return jsonify({'error': 'No JSON data received'}), 400

        hoodie.name = json_data.get('name', hoodie.name)
        hoodie.description = json_data.get('description', hoodie.description)
        hoodie.image_url = json_data.get('image_url', hoodie.image_url)
        hoodie.price = json_data.get('price', hoodie.price)
        
        try:
            db.session.commit()
            return jsonify(hoodie.to_dict()), 200
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500
    
    elif request.method == 'DELETE':
        hoodie = Hoodie.query.get(id)
        if not hoodie:
            return jsonify({'error': 'Hoodie not found'}), 404

        db.session.delete(hoodie)
        db.session.commit()
        return jsonify(hoodie.to_dict()), 200
    
    else:
        return 'Invalid request'

# Routes for Shoes
@app.route('/shoes', methods=['GET', 'POST'])
def shoes():
    if request.method == 'GET':
        shoes = Shoe.query.all()
        shoe_list = [shoe.to_dict() for shoe in shoes]
        return jsonify(shoe_list), 200

    elif request.method == 'POST':
        json_data = request.get_json()

        if not json_data:
            return jsonify({'error': 'No JSON data received'}), 400

        new_shoe = Shoe(
            name=json_data.get('name'),
            description=json_data.get('description'),
            image_url=json_data.get('image_url'),
            price=json_data.get('price')
        )
        try:
            db.session.add(new_shoe)
            db.session.commit()
            return jsonify(new_shoe.to_dict()), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500

    else:
        return 'Invalid request for Shoes'


@app.route('/shoes/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def shoe(id):
    if request.method == 'GET':
        shoe = Shoe.query.get(id)
        if not shoe:
            return jsonify({'error': 'Shoe not found'}), 404
        return jsonify(shoe.to_dict()), 200

    elif request.method == 'PUT':
        shoe = Shoe.query.get(id)
        if not shoe:
            return jsonify({'error': 'Shoe not found'}), 404

        json_data = request.get_json()

        if not json_data:
            return jsonify({'error': 'No JSON data received'}), 400

        shoe.name = json_data.get('name', shoe.name)
        shoe.description = json_data.get('description', shoe.description)
        shoe.image_url = json_data.get('image_url', shoe.image_url)
        shoe.price = json_data.get('price', shoe.price)

        try:
            db.session.commit()
            return jsonify(shoe.to_dict()), 200
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500

    elif request.method == 'DELETE':
        shoe = Shoe.query.get(id)
        if not shoe:
            return jsonify({'error': 'Shoe not found'}), 404

        db.session.delete(shoe)
        db.session.commit()
        return jsonify(shoe.to_dict()), 200

    else:
        return 'Invalid request for Shoes'


@app.route('/pants', methods=['GET', 'POST'])
def pants():
    if request.method == 'GET':
        pants = Pant.query.all()
        pant_list = [pant.to_dict() for pant in pants]
        return jsonify(pant_list), 200

    elif request.method == 'POST':
        json_data = request.get_json()

        if not json_data:
            return jsonify({'error': 'No JSON data received'}), 400

        new_pant = Pant(
            name=json_data.get('name'),
            description=json_data.get('description'),
            image_url=json_data.get('image_url'),
            price=json_data.get('price')
        )
        try:
            db.session.add(new_pant)
            db.session.commit()
            return jsonify(new_pant.to_dict()), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500

    else:
        return 'Invalid request for Pants'


@app.route('/pants/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def pant(id):
    if request.method == 'GET':
        pant = Pant.query.get(id)
        if not pant:
            return jsonify({'error': 'Pant not found'}), 404
        return jsonify(pant.to_dict()), 200

    elif request.method == 'PUT':
        pant = Pant.query.get(id)
        if not pant:
            return jsonify({'error': 'Pant not found'}), 404

        json_data = request.get_json()

        if not json_data:
            return jsonify({'error': 'No JSON data received'}), 400

        pant.name = json_data.get('name', pant.name)
        pant.description = json_data.get('description', pant.description)
        pant.image_url = json_data.get('image_url', pant.image_url)
        pant.price = json_data.get('price', pant.price)

        try:
            db.session.commit()
            return jsonify(pant.to_dict()), 200
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500

    elif request.method == 'DELETE':
        pant = Pant.query.get(id)
        if not pant:
            return jsonify({'error': 'Pant not found'}), 404

        db.session.delete(pant)
        db.session.commit()
        return jsonify(pant.to_dict()), 200

    else:
        return 'Invalid request for Pants'


if __name__ == '__main__':
    app.run(port=5555, debug=True)