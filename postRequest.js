const https = require('https');

const options = {
  host: 'jsonplaceholder.typicode.com',
  	path: '/users',
  	method: 'POST',
  	headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json; charset=UTF-8'
		}
	};

	let request = https.request(options, (res) => { 
		if (res.statusCode !== 201) {
			console.error(`Did not get an Created from the server. Code: ${res.statusCode}`);
			res.resume();
			return;
		}
		let data = '';
	
		res.on('data', (chunk) => {
			data += chunk;
		});
	
		res.on('close', () => {
			console.log('Added all data');
			console.log(JSON.parse(data));
		});
	});
	
	

	const requestData = {
		    name: 'New User',
				username: 'Antonette',
				email: 'Shanna@melissa.tv',
				address: {
					street: 'Victor Plains',
					suite: 'Suite 879',
					city: 'Wisokyburgh',
					zipcode: '90566-7771',
					geo: [Object]
				},
				phone: '010-692-6593 x09125',
				website: 'anastasia.net',
				company: {
					name: 'Deckow-Crist',
					catchPhrase: 'Proactive didactic contingency',
					bs: 'synergize scalable supply-chains'
				
				}
			}
		
			request.write(JSON.stringify(requestData));
	    request.end();
	
	request.on('error', (err) => {
		console.error(`Encountered an error trying to make a request: ${err.message}`);
	});
