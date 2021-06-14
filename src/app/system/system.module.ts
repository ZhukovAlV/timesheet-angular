import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SystemRoutingModule } from "./system-routing.module";
import { SystemComponent } from "./system.component";
import { UsersPageComponent } from './users-page/users-page.component';

@NgModule({
    imports: [
        CommonModule,
        SystemRoutingModule
    ],
    declarations: [
      UsersPageComponent, 
      SystemComponent
    ]
})
export class SystemModule {}