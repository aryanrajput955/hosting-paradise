import BlogsClient from './BlogsClient';

export const metadata = {
    title: 'Our Travel Blog | Paradise Bliss',
    description: 'Stories, Tips & Inspiration for Your Next Adventure. Explore our latest travel stories and plan your perfect trip with Paradise Bliss Tours.',
    openGraph: {
        title: 'Our Travel Blog | Paradise Bliss',
        description: 'Stories, Tips & Inspiration for Your Next Adventure.',
        type: 'website',
    }
};

export default function BlogsPage() {
    return <BlogsClient />;
}
