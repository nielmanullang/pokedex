import variable from "./../variables/platform";

export default (variables = variable) => {
  const cardTheme = {
    ".transparent": {
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null,
      elevation: null
    },
    marginVertical: 5,
    marginHorizontal: 2,
    flex: 1,
    borderWidth: variables.borderWidth,
    borderRadius: 2,
    borderColor: variables.cardBorderColor,
    flexWrap: "nowrap",
    backgroundColor: variables.cardDefaultBg,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 0,
    margin: 0,
  };

  return cardTheme;
};
