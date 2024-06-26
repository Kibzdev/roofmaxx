'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'


// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import { schemaTypes } from './SchemaTypes'
import StudioNavbar from './app/components/StudioNavbar'

export default defineConfig({
  basePath: '/studio',
  name:"Roofmax_studio",
  title:"Roofmax Studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar:StudioNavbar,
  },
},
  plugins: [
   presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft',
        },
      },
    }),
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
