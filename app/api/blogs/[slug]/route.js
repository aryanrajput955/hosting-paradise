import connectDB from '@/config/database';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';
import { uploadToS3 } from '@/utils/s3Helper';

export async function GET(req, { params }) {
    await connectDB();
    const { slug } = await params;

    try {
        let blog = await Blog.findOne({ slug: slug });
        
        // Fallback for ID-based lookup
        if (!blog && slug.length === 24) {
            blog = await Blog.findById(slug);
        }

        if (!blog) {
            return NextResponse.json(
                { success: false, message: 'Blog not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, data: blog },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching blog:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch blog' },
            { status: 500 }
        );
    }
}

export async function PUT(req, { params }) {
    await connectDB();
    const { slug } = await params;

    try {
        const {
            metaTitle,
            metaDescription,
            image,
            title,
            content,
            author,
            date,
        } = await req.json();

        let blog = await Blog.findOne({ slug: slug });
        
        if (!blog && slug.length === 24) {
            blog = await Blog.findById(slug);
        }

        if (!blog) {
            return NextResponse.json(
                { success: false, message: 'Blog not found' },
                { status: 404 }
            );
        }

        // Update image if new one is provided
        let imageUrl = blog.image;
        if (image && image !== blog.image && image.startsWith('data:image')) {
            // Only upload if it looks like a base64 string, otherwise assume it's already a URL
            const uploadResult = await uploadToS3(image, 'blogs');
            imageUrl = uploadResult.url;
        }

        // Update fields safely
        if (metaTitle !== undefined) blog.metaTitle = metaTitle.trim();
        if (metaDescription !== undefined) blog.metaDescription = metaDescription.trim();
        blog.image = imageUrl;
        if (title !== undefined) blog.title = title.trim();
        if (content !== undefined) blog.content = content.trim();
        if (author !== undefined) blog.author = author.trim();
        
        // Only update date if it's a valid date string
        if (date) {
            const newDate = new Date(date);
            if (!isNaN(newDate.getTime())) {
                blog.date = newDate;
            }
        }

        await blog.save();

        return NextResponse.json(
            { success: true, message: 'Blog updated successfully', data: blog },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating blog:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Failed to update blog' },
            { status: 500 }
        );
    }
}

export async function DELETE(req, { params }) {
    await connectDB();
    const { slug } = await params;

    try {
        let blog = await Blog.findOne({ slug: slug });
        
        if (!blog && slug.length === 24) {
            blog = await Blog.findById(slug);
        }

        if (!blog) {
            return NextResponse.json(
                { success: false, message: 'Blog not found' },
                { status: 404 }
            );
        }

        await Blog.findByIdAndDelete(blog._id);

        return NextResponse.json(
            { success: true, message: 'Blog deleted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error deleting blog:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to delete blog' },
            { status: 500 }
        );
    }
}
