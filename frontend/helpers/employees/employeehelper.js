import api from "~api";

const state = {
    NONE: 0,
    MODIFIED: 1,
    LOADING: 2,
    SAVED: 3,
}
export default {
    install_software(software, employee) {
        const index = employee.installed_softwares.findIndex(
            (e) => e.id === software.id
        );
        if (index === -1) {
            employee.installed_softwares.push(software);
        } else {
            employee.installed_softwares.splice(index, 1);
        }
    },
    give_permission(permission, employee) {
        const index = employee.acquired_permissions.findIndex(
            (e) => e.id === permission.id
        );
        if (index === -1) {
            employee.acquired_permissions.push(permission);
        } else {
            employee.acquired_permissions.splice(index, 1);
        }
    },
    add_software_group(employee) {
        employee.softwares = [];
        employee.software_groups.forEach((group) => {
            employee.softwares = employee.softwares.concat(group.items);
        });
        employee.softwares = employee.softwares.filter(
            (software, index, self) =>
                index === self.findIndex((s) => s.id === software.id)
        );
    },
    remove_software_group(item, employee) {
        const index = employee.software_groups.findIndex((e) => e.id === item.id);
        if (index >= 0) employee.software_groups.splice(index, 1);
        employee.softwares = [];
        employee.software_groups.forEach((group) => {
            employee.softwares = employee.softwares.concat(group.items);
        });
        employee.softwares = employee.softwares.filter(
            (software, index, self) =>
                index === self.findIndex((s) => s.id === software.id)
        );
    },
    add_permission_group(employee) {
        employee.permissions = [];
        employee.permission_groups.forEach((group) => {
            employee.permissions = employee.permissions.concat(group.items);
        });
        employee.permissions = employee.permissions.filter(
            (permission, index, self) =>
                index === self.findIndex((s) => s.id === permission.id)
        );
    },
    remove_permission_group(item, employee) {
        const index = employee.permission_groups.findIndex(
            (e) => e.id === item.id
        );
        if (index >= 0) employee.permission_groups.splice(index, 1);
        employee.permissions = [];
        employee.permission_groups.forEach((group) => {
            employee.permissions = employee.permissions.concat(group.items);
        });
        employee.permissions = employee.permissions.filter(
            (permission, index, self) =>
                index === self.findIndex((s) => s.id === permission.id)
        );
    },
    state: state
}
