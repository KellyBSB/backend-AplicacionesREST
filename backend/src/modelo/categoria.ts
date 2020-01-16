import {Schema, model} from 'mongoose';

let categoriaSchema = new Schema(

{

    monbre:{
        type:String,
        required:[true, 'el nombre es obligatorio']
    }

}

);

export default model ('categoria',categoriaSchema);
