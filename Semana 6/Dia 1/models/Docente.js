const Sequelize = require('sequelize');

const docente_model = (conexion)=>{
    let docente = conexion.define('docentes',{
        docId:{
            field:'doc_id',
            type:Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        docNomb: {
            field: 'doc_nomb',
            type: Sequelize.STRING(45)
        },
        docApe : {
            field:'doc_ape',
            type: Sequelize.STRING(45)
        },
        docEmail:{
            field: 'doc_email',
            type: Sequelize.STRING(40),
            unique:true
        },
        docHash: {
            field: 'doc_hash',
            type: Sequelize.TEXT
        },
        docSalt:{
            field: 'doc_salt',
            type: Sequelize.TEXT
        },
    },{
        tableName: 't_docente',
        timestamps: true
    });
    return docente;
}
module.exports = docente_model;