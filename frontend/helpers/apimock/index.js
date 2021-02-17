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
          computer: {
            id: 1,
            ram: 8,
            hd: 0,
            ssd: 240,
            marca: 'Dell',
            modelo: 'Vostro 14',
            _str: 'Dell Vostro 14 8gb RAM 240gb SSD'
          },
          softwares: ['Office', 'PowerBI', 'JazzHR'],
          permissions: ['metabase r/w', 'Jazz admin', 'Google Drive']
        },
        {
          id: 2,
          name: 'Tony Lâmpada',
          slack: 'tony.lampada',
          buser_email: 'tony.lampada@buser.com.br',
          computer: null,
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
          items: [
            {
              id: 1,
              name: 'office',
              image: 'office.png'
            },
            {
              id: 2,
              name: 'powerbi',
              image: 'powerbi.png'
            }
          ]
        },
        {
          id: 2,
          title: 'people',
          items: [
            {
              id: 1,
              name: 'office',
              image: 'office.png'
            },
            {
              id: 2,
              name: 'powerbi',
              image: 'powerbi.png'
            },
            {
              id: 3,
              name: 'jazzhr',
              image: 'jazzhr.png'
            }
          ]
        },
        {
          id: 3,
          title: 'dev',
          items: [
            {
              id: 4,
              name: 'pycharm',
              image: 'pycharm.png'
            }
          ]
        }
      ]
    })
  },
  list_computers () {
    return mockasync({
      data: [
        {
          id: 1,
          ram: 8,
          hd: 0,
          ssd: 240,
          marca: 'Dell',
          modelo: 'Vostro 14',
          _str: 'Dell Vostro 14 8gb RAM 240gb SSD'
        },
        {
          id: 2,
          ram: 4,
          hd: 500,
          ssd: 0,
          marca: 'Dell',
          modelo: 'Inspiron 13',
          _str: 'Dell Inspiron 13 4gb RAM 500gb HD'
        },
        {
          id: 3,
          ram: 16,
          hd: 1000,
          ssd: 512,
          marca: 'Dell',
          modelo: 'G5',
          _str: 'Dell G5 16gb RAM 512gb SSD 1000gb HD'
        }
      ]
    })
  }
}
