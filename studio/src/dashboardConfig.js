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
                  buildHookId: '5ed94beb25984d03e4e1f561',
                  title: 'Sanity Studio',
                  name: 'onetrust-test-studio',
                  apiId: '071b5620-5b5a-43ae-acc2-4411eb35995b'
                },
                {
                  buildHookId: '5ed94beb1b6e270901b29585',
                  title: 'Blog Website',
                  name: 'onetrust-test',
                  apiId: '24a88f22-0239-4248-adfb-e0c2c55bf407'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tommyyau/onetrust-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://onetrust-test.netlify.app', category: 'apps' }
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
