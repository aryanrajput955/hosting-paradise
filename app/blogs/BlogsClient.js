"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

const BlogsClient = () => {
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetchBlogs()
    }, [])

    const fetchBlogs = async () => {
        try {
            setIsLoading(true)
            const baseUrl = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '')
            let url = `${baseUrl}/api/blogs?`
            const params = []

            if (searchTerm.trim()) {
                params.push(`search=${encodeURIComponent(searchTerm.trim())}`)
            }

            if (params.length > 0) {
                url += params.join('&')
            }

            const response = await axios.get(url)
            if (response.data.success) {
                setBlogs(response.data.data)
            }
        } catch (error) {
            console.error('Error fetching blogs:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleSearch = (e) => {
        e.preventDefault()
        fetchBlogs()
    }

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text
        return text.substring(0, maxLength) + '...'
    }

    return (
        <div className='min-h-screen bg-white pt-24'>
            {/* Hero Section - Matching homepage style */}
            <section
                className='relative min-h-[60vh] flex items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-8'
                style={{ backgroundImage: "url('/img/shoot/pexels-quang-nguyen-vinh-2132174.jpeg')" }}>
                {/* Dark overlay */}
                <div className='absolute inset-0 bg-black/40 z-0'></div>

                {/* Content */}
                <div className='relative z-10 text-center max-w-5xl mx-auto'>
                    <h1
                        style={{ fontFamily: 'salazur' }}
                        className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-200 via-green-100 to-green-100 bg-clip-text text-transparent drop-shadow-2xl'>
                        Our Travel Blog
                    </h1>
                    <p className='text-white/90 text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-lg'>
                        Stories, Tips & Inspiration for Your Next Adventure
                    </p>
                </div>
            </section>

            {/* Search and Filter Section */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className='bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-100'>
                    <form onSubmit={handleSearch} className='flex flex-col md:flex-row gap-4'>
                        <div className='flex-1 relative'>
                            <svg
                                className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                />
                            </svg>
                            <input
                                type='text'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder='Search blogs by title...'
                                className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00453a]/20 focus:border-[#00453a] transition-all bg-white'
                            />
                        </div>
                        <div className='flex gap-3'>
                            <button
                                type='submit'
                                className='px-6 py-3 bg-[#00453a] text-white font-semibold rounded-xl hover:bg-[#003329] transition-all shadow-lg hover:shadow-xl'>
                                Search
                            </button>
                            <button
                                type='button'
                                onClick={() => {
                                    setSearchTerm('')
                                    setTimeout(fetchBlogs, 100)
                                }}
                                className='px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all'>
                                Clear
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Blogs Grid Section */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20'>
                {isLoading ? (
                    <div className='flex justify-center items-center py-20'>
                        <div className='animate-spin rounded-full h-16 w-16 border-b-4 border-[#00453a]'></div>
                    </div>
                ) : blogs.length === 0 ? (
                    <div className='text-center py-20'>
                        <div className='inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6'>
                            <svg
                                className='w-12 h-12 text-gray-400'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                                />
                            </svg>
                        </div>
                        <h3 className='text-2xl font-bold text-gray-800 mb-2'>No blogs found</h3>
                        <p className='text-gray-600'>
                            {searchTerm
                                ? 'Try adjusting your search'
                                : 'Check back soon for new content'}
                        </p>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {blogs.map((blog) => (
                            <article
                                key={blog._id}
                                className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group'>
                                {/* Blog Image */}
                                <div className='relative h-56 overflow-hidden bg-gray-200'>
                                    <img
                                        src={blog.image}
                                        alt={blog.metaTitle}
                                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                    />
                                </div>

                                {/* Blog Content */}
                                <div className='p-6'>
                                    <div className='flex items-center gap-4 text-sm text-gray-500 mb-3'>
                                        <div className='flex items-center gap-1.5'>
                                            <svg
                                                className='w-4 h-4 text-[#00453a]'
                                                fill='none'
                                                stroke='currentColor'
                                                viewBox='0 0 24 24'>
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth='2'
                                                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                                                />
                                            </svg>
                                            <span className='font-medium'>{blog.author}</span>
                                        </div>
                                        <div className='flex items-center gap-1.5'>
                                            <svg
                                                className='w-4 h-4 text-[#00453a]'
                                                fill='none'
                                                stroke='currentColor'
                                                viewBox='0 0 24 24'>
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth='2'
                                                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                                                />
                                            </svg>
                                            <span>{formatDate(blog.date)}</span>
                                        </div>
                                    </div>

                                    <h2 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#00453a] transition-colors break-words'>
                                        {blog.title}
                                    </h2>

                                    <p className='text-gray-600 mb-4 line-clamp-3 leading-relaxed break-words'>
                                        {truncateText(blog.metaDescription, 120)}
                                    </p>

                                    <Link
                                        href={`/blogs/${blog.slug || blog._id}`}
                                        className='inline-flex items-center gap-2 text-[#00453a] font-semibold hover:gap-3 transition-all group/link'>
                                        Read More
                                        <svg
                                            className='w-4 h-4 transition-transform'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M9 5l7 7-7 7'
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default BlogsClient
