import { Routes } from '@angular/router';
import { TableComponent } from '../../pages/table/table.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';


export const UserLayoutRoutes: Routes = [
    { path: 'settings',          component: TableComponent },
    { path: 'delivarables',           component: MapsComponent },
    { path: 'activities',  component: NotificationsComponent },
    { path: 'analytics',  component: DashboardComponent },
];
