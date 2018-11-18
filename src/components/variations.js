const pipe = (...fns) => (...args) => fns.reduce((prev, fn) => fn(prev), args);

// property => the context
// name => the style we want to set
// path => the theme path we look up

function Variation([property, path, name]) {
  return function(props) {
    // find out if we really got the variations we looks for.
    // either in the context or the props
    const variation = props.context[property] || props[property];
    if (!variation) return null;

    // find the right theme by...
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
    return `${assignTo}: ${themeVariation};`;
  };
}

export const BackgroundVariation = pipe(Variation)("background");
export const TextVariation = pipe(Variation)("background", "text", "color");
