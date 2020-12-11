from flask import Flask, request
from models.categoria import CategoriaCollection
from firebaseconfig import firebase_categoria
import os
from werkzeug.utils import secure_filename
app = Flask(__name__)
@app.route("/")
def inicio():
    return 'Servidor levantado exitosamente'

@app.route("/categoria", methods=['GET','POST','PUT','DELETE'])
def categoriaController():
    if request.method =="GET":
        resultado = firebase_categoria.get()
        categorias = []
        for llave in resultado.keys():
            categoria = {
                "id": llave,
                "abreviatura":resultado[llave]["abreviatura"],
                "descripcion":resultado[llave]["descripcion"],
                "imagen":resultado[llave]["imagen"]
            }
            categorias.append(categoria)
        return {
            "ok":True,
            "content": categorias,
            "message":None
        }

    elif request.method=="POST":
        informacion = request.get_json()
        nuevaCategoria = CategoriaCollection(informacion["descripcion"], informacion["abreviatura"], informacion["imagen"])
        nuevaCategoria.save()
        return {
            "ok":True,
            "message":"Se guardo exitosamente la categoria en la bd",
            "content":None
        },201
        
    elif request.method=="PUT":
        pass
    else:
        pass

@app.route("/subirImagen", methods=['POST'])
def subirImagen():
    imagen = request.files['imagen']
    nombre_seguro = secure_filename(imagen.filename)
    imagen.save(nombre_seguro)
    # antes de que se elimine tenemos que guardar en el storage de firebase
    os.remove(nombre_seguro)
    print(imagen)
    return 'ok'




if __name__ == '__main__':
    app.run(debug=True)