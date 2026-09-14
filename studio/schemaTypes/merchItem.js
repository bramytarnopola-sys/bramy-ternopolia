export default {
  name: 'merchItem',
  title: 'Наш мерч',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Фото',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'order',
      title: 'Порядок сортування',
      type: 'number',
      description: 'Менше число — відображається першим',
    },
    {
      name: 'title',
      title: 'Назва товару',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Опис товару',
      type: 'text',
      description: 'Склад, розміри, деталі',
    },
    {
      name: 'price',
      title: 'Ціна',
      type: 'string',
      description: 'Наприклад: "500 грн"',
    },
    {
      name: 'gallery',
      title: 'Галерея фотографій',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Додаткові фото для поп-апу',
    }
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare(selection) {
      return {
        title: 'Фото мерчу',
        media: selection.media,
      }
    }
  },
}
