from flask import Flask, request, jsonify

app = Flask(__name__)

# In-memory cart storage (for demo purposes)
carts = []

@app.route('/carts', methods=['GET'])
def get_carts():
    return jsonify(carts), 200

@app.route('/cart', methods=['POST'])
def add_cart():
    data = request.get_json()
    if not data or 'id' not in data or 'items' not in data:
        return jsonify({"error": "Invalid cart format"}), 400
    
    carts.append(data)
    return jsonify({"message": "Cart added successfully"}), 201

if __name__ == '__main__':
    app.run(host='localhost', port=3000, debug=True)
