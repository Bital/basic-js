module.exports = function createDreamTeam(members) {
	if(!Array.isArray(members)) {
		return false;
	}
	return  members.filter(el => "string" == typeof(el)).map(el => el.trim().toUpperCase()).sort().reduce((prev, curr) =>  prev += curr[0], '');
};