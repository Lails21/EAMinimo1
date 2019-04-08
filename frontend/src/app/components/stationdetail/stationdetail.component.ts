import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Station } from 'src/app/models/station';
import { NgForm } from '@angular/forms';
import { StationService } from 'src/app/services/station.service';
import { Bike } from 'src/app/models/bike';
import { BikeService } from 'src/app/services/bike.service';

declare var M: any;

@Component({
  selector: 'app-stationdetail',
  templateUrl: './stationdetail.component.html',
  styleUrls: ['./stationdetail.component.css']
})
export class StationdetailComponent implements OnInit {

  station: Station;
  bikesList: Bike[] = [];
  stationId: string;
  bikeId: string;

  constructor(private activatedRouter: ActivatedRoute, private stationService: StationService, private bikeService: BikeService) { 
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
    this.getBikes();
    this.getStationDetail(this.station._id);
  }

  getBikes(){
    this.bikeService.getBikes()
    .subscribe (res =>{
      this.bikesList = res;
      console.log(res);
    })
  }

  getStationDetail(_id: string){
    this.stationService.getStationDetail(_id)
    .subscribe(res =>{
      this.station = res;
      console.log(res); 
      console.log(this.station);
    });
    this.stationId = _id;
  }

  putBikeStation(_id: string){
    this.bikeId = _id;
    this.stationService.putBikeStation(this.stationId, this.bikeId)
    .subscribe(res =>{
      M.toast({html: 'Bike added'});
      this.getBikes();
      this.getStationDetail(this.stationId);
    });
  }

  deleteBikeStation(_id: string){
    this.bikeId = _id;
    this.stationService.deleteBikeStation(this.stationId, this.bikeId)
    .subscribe(res =>{
      M.toast({html: 'Bike deleted'});
      this.getBikes();
      this.getStationDetail(this.stationId);
    });
  }

}
