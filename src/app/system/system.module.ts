import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SystemRoutingModule } from "./system-routing.module";
import { SystemComponent } from "./system.component";
import { UsersPageComponent } from './users-page/users-page.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        SystemRoutingModule
    ],
    declarations: [
      UsersPageComponent, 
      SystemComponent, SidebarComponent, HeaderComponent
    ]
})
export class SystemModule {}