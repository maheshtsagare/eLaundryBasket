export class Address {
    addressId:number;
    houseNo:string;
    society:string;
    city:string;
    pincode:string;

  
    constructor(addressId,houseNo,society,city,pincode) {
     this.addressId=addressId;
     this.houseNo=houseNo;
     this.society=society;
     this.city=city;
     this.pincode=pincode;
    }
  }
  