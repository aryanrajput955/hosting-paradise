/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/aryanrajput955/icons_paradise/**',
			},
		],
		
	},
	// output: "export",
	trailingSlash: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
}

export default nextConfig
