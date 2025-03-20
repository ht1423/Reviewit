import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueName = `${uuidv4()}_${file.originalname}`; 
        cb(null, uniqueName);
    }
})

export const upload = multer({ storage })