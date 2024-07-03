import Hero from '@/app/components/blog/hero'
import React from 'react'
import { groq } from "next-sanity";
import { sanityClient } from '@/sanity/lib/sanityclient';
import BlogContent from '@/app/components/blog/BlogContent';


const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;




export default async function BlogHome () {
  const posts = await  sanityClient.fetch(query)

  return (

    <main>
      <Hero/>
      <BlogContent posts={posts}/>
    </main>
  )
}

