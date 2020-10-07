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
    console.log('click')
      let recordId = event.currentTarget.dataset.id;
      console.log(recordId);
      this.addContactToList(recordId);
  }

  addContactToList(contactId) {
    const selectedContact = this.contactRecords.filter(contact => contact.Id === contactId);
    console.log(selectedContact);
    if(!this.selectedContactRecords.includes(selectedContact[0])){
      this.selectedContactRecords = this.selectedContactRecords.concat(selectedContact);
      console.log(JSON.stringify(this.selectedContactRecords));
    }
  }
  
  get recordsSelected() {
    return this.selectedContactRecords.length > 0;
  }

/*

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
  */

}
