import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Bramy Ternopolia',

  projectId: 'rbsuzu4c',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('homepage').title('Головна сторінка'),
            S.documentTypeListItem('instagramPost').title('Instagram фото'),
            S.documentTypeListItem('project').title('Наші проєкти'),
            S.documentTypeListItem('futureEvent').title('Майбутні події'),
            S.documentTypeListItem('merchItem').title('Наш мерч'),

          ]),
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
