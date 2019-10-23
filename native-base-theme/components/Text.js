import variable from "./../variables/platform";
import { moderateScale } from '../variables/fonts';

export default (variables = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize - 1,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    ".welcome": {
      color: "#3d3d3d",
      fontSize: moderateScale(36),
      fontFamily: "System",
    },
    ".title": {
      color: "#3d3d3d",
      fontSize: moderateScale(16),
      fontWeight: 'bold',
      letterSpacing: 2,
      paddingBottom: 12,
    },
    ".bold": {
      color: "#3d3d3d",
      fontSize: moderateScale(16),
      fontWeight: 'bold',
    },
    ".iconTitle": {
      color: "#3d3d3d",
      fontSize: moderateScale(13),
      fontWeight: 'bold',
      letterSpacing: 0,
      alignSelf:'center',
    },
    ".longText": {
      color:'#3d3d3d',
      fontSize:moderateScale(16),
      letterSpacing:3,
    },
    ".note": {
      color: "#8c8c8c",
      lineHeight: 24,
      fontSize: variables.noteFontSize
    },
    ".longTitle": {
      color: "#3d3d3d",
      fontSize: moderateScale(17),
      fontWeight: 'bold',
      letterSpacing: 1,
      lineHeight: 24
    },
    ".footTitle": {
      color: "#444444",
      fontSize: moderateScale(13),
      fontWeight: "500"
    },
    ".footNote": {
      fontSize: moderateScale(13),
      color: "#8c8c8c",
    },
    ".errorMsg": {
      fontSize: moderateScale(12),
      color: "#cb625d",
      paddingTop:0,
    },
    ".boxTitle": {
      fontWeight:'500',
      paddingBottom:5
    },
    ".boxText": {
      fontSize:moderateScale(14),
      lineHeight:24,
      color:'#3d3d3d',
    },
    ".popUpMenu": {
      fontSize:moderateScale(20),
      color:'#3d3d3d',
      textAlign:'center',
      padding:20,
    },
    ".popUpTitle": {
      color:'#3d3d3d',
      fontWeight:'500',
      textAlign:'center',
      paddingBottom:6,
    },
    ".popUpRemark" : {
      color:'#868686',
      textAlign:'center',
      fontSize:moderateScale(13),
      lineHeight:20,
    },
    ".miniNote": {
      color:'#868686',
      fontSize:moderateScale(11),
    },
    ".alignRight": {
      alignItems:'flex-end',
      width:'100%',  
    },
    ".listTitle": {
      fontWeight:'500',
      fontSize:moderateScale(15),
      paddingBottom:5
    },
    ".listText": {
      marginBottom: 10,
      fontSize:moderateScale(12),
      color: '#3d3d3d',
    }
  };

  return textTheme;
};
