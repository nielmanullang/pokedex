import variable from "./../variables/platform";
import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default (variables = variable) => {
  const viewTheme = {
    ".padder": {
      paddingLeft: 30,
      paddingRight: 30,
    },
    ".padderTop": {
      paddingTop: 30,
    },
    ".padderBottom": {
      paddingBottom: 24,
    },
    ".secondary" : {
      backgroundColor:'#f8f8f8',
    },
    ".errorBox": {
      width:'85%',
      height:18,
      paddingTop:4,
    },
    ".horizontalRow": {
      width:'100%',
      flexDirection:'row',
    },
    ".wrap": {
      flexWrap:'wrap',
    },
    ".padderBox": {
      backgroundColor:'#fff',
      width:WIDTH-65,
      marginLeft:30,
      paddingLeft:40,
      paddingTop:15,
      paddingBottom:20,
      flexDirection:'row',
      elevation:16,
    },
    ".popUpShadow": {
      flex:1,
      flexDirection:'column',
      justifyContent:'flex-end',
      backgroundColor:'rgba(0,0,0,0.5)',
    },
    ".popUpModal": {
      backgroundColor:'#fff',
      marginVertical:12,
      marginHorizontal:18,
      paddingHorizontal:10,
    },
    ".popUpTitle": {
      padding:20,
      borderBottomWidth:1,
      borderColor:'#e2e2e2',
    },
    ".popUpMenuBox": {
      borderBottomWidth:1,
      borderColor:'#e2e2e2',
    },
    ".popUpHeader":{
      position:'absolute',
      backgroundColor:'#fff',
      top:50,
      right:10,
      padding:20,
      width:'50%',
    }
  };

  return viewTheme;
};
