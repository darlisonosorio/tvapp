# TVApp
React Native Project App that lists and details of series and actors.

## Used Technologies:

 - React;
 - React Native;
 - Styled Components;
 - Redux;
 - React Navigation v5;
 - React Native Paper.

## Configuration:

### Dependencies:

Install the following tools before start the project:

 - Node.js (most recent stable version prefered)
   Follow [official documentation](https://nodejs.dev/learn/how-to-install-nodejs);

 - Yarn:
   Follow [official documentation](https://classic.yarnpkg.com/en/docs/install/#windows-stable);

## Development Run

To install dependencies and run the dev application, execute the following commands:

- yarn
- npx react-native run-android

## Production Build (Android)

- Go to android folder
- Run the command: gradlew assembleRelease
- The generated apk will be in the directory android/app/build/output/apk/release
- Once you find the file .apk it's possible to run on devices by running: adb install apk_name.apk