export class Station {

    constructor(_id = '', station = '', state = '', description = '', bikes = null){
        this._id = _id;
        this.station = station;
        this.state = state;
        this.description = description;
        this.bikes = bikes;        
    }

    _id: string;
    station: string;
    state: string;
    description: string;
    bikes: [];
}
