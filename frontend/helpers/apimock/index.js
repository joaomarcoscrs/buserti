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
          software_groups: [
            {
              id: 2,
              name: 'people',
              softwares: [
                {
                  id: 1,
                  name: 'office',
                  image: 'office.png',
                  installed: false
                },
                {
                  id: 2,
                  name: 'powerbi',
                  image: 'powerbi.png',
                  installed: true
                }
              ]
            },
            {
              id: 1,
              name: 'financeiro',
              softwares: [
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
            }
          ],
          softwares: ['Office', 'PowerBI', 'JazzHR'],
          permissions: ['metabase r/w', 'Jazz admin', 'Google Drive']
        },
        {
          id: 2,
          name: 'Tony Lâmpada',
          slack: 'tony.lampada',
          buser_email: 'tony.lampada@buser.com.br',
          computer: null,
          software_groups: [
            {
              id: 3,
              title: 'dev',
              softwares: [
                {
                  id: 4,
                  name: 'pycharm',
                  image: 'pycharm.png',
                  installed: true
                },
                {
                  id: 5,
                  name: 'VSCode',
                  image: 'vscode.png',
                  installed: false
                }
              ]
            }
          ],
          softwares: ['VS Code'],
          permissions: ['metabase r/w', 'aws ec3']
        }
      ]
    })
  },
  list_software_groups () {
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
          patrimonio: '000123',
          service_tag: '20GMD93',
          ram: 4,
          hd: 500,
          ssd: 0,
          marca: 'Dell',
          modelo: 'Inspiron 13',
          os_original: 'Windows 10 Home',
          os_atual: 'Mint 20',
          observacoes: 'Está sem carregador',
          garantia_expira: '2021-01-03',
          _str: 'Dell Inspiron 13 4gb RAM 500gb HD'
        },
        {
          id: 2,
          patrimonio: '000939',
          service_tag: '20GMD92',
          ram: 4,
          hd: 500,
          ssd: 0,
          marca: 'Dell',
          modelo: 'Inspiron 13',
          os_original: 'Windows 10 Home',
          os_atual: 'Mint 20',
          observacoes: null,
          garantia_expira: '2021-01-03',
          _str: 'Dell Inspiron 13 4gb RAM 500gb HD'
        },
        {
          id: 3,
          patrimonio: '000056',
          service_tag: '20FMD93',
          ram: 16,
          hd: 1000,
          ssd: 512,
          marca: 'Dell',
          modelo: 'G5',
          os_original: 'Ubuntu 18',
          os_atual: 'Windows 10 Pro',
          observacoes: null,
          garantia_expira: '2022-01-03',
          _str: 'Dell G5 16gb RAM 512gb SSD 1000gb HD'
        }
      ]
    })
  },
  list_softwares () {
    return mockasync({
      data: [
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
        },
        {
          id: 4,
          name: 'pycharm',
          image: 'pycharm.png'
        }
      ]
    })
  },
  list_permission_groups () {
    return mockasync({
      data: [
        {
          id: 1,
          title: 'financeiro',
          items: [
            {
              id: 1,
              subgroup: null,
              refers_to: 'metabase',
              level: 'read'
            },
            {
              id: 2,
              subgroup: 'powerbi-fin',
              refers_to: 'powerbi',
              level: 'general'
            },
            {
              id: 3,
              subgroup: 'powerbi-fin',
              refers_to: 'powerbi',
              level: 'OKR'
            },
            {
              id: 4,
              subgroup: 'powerbi-fin',
              refers_to: 'powerbi',
              level: 'financeiro'
            }
          ]
        },
        {
          id: 2,
          title: 'dev',
          items: [
            {
              id: 5,
              subgroup: null,
              refers_to: 'metabase',
              level: 'read/write'
            },
            {
              id: 6,
              subgroup: 'staff-dev',
              refers_to: 'staff',
              level: 'criar grupo'
            },
            {
              id: 7,
              subgroup: 'staff-dev',
              refers_to: 'staff',
              level: 'cancelar grupo'
            },
            {
              id: 8,
              subgroup: 'staff-dev',
              refers_to: 'staff',
              level: 'alterar reserva'
            }
          ]
        }
      ]
    })
  },
  list_permissions () {
    return mockasync({
      data: [
        {
          id: 1,
          subgroup: null,
          refers_to: 'metabase',
          level: 'read'
        },
        {
          id: 2,
          subgroup: 'powerbi',
          refers_to: 'powerbi',
          level: 'general'
        },
        {
          id: 3,
          subgroup: 'powerbi',
          refers_to: 'powerbi',
          level: 'OKR'
        },
        {
          id: 4,
          subgroup: 'powerbi',
          refers_to: 'powerbi',
          level: 'financeiro'
        },
        {
          id: 5,
          subgroup: null,
          refers_to: 'metabase',
          level: 'read/write'
        },
        {
          id: 6,
          subgroup: 'staff',
          refers_to: 'staff',
          level: 'criar grupo'
        },
        {
          id: 7,
          subgroup: 'staff',
          refers_to: 'staff',
          level: 'cancelar grupo'
        },
        {
          id: 8,
          subgroup: 'staff',
          refers_to: 'staff',
          level: 'alterar reserva'
        }
      ]
    })
  }
}
