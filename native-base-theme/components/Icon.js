import variable from "./../variables/platform";

export default (variables = variable) => {
  const iconTheme = {
    fontSize: variables.iconFontSize,
    color: "#000",
    ".white": {
      color: "#fff",
      fontSize:18,
    },
  };

  return iconTheme;
};
