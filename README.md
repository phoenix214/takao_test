# Takao's Test project 

## Prerequisites

The project was built based on TypeScript React Native Starter(https://github.com/Microsoft/TypeScript-React-Native-Starter)

You will also need [Node.js](https://nodejs.org/en/), [NPM](https://www.npmjs.com), and [Yarn](https://yarnpkg.com/lang/en).

Also for iOS development, you need to install XCode on Mac. (https://medium.com/@LondonAppBrewery/how-to-download-and-setup-xcode-10-for-ios-development-b63bed1865c)

For Android development, you need to install Android SDK with Java configurations.
(http://www.androiddocs.com/sdk/installing/index.html)

## Running

### Installing npm packages

You need to do `npm install` command on terminal to install the latest npm packages.

### Running on Android

The project is based on generic Create native project, so you can refer to [Running On Device ](https://facebook.github.io/react-native/docs/running-on-device) for more details.

1. Enable Debugging over USB
Most Android devices can only install and run apps downloaded from Google Play, by default. You will need to enable USB Debugging on your device in order to install your app during development.

To enable USB debugging on your device, you will first need to enable the "Developer options" menu by going to Settings → About phone and then tapping the Build number row at the bottom seven times. You can then go back to Settings → Developer options to enable "USB debugging".

2. Plug in your device via USB
Let's now set up an Android device to run our React Native projects. Go ahead and plug in your device via USB to your development machine.

Now check that your device is properly connecting to ADB, the Android Debug Bridge, by running adb devices.

3. Run your app
Type the following in your command prompt to install and launch your app on the device:

```$ react-native run-android```
If you get a "bridge configuration isn't available" error, see Using adb reverse.

Hint

You can also use the React Native CLI to generate and run a Release build (e.g. react-native run-android --variant=release).

### Running on iOS

1. Plug in your device via USB
Connect your iOS device to your Mac using a USB to Lightning cable. Navigate to the ios folder in your project, then open the .xcodeproj file, or if you are using CocoaPods open .xcworkspace, within it using Xcode.

If this is your first time running an app on your iOS device, you may need to register your device for development. Open the Product menu from Xcode's menubar, then go to Destination. Look for and select your device from the list. Xcode will then register your device for development.

2. Configure code signing
Register for an Apple developer account if you don't have one yet.

Select your project in the Xcode Project Navigator, then select your main target (it should share the same name as your project). Look for the "General" tab. Go to "Signing" and make sure your Apple developer account or team is selected under the Team dropdown. Do the same for the tests target (it ends with Tests, and is below your main target).

Repeat this step for the Tests target in your project.

3. Build and Run your app
If everything is set up correctly, your device will be listed as the build target in the Xcode toolbar, and it will also appear in the Devices pane (⇧⌘2). You can now press the Build and run button (⌘R) or select Run from the Product menu. Your app will launch on your device shortly.

After above configurations, in the same way as Android, you can run ```$ react-native run-ios```.

## Testing
The temporary username and password are both `test`.
After you logged in, you can see the list and chart based on the requirements.

## Next Steps

Check out [our React TypeScript tutorial](https://github.com/Microsoft/TypeScript-React-Starter) where we also cover topics like state management with [Redux](http://redux.js.org).
These same subjects can be applied when writing React Native apps.

Additionally, you may want to look at the [ReactXP](https://microsoft.github.io/reactxp/) if you're looking for a component library written entirely in TypeScript that supports both Rea