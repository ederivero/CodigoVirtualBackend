import mongoose from 'mongoose';

var Schema = mongoose.Schema;
export var videoSchema = new Schema({
    vid_titulo: String,
    vid_desc: String,
    vid_link: String,
    vid_img: String,
    vid_likes : [
        {
            usu_mail: String
        }
    ],
    vid_coments: [
        {
            usu_nomb: String,
            usu_mail: String,
            usu_coment: String
        }
    ]
})