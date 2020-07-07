import { LightningElement, wire, track } from "lwc";
import getContacts from "@salesforce/apex/LwcDatasetExampleController.getContacts";

export default class LwcDatasetExample extends LightningElement {
  contactRecords;
  @track selectedContactRecords = [];

  // Get a list of contacts for the component
  @wire(getContacts)
  wiredRecord({ error, data }) {
    if (data) {
      this.contactRecords = data;
    } else if (error) {
      console.log("Error: " + error.message);
    }
  }

  handleClick(event) {
    const type = event.currentTarget.dataset.type;
    const recordId = event.currentTarget.dataset.id;
    const email = event.currentTarget.dataset.email;
    switch (type) {
      case "select":
        this.addContactToList(recordId);
        break;
      case "contact":
        alert("Email is: " + email);
        break;
      default:
        console.log("type action not set");
        break;
    }
  }

  addContactToList(contactId) {
    for (let key in this.contactRecords) {
      if (this.contactRecords[key].Id === contactId) {
        this.selectedContactRecords.push(this.contactRecords[key]);
      }
    }
  }
  get recordsSelected() {
    return this.selectedContactRecords.length > 0;
  }
}
