const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const compression = require('compression');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet({
    hidePoweredBy: false, // errors out in electron
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
}));

app.use(express.text({limit: '500mb'}));
app.use(express.json({limit: '500mb'}));
app.use(express.raw({limit: '500mb'}));
app.use(express.urlencoded({extended: false}));
app.use(favicon(`${__dirname}/../images/app-icons/win/icon.ico`));

app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public/root')));
app.use(`/manifest.webmanifest`, express.static(path.join(__dirname, 'public/manifest.webmanifest')));
app.use(`/robots.txt`, express.static(path.join(__dirname, 'public/robots.txt')));


module.exports = app;
