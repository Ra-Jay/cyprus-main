import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [

    {
      name: 'alt',
      type: 'text',
      required: false,
      label: 'Alt Text',
      admin: {
        width: '50%',
      },
    },
    // {
    //   type: 'row', // Group title and alt in one row
    //   fields: [
    //     {
    //       name: 'title',
    //       type: 'text',
    //       required: true,
    //       label: 'Title',
    //       admin: {
    //         width: '50%', // Split the row evenly
    //       },
    //     },
    //     {
    //       name: 'alt',
    //       type: 'text',
    //       required: true,
    //       label: 'Alt Text',
    //       admin: {
    //         width: '50%',
    //       },
    //     },
    //   ],
    // },
    // {
    //   type: 'row', // Group duration and rating in another row
    //   fields: [
    //     {
    //       name: 'duration',
    //       type: 'number',
    //       required: true,
    //       label: 'Duration (in minutes)',
    //       min: 0,
    //       admin: {
    //         width: '50%',
    //         description: 'Enter the duration of the media in minutes.',
    //       },
    //     },
    //     {
    //       name: 'rating',
    //       type: 'number',
    //       required: true,
    //       label: 'Rating',
    //       // options: [
    //       //   { label: 'G', value: 'G' },
    //       //   { label: 'PG', value: 'PG' },
    //       //   { label: 'PG-13', value: 'PG-13' },
    //       //   { label: 'R', value: 'R' },
    //       //   { label: 'NR', value: 'NR' },
    //       // ],
    //       // defaultValue: 'NR',
    //       admin: {
    //         width: '50%',
    //         description: 'Select the media rating.',
    //       },
    //     },
    //   ],
    // },
  ],
  upload: true,
}
