import Color from "color";

function modify(object, func) {
  const entries = Object.entries(object);
  return entries.reduce((acc, [key, value]) => {
    acc[key] = func ? func(value).string() : value.string();
    return acc;
  }, {});
}

const backgroundColors = {
  primary: Color("#00d1b2"),
  info: Color("#209cee"),
  success: Color("#23d160"),
  warning: Color("#ffdd57"),
  danger: Color("#ff3860"),
  light: Color("#f5f5f5"),
  dark: Color("#363636")
};

const textColors = {
  primary: Color("rgba(255,255,255,.9)"),
  info: Color("rgba(255,255,255,.9)"),
  success: Color("rgba(255,255,255,.9)"),
  warning: Color("rgba(0,0,0,.9)"),
  danger: Color("rgba(255,255,255,.9)"),
  light: Color("rgba(54,54,54,.9)"),
  dark: Color("rgba(245,245,245,.9)")
};

const darken = value => value.darken(0.1);
const lighten = value => value.lighten(0.1);
const ghost = value => value.alpha(0.25);

export default {
  background: modify(backgroundColors),
  darkenBackground: modify(backgroundColors, darken),
  lightenBackground: modify(backgroundColors, lighten),
  ghostBackground: modify(backgroundColors, ghost),

  text: modify(textColors),
  darkenText: modify(textColors, darken),
  lightenText: modify(textColors, lighten),
  ghostText: modify(textColors, ghost)
};
