import variable from "./../variables/platform";

export default (variables = variable) => {
  const platform = variables.platform;

  const tabHeadingTheme = {
    flexDirection: "row",
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    ".scrollable": {
      paddingHorizontal: 20,
      flex: platform === "android" ? 0 : 1,
      minWidth: platform === "android" ? undefined : 60
    },
    "NativeBase.Text": {
      color: "#8c8c8c",
      marginHorizontal: 7
    },
    "NativeBase.Icon": {
      color: variables.topTabBarTextColor,
      fontSize: platform === "ios" ? 26 : undefined
    },
    ".active": {
      borderBottomColor: "#caa64a",
      borderBottomWidth: 2,
      zIndex: 2,
      "NativeBase.Text": {
        color: "#3d3d3d",
        fontWeight: "600"
      },
      "NativeBase.Icon": {
        color: variables.topTabBarActiveTextColor
      }
    }
  };

  return tabHeadingTheme;
};
