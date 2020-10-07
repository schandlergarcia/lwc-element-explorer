# LWC Element Explorer

Using modern web standards to their full advangate can really help you up your Salesforce development skills! We will take a look at some of the cool ways that you can manipulate LWC's in a way that could make development much faster and easier when working with sets of records. 

## Features

The app demonstrates:

- Dataset atributes
- JavaScript Array filter()
- Modifying HTML Elements

## Installing LWC Element Explorer using a Scratch Org

1. If you haven't already done so, authorize your hub org and provide it with an alias (**myhuborg** in the command below):

   ```
   sfdx force:auth:web:login -d -a myhuborg
   ```

1. Clone the repository:

   ```
   git clone https://github.com/schandlergarcia/lwc-element-explorer
   cd lwc-element-explorer
   ```

1. Create a scratch org and provide it with an alias (**lwc-element-explorer** in the command below):

   ```
   sfdx force:org:create -s -f config/project-scratch-def.json -a lwc-element-explorer
   ```

1. Push the app to your scratch org:

   ```
   sfdx force:source:push
   ```

1. Assign the **LWC Explorer** permission set:

   ```
   sfdx force:user:permset:assign -n LWC_Explorer
   ```

1. Open the scratch org:

   ```
   sfdx force:org:open
   ```
