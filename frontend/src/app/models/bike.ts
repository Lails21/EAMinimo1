export class Bike {

    constructor(_id = '', bike = '', kms = '', description = ''){
        this._id = _id;
        this.bike = bike;
        this.kms = kms;
        this.description = description;     
    }

    _id: string;
    bike: string;
    kms: string;
    description: string;
}
