'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const BlogDetailsClient = ({ slug, initialBlog }) => {
    const router = useRouter()
    const [blog, setBlog] = useState(initialBlog)
    const [isLoading, setIsLoading] = useState(!initialBlog)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!initialBlog && slug) {
            fetchBlogDetails()
        }
    }, [slug, initialBlog])

    const fetchBlogDetails = async () => {
        try {
            setIsLoading(true)
            const baseUrl = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '')
            const response = await axios.get(
                `${baseUrl}/api/blogs/${slug}`
            )
            if (response.data.success) {
                setBlog(response.data.data)
            } else {
                setError('Failed to load blog details')
            }
        } catch (err) {
            console.error('Error fetching blog details:', err)
            setError('Blog not found or an error occurred')
        } finally {
            setIsLoading(false)
        }
    }

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

    const calculateReadingTime = (content) => {
        const wordsPerMinute = 200
        const text = content.replace(/<[^>]*>?/gm, '')
        const words = text.split(/\s+/).length
        const minutes = Math.ceil(words / wordsPerMinute)
        return minutes
    }

    if (isLoading) {
        return (
            <div className='min-h-screen bg-[var(--light-green)] flex justify-center items-center'>
                <div className='animate-spin rounded-full h-16 w-16 border-b-4 border-[var(--color-dark)]'></div>
            </div>
        )
    }

    if (error || !blog) {
        return (
            <div className='min-h-screen bg-[var(--light-green)] flex flex-col justify-center items-center px-4'>
                <div className='text-center p-8 bg-white rounded-2xl shadow-xl max-w-md w-full border border-[var(--sandy)]'>
                    <svg
                        className='w-16 h-16 text-[var(--sunset-orange)] mx-auto mb-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                        />
                    </svg>
                    <h2 className='text-2xl font-bold text-[var(--color-dark)] mb-2 font-jost'>
                        {error || 'Blog Not Found'}
                    </h2>
                    <p className='text-gray-600 mb-6 font-jost'>
                        The blog post you are looking for might have been removed or is temporarily unavailable.
                    </p>
                    <Link
                        href='/blogs'
                        className='inline-block px-8 py-3 bg-[var(--color-dark)] text-white font-semibold rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-jost'>
                        Back to Blogs
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-[var(--light-green)] font-jost'>
             {/* Navigation Bar Placeholder (if global nav isn't sticky) or just padding */}
            <div className="pt-24 lg:pt-32"></div>

            <article className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
                {/* Back Link */}
                <div className="mb-12">
                    <Link
                        href='/blogs'
                        className='group inline-flex items-center gap-2 text-gray-600 hover:text-[var(--color-dark)] font-medium transition-colors duration-300'>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all border border-gray-100">
                            <svg className='w-5 h-5 transform group-hover:-translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7' />
                            </svg>
                        </div>
                        <span className="text-sm font-bold uppercase tracking-wide">Back to Blogs</span>
                    </Link>
                </div>

                {/* Split Header Layout (Wide) */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16'>
                    {/* Left: Text Header */}
                    <header className='text-left'>
                        <div className='flex flex-wrap items-center gap-3 text-sm font-bold mb-6 uppercase tracking-wider text-[var(--color-dark)]/80'>
                            <span className='px-4 py-1.5 bg-[var(--sandy)] rounded-full text-[var(--color-dark)] shadow-sm'>
                                {blog.category || 'Travel'}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                            <span>{formatDate(blog.date)}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                            <span>{calculateReadingTime(blog.content)} min read</span>
                        </div>
                        
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-dark)] leading-[1.1] mb-8 break-words'>
                            {blog.title}
                        </h1>

                        <div className='flex items-center gap-5'>
                            <div className='w-16 h-16 rounded-full bg-[var(--color-dark)] text-white flex items-center justify-center text-2xl font-bold shadow-xl ring-4 ring-white'>
                                {blog.author.charAt(0)}
                            </div>
                            <div className='text-left'>
                                <p className='text-[var(--color-dark)] font-bold text-lg leading-none mb-1.5'>
                                    {blog.author}
                                </p>
                                <p className='text-gray-500 text-sm font-semibold tracking-wide uppercase'>
                                    Author & Traveler
                                </p>
                            </div>
                        </div>
                    </header>

                     {/* Right: Featured Image */}
                     <div className='relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl group'>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        {blog.image ? (
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className='w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out'
                            />
                        ) : (
                            <div className='w-full h-full bg-gray-200 flex items-center justify-center text-gray-400'>
                                No Image Available
                            </div>
                        )}
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                    {/* Share / Social Sidebar (Desktop) - Adjusted Position */}
                    <div className='hidden lg:flex lg:col-span-1 flex-col items-center gap-6 sticky top-32 h-fit pt-8'>
                        <div className="text-gray-400 text-xs font-bold uppercase tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>Share this story</div>
                        <div className="h-12 w-px bg-gray-300"></div>
                         {/* Icons remain the same... */}
                         <button className='w-11 h-11 rounded-full bg-white text-blue-600 shadow-lg border border-gray-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110'>
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                         </button>
                         <button className='w-11 h-11 rounded-full bg-white text-blue-800 shadow-lg border border-gray-50 flex items-center justify-center hover:bg-blue-800 hover:text-white transition-all transform hover:scale-110'>
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                         </button>
                         <button className='w-11 h-11 rounded-full bg-white text-pink-600 shadow-lg border border-gray-50 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all transform hover:scale-110'>
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                         </button>
                    </div>

                    {/* Blog Content Centered */}
                    <div className='col-span-1 lg:col-span-12 xl:col-span-10 xl:col-start-2'>
                        <div className='bg-white rounded-3xl md:rounded-[2.5rem] p-5 md:p-14 lg:p-20 shadow-2xl border border-[var(--sandy)]/20 overflow-hidden'>
                            <div 
                                className='blog-content-container max-w-none w-full font-jost text-gray-800 leading-relaxed'
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />
                            
                            <style jsx global>{`
                                .blog-content-container {
                                    font-size: 1.125rem;
                                    line-height: 1.8;
                                    color: #374151;
                                    word-wrap: break-word;
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                }
                                .blog-content-container p {
                                    margin-bottom: 1.5rem;
                                }
                                .blog-content-container h1, 
                                .blog-content-container h2, 
                                .blog-content-container h3 {
                                    color: var(--color-dark);
                                    font-weight: 800;
                                    line-height: 1.2;
                                    margin-top: 2.5rem;
                                    margin-bottom: 1.25rem;
                                    font-family: 'salazur', sans-serif;
                                }
                                .blog-content-container h1 { font-size: 2.5rem; }
                                .blog-content-container h2 { 
                                    font-size: 2rem; 
                                    border-bottom: 2px solid var(--sandy);
                                    padding-bottom: 0.5rem;
                                }
                                .blog-content-container h3 { font-size: 1.5rem; }
                                
                                .blog-content-container ul, 
                                .blog-content-container ol {
                                    margin-bottom: 1.5rem;
                                    padding-left: 1.5rem;
                                }
                                .blog-content-container ul { list-style-type: disc; }
                                .blog-content-container ol { list-style-type: decimal; }
                                .blog-content-container li { margin-bottom: 0.5rem; }
                                
                                .blog-content-container blockquote {
                                    border-left: 4px solid var(--forest-green);
                                    padding: 1.5rem 2rem;
                                    background: rgba(var(--sandy-rgb), 0.1);
                                    border-radius: 0 1rem 1rem 0;
                                    font-style: italic;
                                    font-size: 1.25rem;
                                    margin: 2rem 0;
                                    color: var(--color-dark);
                                }
                                
                                .blog-content-container img, 
                                .blog-content-container iframe, 
                                .blog-content-container video, 
                                .blog-content-container table {
                                    max-width: 100%;
                                    height: auto;
                                    display: block;
                                }
                                
                                .blog-content-container img {
                                    border-radius: 1.5rem;
                                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                                    margin: 2.5rem 0;
                                }
                                
                                .blog-content-container a {
                                    color: #0077B6;
                                    text-decoration: underline;
                                    text-underline-offset: 4px;
                                    font-weight: 600;
                                    transition: color 0.2s;
                                }
                                .blog-content-container a:hover {
                                    color: var(--color-dark);
                                }
                                
                                .blog-content-container strong {
                                    font-weight: 700;
                                    color: var(--color-dark);
                                }
                                
                                /* Quill specific alignment classes */
                                .blog-content-container .ql-align-center { text-align: center; }
                                .blog-content-container .ql-align-right { text-align: right; }
                                .blog-content-container .ql-align-justify { text-align: justify; }
                                
                                /* Quill specific indentation */
                                .blog-content-container .ql-indent-1 { padding-left: 3em; }
                                .blog-content-container .ql-indent-2 { padding-left: 6em; }
                                .blog-content-container .ql-indent-3 { padding-left: 9em; }
                                
                                .blog-content-container pre {
                                    background: #f3f4f6;
                                    padding: 1rem;
                                    border-radius: 0.5rem;
                                    overflow-x: auto;
                                    margin-bottom: 1.5rem;
                                }
                            `}</style>
                            
                            {/* Mobile Share (Visible only on small screens) */}
                            <div className="lg:hidden flex justify-center gap-6 mt-16 pt-10 border-t border-gray-100">
                                 <button className='w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all'>
                                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                                 </button>
                                 <button className='w-14 h-14 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition-all'>
                                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                                 </button>
                            </div>
                        </div>
                    </div>

                     {/* Right Sidebar Placeholder (Optional for future use: Table of Contents, Related Posts) */}
                    <div className='hidden lg:block lg:col-span-1'>
                        {/* Could be used for a scroll progress indicator or similar */}
                    </div>
                </div>

                {/* Footer Section */}
                <div className="max-w-4xl mx-auto mt-20 text-center">
                    <h3 className="text-2xl font-bold text-[var(--color-dark)] mb-6 font-jost">Enjoyed this article?</h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Sign up for our newsletter to get the latest travel tips and inspiration delivered straight to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            className="px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-dark)] focus:border-transparent w-full sm:w-80"
                        />
                        <button className="px-8 py-3 bg-[var(--color-dark)] text-white font-bold rounded-full hover:bg-[#003329] transition-colors shadow-lg hover:shadow-xl">
                            Subscribe
                        </button>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default BlogDetailsClient
