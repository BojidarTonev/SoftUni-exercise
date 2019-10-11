const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === '/' && req.method === 'GET') {
        const filePath = path.normalize(
            path.join(__dirname, "../views/home/index.html")
        );

        fs.readFile(filePath, function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end(err.message)
            }

            let rawCats = fs.readFileSync('./data/cats.json');
            let readyCats = JSON.parse(rawCats);

            let modifiedCats = readyCats.map((cat) => `<li>
                <img src="${cat.image}" alt="${cat.image}">
                <h3>${cat.name}</h3>
                <p><span>Breed: </span>${cat.breed}</p>
                <p><span>Description: </span>${cat.description}</p>
                <ul class="buttons">
                    <li class="btn edit"><a href="/cats-edit/${cat.id}">Change Info</a></li>
                    <li class="btn delete"><a href="/cats-find-new-home/${cat.id}">New Home</a></li>
                </ul>
            </li>`);

            let modifiedData = data.toString().replace('{{cats}}', modifiedCats);

            res.writeHead(200);
            res.write(modifiedData);
            res.end();

        });
    } else {
        return true;
    }
}
