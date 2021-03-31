# movies
this app ltes you see the best movies in Kfar Saba
you can check the movies list
# installation
1. first, you neet to run the server from this [link](https://github.com/next-insurance/next-test)
2. if you want to run the app on simulator (virtual mobile device) please make sure to do the follow (if you want to use real device, skip this step):
    * for ios simulator (only for mac users) - download xCode from the store
    * for android simulator (both windows and mac users) - download android studio, and create simulator using this [guide](https://developer.android.com/studio/run/managing-avds#createavd)
3. clone this repo
4. go to the project's root directory and run `npm install`
5. run `npm install -g expo-cli`
6. on the project open the file `Api.ts`
7. replace the `localhost` from `baseUrl` to your actual ip so you should have somethink like this: `http://168.162.1.1:3000` (i picked an arbitrary ip for the example)
8. now you can run the project
    * make sure the device is connected to the same newtwork as your computer
    * if you want to run on simulator
       - ios simulator: `npm run ios`
       - android simulator: make sure the simulator is runing and run `npm run android`
    * if you want to run on real device
      - on the root level of the project run `npm start`
      - it will open some kind of dashboard with QR code on one of the bottom corners (depends on rtl or ltr)
      - on your mobile device download the app `Expo Go` from the store
      - after the download completed, open it
      - select the option "Scan QR Code"
      - scan the code from the dashboard on your computer
9. that's it! enjoy the app
