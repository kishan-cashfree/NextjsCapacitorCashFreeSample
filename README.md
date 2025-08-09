# CashFree NextJs Capacitor SDK Sample


## **Description**

Sample integration project for CashFree Payment Gateway's in NextJs Capacitor platform.


## Installation:
Install the plugin

```bash

npm i @awesome-cordova-plugins/cashfree-pg@latest
npm i @awesome-cordova-plugins/core@latest
npm i cordova-plugin-cashfree-pg@capacitor

npx cap sync 
npx cap sync android
npx cap run android

```

### Issue in awesome-cordova-plugins
https://github.com/danielsogl/awesome-cordova-plugins/issues/4284
 
``Cannot use import statement outside a module``

We have work around for this by using lazy loading
https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-external-libraries

```
const loadCashfreePg = () => import('@awesome-cordova-plugins/cashfree-pg');


const initiateWebPayment = async () => {
        const {CFEnvironment, CFPaymentGateway, CFSession, CFWebCheckoutPayment} = await loadCashfreePg();
        const callbacks = {
            onVerify: function (result) {
                console.log("This is in the SDK Verify: " + JSON.stringify(result));
            },
            onError: function (error) {
                console.log("This is in the SDK Error: " + JSON.stringify(error));
            }
        };
        CFPaymentGateway.setCallback(callbacks)
        CFPaymentGateway.doWebCheckoutPayment(
            new CFWebCheckoutPayment(
                new CFSession("session_jOkl-xetsUdUiuVFxhPMhbIHh6UTI8hM_dOxgI3HBiCkjxGHkFHetws8ijujFDe3En3kiKLrYNZQEODPkr62bpS3kb7zufM1b5FzVnEncSFy",
                    "order_101024392kjkZw8fi4dAkMlUChfG9TYpHsI",
                    CFEnvironment.SANDBOX
                ),
                null)
        )
};

 <div>
       <h1>CashFree Payment</h1>
       <button onClick={initiateWebPayment}>Start Payment</button>
</div>


```

### Sample Video
https://github.com/user-attachments/assets/476d8655-a0e9-4647-a5ce-17d316966425

