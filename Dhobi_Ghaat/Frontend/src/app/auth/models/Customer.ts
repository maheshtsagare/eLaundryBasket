export class Customer {
  customerId:number;
  mobNo: any;
  password: any;
  firstName: string;
  lastName: string;
  email: any;
  orders:any[];

  constructor(mobNo, password, firstName, lastName, email) {
    this.mobNo = mobNo;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
