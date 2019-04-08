import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/models/station';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  stationsList: Station[] = [];

  constructor(private stationService: StationService) { }

  ngOnInit() {
  }

  getStations(){
    this.stationService.getStations()
    .subscribe (res =>{
      this.stationsList = res;
      console.log(res);
    })
  }

}
