// components/LatestPost.tsx
import React from 'react';
import Image from 'next/image';
import { posts } from "@/constants";

// Define the type for each post
type Post = {
  id: string;          // Unique identifier for the post
  title: string;       // Title of the post
  description: string; // Description of the post
  image: string;       // URL of the post image
  author: string;      // Author of the post
  date: string;        // Publish date of the post
  readTime: string;    // Reading time of the post
  views: number;       // View count of the post
};

const LatestPost: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-sky-800 mb-8">
        <span className="border-b-4 border-red-500 pb-2">Latest Post</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post: Post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md border-2 border-sky-500 relative">
            <div className="flex">
              <div className="w-1/3">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              </div>
              <div className="w-2/3 pl-4">
                <h3 className="text-sky-800 text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{post.description}</p>
                <p className="text-black text-sm font-semibold">{post.author}</p>
                <p className="text-gray-400 text-sm">{post.date}. {post.readTime}</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 text-sky-700 flex items-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="ml-1 text-sm">{post.views}</span>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-white border-2 border-sky-700 text-sky-700 rounded-full p-2 hover:bg-sky-500 hover:text-white transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
