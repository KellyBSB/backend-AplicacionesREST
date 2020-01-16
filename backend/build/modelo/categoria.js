"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let categoriaSchema = new mongoose_1.Schema({
    monbre: {
        type: String,
        required: [true, 'el nombre es obligatorio']
    }
});
exports.default = mongoose_1.model('categoria', categoriaSchema);
//para que todo valgo otra vez se debe poner un npm install, se pone el gitignore para que no se suban dependencias pesadas