import {
  Component,
  OnInit,
  HostBinding,
  OnChanges,
  Input,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ApiCallService } from "src/app/apicallServices/airportservice";
import { DropdownModule } from "primeng/dropdown";
import { ApiResponse } from "src/app/apicallServices/airportsResponse";
import { Contents } from "src/app/apicallServices/airport";
import { AirPortsFrom } from "src/app/utilClasses/airPortsFrom";
import { SelectItem } from "primeng/api";
import { airLineService } from "src/app/apicallServices/apiAirLineService";
import { airLineResponse } from "src/app/apicallServices/airLineResponse";
import { postdata } from "src/app/utilClasses/postData";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AirLine } from "src/app/utilClasses/airLine";
import { AirPortsTo } from "src/app/utilClasses/airPortsTo";
import { flightsApiService } from "src/app/apicallServices/flightsApiService";
import { ContentsFlights } from "src/app/apicallServices/flights";
import { CustomerBooking } from "src/app/apicallServices/customerbooking";
import { jsonTokenService } from "src/app/apicallServices/jsonToke";
import { TokenResponse } from "src/app/apicallServices/tokenResponse";
@Component({
  selector: "team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"],
}) /// ,OnChanges
export class TeamComponent implements OnInit {
  tutorials: any;
  re: any;
  apiResponse: ApiResponse;
  content: Contents[];
  content1: Contents;
  airPorts: AirPortsFrom[];
  airPortsFromValue: AirPortsFrom;
  airPortsToValue: AirPortsTo;

  airPortsFrom: SelectItem[];
  airPortsTo: SelectItem[];
  vvvalue: any;

  cities12: SelectItem;
  ///////  airline Reponse
  airLineResponse: airLineResponse;
  airLines: SelectItem[];
  airLine: AirLine;
  ///airLinesName: Contents[];
  ////
  //////departureDate: Date;
  departureDate: string;

  /////
  seats: number;
  seates: number;
  ///

  postdata1: postdata;
  ////
  contentflights: ContentsFlights[];
  selectedflight: ContentsFlights;
  car: ContentsFlights = {
    flightsId: -1,
    airlineName: "",
    airportName: "",
    airportNameTo: "",
    date: "",
  };
  totalFlights: ContentsFlights[];
  selectedflight1: ContentsFlights;
  cols: any[];
  counter: number = 0;
  //flights: ContentsFlights[];
  ///
  displayDialog: boolean = false;
  ///
  ROLE_USER: boolean = false;
  //////
  tokenResponse: TokenResponse;
  registerForm: FormGroup;
  submitted = false;
  constructor(
    private apic: ApiCallService,
    private apiAirLine: airLineService,
    private flightsService: flightsApiService,
    private custBooking: CustomerBooking,
    private jsonTokenServic: jsonTokenService
  ) {
    // this.cities1 = [
    //   { label: "Select City", value: null },
    //   { label: "New York", value: { id: 1, name: "New York", code: "NY" } },
    //   { label: "Rome", value: { id: 2, name: "Rome", code: "RM" } },
    //   { label: "London", value: { id: 3, name: "London", code: "LDN" } },
    //   { label: "Istanbul", value: { id: 4, name: "Istanbul", code: "IST" } },
    //   { label: "Paris", value: { id: 5, name: "Paris", code: "PRS" } },
    // ];

    this.airPorts = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
    ];
  }

  ngOnInit() {
    this.cols = [
      { field: "flightsId", header: "ID" },
      { field: "airlineName", header: "AirLine" },
      { field: "airportName", header: "From AirPort" },
      { field: "airportNameTo", header: "Destination" },
      { field: "date", header: "Departure Date" },
    ];

    this.postdata1 = new postdata();
    this.fetchToken();
    ///  this.vvvalue = this.cities1[0].value;
  }

  fetchToken() {
    this.jsonTokenServic.getJsonToken().subscribe(
      (data) => {
        this.tokenResponse = data;
        sessionStorage.setItem("token", this.tokenResponse.token);

        debugger;
        this.fetchAirPorts();
        this.retrieveAllAirLines();

        this.retrieveAlllights();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  fetchAirPorts() {
    this.apic.getAll().subscribe(
      (data) => {
        this.apiResponse = data;
        this.populatesAirPorts();
        debugger;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  retrieveAllAirLines() {
    this.apiAirLine.getAllAilrLines().subscribe(
      (data) => {
        this.airLineResponse = data;
        this.populateAilrlines();
        debugger;
      },
      (error) => {
        console.log(" this is eroor  ");
        debugger;
        console.log(error);
      }
    );
  }

  populatesAirPorts() {
    let counter = 1;
    var nameee = "saqib";
    this.airPortsFrom = [{ label: "Select AirPortFrom", value: null }];
    for (let i = 0; i < this.apiResponse.content.length; i++) {
      this.airPortsFrom[i + 1] = {
        label: this.apiResponse.content[i].airportName,
        value: {
          id: i + 1,
          name: this.apiResponse.content[i].airportName,
          code: this.apiResponse.content[i].airportId,
        },
      };
    }
    ///  populate airPortTo
    this.airPortsTo = [{ label: "Select AirPortTo", value: null }];
    for (let i = 0; i < this.apiResponse.content.length; i++) {
      this.airPortsTo[i + 1] = {
        label: this.apiResponse.content[i].airportName,
        value: {
          id: i + 1,
          name: this.apiResponse.content[i].airportName,
          code: this.apiResponse.content[i].airportId,
        },
      };
    }
  }

  populateAilrlines() {
    this.airLines = [{ label: "Select Airline", value: null }];
    for (let i = 0; i < this.airLineResponse.content.length; i++) {
      this.airLines[i + 1] = {
        label: this.airLineResponse.content[i].airlineName,
        value: {
          id: i + 1,
          name: this.airLineResponse.content[i].airlineName,
          code: this.airLineResponse.content[i].airlineId,
        },
      };
    }
  }

  postDataFlights() {
    this.postdata1.airlineId = this.postdata1.airlineId;
    this.postdata1.date = this.departureDate + ":00";
    this.postdata1.fromAirPort = this.postdata1.fromAirPort;
    this.postdata1.toAirPort = this.postdata1.toAirPort;
    this.postdata1.totalSeats = this.seats;
    this.apic.create(this.postdata1).subscribe(
      (data) => {
        this.re = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  postDataBooking() {
    alert(this.car.flightsId + "  " + this.car.date + " " + this.seates);
    this.postdata1.flightsId = this.car.flightsId;
    this.postdata1.date = this.car.date;
    this.postdata1.totalSeats = this.seates;

    this.custBooking.create(this.postdata1).subscribe(
      (data) => {
        this.re = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  retrieveAlllights() {
    this.flightsService.getAllFlights().subscribe(
      (data) => {
        this.contentflights = data.content;
        debugger;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onChangeAirLine() {
    this.postdata1.airlineId = +this.airLine.code;
  }

  onChangeAirPrtTo() {
    this.postdata1.toAirPort = +this.airPortsToValue.code;
  }
  onChangeAirPrtFrom() {
    this.postdata1.fromAirPort = +this.airPortsFromValue.code;
  }
  onRowSelect(event) {
    var totlFlights = "";
    this.displayDialog = true;
    this.ROLE_USER = true;
    this.car = {
      flightsId: this.selectedflight.flightsId,
      airlineName: this.selectedflight.airlineName,
      airportName: this.selectedflight.airportName,
      airportNameTo: this.selectedflight.airportNameTo,
      date: this.selectedflight.date,
    };
  }
  // cancel() {
  //   this.gotoCrises();
  // }

  // save() {
  //   this.crisis.name = this.editName;
  //   this.gotoCrises();
  // }

  // canDeactivate(): Observable<boolean> | boolean {
  //   // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
  //   if (!this.crisis || this.crisis.name === this.editName) {
  //     return true;
  //   }
  //   // Otherwise ask the user with the dialog service and return its
  //   // observable which resolves to true or false when the user decides
  //   return this.dialogService.confirm('Discard changes?');
  // }

  // gotoCrises() {
  //   let crisisId = this.crisis ? this.crisis.id : null;
  //   // Pass along the crisis id if available
  //   // so that the CrisisListComponent can select that crisis.
  //   // Add a totally useless `foo` parameter for kicks.
  //   // Relative navigation back to the crises
  //   this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  // }

  // ngOnChanges() {
  //   // for (let propName in changes) {
  //   //   let chng = changes[propName];
  //   //   let cur  = JSON.stringify(chng.currentValue);
  //   //   let prev = JSON.stringify(chng.previousValue);
  //   //   this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);

  //   this.change++;
  //   console.log(' ngon changes ');
  //   }
}
