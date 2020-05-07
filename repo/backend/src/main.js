const _path = require('path');
const fs = require('fs');
const http = require('http');

let files = new Map();

['index.html', 'main.js'].forEach(path => {
	let filePath = _path.join(__dirname, '../../frontend/dist', path);

	let content = fs.readFileSync(filePath);

	files.set(path, content);
});

let server = http.createServer((req, res) => {
	let path = req.url.replace(/\?.*$/, '');

	switch (path) {
	case '/':
		res.setHeader('content-type', 'text/html');
		res.end(files.get('index.html'));
		break;
	case '/main.js':
		res.setHeader('content-type', 'text/javascript');
		res.end(files.get('main.js'));
		break;
	}
});

server.listen(8888);
