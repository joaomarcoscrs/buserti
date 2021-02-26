import { zuck } from "./db_people";
import { todos } from "./db_todos";
import { mockasync } from "./mockutils";

const keepLoggedIn = true;

export default {
  login(username, password) {
    return mockasync(zuck);
  },
  logout() {
    return mockasync({});
  },
  whoami() {
    const iam = { authenticated: keepLoggedIn };
    if (iam.authenticated) {
      iam.user = zuck;
    }
    return mockasync(iam);
  },
  settings() {
    return mockasync({
      SENTRY_DSN_FRONT: "",
      // SENTRY_DSN_FRONT: 'https://abcd1234@sentry.example.com/10'
    });
  },
  list_todos() {
    return mockasync(todos);
  },
  add_todo(newtask) {
    return mockasync({ description: newtask, done: false });
  },
  list_employees() {
    return mockasync({
      data: [
        {
          id: 1,
          name: "Tamires Érvila",
          slack: "tamires.cunha",
          buser_email: "tamires.cunha@buser.com.br",
          slack_image: "https://ca.slack-edge.com/T8DJ2DE76-USVSDBSG0-a1cef74b740b-512",
          device: {
            id: 1,
            patrimonio: "000123",
            service_tag: "20GMD93",
            ram: 4,
            hd: 500,
            ssd: 0,
            marca: "Dell",
            modelo: "Inspiron 13",
            os_original: "Windows 10 Home",
            os_atual: "Mint 20",
            observacoes: "Está sem carregador",
            garantia_expira: "2021-01-03",
            _str: "Dell Inspiron 13 4gb RAM 500gb HD",
          },
          software_groups: [
            {
              id: 2,
              title: "people",
              items: [
                {
                  id: 1,
                  name: "office",
                  image: "office.png",
                },
                {
                  id: 2,
                  name: "powerbi",
                  image: "powerbi.png",
                },
              ],
            },
            {
              id: 1,
              title: "financeiro",
              items: [
                {
                  id: 1,
                  name: "office",
                  image: "office.png",
                },
                {
                  id: 2,
                  name: "powerbi",
                  image: "powerbi.png",
                },
                {
                  id: 3,
                  name: "jazzhr",
                  image: "jazzhr.png",
                },
              ],
            },
          ],
          installed_softwares: [
            {
              id: 2,
              name: "powerbi",
              image: "powerbi.png",
            },
          ],
          permission_groups: [
            {
              id: 1,
              title: "financeiro",
              items: [
                {
                  id: 1,
                  subgroup: null,
                  refers_to: "metabase",
                  level: "read",
                },
                {
                  id: 2,
                  subgroup: "powerbi-fin",
                  refers_to: "powerbi",
                  level: "general",
                },
                {
                  id: 3,
                  subgroup: "powerbi-fin",
                  refers_to: "powerbi",
                  level: "OKR",
                },
                {
                  id: 4,
                  subgroup: "powerbi-fin",
                  refers_to: "powerbi",
                  level: "financeiro",
                },
              ],
            },
          ],
          acquired_permissions: [
            {
              id: 2,
              subgroup: "powerbi-fin",
              refers_to: "powerbi",
              level: "general",
            },
            {
              id: 4,
              subgroup: "powerbi-fin",
              refers_to: "powerbi",
              level: "financeiro",
            },
          ],
        },
        {
          id: 2,
          name: "Tony Lâmpada",
          slack: "tony.lampada",
          buser_email: "tony.lampada@buser.com.br",
          device: null,
          slack_image: "https://ca.slack-edge.com/T8DJ2DE76-U91N3C1EV-3db45ef4ba15-512",
          software_groups: [
            {
              id: 3,
              title: "dev",
              items: [
                {
                  id: 4,
                  name: "pycharm",
                  image: "pycharm.png",
                },
                {
                  id: 5,
                  name: "VSCode",
                  image: "vscode.png",
                },
              ],
            },
          ],
          installed_softwares: [
            {
              id: 1,
              name: "VSCode",
              image: "vscode.png",
            },
          ],
          permission_groups: [
            {
              id: 2,
              title: "dev",
              items: [
                {
                  id: 5,
                  subgroup: null,
                  refers_to: "metabase",
                  level: "read/write",
                },
                {
                  id: 6,
                  subgroup: "staff-dev",
                  refers_to: "staff",
                  level: "criar grupo",
                },
                {
                  id: 7,
                  subgroup: "staff-dev",
                  refers_to: "staff",
                  level: "cancelar grupo",
                },
                {
                  id: 8,
                  subgroup: "staff-dev",
                  refers_to: "staff",
                  level: "alterar reserva",
                },
              ],
            },
          ],
          acquired_permissions: [
            {
              id: 5,
              subgroup: null,
              refers_to: "metabase",
              level: "read/write",
            },
            {
              id: 6,
              subgroup: "staff-dev",
              refers_to: "staff",
              level: "criar grupo",
            },
            {
              id: 7,
              subgroup: "staff-dev",
              refers_to: "staff",
              level: "cancelar grupo",
            },
          ],
        },
      ],
    });
  },
  list_software_groups() {
    return mockasync({
      data: [
        {
          id: 1,
          title: "financeiro",
          items: [
            {
              id: 1,
              name: "office",
              image: "office.png",
            },
            {
              id: 2,
              name: "powerbi",
              image: "powerbi.png",
            },
          ],
        },
        {
          id: 2,
          title: "people",
          items: [
            {
              id: 1,
              name: "office",
              image: "office.png",
            },
            {
              id: 2,
              name: "powerbi",
              image: "powerbi.png",
            },
            {
              id: 3,
              name: "jazzhr",
              image: "jazzhr.png",
            },
          ],
        },
        {
          id: 3,
          title: "dev",
          items: [
            {
              id: 4,
              name: "pycharm",
              image: "pycharm.png",
            },
            {
              id: 5,
              name: "vscode",
              image: "vscode.png",
            },
          ],
        },
        {
          id: 4,
          title: "Grupo com nome bem grande",
          items: [],
        },
      ],
    });
  },
  list_devices() {
    return mockasync({
      data: [
        {
          id: 1,
          kind: "computer",
          patrimonio: "000123",
          service_tag: "20GMD93",
          ram: 4,
          processador: "i7",
          ssd: 256,
          marca: "Dell",
          modelo: "Inspiron 13",
          os_original: "Windows 10 Home",
          os_atual: "Mint 20",
          host_name: "BUSER123",
          admin_local: "admin",
          senha_admin: "senha123",
          observacoes: "Está sem carregador",
          assigned_to: null,
          garantia_expira: "2021-01-03",
        },
        {
          id: 2,
          kind: "computer",
          patrimonio: "000939",
          service_tag: "20GMD92",
          ram: 4,
          processador: "i5",
          ssd: 256,
          marca: "Dell",
          modelo: "Inspiron 13",
          os_original: "Windows 10 Home",
          os_atual: "Mint 20",
          host_name: "BUSER123",
          admin_local: "admin",
          senha_admin: "senha123",
          observacoes: null,
          assigned_to: "tamires.cunha",
          garantia_expira: "2021-01-03",
        },
        {
          id: 3,
          kind: "computer",
          patrimonio: "000056",
          service_tag: "20FMD93",
          ram: 16,
          processador: "i7",
          ssd: 128,
          marca: "Dell",
          modelo: "G5",
          os_original: "Ubuntu 18",
          os_atual: "Windows 10 Pro",
          host_name: "BUSER123",
          admin_local: "admin",
          senha_admin: "senha123",
          observacoes: null,
          assigned_to: "tony.lampada",
          garantia_expira: "2022-01-03",
        },
        {
          id: 4,
          kind: "cellphone",
          patrimonio: "000051",
          imei: "20FMD93001238NASMDJ1",
          ram: 4,
          rom: 32,
          marca: "Samsumg",
          modelo: "A20",
          observacoes: null,
          assigned_to: null,
          garantia_expira: "2022-01-03",
        },
        {
          id: 5,
          kind: "cellphone",
          patrimonio: "000059",
          imei: "20FMD93001238N192HDN",
          ram: 4,
          rom: 32,
          marca: "Samsumg",
          modelo: "A20",
          observacoes: null,
          assigned_to: "tamires.cunha",
          garantia_expira: "2023-01-03",
        },
        {
          id: 6,
          kind: "chip",
          phone_number: "12998761775",
          iccid: "20FMD93001238NASMDJ1",
          observacoes: null,
          assigned_to: "tamires.cunha",
        },
        {
          id: 7,
          kind: "chip",
          phone_number: "12991188462",
          iccid: "20FMD93001238N123551",
          observacoes: null,
          assigned_to: null,
        },
        {
          id: 8,
          patrimonio: "000198",
          kind: "monitor",
          serial_number: "123456ABC",
          marca: "Dell",
          modelo: "P2721Q",
          observacoes: null,
          assigned_to: "xico.carvalho",
        },
        {
          id: 9,
          patrimonio: "000498",
          kind: "mesa digital",
          serial_number: "1997260",
          marca: "Wacom",
          modelo: "Intuos Pro PTH460",
          observacoes: null,
          assigned_to: "designer.1",
        },
        {
          id: 10,
          patrimonio: "000398",
          kind: "mouse",
          serial_number: "AJB1799125GA",
          marca: "Apple",
          modelo: "Magic mouse 2",
          observacoes: null,
          assigned_to: "designer.1",
        },
      ],
    });
  },
  list_softwares() {
    return mockasync({
      data: [
        {
          id: 1,
          name: "office",
          image: "office.png",
        },
        {
          id: 2,
          name: "powerbi",
          image: "powerbi.png",
        },
        {
          id: 3,
          name: "jazzhr",
          image: "jazzhr.png",
        },
        {
          id: 4,
          name: "pycharm",
          image: "pycharm.png",
        },
        {
          id: 5,
          name: "vscode",
          image: "vscode.png",
        },
      ],
    });
  },
  list_permission_groups() {
    return mockasync({
      data: [
        {
          id: 1,
          title: "financeiro",
          items: [
            {
              id: 1,
              subgroup: null,
              refers_to: "metabase",
              level: "read",
            },
            {
              id: 2,
              subgroup: "powerbi-fin",
              refers_to: "powerbi",
              level: "general",
            },
            {
              id: 3,
              subgroup: "powerbi-fin",
              refers_to: "powerbi",
              level: "OKR",
            },
            {
              id: 4,
              subgroup: "powerbi-fin",
              refers_to: "powerbi",
              level: "financeiro",
            },
          ],
        },
        {
          id: 2,
          title: "dev",
          items: [
            {
              id: 5,
              subgroup: null,
              refers_to: "metabase",
              level: "read/write",
            },
            {
              id: 6,
              subgroup: "staff-dev",
              refers_to: "staff",
              level: "criar grupo",
            },
            {
              id: 7,
              subgroup: "staff-dev",
              refers_to: "staff",
              level: "cancelar grupo",
            },
            {
              id: 8,
              subgroup: "staff-dev",
              refers_to: "staff",
              level: "alterar reserva",
            },
          ],
        },
      ],
    });
  },
  list_permissions() {
    return mockasync({
      data: [
        {
          id: 1,
          subgroup: null,
          refers_to: "metabase",
          level: "read",
        },
        {
          id: 2,
          subgroup: "powerbi",
          refers_to: "powerbi",
          level: "general",
        },
        {
          id: 3,
          subgroup: "powerbi",
          refers_to: "powerbi",
          level: "OKR",
        },
        {
          id: 4,
          subgroup: "powerbi",
          refers_to: "powerbi",
          level: "financeiro",
        },
        {
          id: 5,
          subgroup: null,
          refers_to: "metabase",
          level: "read/write",
        },
        {
          id: 6,
          subgroup: "staff",
          refers_to: "staff",
          level: "criar grupo",
        },
        {
          id: 7,
          subgroup: "staff",
          refers_to: "staff",
          level: "cancelar grupo",
        },
        {
          id: 8,
          subgroup: "staff",
          refers_to: "staff",
          level: "alterar reserva",
        },
      ],
    });
  },
  save_employee(employee) {
    return mockasync({
      status: 200,
    });
  },
};
