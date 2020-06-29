import { BrowserModule } from "@angular/platform-browser";
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderModule } from "./headerr/header.module";
import { HeaderComponent } from "./headerr/header/header.component";
import { FooterComponent } from "./headerr/footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PanelModule } from "primeng/panel";
import { GalleriaModule } from "primeng/galleria";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { defualtModule } from "./defualt/defualt.module";
import { MenubarModule } from "primeng/menubar";
import { MenuItem } from "primeng/api";
import { defaultComponent } from "./defualt/defualt/defualt.component";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DropdownModule } from "primeng/dropdown";
import { TeamComponent } from "./team/team/team.component";
import { CalendarModule } from "primeng/calendar";
import { TableModule } from "primeng/table";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    defaultComponent,
    FooterComponent,
    TeamComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  // }),
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CommonModule,
    HeaderModule,
    PanelModule,
    MenubarModule,
    DropdownModule,
    TableModule,
    CalendarModule,
    GalleriaModule,
    defualtModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
