/**
 * Scarf Package.
 *
 * Add a scarf package with API
 *
 * @author Awais <https://twitter.com/MrAhmadAwais/>
 */

const axios = require('axios');
require('dotenv').config();

module.exports = async ({
	username,
	apiToken,
	name,
	desc = '',
	externalLibraryType = 'npm'
}) => {
	if (!name) throw Error(`Enter a name for the package.`);
	if (!username) throw Error(`Scarf username is required`);
	if (!apiToken) throw Error(`Scarf API Token is required`);

	const API_URL = `https://scarf.sh/package`;

	const auth = {
		username,
		password: apiToken
	};

	const data = {
		name,
		shortDescription: desc,
		externalLibraryType
	};

	// Send it.
	try {
		// Don't validate.
		axios.defaults.validateStatus = () => true;
		const res = await axios.post(API_URL, data, {auth});
		return res;
	} catch (error) {
		console.log(error);
	}
};
