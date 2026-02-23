import connectDB from '@/config/database';
import Blog from '@/models/Blog';
import BlogDetailsClient from './BlogDetailsClient';

export async function generateMetadata({ params }) {
    await connectDB();
    const { id } = await params;
    
    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return {
                title: 'Blog Not Found | Paradise Bliss',
                description: 'The requested blog post could not be found.'
            };
        }

        return {
            title: blog.metaTitle || blog.title,
            description: blog.metaDescription,
            openGraph: {
                title: blog.metaTitle || blog.title,
                description: blog.metaDescription,
                images: [blog.image],
            },
        };
    } catch (error) {
        return {
            title: 'Blog | Paradise Bliss',
            description: 'Explore our latest travel stories.'
        };
    }
}

export default async function BlogPage({ params }) {
    await connectDB();
    const { id } = await params;
    
    let initialBlog = null;
    try {
        const blog = await Blog.findById(id);
        if (blog) {
            initialBlog = JSON.parse(JSON.stringify(blog));
        }
    } catch (error) {
        console.error('Error fetching blog for server render:', error);
    }

    return <BlogDetailsClient id={id} initialBlog={initialBlog} />;
}
