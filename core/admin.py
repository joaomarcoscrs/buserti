from django.contrib import admin

from core.models import ActivityLog, Computer, Permission, Software, Group, Employee


class ActivityLogAdmin(admin.ModelAdmin):
    list_display = ('type', 'logged_user', 'created_at')



admin.site.register(ActivityLog, ActivityLogAdmin)

admin.site.register(Computer)
admin.site.register(Permission)
admin.site.register(Software)
admin.site.register(Group)
admin.site.register(Employee)
