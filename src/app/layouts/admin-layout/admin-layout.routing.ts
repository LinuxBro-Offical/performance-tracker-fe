import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { ContractComponent } from '../../pages/contract/contract.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'analytics',      component: DashboardComponent },
    { path: 'fiscal',           component: UserComponent },
    { path: 'settings',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'result-trees',          component: IconsComponent },
    { path: 'delivarables',           component: MapsComponent },
    { path: 'activities',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'contract-nav',        component: ContractComponent }
];