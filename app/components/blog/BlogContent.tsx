import { Post } from '@/types';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/sanityclient';
import ContainerBlog from '../ContainerBlog';

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  if (!posts) {
    return <div>No posts available</div>;
  }

  return (
    <ContainerBlog className="bg-gray-100 py-20 px-10 flex flex-col gap-4">
      {posts.map((post) => (
        <Link
          href={{
            pathname: `/blog/post/${post?.slug?.current}`,
            query: { slug: post?.slug?.current },
          }}
          key={post?._id}
          className="group"
        >
          <div className="flex flex-col w-full md:w-[280px] mx-auto md:h-[450px] gap-2 bg-white hover:bg-sky-800 rounded-md rounded-tr-md rounded-br-md hover:shadow-md duration-200">
            <div className="relative w-full h-[200px] md:h-[340px] group overflow-hidden rounded-tl-md rounded-bl-md">
              {post?.mainImage && (
                <Image
                  src={urlFor(post?.mainImage).url()}
                  alt="blog post image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-tl-md rounded-bl-md"
                />
              )}
              <div className="absolute top-0 left-0 bg-black/20 w-full h-full group-hover:hidden duration-200" />
              <div className="absolute hidden group-hover:inline-flex bottom-0 left-0 w-full bg-opacity-20 bg-sky-900 backdrop-blur-lg rounded drop-shadow-lg text-white p-5 justify-center duration-200">
                <p className="text-sm  text-white font-md">Click to Read</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-between py-10 px-4 flex-1">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  {post?.categories?.map((item) => (
                    <p
                      key={item?._id}
                      className="text-xs uppercase text-red-500 font-semibold group-hover:text-white"
                    >
                      {item?.title}
                    </p>
                  ))}
                </div>
                <h2 className="text-lg text-sky-800 font-semibold group-hover:text-white duration-200 cursor-pointer">
                  {post?.title}
                </h2>
                <p className="text-gray-500 line-clamp-3 group-hover:text-gray-600">
                  {post?.description}
                </p>
              </div>
              <div className="flex py-4">
                <h3 className='text-gray-600 text-right group-hover:text-white'>Read More <span className="mr-2 group-hover:no-underline">→</span></h3>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </ContainerBlog>
  );
};

export default BlogContent;
