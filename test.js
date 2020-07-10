const scarfPackage = require('.');

(async () => {
	const pkg = {name: `cli-meow-help`};
	const res = await scarfPackage(pkg);
	if (res.status === 200) {
		console.log(`SUCCESS: ${pkg.name} added!`);
	} else {
		console.log(`Failed`);
		console.log(res);
	}
})();
