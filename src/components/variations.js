const pipe = (...fns) => arg => fns.reduce((prev, fn) => fn(prev), arg);

// property => the context
// name => the style we want to set
// path => the theme path we look up

function Variation({ property, path, name, prefix, affix, pseudo, effect }) {
  return function(props) {
    // find out if we really got the variations we looks for.
    // either in the context or the props
    const variation = props.context[property] || props[property];
    if (!variation) return null;

    // find the right theme by...
    prefix = prefix || "";
    affix = affix || "";
    const lookUpBy = path || property || name;

    /*
        e.g: theme['text']: {
            dark: 'black',
            light: 'white
        }
    */
    const theme = props.theme[lookUpBy];

    /* e.g: theme['text']['dark'] */
    const themeVariation = theme[variation];
    const assignTo = name || property;

    if (pseudo)
      return `${pseudo} {
        ${assignTo}: ${prefix}${themeVariation}${affix};
        ${effect && effect(props)};
      }`;

    return `
      ${assignTo}: ${prefix}${themeVariation}${affix};
      ${effect && effect(props)};
    `;
  };
}

export const BackgroundVariation = pipe(Variation)({
  property: "background"
});

export const DarkenBackgroundVariation = pipe(Variation)({
  property: "background",
  path: "darkenBackground"
});
export const LighenBackgroundVariation = pipe(Variation)({
  property: "background",
  path: "lightlenBackground"
});

export const BorderVariation = pipe(Variation)({
  property: "background",
  name: "border-color"
});

export const GhostBoxShadow = pipe(Variation)({
  property: "background",
  path: "ghostBackground",
  name: "box-shadow",
  prefix: "0 0 0 0.125em "
});

export const TextVariation = pipe(Variation)({
  property: "background",
  path: "text",
  name: "color"
});

export const DarkenTextVariation = pipe(Variation)({
  property: "background",
  path: "darkenText",
  name: "color"
});
export const LightenTextVariation = pipe(Variation)({
  property: "background",
  path: "lightenText",
  name: "color"
});

export const GhostTextVariation = pipe(Variation)({
  property: "background",
  path: "ghostText",
  name: "box-shadow",
  prefix: "0 0 0 0.125em "
});

export const SelectionVariation = pipe(Variation)({
  property: "background",
  pseudo: "&::selection",
  effect: TextVariation
});
