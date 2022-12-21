export class Order {
  weight: number;
  pickUpDate: Date;
  deliveryDate: Date;
  orderDate: Date;
  orderStatus: string;
  serviceType: number;
  bill: number;

  constructor(
    weight,
    pickUpDate,
    deliveryDate,
    orderDate,
    orderStatus,
    serviceType,
    bill
  ) {
    this.weight = weight;
    this.pickUpDate = pickUpDate;
    this.deliveryDate = deliveryDate;
    this.orderDate = orderDate;
    this.orderStatus = orderStatus;
    this.serviceType = serviceType;
    this.bill = bill;
  }
}
