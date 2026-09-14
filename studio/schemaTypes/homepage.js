export default {
  name: 'homepage',
  title: 'Головна сторінка',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Шапка сайту (Header)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'logoDesktop', title: 'Логотип (Десктоп)', type: 'image', options: { hotspot: true } },
        { name: 'logoMobile', title: 'Логотип (Мобільна версія)', type: 'image', options: { hotspot: true } },
        {
          name: 'navItems',
          title: 'Пункти меню (динамічний список)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'text', title: 'Текст пункту', type: 'string' },
                { name: 'link', title: 'Посилання (наприклад: #about)', type: 'string' },
              ]
            }
          ]
        },
        {
          name: 'navItemSupport',
          title: 'Кнопка меню',
          type: 'object',
          fields: [
            { name: 'text', title: 'Текст', type: 'string' },
            { name: 'link', title: 'Посилання на сторінку або секцію (наприклад: #support)', type: 'string' },
          ]
        },
      ],
    },
    {
      name: 'hero',
      title: 'Головний банер (Hero)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'sectionId', title: 'ID секції (наприклад: hero)', type: 'string' },
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
        { name: 'buttonText', title: 'Текст кнопки', type: 'string' },
        { name: 'buttonLink', title: 'Посилання (наприклад: #support або https://...)', type: 'string' },
        { name: 'backgroundImage', title: 'Фонове зображення', type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'about',
      title: 'Секція "Про нас"',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'sectionId', title: 'ID секції (наприклад: about)', type: 'string' },
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
        { name: 'image', title: 'Зображення', type: 'image', options: { hotspot: true } },
      ],
    },

    {
      name: 'instagram',
      title: 'Секція Instagram',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'text', title: 'Текст', type: 'text' },
      ],
    },
    {
      name: 'projectsText',
      title: 'Секція "Наші проєкти" (Тексти)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'sectionId', title: 'ID секції (наприклад: projects)', type: 'string' },
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
      ],
    },
    {
      name: 'restore',
      title: 'Секція "Відновлення брами"',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fieldsets: [
        { name: 'button', title: 'Налаштування кнопки', options: { columns: 2 } }
      ],
      fields: [
        { name: 'sectionId', title: 'ID секції (наприклад: restore)', type: 'string' },
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
        { name: 'buttonText', title: 'Текст кнопки', type: 'string', fieldset: 'button' },
        { name: 'buttonLink', title: 'Посилання на Google форму', type: 'url', fieldset: 'button' },
        { name: 'backgroundImage', title: 'Фонове зображення', type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'events',
      title: 'Секція "Наші події"',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'sectionId', title: 'ID секції (наприклад: events)', type: 'string' },
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
        {
          name: 'gallery',
          title: 'Галерея фото (Точно 6 фото)',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
          validation: Rule => Rule.min(6).max(6)
        },
      ],
    },
    {
      name: 'futureEvents',
      title: 'Секція "Анонс майбутніх подій"',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'sectionId', title: 'ID секції (наприклад: future-events)', type: 'string' },
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'emptyTitle', title: 'Заголовок, коли немає подій', type: 'string', description: 'Наприклад: "Нові події готуються"' },
        { name: 'emptyDescription', title: 'Текст, коли немає подій', type: 'text', description: 'Наприклад: "Згодом ви тут побачите наші майбутні події..."' },
      ],
    },
    {
      name: 'merch',
      title: 'Секція "Наш мерч"',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'sectionId', title: 'ID секції (наприклад: merch)', type: 'string' },
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
      ],
    },
    {
      name: 'map',
      title: 'Секція "Інтерактивна мапа" (Тексти)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'sectionId', title: 'ID секції (наприклад: map)', type: 'string' },
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
      ],
    },
    {
      name: 'support',
      title: 'Секція "Підтримати проєкт"',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'sectionId', title: 'ID секції (наприклад: support)', type: 'string' },
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
        {
          name: 'patreon',
          title: 'Patreon',
          type: 'object',
          fields: [
            { name: 'text', title: 'Текст кнопки', type: 'string' },
            { name: 'link', title: 'Посилання', type: 'url' },
          ]
        },
        {
          name: 'mono',
          title: 'Mono Base',
          type: 'object',
          fields: [
            { name: 'text', title: 'Текст кнопки', type: 'string' },
            { name: 'link', title: 'Посилання', type: 'url' },
          ]
        },
        { name: 'backgroundImage', title: 'Фонове зображення', type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'footer',
      title: 'Футер (Соцмережі)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fieldsets: [
        { name: 'fbGroup', title: 'Facebook', options: { columns: 2 } },
        { name: 'ytGroup', title: 'YouTube', options: { columns: 2 } },
        { name: 'igGroup', title: 'Instagram', options: { columns: 2 } },
      ],
      fields: [
        { name: 'logo', title: 'Логотип', type: 'image', options: { hotspot: true } },
        { name: 'description', title: 'Текст біля соцмереж (напр. "Ми в соцмережах")', type: 'string' },
        { name: 'copyright', title: 'Текст копірайту (напр. "© 2025...")', type: 'string' },
        { name: 'facebook', title: 'Посилання', type: 'url', fieldset: 'fbGroup' },
        { name: 'facebookIcon', title: 'Іконка', type: 'image', fieldset: 'fbGroup', options: { accept: 'image/svg+xml,image/*' } },
        { name: 'youtube', title: 'Посилання', type: 'url', fieldset: 'ytGroup' },
        { name: 'youtubeIcon', title: 'Іконка', type: 'image', fieldset: 'ytGroup', options: { accept: 'image/svg+xml,image/*' } },
        { name: 'instagram', title: 'Посилання', type: 'url', fieldset: 'igGroup' },
        { name: 'instagramIcon', title: 'Іконка', type: 'image', fieldset: 'igGroup', options: { accept: 'image/svg+xml,image/*' } },
        {
          name: 'privacy',
          title: 'Конфіденційність та політика',
          type: 'object',
          fields: [
            { name: 'text', title: 'Текст', type: 'string' },
            { name: 'link', title: 'Посилання', type: 'url' },
          ]
        },
        {
          name: 'terms',
          title: 'Правила та умови',
          type: 'object',
          fields: [
            { name: 'text', title: 'Текст', type: 'string' },
            { name: 'link', title: 'Посилання', type: 'url' },
          ]
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Головна сторінка'
      }
    }
  }
}
