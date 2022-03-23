'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// src/icon/index.ts
var matchName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
var iconDefaults = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16,
  rotate: 0,
  vFlip: false,
  hFlip: false
});
function fullIcon(data) {
  return { ...iconDefaults, ...data };
}

// src/icon/merge.ts
function mergeIconData(icon, alias) {
  const result = { ...icon };
  for (const key in iconDefaults) {
    const prop = key;
    if (alias[prop] !== void 0) {
      const value = alias[prop];
      if (result[prop] === void 0) {
        result[prop] = value;
        continue;
      }
      switch (prop) {
        case "rotate":
          result[prop] = (result[prop] + value) % 4;
          break;
        case "hFlip":
        case "vFlip":
          result[prop] = value !== result[prop];
          break;
        default:
          result[prop] = value;
      }
    }
  }
  return result;
}

// src/icon-set/get-icon.ts
function getIconData(data, name, full = false) {
  function getIcon(name2, iteration) {
    var _a, _b, _c, _d;
    if (data.icons[name2] !== void 0) {
      return Object.assign({}, data.icons[name2]);
    }
    if (iteration > 5) {
      return null;
    }
    if (((_a = data.aliases) == null ? void 0 : _a[name2]) !== void 0) {
      const item = (_b = data.aliases) == null ? void 0 : _b[name2];
      const result2 = getIcon(item.parent, iteration + 1);
      if (result2) {
        return mergeIconData(result2, item);
      }
      return result2;
    }
    if (iteration === 0 && ((_c = data.chars) == null ? void 0 : _c[name2]) !== void 0) {
      return getIcon((_d = data.chars) == null ? void 0 : _d[name2], iteration + 1);
    }
    return null;
  }
  const result = getIcon(name, 0);
  if (result) {
    for (const key in iconDefaults) {
      if (result[key] === void 0 && data[key] !== void 0) {
        result[key] = data[key];
      }
    }
  }
  return result && full ? fullIcon(result) : result;
}

// src/icon-set/validate.ts
var matchChar = /^[a-f0-9]+(-[a-f0-9]+)*$/;
function validateIconProps(item, fix) {
  for (const key in item) {
    const attr = key;
    const value = item[attr];
    const type = typeof value;
    if (type === "undefined") {
      delete item[attr];
      continue;
    }
    switch (key) {
      case "body":
      case "parent":
        if (type !== "string") {
          return key;
        }
        break;
      case "hFlip":
      case "vFlip":
      case "hidden":
        if (type !== "boolean") {
          if (fix) {
            delete item[attr];
          } else {
            return key;
          }
        }
        break;
      case "width":
      case "height":
      case "left":
      case "top":
      case "rotate":
      case "inlineHeight":
      case "inlineTop":
      case "verticalAlign":
        if (type !== "number") {
          if (fix) {
            delete item[attr];
          } else {
            return key;
          }
        }
        break;
      default:
        if (type === "object") {
          if (fix) {
            delete item[attr];
          } else {
            return key;
          }
        }
    }
  }
  return null;
}
function validateIconSet(obj, options) {
  var _a;
  const fix = !!(options == null ? void 0 : options.fix);
  if (typeof obj !== "object" || obj === null || typeof obj.icons !== "object" || !obj.icons) {
    throw new Error("Bad icon set");
  }
  const data = obj;
  if (typeof (options == null ? void 0 : options.prefix) === "string") {
    data.prefix = options.prefix;
  } else if (typeof data.prefix !== "string" || !data.prefix.match(matchName)) {
    throw new Error("Invalid prefix");
  }
  if (typeof (options == null ? void 0 : options.provider) === "string") {
    data.provider = options.provider;
  } else if (data.provider !== void 0) {
    const value = data.provider;
    if (typeof value !== "string" || value !== "" && !value.match(matchName)) {
      if (fix) {
        delete data.provider;
      } else {
        throw new Error("Invalid provider");
      }
    }
  }
  const icons = data.icons;
  Object.keys(icons).forEach((name) => {
    if (!name.match(matchName)) {
      if (fix) {
        delete icons[name];
        return;
      }
      throw new Error(`Invalid icon name: "${name}"`);
    }
    const item = icons[name];
    if (typeof item !== "object" || item === null || typeof item.body !== "string") {
      if (fix) {
        delete icons[name];
        return;
      }
      throw new Error(`Invalid icon: "${name}"`);
    }
    const key = typeof item.parent === "string" ? "parent" : validateIconProps(item, fix);
    if (key !== null) {
      if (fix) {
        delete icons[name];
        return;
      }
      throw new Error(`Invalid property "${key}" in icon "${name}"`);
    }
  });
  if (data.not_found !== void 0 && !(data.not_found instanceof Array)) {
    if (fix) {
      delete data.not_found;
    } else {
      throw new Error("Invalid not_found list");
    }
  }
  if (!Object.keys(data.icons).length && !((_a = data.not_found) == null ? void 0 : _a.length)) {
    throw new Error("Icon set is empty");
  }
  if (data.aliases !== void 0) {
    if (typeof data.aliases !== "object" || data.aliases === null) {
      if (fix) {
        delete data.aliases;
      } else {
        throw new Error("Invalid aliases list");
      }
    }
  }
  if (typeof data.aliases === "object") {
    let validateAlias = function(name, iteration) {
      if (validatedAliases.has(name)) {
        return !failedAliases.has(name);
      }
      const item = aliases[name];
      if (iteration > 5 || typeof item !== "object" || item === null || typeof item.parent !== "string" || !name.match(matchName)) {
        if (fix) {
          delete aliases[name];
          failedAliases.add(name);
          return false;
        }
        throw new Error(`Invalid icon alias: "${name}"`);
      }
      const parent = item.parent;
      if (data.icons[parent] === void 0) {
        if (aliases[parent] === void 0 || !validateAlias(parent, iteration + 1)) {
          if (fix) {
            delete aliases[name];
            failedAliases.add(name);
            return false;
          }
          throw new Error(`Missing parent icon for alias "${name}`);
        }
      }
      if (fix && item.body !== void 0) {
        delete item.body;
      }
      const key = item.body !== void 0 ? "body" : validateIconProps(item, fix);
      if (key !== null) {
        if (fix) {
          delete aliases[name];
          failedAliases.add(name);
          return false;
        }
        throw new Error(`Invalid property "${key}" in alias "${name}"`);
      }
      validatedAliases.add(name);
      return true;
    };
    const aliases = data.aliases;
    const validatedAliases = new Set();
    const failedAliases = new Set();
    Object.keys(aliases).forEach((name) => {
      validateAlias(name, 0);
    });
    if (fix && !Object.keys(data.aliases).length) {
      delete data.aliases;
    }
  }
  Object.keys(iconDefaults).forEach((prop) => {
    const expectedType = typeof iconDefaults[prop];
    const actualType = typeof data[prop];
    if (actualType !== "undefined" && actualType !== expectedType) {
      throw new Error(`Invalid value type for "${prop}"`);
    }
  });
  if (data.chars !== void 0) {
    if (typeof data.chars !== "object" || data.chars === null) {
      if (fix) {
        delete data.chars;
      } else {
        throw new Error("Invalid characters map");
      }
    }
  }
  if (typeof data.chars === "object") {
    const chars = data.chars;
    Object.keys(chars).forEach((char) => {
      var _a2;
      if (!char.match(matchChar) || typeof chars[char] !== "string") {
        if (fix) {
          delete chars[char];
          return;
        }
        throw new Error(`Invalid character "${char}"`);
      }
      const target = chars[char];
      if (data.icons[target] === void 0 && ((_a2 = data.aliases) == null ? void 0 : _a2[target]) === void 0) {
        if (fix) {
          delete chars[char];
          return;
        }
        throw new Error(`Character "${char}" points to missing icon "${target}"`);
      }
    });
    if (fix && !Object.keys(data.chars).length) {
      delete data.chars;
    }
  }
  return data;
}

// src/icon-set/parse.ts
function isVariation(item) {
  for (const key in iconDefaults) {
    if (item[key] !== void 0) {
      return true;
    }
  }
  return false;
}
function parseIconSet(data, callback, options) {
  options = options || {};
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  const validate = options.validate;
  if (validate !== false) {
    try {
      validateIconSet(data, typeof validate === "object" ? validate : { fix: true });
    } catch (err) {
      return names;
    }
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const icons = data.icons;
  Object.keys(icons).forEach((name) => {
    const iconData = getIconData(data, name, true);
    if (iconData) {
      callback(name, iconData);
      names.push(name);
    }
  });
  const parseAliases = options.aliases || "all";
  if (parseAliases !== "none" && typeof data.aliases === "object") {
    const aliases = data.aliases;
    Object.keys(aliases).forEach((name) => {
      if (parseAliases === "variations" && isVariation(aliases[name])) {
        return;
      }
      const iconData = getIconData(data, name, true);
      if (iconData) {
        callback(name, iconData);
        names.push(name);
      }
    });
  }
  return names;
}

// src/customisations/index.ts
var defaults = Object.freeze({
  inline: false,
  width: null,
  height: null,
  hAlign: "center",
  vAlign: "middle",
  slice: false,
  hFlip: false,
  vFlip: false,
  rotate: 0
});
function mergeCustomisations(defaults2, item) {
  const result = {};
  for (const key in defaults2) {
    const attr = key;
    result[attr] = defaults2[attr];
    if (item[attr] === void 0) {
      continue;
    }
    const value = item[attr];
    switch (attr) {
      case "inline":
      case "slice":
        if (typeof value === "boolean") {
          result[attr] = value;
        }
        break;
      case "hFlip":
      case "vFlip":
        if (value === true) {
          result[attr] = !result[attr];
        }
        break;
      case "hAlign":
      case "vAlign":
        if (typeof value === "string" && value !== "") {
          result[attr] = value;
        }
        break;
      case "width":
      case "height":
        if (typeof value === "string" && value !== "" || typeof value === "number" && value || value === null) {
          result[attr] = value;
        }
        break;
      case "rotate":
        if (typeof value === "number") {
          result[attr] += value;
        }
        break;
    }
  }
  return result;
}

// src/customisations/shorthand.ts
var separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function alignmentFromString(custom, align) {
  align.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "left":
      case "center":
      case "right":
        custom.hAlign = value;
        break;
      case "top":
      case "middle":
      case "bottom":
        custom.vAlign = value;
        break;
      case "slice":
      case "crop":
        custom.slice = true;
        break;
      case "meet":
        custom.slice = false;
    }
  });
}

// src/customisations/rotate.ts
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}

// src/svg/size.ts
var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision === void 0 ? 100 : precision;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

// src/svg/build.ts
function preserveAspectRatio(props) {
  let result = "";
  switch (props.hAlign) {
    case "left":
      result += "xMin";
      break;
    case "right":
      result += "xMax";
      break;
    default:
      result += "xMid";
  }
  switch (props.vAlign) {
    case "top":
      result += "YMin";
      break;
    case "bottom":
      result += "YMax";
      break;
    default:
      result += "YMid";
  }
  result += props.slice ? " slice" : " meet";
  return result;
}
function iconToSVG(icon, customisations) {
  const box = {
    left: icon.left,
    top: icon.top,
    width: icon.width,
    height: icon.height
  };
  let body = icon.body;
  [icon, customisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push("translate(" + (box.width + box.left) + " " + (0 - box.top) + ")");
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push("translate(" + (0 - box.left) + " " + (box.height + box.top) + ")");
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift("rotate(90 " + tempValue + " " + tempValue + ")");
        break;
      case 2:
        transformations.unshift("rotate(180 " + (box.width / 2 + box.left) + " " + (box.height / 2 + box.top) + ")");
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift("rotate(-90 " + tempValue + " " + tempValue + ")");
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== 0 || box.top !== 0) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = '<g transform="' + transformations.join(" ") + '">' + body + "</g>";
    }
  });
  let width, height;
  if (customisations.width === null && customisations.height === null) {
    height = "1em";
    width = calculateSize(height, box.width / box.height);
  } else if (customisations.width !== null && customisations.height !== null) {
    width = customisations.width;
    height = customisations.height;
  } else if (customisations.height !== null) {
    height = customisations.height;
    width = calculateSize(height, box.width / box.height);
  } else {
    width = customisations.width;
    height = calculateSize(width, box.height / box.width);
  }
  if (width === "auto") {
    width = box.width;
  }
  if (height === "auto") {
    height = box.height;
  }
  width = typeof width === "string" ? width : width + "";
  height = typeof height === "string" ? height : height + "";
  const result = {
    attributes: {
      width,
      height,
      preserveAspectRatio: preserveAspectRatio(customisations),
      viewBox: box.left + " " + box.top + " " + box.width + " " + box.height
    },
    body
  };
  if (customisations.inline) {
    result.inline = true;
  }
  return result;
}

// src/svg/id.ts
var regex = /\sid="(\S+)"/g;
var randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
var counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  ids.forEach((id) => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + counter++;
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"), "$1" + newID + "$3");
  });
  return body;
}

/**
 * Default SVG attributes
 */
const svgDefaults = {
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlnsXlink': 'http://www.w3.org/1999/xlink',
    'aria-hidden': true,
    'role': 'img',
    'style': {}, // Include style if it isn't set to add verticalAlign later
};
/**
 * Default values for customisations for inline icon
 */
const inlineDefaults = { ...defaults, inline: true };
/**
 * Render icon
 */
const render = (
// Icon must be validated before calling this function
icon, 
// Partial properties
props, 
// True if icon should have vertical-align added
inline, 
// Optional reference for SVG, extracted by React.forwardRef()
ref) => {
    // Get default properties
    const defaultProps = inline ? inlineDefaults : defaults;
    // Get all customisations
    const customisations = mergeCustomisations(defaultProps, props);
    // Create style
    const style = typeof props.style === 'object' && props.style !== null
        ? props.style
        : {};
    // Create SVG component properties
    const componentProps = { ...svgDefaults, ref, style };
    // Get element properties
    for (let key in props) {
        const value = props[key];
        if (value === void 0) {
            continue;
        }
        switch (key) {
            // Properties to ignore
            case 'icon':
            case 'style':
            case 'children':
            case 'onLoad':
            case '_ref':
            case '_inline':
                break;
            // Boolean attributes
            case 'inline':
            case 'hFlip':
            case 'vFlip':
                customisations[key] =
                    value === true || value === 'true' || value === 1;
                break;
            // Flip as string: 'horizontal,vertical'
            case 'flip':
                if (typeof value === 'string') {
                    flipFromString(customisations, value);
                }
                break;
            // Alignment as string
            case 'align':
                if (typeof value === 'string') {
                    alignmentFromString(customisations, value);
                }
                break;
            // Color: copy to style
            case 'color':
                style.color = value;
                break;
            // Rotation as string
            case 'rotate':
                if (typeof value === 'string') {
                    customisations[key] = rotateFromString(value);
                }
                else if (typeof value === 'number') {
                    customisations[key] = value;
                }
                break;
            // Remove aria-hidden
            case 'ariaHidden':
            case 'aria-hidden':
                if (value !== true && value !== 'true') {
                    delete componentProps['aria-hidden'];
                }
                break;
            // Copy missing property if it does not exist in customisations
            default:
                if (defaultProps[key] === void 0) {
                    componentProps[key] = value;
                }
        }
    }
    // Generate icon
    const item = iconToSVG(icon, customisations);
    // Counter for ids based on "id" property to render icons consistently on server and client
    let localCounter = 0;
    let id = props.id;
    if (typeof id === 'string') {
        // Convert '-' to '_' to avoid errors in animations
        id = id.replace(/-/g, '_');
    }
    // Add icon stuff
    componentProps.dangerouslySetInnerHTML = {
        __html: replaceIDs(item.body, id ? () => id + 'ID' + localCounter++ : 'iconifyReact'),
    };
    for (let key in item.attributes) {
        componentProps[key] = item.attributes[key];
    }
    if (item.inline && style.verticalAlign === void 0) {
        style.verticalAlign = '-0.125em';
    }
    return React__default["default"].createElement('svg', componentProps);
};

/**
 * Storage for icons referred by name
 */
const storage = Object.create(null);
/**
 * Generate icon
 */
function component(props, inline, ref) {
    // Split properties
    const icon = typeof props.icon === 'string'
        ? storage[props.icon]
        : typeof props.icon === 'object'
            ? fullIcon(props.icon)
            : null;
    // Validate icon object
    if (icon === null ||
        typeof icon !== 'object' ||
        typeof icon.body !== 'string') {
        return props.children
            ? props.children
            : React__default["default"].createElement('span', {});
    }
    // Valid icon: render it
    return render(icon, props, inline, ref);
}
/**
 * Block icon
 *
 * @param props - Component properties
 */
const Icon = React__default["default"].forwardRef(function Icon(props, ref) {
    return component(props, false, ref);
});
/**
 * Inline icon (has negative verticalAlign that makes it behave like icon font)
 *
 * @param props - Component properties
 */
const InlineIcon = React__default["default"].forwardRef(function InlineIcon(props, ref) {
    return component(props, true, ref);
});
/**
 * Add icon to storage, allowing to call it by name
 *
 * @param name
 * @param data
 */
function addIcon(name, data) {
    storage[name] = fullIcon(data);
}
/**
 * Add collection to storage, allowing to call icons by name
 *
 * @param data Icon set
 * @param prefix Optional prefix to add to icon names, true (default) if prefix from icon set should be used.
 */
function addCollection(data, prefix) {
    const iconPrefix = typeof prefix === 'string'
        ? prefix
        : prefix !== false && typeof data.prefix === 'string'
            ? data.prefix + ':'
            : '';
    parseIconSet(data, (name, icon) => {
        if (icon) {
            storage[iconPrefix + name] = icon;
        }
    }, {
        // Allow empty prefix
        validate: {
            fix: true,
            prefix: iconPrefix,
        },
    });
}

exports.Icon = Icon;
exports.InlineIcon = InlineIcon;
exports.addCollection = addCollection;
exports.addIcon = addIcon;
