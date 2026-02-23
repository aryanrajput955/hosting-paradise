/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/aryanrajput955/icons_paradise/**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'akshat.genericbucket.s3.ap-south-1.amazonaws.com',
			},
		],
	},
	output: "export",
	trailingSlash: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
}

export default nextConfig
