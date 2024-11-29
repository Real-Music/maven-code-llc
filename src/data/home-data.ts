
export default {
	kpi: [
		{ value: 43, title: "New Tickets", trend: 6 },
		{ value: 17, title: "Closed Today", trend: -3 },
		{ value: 7, title: "New Replies", trend: 9 },
		{ value: 27300, title: "Followers", trend: 3 },
		{ value: 95, title: "Daily earnings", trend: -2, currency: "$" },
		{ value: 621, title: "Products", trend: -1 },
	],
	activities: {
		trend: {
			"2024-10-08": 10,
			"2024-10-09": 12,
			"2024-10-10": 5,
			"2024-10-11": 43,
			"2024-10-12": 20,
			"2024-10-13": 42,
			"2024-10-14": 57,
			"2024-10-15": 100,
			"2024-10-16": 78,
			"2024-10-17": 97,
			"2024-10-18": 60,
			"2024-10-19": 67,
			"2024-10-20": 110,
			"2024-10-21": 200,
		},
		purchases: [
			{
				id: 1,
				user: "Ronald Bradley",
				commit: "Initial commit",
				date: "May 6, 2024",
			},
			{
				id: 2,
				user: "Russell Gibson",
				commit: "Project structure",
				date: "April 11, 2024",
			},
			{
				id: 3,
				user: "Beverly Armstrong",
				commit: "Resolved error on login page",
				date: "April 23, 2024",
			},
			{
				id: 4,
				user: "John Smith",
				commit: "Added move env var",
				date: "June 25, 2024",
			},
			{
				id: 5,
				user: "Miss Sandra",
				commit: "API integrated",
				date: "July 27, 2024",
			},
		],
	},

	incomeTrend: { profit: 234424, revenue: 546567 },
	groupTrend: {
		"Group A": 234424,
		"Group B": 546567,
		"Group C": 98445,
		"Group D": 53847,
	}
}