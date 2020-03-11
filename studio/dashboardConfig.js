export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e684a8040d57b3c7459271c',
                  title: 'Sanity Studio',
                  name: 'datando-web-studio',
                  apiId: '5b98077e-cc38-41c5-8fe4-4ab4a58b809a'
                },
                {
                  buildHookId: '5e684a80080dbf07597e8fde',
                  title: 'Landing pages Website',
                  name: 'datando-web',
                  apiId: 'a90b789c-1362-4b3e-8b13-5e9dff1d05cb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jhonatang1988/datando-web',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://datando-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
