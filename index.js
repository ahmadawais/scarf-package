/**
 * Scarf Package.
 *
 * Add a scarf package with API
 *
 * @author Awais <https://twitter.com/MrAhmadAwais/>
 */

const axios = require('axios');
require('dotenv').config();

module.exports = async ({name, desc = '', externalLibraryType = 'npm'}) => {
	if (!name) throw Error(`Enter a name for the package.`);

	const API_URL = `https://scarf.sh/package`;

	const auth = {
		username: process.env.SCARF_USERNAME,
		password: process.env.SCARF_API_TOKEN
	};

	const data = {
		name,
		shortDescription: desc,
		externalLibraryType
	};

	// Send it.
	try {
		const res = await axios.post(API_URL, data, {auth});
		return res;
	} catch (error) {
		console.log(error);
	}
};
