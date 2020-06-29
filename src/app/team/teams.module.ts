import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TeamRoutingModule } from "./team-routings.module";
import { DropdownModule } from "primeng/dropdown";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { TeamComponent } from "./team/team.component";
import { CalendarModule } from "primeng/calendar";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    TeamRoutingModule,
    CalendarModule,
    InputTextModule,
    DialogModule,
    TableModule,
    FormsModule,
  ],

  declarations: [TeamComponent],
})
export class TeamModule {}
