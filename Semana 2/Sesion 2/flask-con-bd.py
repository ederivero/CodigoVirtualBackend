# https://www.lfd.uci.edu/~gohlke/pythonlibs/#mysqlclient
from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD']='root'
app.config['MYSQL_DB'] = 'minimarket'

mysql = MySQL(app)
@app.route('/')
def inicio():
    return 'La api funciona exitosamente'

@app.route('/categorias', methods=['GET','POST'])
def categorias():
    if request.method == 'GET':
        # hago una conexion con la base de datos
        cur = mysql.connection.cursor()
        # le digo que es lo que yo deseo
        cur.execute('SELECT * FROM T_CATEGORIAS')
        # el metodo fetchall() sirve para capturar todo el resultado, tambien existe el metodo fetchone() el cual devuelve la primera coincidencia del resultado
        data = cur.fetchall()
        # cierro la conexion y libero el tunnel
        cur.close()
        print(data)
        return jsonify({"ok":True,
        "content":data,
        "message": None})
        
    if request.method == 'POST':
        data = request.get_json()
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO T_CATEGORIAS (CAT_DESC) VALUES (%s)",(data['descripcion'],))
        # sirve para guardar los cambios que estamos haciendo en la base de datos
        mysql.connection.commit()
        cur.close()
        return jsonify({
            'ok': True,
            'content':data,
            'message': 'Se agrego la categoria exitosamente'
        }), 201

app.run(debug=True)