const app = express();
const multer  = require('multer');
const uuidv4 = require('uuid/v4');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

// Import AttachmentsForm
import AttachmentsForm from  './AttachmentsForm';
// require s3 package
const aws = require('aws-sdk');
//require heroku config vars for s3 bucket
let s3 = new aws.S3({
  aws.config.region: 'us-east-2',
  aws.config.S3_KEY: process.env.S3_KEY,
  aws.config.S3_SECRET: process.env.S3_SECRET,
  aws.config.S3_BUCKET: process.env.S3_BUCKET,
});

// run app
var app = express(),
    s3 = new aws.S3();

app.use(bodyParser.json());

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'healthtracker',
        key: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname); //use Date.now() for unique file keys
        }
    })
});

app.post('./S3app', function (req, res, next) {
    res.send("Uploaded!");
});
