import multer from 'multer';
import path from 'path';
import { Request } from 'express';

// Configuración de Multer
const storage = multer.diskStorage({
    destination: function(req: Request, file: Express.Multer.File, cb: any) {
        // Aquí configuras la carpeta donde se guardarán los archivos subidos
        cb(null, 'uploads/');  // En este ejemplo, se guardarán en la carpeta 'uploads/'
    },
    filename: function(req: Request, file: Express.Multer.File, cb: any) {
        // Aquí configuras cómo se nombrarán los archivos
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

// Middleware de Multer
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5  // Límite de tamaño del archivo (5MB en este ejemplo)
    },
    fileFilter: function(req: Request, file: Express.Multer.File, cb: any) {
        // Aquí puedes añadir validaciones adicionales, por ejemplo, para tipos de archivos permitidos
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);  // Aceptar el archivo
        } else {
            cb(new Error('Solo se permiten archivos de imagen'), false);  // Rechazar el archivo
        }
    }
});

export default upload;
