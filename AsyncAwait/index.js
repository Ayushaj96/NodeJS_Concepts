const fs = require('fs');
const superagent = require('superagent');

// Call-Back Hell
const saveDogPicURL = () => {
	fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
		console.log(`Breed: ${data}`);
		superagent
			.get(`https://dog.ceo/api/breed/${data}/images/random`)
			.then((res) => {
				console.log(res.body);
				fs.writeFile('dog-img.txt', res.body.message, (err) => {
					if (err) return console.log(err.message);
					console.log('image saved');
				});
			})
			.catch((err) => {
				console.log(err.message);
			});
	});
};

//saveDogPicURL()

// Building Promises
const readFilePro = (file) => {
	return new Promise((resolve, reject) => {
		fs.readFile(file, (err, data) => {
			if (err) reject('File Not found');
			resolve(data);
		});
	});
};

const writeFilePro = (file, data) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(file, data, (err) => {
			if (err) reject('could not write');
			resolve('success');
		});
	});
};

// Function call To consume Promises
/*
readFilePro(`${__dirname}/dog.txt`)
	.then((data) => {
		console.log(`Breed: ${data}`);
		return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
	})
	.then((res) => {
		console.log(res.body);
		return writeFilePro('dog-img.txt', res.body.message);
	})
	.then((res) => {
		console.log(`File Savedc ${res}`);
	})
	.catch((err) => { // catches rejects
		console.log('Error: ', err);
	});

*/

// Consuming Promises with async/await
const getDogPic = async () => {
	try {
		const data = await readFilePro(`${__dirname}/dog.txt`);
		console.log(`${data}`);

		const res = await superagent.get(
			`https://dog.ceo/api/breed/${data}/images/random`
		);
		console.log(res.body);

		await writeFilePro('dog-img.txt', res.body.message);
		console.log('Saved');
	} catch (err) {
		throw err;
	}
	return 'Success'
};

/*
getDogPic()
  .then((x) => {
    console.log(x);
  })
  .catch((err) => {
    console.log('Error: ', err);
  });
*/

(async () => {
  try {
    const data = await getDogPic();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();


