import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SystemComponent } from "./system.component";
import { UserListComponent } from "../user/user-list/user-list.component";
import { UsersPageComponent } from "./users-page/users-page.component";

const routes: Routes = [
    {path: 'system', component: SystemComponent, children: [
        {path: 'user', component: UserListComponent},
        {path: 'users', component: UsersPageComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {}