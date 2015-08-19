var worker = function(goodUsers) {
	return function(users) {
		return users.every(function(user) {
			return goodUsers.some(function(goodUser) {
				return goodUser.id === user.id;
			});
		});
	};
};

module.exports = worker;