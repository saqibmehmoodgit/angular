export class ContentsFlights {
  //field
  flightsId: number;
  airlineName: string;
  airportName: string;
  airportNameTo: string;
  date: string;
  //constructor
  constructor(
    flightsId: number,
    airportName: string,
    airlineName: string,
    airportNameTo: string,
    date: string
  ) {
    this.airportName = airportName;
    this.flightsId = flightsId;
    this.airlineName = airlineName;
    this.airportNameTo = airportNameTo;
    this.date = date;
  }
}
