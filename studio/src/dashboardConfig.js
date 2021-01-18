export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6004dec0e91328019a82bec2',
                  title: 'Sanity Studio',
                  name: 'what-i-learned-today-studio',
                  apiId: '7300b0c4-4684-4bea-bbe3-c8efe22ca87f'
                },
                {
                  buildHookId: '6004dec0fc21bd1128a1ac15',
                  title: 'Blog Website',
                  name: 'what-i-learned-today',
                  apiId: '267649bb-553e-4293-9621-226cd595e8e0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Anaizing/what-i-learned-today',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://what-i-learned-today.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
