from flask_restful import Resource, reqparse
from models.libro import LibroModel

class LibrosController(Resource):
    def get(self):
        libros = LibroModel.query.all()
        resultado = []
        for libro in libros:
            # print(libro)
            temporal = libro.mostrar_json()
            temporal['estante'] = libro.estante.mostrar_json()
            resultado.append(temporal)
            print(libro.estante.mostrar_json())
            # print(libro.est_id)
        return {
            'ok':True,
            'content':resultado
        }
    def post(self):
        pass

class LibroController(Resource):
    def get(self, libro_id):
        pass
    def put(self, libro_id):
        pass
    def delete(self, libro_id):
        pass