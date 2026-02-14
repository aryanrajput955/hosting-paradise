'use client'
import dynamic from 'next/dynamic'

const pages = {
	'vietnam-newyear-packages': dynamic(() =>
		import('../vietnam-newyear-packages/VietnamNewyearClient.js')
	),
	'vietnam-10day-packages': dynamic(() =>
		import('../vietnam-10day-packages/Vietnam10DayClient.js')
	),
	'vietnam-saigoncity-packages': dynamic(() =>
		import('../vietnam-saigoncity-packages/VietnamSaigonClient.js')
	),
	'vietnam-6day-packages': dynamic(() =>
		import('../vietnam-6day-packages/Vietnam6DayClient.js')
	),
	'vietnam-8day-packages': dynamic(() =>
		import('../vietnam-8day-packages/Vietnam8DayClient.js')
	),
	'vietnam-4day-packages': dynamic(() =>
		import('../vietnam-4day-packages/Vietnam4DayClient.js')
	),
	'tokyo-kyoto-osaka-10-day-cultural-tour': dynamic(() =>
		import('../tokyo-kyoto-osaka-10-day-cultural-tour/TokyoKyotoClient.js')
	),
	'georgia-packages': dynamic(() =>
		import('../georgia-packages/GeorgiaClient.js')
	),
	'almaty-6days-packages': dynamic(() =>
		import('../almaty-6days-packages/Almaty6DaysClient.js')
	),
	'almaty-5day-packages': dynamic(() =>
		import('../almaty-5day-packages/Almaty5DayClient.js')
	),
	'almaty-4day-packages': dynamic(() =>
		import('../almaty-4day-packages/Almaty4DayClient.js')
	),
	'europe-packages': dynamic(() =>
		import('../europe-packages/EuropeClient.js')
	),
	'dubai-group-trip': dynamic(() =>
		import('../dubai-group-trip/DubaiGroupClient.js')
	),
	'thailand-packages': dynamic(() =>
		import('../thailand-packages/ThailandClient.js')
	),
	'bali-packages': dynamic(() => import('../bali-packages/BaliClient.js')),
	'bhutan-christmas-packages': dynamic(() =>
		import('../bhutan-christmas-packages/BhutanChristmasClient.js')
	),
	'bhutan-7day-packages': dynamic(() =>
		import('../bhutan-7day-packages/Bhutan7DayClient.js')
	),
	'badrinath-kedarnath-helicopter': dynamic(() =>
		import('../badrinath-kedarnath-helicopter/page.js')
	),
	'badrinath-yatra': dynamic(() => import('../badrinath-yatra/page.js')),
	'chardham-luxury': dynamic(() => import('../chardham-luxury/page.js')),
	'chardham-yatra-bangalore': dynamic(() =>
		import('../chardham-yatra-bangalore/page.js')
	),
	'chardham-yatra-delhi': dynamic(() =>
		import('../chardham-yatra-delhi/page.js')
	),
	'chardham-yatra-helicopter': dynamic(() =>
		import('../chardham-yatra-helicopter/page.js')
	),
	'kedarnath-yatra': dynamic(() => import('../kedarnath-yatra/page.js')),
}

export default function TripPackagesClient({slug}) {
	const PageComponent = pages[slug]
	if (!PageComponent) return <div>Package not found</div>
	return <PageComponent />
}
