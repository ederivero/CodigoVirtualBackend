from flask import Flask, request
from models.categoria import CategoriaCollection
from firebaseconfig import firebase_categoria, firebaseAlmacenamiento
from datetime import datetime
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

@app.route("/subirImagen/<coleccion>/<string:id>", methods=['POST'])
def subirImagen(coleccion, id):
    imagen = request.files['imagen']
    # COMO EVITAR QUE SI EL USUARIO ME MANDE EL MISMO NOMBRE DE ARCHIVO QUE YO YA TENGO GUARDADO EN EL SERVIDOR NO SE SOBREESCRIBA
    # el formato timestamp convierte la fecha actual con su hr, min, seg en un flotante
    # print(datetime.now().timestamp())
    fecha = str(datetime.now().timestamp()).replace(".","")
    nombreFinal = fecha + imagen.filename
    nombre_seguro = secure_filename(nombreFinal)
    imagen.save(nombre_seguro)
    blobFirebase = firebaseAlmacenamiento.blob(nombre_seguro)
    blobFirebase.upload_from_filename(nombre_seguro)
    # antes de que se elimine tenemos que guardar en el storage de firebase
    os.remove(nombre_seguro)
    blobFirebase.make_public()
    url = blobFirebase.public_url
    if coleccion == "categoria":
        firebase_categoria.child(id).update({"imagen":url})
    print(blobFirebase)
    return {
        "ok":True,
        "message":"se agrego la imagen correctamente"
    }



if __name__ == '__main__':
    app.run(debug=True)