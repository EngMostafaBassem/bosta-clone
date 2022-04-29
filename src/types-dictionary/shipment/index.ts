import ShipmentStatus from "./status";
import TransitEvents from "./transit-events";

type Shipment={
  CreateDate:Date;
  PromisedDate:Date;
  TrackingNumber:string;
  TrackingURL:string;
  SupportPhoneNumbers:string[];
  TransitEvents:TransitEvents[];
  CurrentStatus:ShipmentStatus

}
export default Shipment