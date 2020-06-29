import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdviserComponent } from "./adviser/adviser/adviser.component";
import { TeamComponent } from "./team/team/team.component";
import { CareerComponent } from "./career/career/career.component";
import { AffiliationsComponent } from "./Affiliations/affiliations/affiliations.component";
import { VatComponent } from "./vat/vat/vat.component";
import { AccountingComponent } from "./accounting/accounting/accounting.component";
import { AuditComponent } from "./audit/accounting/audit.component";
import { IncorporationComponent } from "./incorporation/incorporation/incorporation.component";
import { internationalComponent } from "./international/international/international.component";
import { outsourcingComponent } from "./outsourcing/outsourcing/outsourcing.component";
import { offsureComponent } from "./offsure/offsure/offsure.component";
import { corporateComponent } from "./corporate/corporate/corporate.component";
import { SoftwareComponent } from "./software/software/software.component";
import { ServicesComponent } from "./services/services/services.component";
import { AboutusComponent } from "./aboutus/aboutus/aboutus.component";
import { defaultComponent } from "./defualt/defualt/defualt.component";

const routes: Routes = [
  { path: "adviser", component: AdviserComponent },
  { path: "tripworld", component: TeamComponent },
  { path: "career", component: CareerComponent },
  { path: "affiliation", component: AffiliationsComponent },
  { path: "vat", component: VatComponent },
  { path: "accountings", component: AccountingComponent },
  { path: "audit", component: AuditComponent },
  { path: "incorporate", component: IncorporationComponent },
  { path: "intrenational", component: internationalComponent },

  { path: "outsourcing", component: outsourcingComponent },

  { path: "offsure", component: offsureComponent },
  { path: "corporate", component: corporateComponent },
  { path: "software", component: SoftwareComponent },
  { path: "service", component: ServicesComponent },
  { path: "about-us", component: AboutusComponent },
  { path: "defalt", component: defaultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
