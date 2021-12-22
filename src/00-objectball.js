function gameObject() {
	return {
		'home': {
			'teamName': 'Brooklyn Nets',
			'colors': ['Black', 'White'],
			'players': {
				'Alan Anderson': {
					'number': 0,
					'shoe': 16,
					'points': 22,
					'rebounds': 12,
					'assists': 12,
					'steals': 3,
					'blocks': 1,
					'slamDunks': 1
				},
				'Reggie Evans': {
					'number': 30,
					'shoe': 14,
					'points': 12,
					'rebounds': 12,
					'assists': 12,
					'steals': 12,
					'blocks': 12,
					'slamDunks': 7
				},
				'Brook Lopez': {
					'number': 11,
					'shoe': 17,
					'points': 17,
					'rebounds': 19,
					'assists': 10,
					'steals': 3,
					'blocks': 1,
					'slamDunks': 15
				},
				'Mason Plumlee': {
					'number': 1,
					'shoe': 19,
					'points': 26,
					'rebounds': 12,
					'assists': 6,
					'steals': 3,
					'blocks': 8,
					'slamDunks': 5
				},
				'Jason Terry': {
					'number': 31,
					'shoe': 15,
					'points': 19,
					'rebounds': 2,
					'assists': 2,
					'steals': 4,
					'blocks': 11,
					'slamDunks': 1
				},
			}
		},
		'away': {
			'teamName': 'Charlotte Hornets',
			'colors': ['Turquoise', 'Purple'],
			'players': {
				'Jeff Adrien': {
					'number': 4,
					'shoe': 18,
					'points': 10,
					'rebounds': 1,
					'assists': 1,
					'steals': 2,
					'blocks': 7,
					'slamDunks': 2
				},
				'Bismak Biyombo': {
					'number': 0,
					'shoe': 16,
					'points': 12,
					'rebounds': 4,
					'assists': 7,
					'steals': 7,
					'blocks': 15,
					'slamDunks': 10
				},
				'DeSagna Diop': {
					'number': 2,
					'shoe': 14,
					'points': 24,
					'rebounds': 12,
					'assists': 12,
					'steals': 4,
					'blocks': 5,
					'slamDunks': 5
				},
				'Ben Gordon': {
					'number': 8,
					'shoe': 15,
					'points': 33,
					'rebounds': 3,
					'assists': 2,
					'steals': 1,
					'blocks': 1,
					'slamDunks': 0
				},
				'Brendan Haywood': {
					'number': 33,
					'shoe': 15,
					'points': 6,
					'rebounds': 12,
					'assists': 12,
					'steals': 22,
					'blocks': 5,
					'slamDunks': 12
				},
			}
		}
	}
}

function homeTeamName() {
	const object = gameObject();
	return object['home']['teamName'];
}

function numPointsScored(x) {
	const object = gameObject();

	if (x in object.home.players) {
		return object.home.players[x].points;
	}
	else if (x in object.away.players) {
		return object.away.players[x].points;
	}
	else {
		return 'This is not a player';
	}
}

function shoeSize(x) {
	const object = gameObject();

	if (x in object.home.players) {
		return object.home.players[x].shoe;
	}
	else if (x in object.away.players) {
		return object.away.players[x].shoe;
	}
	else {
		return 'This is not a player';
	}
}

function teamColors(x) {
	const object = gameObject();

	if (x === object.home.teamName) {
		return object.home.colors;
	}
	else if (x === object.away.teamName) {
		return object.away.colors;
	}
	else {
		return 'This is not a team that is playing.';
	}
}

function teamNames() {
	const object = gameObject();
	let array = [];

	for (const i in object) {
		array.push(object[i].teamName);
	}
	return array;
}

function playerNumbers(x) {
	const object = gameObject();
	let array = [];

	if (x === object.home.teamName) {
		for (const i in object.home.players) {
			array.push(object.home.players[i].number);
		}
	}
	else if (x === object.away.teamName) {
		for (const i in object.away.players) {
			array.push(object.away.players[i].number);
		}
	}
	else {
		return 'This is not a team that is playing.';
	}
	return array;
}

function playerStats(x) {
	const object = gameObject();

	if (x in object.home.players) {
		return object.home.players[x];
	}
	else if (x in object.away.players) {
		return object.away.players[x];
	}
	else {
		return 'This is not a player currently.';
	}
}

function bigShoeRebounds() {
	const object = gameObject();
	let maxsize = 0;
	let rebounds = 0;

	for (const i in object) {
		for (const j in object[i].players) {
			if (object[i].players[j].shoe > maxsize) {
				maxsize = object[i].players[j].shoe;
				rebounds = object[i].players[j].rebounds;
			}
		}
	}
	return rebounds;
}

function mostPointsScored() {
	const object = gameObject();
	let maxpoints = 0;
	let theplayer = '';

	for (const i in object) {
		for (const j in object[i].players) {
			if (object[i].players[j].points > maxpoints) {
				maxpoints = object[i].players[j].points;
				theplayer = j;
			}
		}
	}
	return theplayer;
}

function winningTeam() {
	const object = gameObject();
	let homepoints = 0;
	let awaypoints = 0;

	for (const i in object) {
		for (const j in object[i].players) {
			if (i === 'home') {
				homepoints += object.home.players[j].points;
			}
			else {
				awaypoints += object.away.players[j].points;
			}
		}
	}
	return homepoints > awaypoints ? object.home.teamName : object.away.teamName;
}

function playerWithLongestName() {
	const object = gameObject();
	let namelen = 0;
	let theplayer = '';

	for (const i in object) {
		for (const j in object[i].players) {
			if (j.length > namelen) {
				namelen = j.length;
				theplayer = j;
			}
		}
	}
	return theplayer;
}

function doesLongNameStealATon() {
	const object = gameObject();
	const longPN = playerWithLongestName();
	let longPNsteals = 0
	let maxsteals = 0;

	for (const i in object) {
		if (longPN in object[i].players) {
			longPNsteals = object[i].players[longPN].steals;
		}
		for (const j in object[i].players) {
			if (object[i].players[j].steals > maxsteals) {
				maxsteals = object[i].players[j].steals;
			}
		}
	}
	return longPNsteals > maxsteals;
}