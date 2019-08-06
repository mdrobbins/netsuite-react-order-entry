This is a React application to simplify the creation of sales orders in the NetSuite ERP system.  It can be used as a reference application for completely customizing the NetSuite user interface with React.  I hope this opens up some possibilities for what you can do with UI customization in NetSuite.

Read more about this application here:  https://datateksoftware.com/netsuite-suitelets-and-react/

Pull requests are welcome!

## Installation

#### Local Installation
To run the application locally using static demo data, make sure you have npm installed and take the following steps:

```
git clone https://github.com/mdrobbins/netsuite-react-order-entry.git
cd netsuite-react-order-entry
npm install
npm start
```

Open a browser and navigate to http://localhost:3000/

#### Bundle Installation
In NetSuite, navigate to *Customization -> SuiteBundler -> Search & Install Bundles*.  Enter the bundle id 270909 into the Keywords box and click the Search button.

You should see a result called 'React Order Entry POC' from DataTek Software, LLC.  Click the name of the bundle.

The bundle creates a menu link in the Classic Center to launch the application.  Navigate to *Transactions -> Sales -> Order Entry* to launch the application.

#### Manual Build and Deploy to NetSuite
You can build this React application and deploy it to your own NetSuite environment.  This will allow you to customize is as you like to try different things and see how it all fits together.  Getting this set up the first time is a bit more involved, but it does make for rapid iterations when developing React applications for NetSuite.

1. Create a new folder in the NetSuite file cabinet to hold the React application.  Note the internal id of the newly created folder.
1. Set an environment variable on your PC called `NSPW`.  The value can be anything that you want.  It should not be your NetSuite password.  This value will be used to encrypt and decrypt a credentials file that we'll be creating later.
1. Make sure you have `npm` installed.
1. run `npm install -g https://github.com/mdrobbins/netsuite-sync.git` to install a customized npm module that will upload files to NetSuite.
1. In the project folder, run `ns -g` and enter the following information:
    - NetSuite account login email
    - NetSuite account login password
    - Destination Folder ID - This is the internal ID of the folder you created in the NetSuite file cabinet above.
    - y or n depending on whether this account is a sandbox account or not.
    - Enter the number of the account and role that you want to use to upload files to NetSuite.  This has not been tested with two-factor authentication roles (2FA).
1. Two files will be created, `NetSuiteConfig.js` and `NetSuiteConfig.js.enc`.  
    - Delete `NetSuiteConfig.js` this file contains plaintext login information for NetSuite.
    - Rename `NetSuiteConfig.js.enc` to `dt_backend_NetSuiteConfig.js.enc`.  This is the file that the `npm` scripts are looking for in `package.json`.
1. Run `npm run deploy-all`.  This will upload the Suitelet and Restlet to NetSuite, build the React application then upload the app and required CSS to NetSuite.
1. Create the Suitelet in NetSuite pointing to `order-entry.suitelet.js`.
1. Create the Restlet in NetSuite pointing to `order-entry.restlet.js`.  The script id must be `customscript_dt_order_entry_restlet` and the deployment id must be `customdeploy_dt_order_entry_restlet` in order for the app to find the correct API endpoint for getting and saving data.
1. Launch your newly created suitelet.
