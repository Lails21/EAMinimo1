import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Station } from 'src/app/models/station';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-stationdetail',
  templateUrl: './stationdetail.component.html',
  styleUrls: ['./stationdetail.component.css']
})
export class StationdetailComponent implements OnInit {

  station: Station;

  constructor(private activatedRouter: ActivatedRoute, private stationService: StationService) { 
    this.station = new Station();
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params =>{
      if (typeof params ['id'] !== 'undefined'){
        this.station._id = params['id'];
      }
      else{
        this.station._id = '';
      }
    });
    this.getStationDetail(this.station._id);
  }

  getStationDetail(_id: string){
    this.stationService.getStationDetail(_id)
    .subscribe(res => {
      this.station = res;
      console.log(this.station);
    });
  }

}
