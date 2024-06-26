/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export const dynamic = 'force-static'

import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { metadata as studioMetadata} from "next-sanity/studio"
import {viewport as studioViewport } from "next-sanity/studio"
import Studio from './Studio';

export const metadata:Metadata={
  ...studioMetadata,
  title:"loading Studio..."
}

export const viewport:Viewport= {
  ...studioViewport,
  interactiveWidget: "resizes-content",
}
const StudioPage = () => {
  return (
    <div><Studio/></div>
  )
}

export default StudioPage;