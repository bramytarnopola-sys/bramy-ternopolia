export default {
  name: 'project',
  title: 'Проєкти',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва (Вулиця)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Головне фото (Мініатюра)',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Опис проєкту',
      type: 'text',
      description: 'Детальний опис робіт та історії (звичайний текст)'
    },
    {
      name: 'gallery',
      title: 'Галерея фотографій',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Додаткові фото для поп-апу'
    },
  ],
}
