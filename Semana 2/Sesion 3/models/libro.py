from base_datos import db
class LibroModel(db.Model):
    __tablename__="t_libro"
    id = db.Column("lib_id", db.Integer, primary_key=True)
    nombre = db.Column("lib_nomb", db.String(45))
    editorial = db.Column("lib_editorial", db.String(45))
    numpaginas = db.Column("lib_numpag", db.Integer)
    precio = db.Column("lib_precio", db.DECIMAL(5,2))
    publicacion = db.Column("lib_publicacion",db.String(4))
    codigo = db.Column("lib_cod", db.Text)
    # RELACIONES
    est_id = db.Column(db.Integer, db.ForeignKey('t_estante.est_id'), nullable=False)
    autores = db.relationship('AutorLibroModel', backref='libro')

    def __init__(self, nombre, editorial, numpaginas, precio, publicacion, codigo, estante):
        self.nombre = nombre
        self.editorial = editorial
        self.numpaginas = numpaginas
        self.precio = precio
        self.publicacion = publicacion
        self.codigo = codigo 
        self.est_id = estante

