import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TeamRoutingModule } from "./team-routings.module";
import { DropdownModule } from "primeng/dropdown";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { TeamComponent } from "./team/team.component";
@NgModule({
  imports: [CommonModule, DropdownModule, TeamRoutingModule, FormsModule],

  declarations: [TeamComponent],
})
export class TeamModule {}
