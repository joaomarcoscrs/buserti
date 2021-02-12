import { zuck } from './db_people'
import { todos } from './db_todos'
import { mockasync } from './mockutils'

const keepLoggedIn = true

export default {
  login (username, password) {
    return mockasync(zuck)
  },
  logout () {
    return mockasync({})
  },
  whoami () {
    const iam = {authenticated: keepLoggedIn}
    if (iam.authenticated) {
      iam.user = zuck
    }
    return mockasync(iam)
  },
  settings () {
    return mockasync({
      SENTRY_DSN_FRONT: ''
      // SENTRY_DSN_FRONT: 'https://abcd1234@sentry.example.com/10'
    })
  },
  list_todos () {
    return mockasync(todos)
  },
  add_todo (newtask) {
    return mockasync({description: newtask, done: false})
  },
  list_employees () {
    return mockasync({
      data: [
        {
          id: 1,
          name: 'Tamires Érvila',
          slack: 'tamires.cunha',
          buser_email: 'tamires.cunha@buser.com.br',
          computer: 'Dell Vostro 8gb RAM 240gb SSD',
          softwares: ['Office', 'PowerBI', 'JazzHR'],
          permissions: ['metabase r/w', 'Jazz admin', 'Google Drive']
        },
        {
          id: 2,
          name: 'Tony Lâmpada',
          slack: 'tony.lampada',
          buser_email: 'tony.lampada@buser.com.br',
          computer: '',
          softwares: ['VS Code'],
          permissions: ['metabase r/w', 'aws ec3']
        }
      ]
    })
  },
  list_groups () {
    return mockasync({
      data: [
        {
          id: 1,
          title: 'financeiro',
          items: ['office', 'powerbi']
        },
        {
          id: 2,
          title: 'people',
          items: ['office', 'powerbi', 'jazzhr']
        },
        {
          id: 3,
          title: 'dev',
          items: ['pycharm']
        }
      ]
    })
  }
}
