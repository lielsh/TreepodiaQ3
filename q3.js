const fs = require('fs');
const path = require('path');

const names = {};

let data = fs.readFileSync(path.join(__dirname, 'names.csv'));

data = data.toString().split('\r\n').forEach(elem => names[[elem]] = `${elem}.mp3`);

fs.writeFileSync(path.join(__dirname, 'namesNew.json'), JSON.stringify({names}, null, 4));