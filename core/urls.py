from core import views
from django.urls import path

urlpatterns = [
    path('api/dapau', views.dapau),
    path('api/login', views.login),
    path('api/logout', views.logout),
    path('api/whoami', views.whoami),
    path('api/settings', views.settings),

    # path('api/list-employes', views.list_employess),
    # path('api/list-groups', views.list_groups),
    # path('api/all-permissions', views.all_permissions),
    # path('api/all-softwares', views.all_softwares),
    # path('api/employes-by-group/<int:group_id>', views.employees_by_group),
    # path('api/list-computers', views.list_computers),
    # path('api/permissions-by-employee/<int:employee_id>', views.permissions_by_employee),
    # path('api/softwares-by-employee/<int:employee_id>', views.softwares_by_employee),
]
