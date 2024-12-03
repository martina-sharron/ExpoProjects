import { registerRootComponent } from 'expo';



import RestApiAxios from './Networking/RestApiAxios';
import Section from './CoreComponents/SectionList';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Section)
