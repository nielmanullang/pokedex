/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Module RCTImageLoader requires',
    'Warning: Async Storage has been extracted from react-native core and will be removed in a future release',
    'Remote debugger is in a background tab which may cause apps to perform slowly.',
    'componentWillUpdate is deprecated and will be removed in the next major version.'
]);

AppRegistry.registerComponent(appName, () => App);
