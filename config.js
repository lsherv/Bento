// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Leighton',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '9dbd4163dc9cf0bf8562e7cc8acb437c', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '25.642300',
	defaultLongitude: '-80.430852',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: true,
	hourDarkThemeActive: '19:30',
	hourDarkThemeInactive: '06:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Codewars',
			icon: 'code',
			link: 'https://codewars.com',
		},
		{
			id: '3',
			name: 'hashnode',
			icon: 'codepen',
			link: 'https://hashnode.com/n/gis',
		},
		{
			id: '4',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com/',
		},
		{
			id: '5',
			name: 'Devdocs',
			icon: 'binary',
			link: 'https://devdocs.io/',
		},
		{
			id: '6',
			name: 'Draw',
			icon: 'figma',
			link: 'https://excalidraw.com',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Hulu',
			icon: 'youtube',
			link: 'https://hulu.com',
		},
		{
			id: '2',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com',
		},
		{
			id: '3',
			name: 'Netflix',
			icon: 'youtube',
			link: 'https://netflix.com/',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://www.amazon.com/gp/video/storefront?clientFilter=on',
		},
		{
			id: '5',
			name: 'HBO-Max',
			icon: 'youtube',
			link: 'https://play.hbomax.com/profile/select',
		},
		{
			id: '6',
			name: 'Crunchyroll',
			icon: 'youtube',
			link: 'https://crunchyroll.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'youtube',
			id: '1',
			links: [
				{
					name: 'Youtube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'Hulu',
					link: 'https://www.hulu.com',
				},
				{
					name: 'HBO-Max',
					link: 'https://www.play.hbomax.com/profile/select',
				},
				{
					name: 'Crunchyroll',
					link: 'https://crunchyroll.com/',
				},
				{
					name: 'Amazon',
					link: 'https://www.amazon.com/gp/video/storefront?clientFilter=on',
				},
			],
		},
		{
			icon: 'aperture',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'Draw',
					link: 'ttps://excalidraw.com',
				},
				{
					name: 'GIS',
					link: 'https://www.reddit.com/r/gis',
				},
				{
					name: 'Miami',
					link: 'https://www.reddit.com/r/miami',
				},
				{
					name: 'Dolphins',
					link: 'https://www.reddit.com/r/miamidolphins',
				},
				{
					name: 'Heat',
					link: 'https://www.reddit.com/r/heat',
				},
				{
					name: 'Javascript',
					link: 'https://www.reddit.com/r/javascript',
				},
				{
					name: 'Webdev',
					link: 'https://www.reddit.com/r/webdev',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
