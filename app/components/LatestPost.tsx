import React from 'react';
import Image from 'next/image';
import { posts } from "@/constants"; // Ensure this import contains the correct data with 'description' property

const LatestPost: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-sky-800 mb-8">
        <span className="border-b-4 border-red-500 pb-2">Latest Posts</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
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
                <p className="text-gray-400 text-sm">{post.date} {post.readTime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
