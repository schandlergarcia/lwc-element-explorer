public with sharing class LwcDatasetExampleController {

    @AuraEnabled(Cacheable=true)
    public static List<Contact> getContacts(){
        List<Contact> contactList = [SELECT Id, FirstName, LastName, Email, Phone, AccountId FROM Contact WITH SECURITY_ENFORCED];
        return contactList;
    }
}
