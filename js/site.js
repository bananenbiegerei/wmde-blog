(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/tailwindcss/lib/util/negateValue.js
  var require_negateValue = __commonJS({
    "node_modules/tailwindcss/lib/util/negateValue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return negateValue;
        }
      });
      function negateValue(value) {
        value = `${value}`;
        if (value === "0") {
          return "0";
        }
        if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(value)) {
          return value.replace(/^[+-]?/, (sign) => sign === "-" ? "" : "-");
        }
        let numericFunctions = [
          "var",
          "calc",
          "min",
          "max",
          "clamp"
        ];
        for (const fn of numericFunctions) {
          if (value.includes(`${fn}(`)) {
            return `calc(${value} * -1)`;
          }
        }
      }
    }
  });

  // node_modules/tailwindcss/lib/corePluginList.js
  var require_corePluginList = __commonJS({
    "node_modules/tailwindcss/lib/corePluginList.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _default = [
        "preflight",
        "container",
        "accessibility",
        "pointerEvents",
        "visibility",
        "position",
        "inset",
        "isolation",
        "zIndex",
        "order",
        "gridColumn",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRow",
        "gridRowStart",
        "gridRowEnd",
        "float",
        "clear",
        "margin",
        "boxSizing",
        "lineClamp",
        "display",
        "aspectRatio",
        "height",
        "maxHeight",
        "minHeight",
        "width",
        "minWidth",
        "maxWidth",
        "flex",
        "flexShrink",
        "flexGrow",
        "flexBasis",
        "tableLayout",
        "captionSide",
        "borderCollapse",
        "borderSpacing",
        "transformOrigin",
        "translate",
        "rotate",
        "skew",
        "scale",
        "transform",
        "animation",
        "cursor",
        "touchAction",
        "userSelect",
        "resize",
        "scrollSnapType",
        "scrollSnapAlign",
        "scrollSnapStop",
        "scrollMargin",
        "scrollPadding",
        "listStylePosition",
        "listStyleType",
        "listStyleImage",
        "appearance",
        "columns",
        "breakBefore",
        "breakInside",
        "breakAfter",
        "gridAutoColumns",
        "gridAutoFlow",
        "gridAutoRows",
        "gridTemplateColumns",
        "gridTemplateRows",
        "flexDirection",
        "flexWrap",
        "placeContent",
        "placeItems",
        "alignContent",
        "alignItems",
        "justifyContent",
        "justifyItems",
        "gap",
        "space",
        "divideWidth",
        "divideStyle",
        "divideColor",
        "divideOpacity",
        "placeSelf",
        "alignSelf",
        "justifySelf",
        "overflow",
        "overscrollBehavior",
        "scrollBehavior",
        "textOverflow",
        "hyphens",
        "whitespace",
        "wordBreak",
        "borderRadius",
        "borderWidth",
        "borderStyle",
        "borderColor",
        "borderOpacity",
        "backgroundColor",
        "backgroundOpacity",
        "backgroundImage",
        "gradientColorStops",
        "boxDecorationBreak",
        "backgroundSize",
        "backgroundAttachment",
        "backgroundClip",
        "backgroundPosition",
        "backgroundRepeat",
        "backgroundOrigin",
        "fill",
        "stroke",
        "strokeWidth",
        "objectFit",
        "objectPosition",
        "padding",
        "textAlign",
        "textIndent",
        "verticalAlign",
        "fontFamily",
        "fontSize",
        "fontWeight",
        "textTransform",
        "fontStyle",
        "fontVariantNumeric",
        "lineHeight",
        "letterSpacing",
        "textColor",
        "textOpacity",
        "textDecoration",
        "textDecorationColor",
        "textDecorationStyle",
        "textDecorationThickness",
        "textUnderlineOffset",
        "fontSmoothing",
        "placeholderColor",
        "placeholderOpacity",
        "caretColor",
        "accentColor",
        "opacity",
        "backgroundBlendMode",
        "mixBlendMode",
        "boxShadow",
        "boxShadowColor",
        "outlineStyle",
        "outlineWidth",
        "outlineOffset",
        "outlineColor",
        "ringWidth",
        "ringColor",
        "ringOpacity",
        "ringOffsetWidth",
        "ringOffsetColor",
        "blur",
        "brightness",
        "contrast",
        "dropShadow",
        "grayscale",
        "hueRotate",
        "invert",
        "saturate",
        "sepia",
        "filter",
        "backdropBlur",
        "backdropBrightness",
        "backdropContrast",
        "backdropGrayscale",
        "backdropHueRotate",
        "backdropInvert",
        "backdropOpacity",
        "backdropSaturate",
        "backdropSepia",
        "backdropFilter",
        "transitionProperty",
        "transitionDelay",
        "transitionDuration",
        "transitionTimingFunction",
        "willChange",
        "content"
      ];
    }
  });

  // node_modules/tailwindcss/lib/util/configurePlugins.js
  var require_configurePlugins = __commonJS({
    "node_modules/tailwindcss/lib/util/configurePlugins.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function _default(pluginConfig, plugins) {
        if (pluginConfig === void 0) {
          return plugins;
        }
        const pluginNames = Array.isArray(pluginConfig) ? pluginConfig : [
          ...new Set(plugins.filter((pluginName) => {
            return pluginConfig !== false && pluginConfig[pluginName] !== false;
          }).concat(Object.keys(pluginConfig).filter((pluginName) => {
            return pluginConfig[pluginName] !== false;
          })))
        ];
        return pluginNames;
      }
    }
  });

  // node_modules/picocolors/picocolors.browser.js
  var require_picocolors_browser = __commonJS({
    "node_modules/picocolors/picocolors.browser.js"(exports, module) {
      var x = String;
      var create = function() {
        return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x };
      };
      module.exports = create();
      module.exports.createColors = create;
    }
  });

  // node_modules/tailwindcss/lib/util/log.js
  var require_log = __commonJS({
    "node_modules/tailwindcss/lib/util/log.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        dim: function() {
          return dim;
        },
        default: function() {
          return _default;
        }
      });
      var _picocolors = /* @__PURE__ */ _interop_require_default(require_picocolors_browser());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var alreadyShown = /* @__PURE__ */ new Set();
      function log(type, messages, key) {
        if (typeof process !== "undefined" && process.env.JEST_WORKER_ID)
          return;
        if (key && alreadyShown.has(key))
          return;
        if (key)
          alreadyShown.add(key);
        console.warn("");
        messages.forEach((message) => console.warn(type, "-", message));
      }
      function dim(input) {
        return _picocolors.default.dim(input);
      }
      var _default = {
        info(key, messages) {
          log(_picocolors.default.bold(_picocolors.default.cyan("info")), ...Array.isArray(key) ? [
            key
          ] : [
            messages,
            key
          ]);
        },
        warn(key, messages) {
          log(_picocolors.default.bold(_picocolors.default.yellow("warn")), ...Array.isArray(key) ? [
            key
          ] : [
            messages,
            key
          ]);
        },
        risk(key, messages) {
          log(_picocolors.default.bold(_picocolors.default.magenta("risk")), ...Array.isArray(key) ? [
            key
          ] : [
            messages,
            key
          ]);
        }
      };
    }
  });

  // node_modules/tailwindcss/lib/public/colors.js
  var require_colors = __commonJS({
    "node_modules/tailwindcss/lib/public/colors.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _log = /* @__PURE__ */ _interop_require_default(require_log());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function warn2({ version, from, to }) {
        _log.default.warn(`${from}-color-renamed`, [
          `As of Tailwind CSS ${version}, \`${from}\` has been renamed to \`${to}\`.`,
          "Update your configuration file to silence this warning."
        ]);
      }
      var _default = {
        inherit: "inherit",
        current: "currentColor",
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617"
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712"
        },
        zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b"
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a"
        },
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09"
        },
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a"
        },
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407"
        },
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03"
        },
        yellow: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
          950: "#422006"
        },
        lime: {
          50: "#f7fee7",
          100: "#ecfccb",
          200: "#d9f99d",
          300: "#bef264",
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
          700: "#4d7c0f",
          800: "#3f6212",
          900: "#365314",
          950: "#1a2e05"
        },
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16"
        },
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22"
        },
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e"
        },
        cyan: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344"
        },
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49"
        },
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554"
        },
        indigo: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b"
        },
        violet: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065"
        },
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764"
        },
        fuchsia: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
          950: "#4a044e"
        },
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
          950: "#500724"
        },
        rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519"
        },
        get lightBlue() {
          warn2({
            version: "v2.2",
            from: "lightBlue",
            to: "sky"
          });
          return this.sky;
        },
        get warmGray() {
          warn2({
            version: "v3.0",
            from: "warmGray",
            to: "stone"
          });
          return this.stone;
        },
        get trueGray() {
          warn2({
            version: "v3.0",
            from: "trueGray",
            to: "neutral"
          });
          return this.neutral;
        },
        get coolGray() {
          warn2({
            version: "v3.0",
            from: "coolGray",
            to: "gray"
          });
          return this.gray;
        },
        get blueGray() {
          warn2({
            version: "v3.0",
            from: "blueGray",
            to: "slate"
          });
          return this.slate;
        }
      };
    }
  });

  // node_modules/tailwindcss/lib/util/defaults.js
  var require_defaults = __commonJS({
    "node_modules/tailwindcss/lib/util/defaults.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "defaults", {
        enumerable: true,
        get: function() {
          return defaults;
        }
      });
      function defaults(target, ...sources) {
        for (let source of sources) {
          for (let k in source) {
            var _target_hasOwnProperty;
            if (!(target === null || target === void 0 ? void 0 : (_target_hasOwnProperty = target.hasOwnProperty) === null || _target_hasOwnProperty === void 0 ? void 0 : _target_hasOwnProperty.call(target, k))) {
              target[k] = source[k];
            }
          }
          for (let k of Object.getOwnPropertySymbols(source)) {
            var _target_hasOwnProperty1;
            if (!(target === null || target === void 0 ? void 0 : (_target_hasOwnProperty1 = target.hasOwnProperty) === null || _target_hasOwnProperty1 === void 0 ? void 0 : _target_hasOwnProperty1.call(target, k))) {
              target[k] = source[k];
            }
          }
        }
        return target;
      }
    }
  });

  // node_modules/tailwindcss/lib/util/toPath.js
  var require_toPath = __commonJS({
    "node_modules/tailwindcss/lib/util/toPath.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "toPath", {
        enumerable: true,
        get: function() {
          return toPath;
        }
      });
      function toPath(path) {
        if (Array.isArray(path))
          return path;
        let openBrackets = path.split("[").length - 1;
        let closedBrackets = path.split("]").length - 1;
        if (openBrackets !== closedBrackets) {
          throw new Error(`Path is invalid. Has unbalanced brackets: ${path}`);
        }
        return path.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
      }
    }
  });

  // node_modules/tailwindcss/lib/featureFlags.js
  var require_featureFlags = __commonJS({
    "node_modules/tailwindcss/lib/featureFlags.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        flagEnabled: function() {
          return flagEnabled;
        },
        issueFlagNotices: function() {
          return issueFlagNotices;
        },
        default: function() {
          return _default;
        }
      });
      var _picocolors = /* @__PURE__ */ _interop_require_default(require_picocolors_browser());
      var _log = /* @__PURE__ */ _interop_require_default(require_log());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var defaults = {
        optimizeUniversalDefaults: false,
        generalizedModifiers: true,
        get disableColorOpacityUtilitiesByDefault() {
          return false;
        },
        get relativeContentPathsByDefault() {
          return false;
        }
      };
      var featureFlags = {
        future: [
          "hoverOnlyWhenSupported",
          "respectDefaultRingColorOpacity",
          "disableColorOpacityUtilitiesByDefault",
          "relativeContentPathsByDefault"
        ],
        experimental: [
          "optimizeUniversalDefaults",
          "generalizedModifiers"
        ]
      };
      function flagEnabled(config, flag) {
        if (featureFlags.future.includes(flag)) {
          var _config_future;
          var _config_future_flag, _ref;
          return config.future === "all" || ((_ref = (_config_future_flag = config === null || config === void 0 ? void 0 : (_config_future = config.future) === null || _config_future === void 0 ? void 0 : _config_future[flag]) !== null && _config_future_flag !== void 0 ? _config_future_flag : defaults[flag]) !== null && _ref !== void 0 ? _ref : false);
        }
        if (featureFlags.experimental.includes(flag)) {
          var _config_experimental;
          var _config_experimental_flag, _ref1;
          return config.experimental === "all" || ((_ref1 = (_config_experimental_flag = config === null || config === void 0 ? void 0 : (_config_experimental = config.experimental) === null || _config_experimental === void 0 ? void 0 : _config_experimental[flag]) !== null && _config_experimental_flag !== void 0 ? _config_experimental_flag : defaults[flag]) !== null && _ref1 !== void 0 ? _ref1 : false);
        }
        return false;
      }
      function experimentalFlagsEnabled(config) {
        if (config.experimental === "all") {
          return featureFlags.experimental;
        }
        var _config_experimental;
        return Object.keys((_config_experimental = config === null || config === void 0 ? void 0 : config.experimental) !== null && _config_experimental !== void 0 ? _config_experimental : {}).filter((flag) => featureFlags.experimental.includes(flag) && config.experimental[flag]);
      }
      function issueFlagNotices(config) {
        if (process.env.JEST_WORKER_ID !== void 0) {
          return;
        }
        if (experimentalFlagsEnabled(config).length > 0) {
          let changes = experimentalFlagsEnabled(config).map((s) => _picocolors.default.yellow(s)).join(", ");
          _log.default.warn("experimental-flags-enabled", [
            `You have enabled experimental features: ${changes}`,
            "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
          ]);
        }
      }
      var _default = featureFlags;
    }
  });

  // node_modules/tailwindcss/lib/util/normalizeConfig.js
  var require_normalizeConfig = __commonJS({
    "node_modules/tailwindcss/lib/util/normalizeConfig.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "normalizeConfig", {
        enumerable: true,
        get: function() {
          return normalizeConfig;
        }
      });
      var _featureFlags = require_featureFlags();
      var _log = /* @__PURE__ */ _interop_require_wildcard(require_log());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function normalizeConfig(config) {
        let valid = (() => {
          if (config.purge) {
            return false;
          }
          if (!config.content) {
            return false;
          }
          if (!Array.isArray(config.content) && !(typeof config.content === "object" && config.content !== null)) {
            return false;
          }
          if (Array.isArray(config.content)) {
            return config.content.every((path) => {
              if (typeof path === "string")
                return true;
              if (typeof (path === null || path === void 0 ? void 0 : path.raw) !== "string")
                return false;
              if ((path === null || path === void 0 ? void 0 : path.extension) && typeof (path === null || path === void 0 ? void 0 : path.extension) !== "string") {
                return false;
              }
              return true;
            });
          }
          if (typeof config.content === "object" && config.content !== null) {
            if (Object.keys(config.content).some((key) => ![
              "files",
              "relative",
              "extract",
              "transform"
            ].includes(key))) {
              return false;
            }
            if (Array.isArray(config.content.files)) {
              if (!config.content.files.every((path) => {
                if (typeof path === "string")
                  return true;
                if (typeof (path === null || path === void 0 ? void 0 : path.raw) !== "string")
                  return false;
                if ((path === null || path === void 0 ? void 0 : path.extension) && typeof (path === null || path === void 0 ? void 0 : path.extension) !== "string") {
                  return false;
                }
                return true;
              })) {
                return false;
              }
              if (typeof config.content.extract === "object") {
                for (let value of Object.values(config.content.extract)) {
                  if (typeof value !== "function") {
                    return false;
                  }
                }
              } else if (!(config.content.extract === void 0 || typeof config.content.extract === "function")) {
                return false;
              }
              if (typeof config.content.transform === "object") {
                for (let value of Object.values(config.content.transform)) {
                  if (typeof value !== "function") {
                    return false;
                  }
                }
              } else if (!(config.content.transform === void 0 || typeof config.content.transform === "function")) {
                return false;
              }
              if (typeof config.content.relative !== "boolean" && typeof config.content.relative !== "undefined") {
                return false;
              }
            }
            return true;
          }
          return false;
        })();
        if (!valid) {
          _log.default.warn("purge-deprecation", [
            "The `purge`/`content` options have changed in Tailwind CSS v3.0.",
            "Update your configuration file to eliminate this warning.",
            "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"
          ]);
        }
        config.safelist = (() => {
          var _purge_options;
          let { content, purge, safelist } = config;
          if (Array.isArray(safelist))
            return safelist;
          if (Array.isArray(content === null || content === void 0 ? void 0 : content.safelist))
            return content.safelist;
          if (Array.isArray(purge === null || purge === void 0 ? void 0 : purge.safelist))
            return purge.safelist;
          if (Array.isArray(purge === null || purge === void 0 ? void 0 : (_purge_options = purge.options) === null || _purge_options === void 0 ? void 0 : _purge_options.safelist))
            return purge.options.safelist;
          return [];
        })();
        config.blocklist = (() => {
          let { blocklist } = config;
          if (Array.isArray(blocklist)) {
            if (blocklist.every((item) => typeof item === "string")) {
              return blocklist;
            }
            _log.default.warn("blocklist-invalid", [
              "The `blocklist` option must be an array of strings.",
              "https://tailwindcss.com/docs/content-configuration#discarding-classes"
            ]);
          }
          return [];
        })();
        if (typeof config.prefix === "function") {
          _log.default.warn("prefix-function", [
            "As of Tailwind CSS v3.0, `prefix` cannot be a function.",
            "Update `prefix` in your configuration to be a string to eliminate this warning.",
            "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"
          ]);
          config.prefix = "";
        } else {
          var _config_prefix;
          config.prefix = (_config_prefix = config.prefix) !== null && _config_prefix !== void 0 ? _config_prefix : "";
        }
        config.content = {
          relative: (() => {
            let { content } = config;
            if (content === null || content === void 0 ? void 0 : content.relative) {
              return content.relative;
            }
            return (0, _featureFlags.flagEnabled)(config, "relativeContentPathsByDefault");
          })(),
          files: (() => {
            let { content, purge } = config;
            if (Array.isArray(purge))
              return purge;
            if (Array.isArray(purge === null || purge === void 0 ? void 0 : purge.content))
              return purge.content;
            if (Array.isArray(content))
              return content;
            if (Array.isArray(content === null || content === void 0 ? void 0 : content.content))
              return content.content;
            if (Array.isArray(content === null || content === void 0 ? void 0 : content.files))
              return content.files;
            return [];
          })(),
          extract: (() => {
            let extract = (() => {
              var _config_purge, _config_content, _config_purge1, _config_purge_extract, _config_content1, _config_content_extract, _config_purge2, _config_purge_options, _config_content2, _config_content_options;
              if ((_config_purge = config.purge) === null || _config_purge === void 0 ? void 0 : _config_purge.extract)
                return config.purge.extract;
              if ((_config_content = config.content) === null || _config_content === void 0 ? void 0 : _config_content.extract)
                return config.content.extract;
              if ((_config_purge1 = config.purge) === null || _config_purge1 === void 0 ? void 0 : (_config_purge_extract = _config_purge1.extract) === null || _config_purge_extract === void 0 ? void 0 : _config_purge_extract.DEFAULT)
                return config.purge.extract.DEFAULT;
              if ((_config_content1 = config.content) === null || _config_content1 === void 0 ? void 0 : (_config_content_extract = _config_content1.extract) === null || _config_content_extract === void 0 ? void 0 : _config_content_extract.DEFAULT)
                return config.content.extract.DEFAULT;
              if ((_config_purge2 = config.purge) === null || _config_purge2 === void 0 ? void 0 : (_config_purge_options = _config_purge2.options) === null || _config_purge_options === void 0 ? void 0 : _config_purge_options.extractors)
                return config.purge.options.extractors;
              if ((_config_content2 = config.content) === null || _config_content2 === void 0 ? void 0 : (_config_content_options = _config_content2.options) === null || _config_content_options === void 0 ? void 0 : _config_content_options.extractors)
                return config.content.options.extractors;
              return {};
            })();
            let extractors = {};
            let defaultExtractor = (() => {
              var _config_purge, _config_purge_options, _config_content, _config_content_options;
              if ((_config_purge = config.purge) === null || _config_purge === void 0 ? void 0 : (_config_purge_options = _config_purge.options) === null || _config_purge_options === void 0 ? void 0 : _config_purge_options.defaultExtractor) {
                return config.purge.options.defaultExtractor;
              }
              if ((_config_content = config.content) === null || _config_content === void 0 ? void 0 : (_config_content_options = _config_content.options) === null || _config_content_options === void 0 ? void 0 : _config_content_options.defaultExtractor) {
                return config.content.options.defaultExtractor;
              }
              return void 0;
            })();
            if (defaultExtractor !== void 0) {
              extractors.DEFAULT = defaultExtractor;
            }
            if (typeof extract === "function") {
              extractors.DEFAULT = extract;
            } else if (Array.isArray(extract)) {
              for (let { extensions, extractor } of extract !== null && extract !== void 0 ? extract : []) {
                for (let extension of extensions) {
                  extractors[extension] = extractor;
                }
              }
            } else if (typeof extract === "object" && extract !== null) {
              Object.assign(extractors, extract);
            }
            return extractors;
          })(),
          transform: (() => {
            let transform2 = (() => {
              var _config_purge, _config_content, _config_purge1, _config_purge_transform, _config_content1, _config_content_transform;
              if ((_config_purge = config.purge) === null || _config_purge === void 0 ? void 0 : _config_purge.transform)
                return config.purge.transform;
              if ((_config_content = config.content) === null || _config_content === void 0 ? void 0 : _config_content.transform)
                return config.content.transform;
              if ((_config_purge1 = config.purge) === null || _config_purge1 === void 0 ? void 0 : (_config_purge_transform = _config_purge1.transform) === null || _config_purge_transform === void 0 ? void 0 : _config_purge_transform.DEFAULT)
                return config.purge.transform.DEFAULT;
              if ((_config_content1 = config.content) === null || _config_content1 === void 0 ? void 0 : (_config_content_transform = _config_content1.transform) === null || _config_content_transform === void 0 ? void 0 : _config_content_transform.DEFAULT)
                return config.content.transform.DEFAULT;
              return {};
            })();
            let transformers = {};
            if (typeof transform2 === "function") {
              transformers.DEFAULT = transform2;
            }
            if (typeof transform2 === "object" && transform2 !== null) {
              Object.assign(transformers, transform2);
            }
            return transformers;
          })()
        };
        for (let file of config.content.files) {
          if (typeof file === "string" && /{([^,]*?)}/g.test(file)) {
            _log.default.warn("invalid-glob-braces", [
              `The glob pattern ${(0, _log.dim)(file)} in your Tailwind CSS configuration is invalid.`,
              `Update it to ${(0, _log.dim)(file.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`
            ]);
            break;
          }
        }
        return config;
      }
    }
  });

  // node_modules/tailwindcss/lib/util/isPlainObject.js
  var require_isPlainObject = __commonJS({
    "node_modules/tailwindcss/lib/util/isPlainObject.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return isPlainObject;
        }
      });
      function isPlainObject(value) {
        if (Object.prototype.toString.call(value) !== "[object Object]") {
          return false;
        }
        const prototype = Object.getPrototypeOf(value);
        return prototype === null || prototype === Object.prototype;
      }
    }
  });

  // node_modules/tailwindcss/lib/util/cloneDeep.js
  var require_cloneDeep = __commonJS({
    "node_modules/tailwindcss/lib/util/cloneDeep.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "cloneDeep", {
        enumerable: true,
        get: function() {
          return cloneDeep;
        }
      });
      function cloneDeep(value) {
        if (Array.isArray(value)) {
          return value.map((child) => cloneDeep(child));
        }
        if (typeof value === "object" && value !== null) {
          return Object.fromEntries(Object.entries(value).map(([k, v]) => [
            k,
            cloneDeep(v)
          ]));
        }
        return value;
      }
    }
  });

  // node_modules/tailwindcss/lib/util/escapeCommas.js
  var require_escapeCommas = __commonJS({
    "node_modules/tailwindcss/lib/util/escapeCommas.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return escapeCommas;
        }
      });
      function escapeCommas(className) {
        return className.replace(/\\,/g, "\\2c ");
      }
    }
  });

  // node_modules/tailwindcss/lib/util/colorNames.js
  var require_colorNames = __commonJS({
    "node_modules/tailwindcss/lib/util/colorNames.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _default = {
        aliceblue: [
          240,
          248,
          255
        ],
        antiquewhite: [
          250,
          235,
          215
        ],
        aqua: [
          0,
          255,
          255
        ],
        aquamarine: [
          127,
          255,
          212
        ],
        azure: [
          240,
          255,
          255
        ],
        beige: [
          245,
          245,
          220
        ],
        bisque: [
          255,
          228,
          196
        ],
        black: [
          0,
          0,
          0
        ],
        blanchedalmond: [
          255,
          235,
          205
        ],
        blue: [
          0,
          0,
          255
        ],
        blueviolet: [
          138,
          43,
          226
        ],
        brown: [
          165,
          42,
          42
        ],
        burlywood: [
          222,
          184,
          135
        ],
        cadetblue: [
          95,
          158,
          160
        ],
        chartreuse: [
          127,
          255,
          0
        ],
        chocolate: [
          210,
          105,
          30
        ],
        coral: [
          255,
          127,
          80
        ],
        cornflowerblue: [
          100,
          149,
          237
        ],
        cornsilk: [
          255,
          248,
          220
        ],
        crimson: [
          220,
          20,
          60
        ],
        cyan: [
          0,
          255,
          255
        ],
        darkblue: [
          0,
          0,
          139
        ],
        darkcyan: [
          0,
          139,
          139
        ],
        darkgoldenrod: [
          184,
          134,
          11
        ],
        darkgray: [
          169,
          169,
          169
        ],
        darkgreen: [
          0,
          100,
          0
        ],
        darkgrey: [
          169,
          169,
          169
        ],
        darkkhaki: [
          189,
          183,
          107
        ],
        darkmagenta: [
          139,
          0,
          139
        ],
        darkolivegreen: [
          85,
          107,
          47
        ],
        darkorange: [
          255,
          140,
          0
        ],
        darkorchid: [
          153,
          50,
          204
        ],
        darkred: [
          139,
          0,
          0
        ],
        darksalmon: [
          233,
          150,
          122
        ],
        darkseagreen: [
          143,
          188,
          143
        ],
        darkslateblue: [
          72,
          61,
          139
        ],
        darkslategray: [
          47,
          79,
          79
        ],
        darkslategrey: [
          47,
          79,
          79
        ],
        darkturquoise: [
          0,
          206,
          209
        ],
        darkviolet: [
          148,
          0,
          211
        ],
        deeppink: [
          255,
          20,
          147
        ],
        deepskyblue: [
          0,
          191,
          255
        ],
        dimgray: [
          105,
          105,
          105
        ],
        dimgrey: [
          105,
          105,
          105
        ],
        dodgerblue: [
          30,
          144,
          255
        ],
        firebrick: [
          178,
          34,
          34
        ],
        floralwhite: [
          255,
          250,
          240
        ],
        forestgreen: [
          34,
          139,
          34
        ],
        fuchsia: [
          255,
          0,
          255
        ],
        gainsboro: [
          220,
          220,
          220
        ],
        ghostwhite: [
          248,
          248,
          255
        ],
        gold: [
          255,
          215,
          0
        ],
        goldenrod: [
          218,
          165,
          32
        ],
        gray: [
          128,
          128,
          128
        ],
        green: [
          0,
          128,
          0
        ],
        greenyellow: [
          173,
          255,
          47
        ],
        grey: [
          128,
          128,
          128
        ],
        honeydew: [
          240,
          255,
          240
        ],
        hotpink: [
          255,
          105,
          180
        ],
        indianred: [
          205,
          92,
          92
        ],
        indigo: [
          75,
          0,
          130
        ],
        ivory: [
          255,
          255,
          240
        ],
        khaki: [
          240,
          230,
          140
        ],
        lavender: [
          230,
          230,
          250
        ],
        lavenderblush: [
          255,
          240,
          245
        ],
        lawngreen: [
          124,
          252,
          0
        ],
        lemonchiffon: [
          255,
          250,
          205
        ],
        lightblue: [
          173,
          216,
          230
        ],
        lightcoral: [
          240,
          128,
          128
        ],
        lightcyan: [
          224,
          255,
          255
        ],
        lightgoldenrodyellow: [
          250,
          250,
          210
        ],
        lightgray: [
          211,
          211,
          211
        ],
        lightgreen: [
          144,
          238,
          144
        ],
        lightgrey: [
          211,
          211,
          211
        ],
        lightpink: [
          255,
          182,
          193
        ],
        lightsalmon: [
          255,
          160,
          122
        ],
        lightseagreen: [
          32,
          178,
          170
        ],
        lightskyblue: [
          135,
          206,
          250
        ],
        lightslategray: [
          119,
          136,
          153
        ],
        lightslategrey: [
          119,
          136,
          153
        ],
        lightsteelblue: [
          176,
          196,
          222
        ],
        lightyellow: [
          255,
          255,
          224
        ],
        lime: [
          0,
          255,
          0
        ],
        limegreen: [
          50,
          205,
          50
        ],
        linen: [
          250,
          240,
          230
        ],
        magenta: [
          255,
          0,
          255
        ],
        maroon: [
          128,
          0,
          0
        ],
        mediumaquamarine: [
          102,
          205,
          170
        ],
        mediumblue: [
          0,
          0,
          205
        ],
        mediumorchid: [
          186,
          85,
          211
        ],
        mediumpurple: [
          147,
          112,
          219
        ],
        mediumseagreen: [
          60,
          179,
          113
        ],
        mediumslateblue: [
          123,
          104,
          238
        ],
        mediumspringgreen: [
          0,
          250,
          154
        ],
        mediumturquoise: [
          72,
          209,
          204
        ],
        mediumvioletred: [
          199,
          21,
          133
        ],
        midnightblue: [
          25,
          25,
          112
        ],
        mintcream: [
          245,
          255,
          250
        ],
        mistyrose: [
          255,
          228,
          225
        ],
        moccasin: [
          255,
          228,
          181
        ],
        navajowhite: [
          255,
          222,
          173
        ],
        navy: [
          0,
          0,
          128
        ],
        oldlace: [
          253,
          245,
          230
        ],
        olive: [
          128,
          128,
          0
        ],
        olivedrab: [
          107,
          142,
          35
        ],
        orange: [
          255,
          165,
          0
        ],
        orangered: [
          255,
          69,
          0
        ],
        orchid: [
          218,
          112,
          214
        ],
        palegoldenrod: [
          238,
          232,
          170
        ],
        palegreen: [
          152,
          251,
          152
        ],
        paleturquoise: [
          175,
          238,
          238
        ],
        palevioletred: [
          219,
          112,
          147
        ],
        papayawhip: [
          255,
          239,
          213
        ],
        peachpuff: [
          255,
          218,
          185
        ],
        peru: [
          205,
          133,
          63
        ],
        pink: [
          255,
          192,
          203
        ],
        plum: [
          221,
          160,
          221
        ],
        powderblue: [
          176,
          224,
          230
        ],
        purple: [
          128,
          0,
          128
        ],
        rebeccapurple: [
          102,
          51,
          153
        ],
        red: [
          255,
          0,
          0
        ],
        rosybrown: [
          188,
          143,
          143
        ],
        royalblue: [
          65,
          105,
          225
        ],
        saddlebrown: [
          139,
          69,
          19
        ],
        salmon: [
          250,
          128,
          114
        ],
        sandybrown: [
          244,
          164,
          96
        ],
        seagreen: [
          46,
          139,
          87
        ],
        seashell: [
          255,
          245,
          238
        ],
        sienna: [
          160,
          82,
          45
        ],
        silver: [
          192,
          192,
          192
        ],
        skyblue: [
          135,
          206,
          235
        ],
        slateblue: [
          106,
          90,
          205
        ],
        slategray: [
          112,
          128,
          144
        ],
        slategrey: [
          112,
          128,
          144
        ],
        snow: [
          255,
          250,
          250
        ],
        springgreen: [
          0,
          255,
          127
        ],
        steelblue: [
          70,
          130,
          180
        ],
        tan: [
          210,
          180,
          140
        ],
        teal: [
          0,
          128,
          128
        ],
        thistle: [
          216,
          191,
          216
        ],
        tomato: [
          255,
          99,
          71
        ],
        turquoise: [
          64,
          224,
          208
        ],
        violet: [
          238,
          130,
          238
        ],
        wheat: [
          245,
          222,
          179
        ],
        white: [
          255,
          255,
          255
        ],
        whitesmoke: [
          245,
          245,
          245
        ],
        yellow: [
          255,
          255,
          0
        ],
        yellowgreen: [
          154,
          205,
          50
        ]
      };
    }
  });

  // node_modules/tailwindcss/lib/util/color.js
  var require_color = __commonJS({
    "node_modules/tailwindcss/lib/util/color.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        parseColor: function() {
          return parseColor;
        },
        formatColor: function() {
          return formatColor;
        }
      });
      var _colorNames = /* @__PURE__ */ _interop_require_default(require_colorNames());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var HEX = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
      var SHORT_HEX = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
      var VALUE = /(?:\d+|\d*\.\d+)%?/;
      var SEP = /(?:\s*,\s*|\s+)/;
      var ALPHA_SEP = /\s*[,/]\s*/;
      var CUSTOM_PROPERTY = /var\(--(?:[^ )]*?)\)/;
      var RGB = new RegExp(`^(rgba?)\\(\\s*(${VALUE.source}|${CUSTOM_PROPERTY.source})(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${ALPHA_SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?\\s*\\)$`);
      var HSL = new RegExp(`^(hsla?)\\(\\s*((?:${VALUE.source})(?:deg|rad|grad|turn)?|${CUSTOM_PROPERTY.source})(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${ALPHA_SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?\\s*\\)$`);
      function parseColor(value, { loose = false } = {}) {
        var _match_, _match__toString;
        if (typeof value !== "string") {
          return null;
        }
        value = value.trim();
        if (value === "transparent") {
          return {
            mode: "rgb",
            color: [
              "0",
              "0",
              "0"
            ],
            alpha: "0"
          };
        }
        if (value in _colorNames.default) {
          return {
            mode: "rgb",
            color: _colorNames.default[value].map((v) => v.toString())
          };
        }
        let hex = value.replace(SHORT_HEX, (_, r, g, b, a) => [
          "#",
          r,
          r,
          g,
          g,
          b,
          b,
          a ? a + a : ""
        ].join("")).match(HEX);
        if (hex !== null) {
          return {
            mode: "rgb",
            color: [
              parseInt(hex[1], 16),
              parseInt(hex[2], 16),
              parseInt(hex[3], 16)
            ].map((v) => v.toString()),
            alpha: hex[4] ? (parseInt(hex[4], 16) / 255).toString() : void 0
          };
        }
        var _value_match;
        let match = (_value_match = value.match(RGB)) !== null && _value_match !== void 0 ? _value_match : value.match(HSL);
        if (match === null) {
          return null;
        }
        let color = [
          match[2],
          match[3],
          match[4]
        ].filter(Boolean).map((v) => v.toString());
        if (color.length === 2 && color[0].startsWith("var(")) {
          return {
            mode: match[1],
            color: [
              color[0]
            ],
            alpha: color[1]
          };
        }
        if (!loose && color.length !== 3) {
          return null;
        }
        if (color.length < 3 && !color.some((part) => /^var\(.*?\)$/.test(part))) {
          return null;
        }
        return {
          mode: match[1],
          color,
          alpha: (_match_ = match[5]) === null || _match_ === void 0 ? void 0 : (_match__toString = _match_.toString) === null || _match__toString === void 0 ? void 0 : _match__toString.call(_match_)
        };
      }
      function formatColor({ mode, color, alpha }) {
        let hasAlpha = alpha !== void 0;
        if (mode === "rgba" || mode === "hsla") {
          return `${mode}(${color.join(", ")}${hasAlpha ? `, ${alpha}` : ""})`;
        }
        return `${mode}(${color.join(" ")}${hasAlpha ? ` / ${alpha}` : ""})`;
      }
    }
  });

  // node_modules/tailwindcss/lib/util/withAlphaVariable.js
  var require_withAlphaVariable = __commonJS({
    "node_modules/tailwindcss/lib/util/withAlphaVariable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        withAlphaValue: function() {
          return withAlphaValue;
        },
        default: function() {
          return withAlphaVariable;
        }
      });
      var _color = require_color();
      function withAlphaValue(color, alphaValue, defaultValue) {
        if (typeof color === "function") {
          return color({
            opacityValue: alphaValue
          });
        }
        let parsed = (0, _color.parseColor)(color, {
          loose: true
        });
        if (parsed === null) {
          return defaultValue;
        }
        return (0, _color.formatColor)({
          ...parsed,
          alpha: alphaValue
        });
      }
      function withAlphaVariable({ color, property, variable }) {
        let properties = [].concat(property);
        if (typeof color === "function") {
          return {
            [variable]: "1",
            ...Object.fromEntries(properties.map((p) => {
              return [
                p,
                color({
                  opacityVariable: variable,
                  opacityValue: `var(${variable})`
                })
              ];
            }))
          };
        }
        const parsed = (0, _color.parseColor)(color);
        if (parsed === null) {
          return Object.fromEntries(properties.map((p) => [
            p,
            color
          ]));
        }
        if (parsed.alpha !== void 0) {
          return Object.fromEntries(properties.map((p) => [
            p,
            color
          ]));
        }
        return {
          [variable]: "1",
          ...Object.fromEntries(properties.map((p) => {
            return [
              p,
              (0, _color.formatColor)({
                ...parsed,
                alpha: `var(${variable})`
              })
            ];
          }))
        };
      }
    }
  });

  // node_modules/tailwindcss/lib/util/splitAtTopLevelOnly.js
  var require_splitAtTopLevelOnly = __commonJS({
    "node_modules/tailwindcss/lib/util/splitAtTopLevelOnly.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "splitAtTopLevelOnly", {
        enumerable: true,
        get: function() {
          return splitAtTopLevelOnly;
        }
      });
      function splitAtTopLevelOnly(input, separator) {
        let stack = [];
        let parts = [];
        let lastPos = 0;
        let isEscaped = false;
        for (let idx = 0; idx < input.length; idx++) {
          let char = input[idx];
          if (stack.length === 0 && char === separator[0] && !isEscaped) {
            if (separator.length === 1 || input.slice(idx, idx + separator.length) === separator) {
              parts.push(input.slice(lastPos, idx));
              lastPos = idx + separator.length;
            }
          }
          if (isEscaped) {
            isEscaped = false;
          } else if (char === "\\") {
            isEscaped = true;
          }
          if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
          } else if (char === ")" && stack[stack.length - 1] === "(" || char === "]" && stack[stack.length - 1] === "[" || char === "}" && stack[stack.length - 1] === "{") {
            stack.pop();
          }
        }
        parts.push(input.slice(lastPos));
        return parts;
      }
    }
  });

  // node_modules/tailwindcss/lib/util/parseBoxShadowValue.js
  var require_parseBoxShadowValue = __commonJS({
    "node_modules/tailwindcss/lib/util/parseBoxShadowValue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        parseBoxShadowValue: function() {
          return parseBoxShadowValue;
        },
        formatBoxShadowValue: function() {
          return formatBoxShadowValue;
        }
      });
      var _splitAtTopLevelOnly = require_splitAtTopLevelOnly();
      var KEYWORDS = /* @__PURE__ */ new Set([
        "inset",
        "inherit",
        "initial",
        "revert",
        "unset"
      ]);
      var SPACE = /\ +(?![^(]*\))/g;
      var LENGTH = /^-?(\d+|\.\d+)(.*?)$/g;
      function parseBoxShadowValue(input) {
        let shadows = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(input, ",");
        return shadows.map((shadow) => {
          let value = shadow.trim();
          let result = {
            raw: value
          };
          let parts = value.split(SPACE);
          let seen = /* @__PURE__ */ new Set();
          for (let part of parts) {
            LENGTH.lastIndex = 0;
            if (!seen.has("KEYWORD") && KEYWORDS.has(part)) {
              result.keyword = part;
              seen.add("KEYWORD");
            } else if (LENGTH.test(part)) {
              if (!seen.has("X")) {
                result.x = part;
                seen.add("X");
              } else if (!seen.has("Y")) {
                result.y = part;
                seen.add("Y");
              } else if (!seen.has("BLUR")) {
                result.blur = part;
                seen.add("BLUR");
              } else if (!seen.has("SPREAD")) {
                result.spread = part;
                seen.add("SPREAD");
              }
            } else {
              if (!result.color) {
                result.color = part;
              } else {
                if (!result.unknown)
                  result.unknown = [];
                result.unknown.push(part);
              }
            }
          }
          result.valid = result.x !== void 0 && result.y !== void 0;
          return result;
        });
      }
      function formatBoxShadowValue(shadows) {
        return shadows.map((shadow) => {
          if (!shadow.valid) {
            return shadow.raw;
          }
          return [
            shadow.keyword,
            shadow.x,
            shadow.y,
            shadow.blur,
            shadow.spread,
            shadow.color
          ].filter(Boolean).join(" ");
        }).join(", ");
      }
    }
  });

  // node_modules/tailwindcss/lib/util/dataTypes.js
  var require_dataTypes = __commonJS({
    "node_modules/tailwindcss/lib/util/dataTypes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        normalize: function() {
          return normalize;
        },
        url: function() {
          return url;
        },
        number: function() {
          return number;
        },
        percentage: function() {
          return percentage;
        },
        length: function() {
          return length;
        },
        lineWidth: function() {
          return lineWidth;
        },
        shadow: function() {
          return shadow;
        },
        color: function() {
          return color;
        },
        image: function() {
          return image;
        },
        gradient: function() {
          return gradient;
        },
        position: function() {
          return position;
        },
        familyName: function() {
          return familyName;
        },
        genericName: function() {
          return genericName;
        },
        absoluteSize: function() {
          return absoluteSize;
        },
        relativeSize: function() {
          return relativeSize;
        }
      });
      var _color = require_color();
      var _parseBoxShadowValue = require_parseBoxShadowValue();
      var _splitAtTopLevelOnly = require_splitAtTopLevelOnly();
      var cssFunctions = [
        "min",
        "max",
        "clamp",
        "calc"
      ];
      function isCSSFunction(value) {
        return cssFunctions.some((fn) => new RegExp(`^${fn}\\(.*\\)`).test(value));
      }
      var placeholder = "--tw-placeholder";
      var placeholderRe = new RegExp(placeholder, "g");
      function normalize(value, isRoot2 = true) {
        if (value.startsWith("--")) {
          return `var(${value})`;
        }
        if (value.includes("url(")) {
          return value.split(/(url\(.*?\))/g).filter(Boolean).map((part) => {
            if (/^url\(.*?\)$/.test(part)) {
              return part;
            }
            return normalize(part, false);
          }).join("");
        }
        value = value.replace(/([^\\])_+/g, (fullMatch, characterBefore) => characterBefore + " ".repeat(fullMatch.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_");
        if (isRoot2) {
          value = value.trim();
        }
        value = normalizeMathOperatorSpacing(value);
        return value;
      }
      function normalizeMathOperatorSpacing(value) {
        return value.replace(/(calc|min|max|clamp)\(.+\)/g, (match) => {
          let vars = [];
          return match.replace(/var\((--.+?)[,)]/g, (match2, g1) => {
            vars.push(g1);
            return match2.replace(g1, placeholder);
          }).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ").replace(placeholderRe, () => vars.shift());
        });
      }
      function url(value) {
        return value.startsWith("url(");
      }
      function number(value) {
        return !isNaN(Number(value)) || isCSSFunction(value);
      }
      function percentage(value) {
        return value.endsWith("%") && number(value.slice(0, -1)) || isCSSFunction(value);
      }
      var lengthUnits = [
        "cm",
        "mm",
        "Q",
        "in",
        "pc",
        "pt",
        "px",
        "em",
        "ex",
        "ch",
        "rem",
        "lh",
        "rlh",
        "vw",
        "vh",
        "vmin",
        "vmax",
        "vb",
        "vi",
        "svw",
        "svh",
        "lvw",
        "lvh",
        "dvw",
        "dvh",
        "cqw",
        "cqh",
        "cqi",
        "cqb",
        "cqmin",
        "cqmax"
      ];
      var lengthUnitsPattern = `(?:${lengthUnits.join("|")})`;
      function length(value) {
        return value === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${lengthUnitsPattern}$`).test(value) || isCSSFunction(value);
      }
      var lineWidths = /* @__PURE__ */ new Set([
        "thin",
        "medium",
        "thick"
      ]);
      function lineWidth(value) {
        return lineWidths.has(value);
      }
      function shadow(value) {
        let parsedShadows = (0, _parseBoxShadowValue.parseBoxShadowValue)(normalize(value));
        for (let parsedShadow of parsedShadows) {
          if (!parsedShadow.valid) {
            return false;
          }
        }
        return true;
      }
      function color(value) {
        let colors = 0;
        let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, "_").every((part) => {
          part = normalize(part);
          if (part.startsWith("var("))
            return true;
          if ((0, _color.parseColor)(part, {
            loose: true
          }) !== null)
            return colors++, true;
          return false;
        });
        if (!result)
          return false;
        return colors > 0;
      }
      function image(value) {
        let images = 0;
        let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, ",").every((part) => {
          part = normalize(part);
          if (part.startsWith("var("))
            return true;
          if (url(part) || gradient(part) || [
            "element(",
            "image(",
            "cross-fade(",
            "image-set("
          ].some((fn) => part.startsWith(fn))) {
            images++;
            return true;
          }
          return false;
        });
        if (!result)
          return false;
        return images > 0;
      }
      var gradientTypes = /* @__PURE__ */ new Set([
        "conic-gradient",
        "linear-gradient",
        "radial-gradient",
        "repeating-conic-gradient",
        "repeating-linear-gradient",
        "repeating-radial-gradient"
      ]);
      function gradient(value) {
        value = normalize(value);
        for (let type of gradientTypes) {
          if (value.startsWith(`${type}(`)) {
            return true;
          }
        }
        return false;
      }
      var validPositions = /* @__PURE__ */ new Set([
        "center",
        "top",
        "right",
        "bottom",
        "left"
      ]);
      function position(value) {
        let positions = 0;
        let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, "_").every((part) => {
          part = normalize(part);
          if (part.startsWith("var("))
            return true;
          if (validPositions.has(part) || length(part) || percentage(part)) {
            positions++;
            return true;
          }
          return false;
        });
        if (!result)
          return false;
        return positions > 0;
      }
      function familyName(value) {
        let fonts = 0;
        let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, ",").every((part) => {
          part = normalize(part);
          if (part.startsWith("var("))
            return true;
          if (part.includes(" ")) {
            if (!/(['"])([^"']+)\1/g.test(part)) {
              return false;
            }
          }
          if (/^\d/g.test(part)) {
            return false;
          }
          fonts++;
          return true;
        });
        if (!result)
          return false;
        return fonts > 0;
      }
      var genericNames = /* @__PURE__ */ new Set([
        "serif",
        "sans-serif",
        "monospace",
        "cursive",
        "fantasy",
        "system-ui",
        "ui-serif",
        "ui-sans-serif",
        "ui-monospace",
        "ui-rounded",
        "math",
        "emoji",
        "fangsong"
      ]);
      function genericName(value) {
        return genericNames.has(value);
      }
      var absoluteSizes = /* @__PURE__ */ new Set([
        "xx-small",
        "x-small",
        "small",
        "medium",
        "large",
        "x-large",
        "x-large",
        "xxx-large"
      ]);
      function absoluteSize(value) {
        return absoluteSizes.has(value);
      }
      var relativeSizes = /* @__PURE__ */ new Set([
        "larger",
        "smaller"
      ]);
      function relativeSize(value) {
        return relativeSizes.has(value);
      }
    }
  });

  // node_modules/tailwindcss/lib/util/validateFormalSyntax.js
  var require_validateFormalSyntax = __commonJS({
    "node_modules/tailwindcss/lib/util/validateFormalSyntax.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "backgroundSize", {
        enumerable: true,
        get: function() {
          return backgroundSize;
        }
      });
      var _dataTypes = require_dataTypes();
      var _splitAtTopLevelOnly = require_splitAtTopLevelOnly();
      function backgroundSize(value) {
        let keywordValues = [
          "cover",
          "contain"
        ];
        return (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, ",").every((part) => {
          let sizes = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(part, "_").filter(Boolean);
          if (sizes.length === 1 && keywordValues.includes(sizes[0]))
            return true;
          if (sizes.length !== 1 && sizes.length !== 2)
            return false;
          return sizes.every((size2) => (0, _dataTypes.length)(size2) || (0, _dataTypes.percentage)(size2) || size2 === "auto");
        });
      }
    }
  });

  // node_modules/tailwindcss/lib/util/pluginUtils.js
  var require_pluginUtils = __commonJS({
    "node_modules/tailwindcss/lib/util/pluginUtils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        updateAllClasses: function() {
          return updateAllClasses;
        },
        asValue: function() {
          return asValue;
        },
        parseColorFormat: function() {
          return parseColorFormat;
        },
        asColor: function() {
          return asColor;
        },
        asLookupValue: function() {
          return asLookupValue;
        },
        typeMap: function() {
          return typeMap;
        },
        coerceValue: function() {
          return coerceValue;
        },
        getMatchingTypes: function() {
          return getMatchingTypes;
        }
      });
      var _escapeCommas = /* @__PURE__ */ _interop_require_default(require_escapeCommas());
      var _withAlphaVariable = require_withAlphaVariable();
      var _dataTypes = require_dataTypes();
      var _negateValue = /* @__PURE__ */ _interop_require_default(require_negateValue());
      var _validateFormalSyntax = require_validateFormalSyntax();
      var _featureFlags = require_featureFlags();
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function updateAllClasses(selectors, updateClass) {
        selectors.walkClasses((sel2) => {
          sel2.value = updateClass(sel2.value);
          if (sel2.raws && sel2.raws.value) {
            sel2.raws.value = (0, _escapeCommas.default)(sel2.raws.value);
          }
        });
      }
      function resolveArbitraryValue(modifier, validate) {
        if (!isArbitraryValue(modifier)) {
          return void 0;
        }
        let value = modifier.slice(1, -1);
        if (!validate(value)) {
          return void 0;
        }
        return (0, _dataTypes.normalize)(value);
      }
      function asNegativeValue(modifier, lookup = {}, validate) {
        let positiveValue = lookup[modifier];
        if (positiveValue !== void 0) {
          return (0, _negateValue.default)(positiveValue);
        }
        if (isArbitraryValue(modifier)) {
          let resolved = resolveArbitraryValue(modifier, validate);
          if (resolved === void 0) {
            return void 0;
          }
          return (0, _negateValue.default)(resolved);
        }
      }
      function asValue(modifier, options = {}, { validate = () => true } = {}) {
        var _options_values;
        let value = (_options_values = options.values) === null || _options_values === void 0 ? void 0 : _options_values[modifier];
        if (value !== void 0) {
          return value;
        }
        if (options.supportsNegativeValues && modifier.startsWith("-")) {
          return asNegativeValue(modifier.slice(1), options.values, validate);
        }
        return resolveArbitraryValue(modifier, validate);
      }
      function isArbitraryValue(input) {
        return input.startsWith("[") && input.endsWith("]");
      }
      function splitUtilityModifier(modifier) {
        let slashIdx = modifier.lastIndexOf("/");
        if (slashIdx === -1 || slashIdx === modifier.length - 1) {
          return [
            modifier,
            void 0
          ];
        }
        let arbitrary = isArbitraryValue(modifier);
        if (arbitrary && !modifier.includes("]/[")) {
          return [
            modifier,
            void 0
          ];
        }
        return [
          modifier.slice(0, slashIdx),
          modifier.slice(slashIdx + 1)
        ];
      }
      function parseColorFormat(value) {
        if (typeof value === "string" && value.includes("<alpha-value>")) {
          let oldValue = value;
          return ({ opacityValue = 1 }) => oldValue.replace("<alpha-value>", opacityValue);
        }
        return value;
      }
      function unwrapArbitraryModifier(modifier) {
        return (0, _dataTypes.normalize)(modifier.slice(1, -1));
      }
      function asColor(modifier, options = {}, { tailwindConfig: tailwindConfig2 = {} } = {}) {
        var _options_values;
        if (((_options_values = options.values) === null || _options_values === void 0 ? void 0 : _options_values[modifier]) !== void 0) {
          var _options_values1;
          return parseColorFormat((_options_values1 = options.values) === null || _options_values1 === void 0 ? void 0 : _options_values1[modifier]);
        }
        let [color, alpha] = splitUtilityModifier(modifier);
        if (alpha !== void 0) {
          var _options_values2, _tailwindConfig_theme, _tailwindConfig_theme_opacity;
          var _options_values_color;
          let normalizedColor = (_options_values_color = (_options_values2 = options.values) === null || _options_values2 === void 0 ? void 0 : _options_values2[color]) !== null && _options_values_color !== void 0 ? _options_values_color : isArbitraryValue(color) ? color.slice(1, -1) : void 0;
          if (normalizedColor === void 0) {
            return void 0;
          }
          normalizedColor = parseColorFormat(normalizedColor);
          if (isArbitraryValue(alpha)) {
            return (0, _withAlphaVariable.withAlphaValue)(normalizedColor, unwrapArbitraryModifier(alpha));
          }
          if (((_tailwindConfig_theme = tailwindConfig2.theme) === null || _tailwindConfig_theme === void 0 ? void 0 : (_tailwindConfig_theme_opacity = _tailwindConfig_theme.opacity) === null || _tailwindConfig_theme_opacity === void 0 ? void 0 : _tailwindConfig_theme_opacity[alpha]) === void 0) {
            return void 0;
          }
          return (0, _withAlphaVariable.withAlphaValue)(normalizedColor, tailwindConfig2.theme.opacity[alpha]);
        }
        return asValue(modifier, options, {
          validate: _dataTypes.color
        });
      }
      function asLookupValue(modifier, options = {}) {
        var _options_values;
        return (_options_values = options.values) === null || _options_values === void 0 ? void 0 : _options_values[modifier];
      }
      function guess(validate) {
        return (modifier, options) => {
          return asValue(modifier, options, {
            validate
          });
        };
      }
      var typeMap = {
        any: asValue,
        color: asColor,
        url: guess(_dataTypes.url),
        image: guess(_dataTypes.image),
        length: guess(_dataTypes.length),
        percentage: guess(_dataTypes.percentage),
        position: guess(_dataTypes.position),
        lookup: asLookupValue,
        "generic-name": guess(_dataTypes.genericName),
        "family-name": guess(_dataTypes.familyName),
        number: guess(_dataTypes.number),
        "line-width": guess(_dataTypes.lineWidth),
        "absolute-size": guess(_dataTypes.absoluteSize),
        "relative-size": guess(_dataTypes.relativeSize),
        shadow: guess(_dataTypes.shadow),
        size: guess(_validateFormalSyntax.backgroundSize)
      };
      var supportedTypes = Object.keys(typeMap);
      function splitAtFirst(input, delim) {
        let idx = input.indexOf(delim);
        if (idx === -1)
          return [
            void 0,
            input
          ];
        return [
          input.slice(0, idx),
          input.slice(idx + 1)
        ];
      }
      function coerceValue(types, modifier, options, tailwindConfig2) {
        if (options.values && modifier in options.values) {
          for (let { type } of types !== null && types !== void 0 ? types : []) {
            let result = typeMap[type](modifier, options, {
              tailwindConfig: tailwindConfig2
            });
            if (result === void 0) {
              continue;
            }
            return [
              result,
              type,
              null
            ];
          }
        }
        if (isArbitraryValue(modifier)) {
          let arbitraryValue = modifier.slice(1, -1);
          let [explicitType, value] = splitAtFirst(arbitraryValue, ":");
          if (!/^[\w-_]+$/g.test(explicitType)) {
            value = arbitraryValue;
          } else if (explicitType !== void 0 && !supportedTypes.includes(explicitType)) {
            return [];
          }
          if (value.length > 0 && supportedTypes.includes(explicitType)) {
            return [
              asValue(`[${value}]`, options),
              explicitType,
              null
            ];
          }
        }
        let matches2 = getMatchingTypes(types, modifier, options, tailwindConfig2);
        for (let match of matches2) {
          return match;
        }
        return [];
      }
      function* getMatchingTypes(types, rawModifier, options, tailwindConfig2) {
        let modifiersEnabled = (0, _featureFlags.flagEnabled)(tailwindConfig2, "generalizedModifiers");
        let [modifier, utilityModifier] = splitUtilityModifier(rawModifier);
        let canUseUtilityModifier = modifiersEnabled && options.modifiers != null && (options.modifiers === "any" || typeof options.modifiers === "object" && (utilityModifier && isArbitraryValue(utilityModifier) || utilityModifier in options.modifiers));
        if (!canUseUtilityModifier) {
          modifier = rawModifier;
          utilityModifier = void 0;
        }
        if (utilityModifier !== void 0 && modifier === "") {
          modifier = "DEFAULT";
        }
        if (utilityModifier !== void 0) {
          if (typeof options.modifiers === "object") {
            var _options_modifiers;
            var _options_modifiers_utilityModifier;
            let configValue = (_options_modifiers_utilityModifier = (_options_modifiers = options.modifiers) === null || _options_modifiers === void 0 ? void 0 : _options_modifiers[utilityModifier]) !== null && _options_modifiers_utilityModifier !== void 0 ? _options_modifiers_utilityModifier : null;
            if (configValue !== null) {
              utilityModifier = configValue;
            } else if (isArbitraryValue(utilityModifier)) {
              utilityModifier = unwrapArbitraryModifier(utilityModifier);
            }
          }
        }
        for (let { type } of types !== null && types !== void 0 ? types : []) {
          let result = typeMap[type](modifier, options, {
            tailwindConfig: tailwindConfig2
          });
          if (result === void 0) {
            continue;
          }
          yield [
            result,
            type,
            utilityModifier !== null && utilityModifier !== void 0 ? utilityModifier : null
          ];
        }
      }
    }
  });

  // node_modules/tailwindcss/lib/util/toColorValue.js
  var require_toColorValue = __commonJS({
    "node_modules/tailwindcss/lib/util/toColorValue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return toColorValue;
        }
      });
      function toColorValue(maybeFunction) {
        return typeof maybeFunction === "function" ? maybeFunction({}) : maybeFunction;
      }
    }
  });

  // node_modules/tailwindcss/lib/util/resolveConfig.js
  var require_resolveConfig = __commonJS({
    "node_modules/tailwindcss/lib/util/resolveConfig.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return resolveConfig2;
        }
      });
      var _negateValue = /* @__PURE__ */ _interop_require_default(require_negateValue());
      var _corePluginList = /* @__PURE__ */ _interop_require_default(require_corePluginList());
      var _configurePlugins = /* @__PURE__ */ _interop_require_default(require_configurePlugins());
      var _colors = /* @__PURE__ */ _interop_require_default(require_colors());
      var _defaults = require_defaults();
      var _toPath = require_toPath();
      var _normalizeConfig = require_normalizeConfig();
      var _isPlainObject = /* @__PURE__ */ _interop_require_default(require_isPlainObject());
      var _cloneDeep = require_cloneDeep();
      var _pluginUtils = require_pluginUtils();
      var _withAlphaVariable = require_withAlphaVariable();
      var _toColorValue = /* @__PURE__ */ _interop_require_default(require_toColorValue());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function isFunction(input) {
        return typeof input === "function";
      }
      function mergeWith(target, ...sources) {
        let customizer = sources.pop();
        for (let source of sources) {
          for (let k in source) {
            let merged = customizer(target[k], source[k]);
            if (merged === void 0) {
              if ((0, _isPlainObject.default)(target[k]) && (0, _isPlainObject.default)(source[k])) {
                target[k] = mergeWith({}, target[k], source[k], customizer);
              } else {
                target[k] = source[k];
              }
            } else {
              target[k] = merged;
            }
          }
        }
        return target;
      }
      var configUtils = {
        colors: _colors.default,
        negative(scale) {
          return Object.keys(scale).filter((key) => scale[key] !== "0").reduce((negativeScale, key) => {
            let negativeValue = (0, _negateValue.default)(scale[key]);
            if (negativeValue !== void 0) {
              negativeScale[`-${key}`] = negativeValue;
            }
            return negativeScale;
          }, {});
        },
        breakpoints(screens) {
          return Object.keys(screens).filter((key) => typeof screens[key] === "string").reduce((breakpoints, key) => ({
            ...breakpoints,
            [`screen-${key}`]: screens[key]
          }), {});
        }
      };
      function value(valueToResolve, ...args) {
        return isFunction(valueToResolve) ? valueToResolve(...args) : valueToResolve;
      }
      function collectExtends(items) {
        return items.reduce((merged, { extend: extend3 }) => {
          return mergeWith(merged, extend3, (mergedValue, extendValue) => {
            if (mergedValue === void 0) {
              return [
                extendValue
              ];
            }
            if (Array.isArray(mergedValue)) {
              return [
                extendValue,
                ...mergedValue
              ];
            }
            return [
              extendValue,
              mergedValue
            ];
          });
        }, {});
      }
      function mergeThemes(themes) {
        return {
          ...themes.reduce((merged, theme2) => (0, _defaults.defaults)(merged, theme2), {}),
          extend: collectExtends(themes)
        };
      }
      function mergeExtensionCustomizer(merged, value2) {
        if (Array.isArray(merged) && (0, _isPlainObject.default)(merged[0])) {
          return merged.concat(value2);
        }
        if (Array.isArray(value2) && (0, _isPlainObject.default)(value2[0]) && (0, _isPlainObject.default)(merged)) {
          return [
            merged,
            ...value2
          ];
        }
        if (Array.isArray(value2)) {
          return value2;
        }
        return void 0;
      }
      function mergeExtensions({ extend: extend3, ...theme2 }) {
        return mergeWith(theme2, extend3, (themeValue, extensions) => {
          if (!isFunction(themeValue) && !extensions.some(isFunction)) {
            return mergeWith({}, themeValue, ...extensions, mergeExtensionCustomizer);
          }
          return (resolveThemePath, utils) => mergeWith({}, ...[
            themeValue,
            ...extensions
          ].map((e) => value(e, resolveThemePath, utils)), mergeExtensionCustomizer);
        });
      }
      function* toPaths(key) {
        let path = (0, _toPath.toPath)(key);
        if (path.length === 0) {
          return;
        }
        yield path;
        if (Array.isArray(key)) {
          return;
        }
        let pattern = /^(.*?)\s*\/\s*([^/]+)$/;
        let matches2 = key.match(pattern);
        if (matches2 !== null) {
          let [, prefix2, alpha] = matches2;
          let newPath = (0, _toPath.toPath)(prefix2);
          newPath.alpha = alpha;
          yield newPath;
        }
      }
      function resolveFunctionKeys(object) {
        const resolvePath = (key, defaultValue) => {
          for (const path of toPaths(key)) {
            let index2 = 0;
            let val = object;
            while (val !== void 0 && val !== null && index2 < path.length) {
              val = val[path[index2++]];
              let shouldResolveAsFn = isFunction(val) && (path.alpha === void 0 || index2 <= path.length - 1);
              val = shouldResolveAsFn ? val(resolvePath, configUtils) : val;
            }
            if (val !== void 0) {
              if (path.alpha !== void 0) {
                let normalized = (0, _pluginUtils.parseColorFormat)(val);
                return (0, _withAlphaVariable.withAlphaValue)(normalized, path.alpha, (0, _toColorValue.default)(normalized));
              }
              if ((0, _isPlainObject.default)(val)) {
                return (0, _cloneDeep.cloneDeep)(val);
              }
              return val;
            }
          }
          return defaultValue;
        };
        Object.assign(resolvePath, {
          theme: resolvePath,
          ...configUtils
        });
        return Object.keys(object).reduce((resolved, key) => {
          resolved[key] = isFunction(object[key]) ? object[key](resolvePath, configUtils) : object[key];
          return resolved;
        }, {});
      }
      function extractPluginConfigs(configs) {
        let allConfigs = [];
        configs.forEach((config) => {
          allConfigs = [
            ...allConfigs,
            config
          ];
          var _config_plugins;
          const plugins = (_config_plugins = config === null || config === void 0 ? void 0 : config.plugins) !== null && _config_plugins !== void 0 ? _config_plugins : [];
          if (plugins.length === 0) {
            return;
          }
          plugins.forEach((plugin2) => {
            if (plugin2.__isOptionsFunction) {
              plugin2 = plugin2();
            }
            var _plugin_config;
            allConfigs = [
              ...allConfigs,
              ...extractPluginConfigs([
                (_plugin_config = plugin2 === null || plugin2 === void 0 ? void 0 : plugin2.config) !== null && _plugin_config !== void 0 ? _plugin_config : {}
              ])
            ];
          });
        });
        return allConfigs;
      }
      function resolveCorePlugins(corePluginConfigs) {
        const result = [
          ...corePluginConfigs
        ].reduceRight((resolved, corePluginConfig) => {
          if (isFunction(corePluginConfig)) {
            return corePluginConfig({
              corePlugins: resolved
            });
          }
          return (0, _configurePlugins.default)(corePluginConfig, resolved);
        }, _corePluginList.default);
        return result;
      }
      function resolvePluginLists(pluginLists) {
        const result = [
          ...pluginLists
        ].reduceRight((resolved, pluginList) => {
          return [
            ...resolved,
            ...pluginList
          ];
        }, []);
        return result;
      }
      function resolveConfig2(configs) {
        let allConfigs = [
          ...extractPluginConfigs(configs),
          {
            prefix: "",
            important: false,
            separator: ":"
          }
        ];
        var _t_theme, _c_plugins;
        return (0, _normalizeConfig.normalizeConfig)((0, _defaults.defaults)({
          theme: resolveFunctionKeys(mergeExtensions(mergeThemes(allConfigs.map((t) => {
            return (_t_theme = t === null || t === void 0 ? void 0 : t.theme) !== null && _t_theme !== void 0 ? _t_theme : {};
          })))),
          corePlugins: resolveCorePlugins(allConfigs.map((c) => c.corePlugins)),
          plugins: resolvePluginLists(configs.map((c) => {
            return (_c_plugins = c === null || c === void 0 ? void 0 : c.plugins) !== null && _c_plugins !== void 0 ? _c_plugins : [];
          }))
        }, ...allConfigs));
      }
    }
  });

  // node_modules/tailwindcss/stubs/config.full.js
  var require_config_full = __commonJS({
    "node_modules/tailwindcss/stubs/config.full.js"(exports, module) {
      module.exports = {
        content: [],
        presets: [],
        darkMode: "media",
        theme: {
          accentColor: ({ theme: theme2 }) => ({
            ...theme2("colors"),
            auto: "auto"
          }),
          animation: {
            none: "none",
            spin: "spin 1s linear infinite",
            ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
            pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            bounce: "bounce 1s infinite"
          },
          aria: {
            busy: 'busy="true"',
            checked: 'checked="true"',
            disabled: 'disabled="true"',
            expanded: 'expanded="true"',
            hidden: 'hidden="true"',
            pressed: 'pressed="true"',
            readonly: 'readonly="true"',
            required: 'required="true"',
            selected: 'selected="true"'
          },
          aspectRatio: {
            auto: "auto",
            square: "1 / 1",
            video: "16 / 9"
          },
          backdropBlur: ({ theme: theme2 }) => theme2("blur"),
          backdropBrightness: ({ theme: theme2 }) => theme2("brightness"),
          backdropContrast: ({ theme: theme2 }) => theme2("contrast"),
          backdropGrayscale: ({ theme: theme2 }) => theme2("grayscale"),
          backdropHueRotate: ({ theme: theme2 }) => theme2("hueRotate"),
          backdropInvert: ({ theme: theme2 }) => theme2("invert"),
          backdropOpacity: ({ theme: theme2 }) => theme2("opacity"),
          backdropSaturate: ({ theme: theme2 }) => theme2("saturate"),
          backdropSepia: ({ theme: theme2 }) => theme2("sepia"),
          backgroundColor: ({ theme: theme2 }) => theme2("colors"),
          backgroundImage: {
            none: "none",
            "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
            "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
            "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
            "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
            "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
            "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
            "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
            "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
          },
          backgroundOpacity: ({ theme: theme2 }) => theme2("opacity"),
          backgroundPosition: {
            bottom: "bottom",
            center: "center",
            left: "left",
            "left-bottom": "left bottom",
            "left-top": "left top",
            right: "right",
            "right-bottom": "right bottom",
            "right-top": "right top",
            top: "top"
          },
          backgroundSize: {
            auto: "auto",
            cover: "cover",
            contain: "contain"
          },
          blur: {
            0: "0",
            none: "0",
            sm: "4px",
            DEFAULT: "8px",
            md: "12px",
            lg: "16px",
            xl: "24px",
            "2xl": "40px",
            "3xl": "64px"
          },
          borderColor: ({ theme: theme2 }) => ({
            ...theme2("colors"),
            DEFAULT: theme2("colors.gray.200", "currentColor")
          }),
          borderOpacity: ({ theme: theme2 }) => theme2("opacity"),
          borderRadius: {
            none: "0px",
            sm: "0.125rem",
            DEFAULT: "0.25rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            "3xl": "1.5rem",
            full: "9999px"
          },
          borderSpacing: ({ theme: theme2 }) => ({
            ...theme2("spacing")
          }),
          borderWidth: {
            DEFAULT: "1px",
            0: "0px",
            2: "2px",
            4: "4px",
            8: "8px"
          },
          boxShadow: {
            sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
            none: "none"
          },
          boxShadowColor: ({ theme: theme2 }) => theme2("colors"),
          brightness: {
            0: "0",
            50: ".5",
            75: ".75",
            90: ".9",
            95: ".95",
            100: "1",
            105: "1.05",
            110: "1.1",
            125: "1.25",
            150: "1.5",
            200: "2"
          },
          caretColor: ({ theme: theme2 }) => theme2("colors"),
          colors: ({ colors }) => ({
            inherit: colors.inherit,
            current: colors.current,
            transparent: colors.transparent,
            black: colors.black,
            white: colors.white,
            slate: colors.slate,
            gray: colors.gray,
            zinc: colors.zinc,
            neutral: colors.neutral,
            stone: colors.stone,
            red: colors.red,
            orange: colors.orange,
            amber: colors.amber,
            yellow: colors.yellow,
            lime: colors.lime,
            green: colors.green,
            emerald: colors.emerald,
            teal: colors.teal,
            cyan: colors.cyan,
            sky: colors.sky,
            blue: colors.blue,
            indigo: colors.indigo,
            violet: colors.violet,
            purple: colors.purple,
            fuchsia: colors.fuchsia,
            pink: colors.pink,
            rose: colors.rose
          }),
          columns: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            "3xs": "16rem",
            "2xs": "18rem",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem"
          },
          container: {},
          content: {
            none: "none"
          },
          contrast: {
            0: "0",
            50: ".5",
            75: ".75",
            100: "1",
            125: "1.25",
            150: "1.5",
            200: "2"
          },
          cursor: {
            auto: "auto",
            default: "default",
            pointer: "pointer",
            wait: "wait",
            text: "text",
            move: "move",
            help: "help",
            "not-allowed": "not-allowed",
            none: "none",
            "context-menu": "context-menu",
            progress: "progress",
            cell: "cell",
            crosshair: "crosshair",
            "vertical-text": "vertical-text",
            alias: "alias",
            copy: "copy",
            "no-drop": "no-drop",
            grab: "grab",
            grabbing: "grabbing",
            "all-scroll": "all-scroll",
            "col-resize": "col-resize",
            "row-resize": "row-resize",
            "n-resize": "n-resize",
            "e-resize": "e-resize",
            "s-resize": "s-resize",
            "w-resize": "w-resize",
            "ne-resize": "ne-resize",
            "nw-resize": "nw-resize",
            "se-resize": "se-resize",
            "sw-resize": "sw-resize",
            "ew-resize": "ew-resize",
            "ns-resize": "ns-resize",
            "nesw-resize": "nesw-resize",
            "nwse-resize": "nwse-resize",
            "zoom-in": "zoom-in",
            "zoom-out": "zoom-out"
          },
          divideColor: ({ theme: theme2 }) => theme2("borderColor"),
          divideOpacity: ({ theme: theme2 }) => theme2("borderOpacity"),
          divideWidth: ({ theme: theme2 }) => theme2("borderWidth"),
          dropShadow: {
            sm: "0 1px 1px rgb(0 0 0 / 0.05)",
            DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
            md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
            lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
            xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
            "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
            none: "0 0 #0000"
          },
          fill: ({ theme: theme2 }) => ({
            none: "none",
            ...theme2("colors")
          }),
          flex: {
            1: "1 1 0%",
            auto: "1 1 auto",
            initial: "0 1 auto",
            none: "none"
          },
          flexBasis: ({ theme: theme2 }) => ({
            auto: "auto",
            ...theme2("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%"
          }),
          flexGrow: {
            0: "0",
            DEFAULT: "1"
          },
          flexShrink: {
            0: "0",
            DEFAULT: "1"
          },
          fontFamily: {
            sans: [
              "ui-sans-serif",
              "system-ui",
              "-apple-system",
              "BlinkMacSystemFont",
              '"Segoe UI"',
              "Roboto",
              '"Helvetica Neue"',
              "Arial",
              '"Noto Sans"',
              "sans-serif",
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
              '"Noto Color Emoji"'
            ],
            serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
            mono: [
              "ui-monospace",
              "SFMono-Regular",
              "Menlo",
              "Monaco",
              "Consolas",
              '"Liberation Mono"',
              '"Courier New"',
              "monospace"
            ]
          },
          fontSize: {
            xs: ["0.75rem", { lineHeight: "1rem" }],
            sm: ["0.875rem", { lineHeight: "1.25rem" }],
            base: ["1rem", { lineHeight: "1.5rem" }],
            lg: ["1.125rem", { lineHeight: "1.75rem" }],
            xl: ["1.25rem", { lineHeight: "1.75rem" }],
            "2xl": ["1.5rem", { lineHeight: "2rem" }],
            "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
            "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
            "5xl": ["3rem", { lineHeight: "1" }],
            "6xl": ["3.75rem", { lineHeight: "1" }],
            "7xl": ["4.5rem", { lineHeight: "1" }],
            "8xl": ["6rem", { lineHeight: "1" }],
            "9xl": ["8rem", { lineHeight: "1" }]
          },
          fontWeight: {
            thin: "100",
            extralight: "200",
            light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
            black: "900"
          },
          gap: ({ theme: theme2 }) => theme2("spacing"),
          gradientColorStops: ({ theme: theme2 }) => theme2("colors"),
          gradientColorStopPositions: {
            "0%": "0%",
            "5%": "5%",
            "10%": "10%",
            "15%": "15%",
            "20%": "20%",
            "25%": "25%",
            "30%": "30%",
            "35%": "35%",
            "40%": "40%",
            "45%": "45%",
            "50%": "50%",
            "55%": "55%",
            "60%": "60%",
            "65%": "65%",
            "70%": "70%",
            "75%": "75%",
            "80%": "80%",
            "85%": "85%",
            "90%": "90%",
            "95%": "95%",
            "100%": "100%"
          },
          grayscale: {
            0: "0",
            DEFAULT: "100%"
          },
          gridAutoColumns: {
            auto: "auto",
            min: "min-content",
            max: "max-content",
            fr: "minmax(0, 1fr)"
          },
          gridAutoRows: {
            auto: "auto",
            min: "min-content",
            max: "max-content",
            fr: "minmax(0, 1fr)"
          },
          gridColumn: {
            auto: "auto",
            "span-1": "span 1 / span 1",
            "span-2": "span 2 / span 2",
            "span-3": "span 3 / span 3",
            "span-4": "span 4 / span 4",
            "span-5": "span 5 / span 5",
            "span-6": "span 6 / span 6",
            "span-7": "span 7 / span 7",
            "span-8": "span 8 / span 8",
            "span-9": "span 9 / span 9",
            "span-10": "span 10 / span 10",
            "span-11": "span 11 / span 11",
            "span-12": "span 12 / span 12",
            "span-full": "1 / -1"
          },
          gridColumnEnd: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13"
          },
          gridColumnStart: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13"
          },
          gridRow: {
            auto: "auto",
            "span-1": "span 1 / span 1",
            "span-2": "span 2 / span 2",
            "span-3": "span 3 / span 3",
            "span-4": "span 4 / span 4",
            "span-5": "span 5 / span 5",
            "span-6": "span 6 / span 6",
            "span-full": "1 / -1"
          },
          gridRowEnd: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7"
          },
          gridRowStart: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7"
          },
          gridTemplateColumns: {
            none: "none",
            1: "repeat(1, minmax(0, 1fr))",
            2: "repeat(2, minmax(0, 1fr))",
            3: "repeat(3, minmax(0, 1fr))",
            4: "repeat(4, minmax(0, 1fr))",
            5: "repeat(5, minmax(0, 1fr))",
            6: "repeat(6, minmax(0, 1fr))",
            7: "repeat(7, minmax(0, 1fr))",
            8: "repeat(8, minmax(0, 1fr))",
            9: "repeat(9, minmax(0, 1fr))",
            10: "repeat(10, minmax(0, 1fr))",
            11: "repeat(11, minmax(0, 1fr))",
            12: "repeat(12, minmax(0, 1fr))"
          },
          gridTemplateRows: {
            none: "none",
            1: "repeat(1, minmax(0, 1fr))",
            2: "repeat(2, minmax(0, 1fr))",
            3: "repeat(3, minmax(0, 1fr))",
            4: "repeat(4, minmax(0, 1fr))",
            5: "repeat(5, minmax(0, 1fr))",
            6: "repeat(6, minmax(0, 1fr))"
          },
          height: ({ theme: theme2 }) => ({
            auto: "auto",
            ...theme2("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            full: "100%",
            screen: "100vh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
          }),
          hueRotate: {
            0: "0deg",
            15: "15deg",
            30: "30deg",
            60: "60deg",
            90: "90deg",
            180: "180deg"
          },
          inset: ({ theme: theme2 }) => ({
            auto: "auto",
            ...theme2("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%"
          }),
          invert: {
            0: "0",
            DEFAULT: "100%"
          },
          keyframes: {
            spin: {
              to: {
                transform: "rotate(360deg)"
              }
            },
            ping: {
              "75%, 100%": {
                transform: "scale(2)",
                opacity: "0"
              }
            },
            pulse: {
              "50%": {
                opacity: ".5"
              }
            },
            bounce: {
              "0%, 100%": {
                transform: "translateY(-25%)",
                animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
              },
              "50%": {
                transform: "none",
                animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
              }
            }
          },
          letterSpacing: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0em",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em"
          },
          lineHeight: {
            none: "1",
            tight: "1.25",
            snug: "1.375",
            normal: "1.5",
            relaxed: "1.625",
            loose: "2",
            3: ".75rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem"
          },
          listStyleType: {
            none: "none",
            disc: "disc",
            decimal: "decimal"
          },
          listStyleImage: {
            none: "none"
          },
          margin: ({ theme: theme2 }) => ({
            auto: "auto",
            ...theme2("spacing")
          }),
          lineClamp: {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6"
          },
          maxHeight: ({ theme: theme2 }) => ({
            ...theme2("spacing"),
            none: "none",
            full: "100%",
            screen: "100vh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
          }),
          maxWidth: ({ theme: theme2, breakpoints }) => ({
            none: "none",
            0: "0rem",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            prose: "65ch",
            ...breakpoints(theme2("screens"))
          }),
          minHeight: {
            0: "0px",
            full: "100%",
            screen: "100vh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
          },
          minWidth: {
            0: "0px",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
          },
          objectPosition: {
            bottom: "bottom",
            center: "center",
            left: "left",
            "left-bottom": "left bottom",
            "left-top": "left top",
            right: "right",
            "right-bottom": "right bottom",
            "right-top": "right top",
            top: "top"
          },
          opacity: {
            0: "0",
            5: "0.05",
            10: "0.1",
            20: "0.2",
            25: "0.25",
            30: "0.3",
            40: "0.4",
            50: "0.5",
            60: "0.6",
            70: "0.7",
            75: "0.75",
            80: "0.8",
            90: "0.9",
            95: "0.95",
            100: "1"
          },
          order: {
            first: "-9999",
            last: "9999",
            none: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12"
          },
          outlineColor: ({ theme: theme2 }) => theme2("colors"),
          outlineOffset: {
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
          },
          outlineWidth: {
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
          },
          padding: ({ theme: theme2 }) => theme2("spacing"),
          placeholderColor: ({ theme: theme2 }) => theme2("colors"),
          placeholderOpacity: ({ theme: theme2 }) => theme2("opacity"),
          ringColor: ({ theme: theme2 }) => ({
            DEFAULT: theme2("colors.blue.500", "#3b82f6"),
            ...theme2("colors")
          }),
          ringOffsetColor: ({ theme: theme2 }) => theme2("colors"),
          ringOffsetWidth: {
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
          },
          ringOpacity: ({ theme: theme2 }) => ({
            DEFAULT: "0.5",
            ...theme2("opacity")
          }),
          ringWidth: {
            DEFAULT: "3px",
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
          },
          rotate: {
            0: "0deg",
            1: "1deg",
            2: "2deg",
            3: "3deg",
            6: "6deg",
            12: "12deg",
            45: "45deg",
            90: "90deg",
            180: "180deg"
          },
          saturate: {
            0: "0",
            50: ".5",
            100: "1",
            150: "1.5",
            200: "2"
          },
          scale: {
            0: "0",
            50: ".5",
            75: ".75",
            90: ".9",
            95: ".95",
            100: "1",
            105: "1.05",
            110: "1.1",
            125: "1.25",
            150: "1.5"
          },
          screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px"
          },
          scrollMargin: ({ theme: theme2 }) => ({
            ...theme2("spacing")
          }),
          scrollPadding: ({ theme: theme2 }) => theme2("spacing"),
          sepia: {
            0: "0",
            DEFAULT: "100%"
          },
          skew: {
            0: "0deg",
            1: "1deg",
            2: "2deg",
            3: "3deg",
            6: "6deg",
            12: "12deg"
          },
          space: ({ theme: theme2 }) => ({
            ...theme2("spacing")
          }),
          spacing: {
            px: "1px",
            0: "0px",
            0.5: "0.125rem",
            1: "0.25rem",
            1.5: "0.375rem",
            2: "0.5rem",
            2.5: "0.625rem",
            3: "0.75rem",
            3.5: "0.875rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
            11: "2.75rem",
            12: "3rem",
            14: "3.5rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            28: "7rem",
            32: "8rem",
            36: "9rem",
            40: "10rem",
            44: "11rem",
            48: "12rem",
            52: "13rem",
            56: "14rem",
            60: "15rem",
            64: "16rem",
            72: "18rem",
            80: "20rem",
            96: "24rem"
          },
          stroke: ({ theme: theme2 }) => ({
            none: "none",
            ...theme2("colors")
          }),
          strokeWidth: {
            0: "0",
            1: "1",
            2: "2"
          },
          supports: {},
          data: {},
          textColor: ({ theme: theme2 }) => theme2("colors"),
          textDecorationColor: ({ theme: theme2 }) => theme2("colors"),
          textDecorationThickness: {
            auto: "auto",
            "from-font": "from-font",
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
          },
          textIndent: ({ theme: theme2 }) => ({
            ...theme2("spacing")
          }),
          textOpacity: ({ theme: theme2 }) => theme2("opacity"),
          textUnderlineOffset: {
            auto: "auto",
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
          },
          transformOrigin: {
            center: "center",
            top: "top",
            "top-right": "top right",
            right: "right",
            "bottom-right": "bottom right",
            bottom: "bottom",
            "bottom-left": "bottom left",
            left: "left",
            "top-left": "top left"
          },
          transitionDelay: {
            0: "0s",
            75: "75ms",
            100: "100ms",
            150: "150ms",
            200: "200ms",
            300: "300ms",
            500: "500ms",
            700: "700ms",
            1e3: "1000ms"
          },
          transitionDuration: {
            DEFAULT: "150ms",
            0: "0s",
            75: "75ms",
            100: "100ms",
            150: "150ms",
            200: "200ms",
            300: "300ms",
            500: "500ms",
            700: "700ms",
            1e3: "1000ms"
          },
          transitionProperty: {
            none: "none",
            all: "all",
            DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
            colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
            opacity: "opacity",
            shadow: "box-shadow",
            transform: "transform"
          },
          transitionTimingFunction: {
            DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
            linear: "linear",
            in: "cubic-bezier(0.4, 0, 1, 1)",
            out: "cubic-bezier(0, 0, 0.2, 1)",
            "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
          },
          translate: ({ theme: theme2 }) => ({
            ...theme2("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%"
          }),
          width: ({ theme: theme2 }) => ({
            auto: "auto",
            ...theme2("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            screen: "100vw",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
          }),
          willChange: {
            auto: "auto",
            scroll: "scroll-position",
            contents: "contents",
            transform: "transform"
          },
          zIndex: {
            auto: "auto",
            0: "0",
            10: "10",
            20: "20",
            30: "30",
            40: "40",
            50: "50"
          }
        },
        plugins: []
      };
    }
  });

  // node_modules/tailwindcss/lib/util/getAllConfigs.js
  var require_getAllConfigs = __commonJS({
    "node_modules/tailwindcss/lib/util/getAllConfigs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return getAllConfigs;
        }
      });
      var _configfull = /* @__PURE__ */ _interop_require_default(require_config_full());
      var _featureFlags = require_featureFlags();
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function getAllConfigs(config) {
        var _config_presets;
        const configs = ((_config_presets = config === null || config === void 0 ? void 0 : config.presets) !== null && _config_presets !== void 0 ? _config_presets : [
          _configfull.default
        ]).slice().reverse().flatMap((preset) => getAllConfigs(preset instanceof Function ? preset() : preset));
        const features = {
          respectDefaultRingColorOpacity: {
            theme: {
              ringColor: ({ theme: theme2 }) => ({
                DEFAULT: "#3b82f67f",
                ...theme2("colors")
              })
            }
          },
          disableColorOpacityUtilitiesByDefault: {
            corePlugins: {
              backgroundOpacity: false,
              borderOpacity: false,
              divideOpacity: false,
              placeholderOpacity: false,
              ringOpacity: false,
              textOpacity: false
            }
          }
        };
        const experimentals = Object.keys(features).filter((feature) => (0, _featureFlags.flagEnabled)(config, feature)).map((feature) => features[feature]);
        return [
          config,
          ...experimentals,
          ...configs
        ];
      }
    }
  });

  // node_modules/tailwindcss/lib/public/resolve-config.js
  var require_resolve_config = __commonJS({
    "node_modules/tailwindcss/lib/public/resolve-config.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return resolveConfig2;
        }
      });
      var _resolveConfig = /* @__PURE__ */ _interop_require_default(require_resolveConfig());
      var _getAllConfigs = /* @__PURE__ */ _interop_require_default(require_getAllConfigs());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function resolveConfig2(...configs) {
        let [, ...defaultConfigs] = (0, _getAllConfigs.default)(configs[0]);
        return (0, _resolveConfig.default)([
          ...configs,
          ...defaultConfigs
        ]);
      }
    }
  });

  // node_modules/tailwindcss/resolveConfig.js
  var require_resolveConfig2 = __commonJS({
    "node_modules/tailwindcss/resolveConfig.js"(exports, module) {
      var resolveConfig2 = require_resolve_config();
      module.exports = (resolveConfig2.__esModule ? resolveConfig2 : { default: resolveConfig2 }).default;
    }
  });

  // node_modules/tailwindcss/lib/util/createPlugin.js
  var require_createPlugin = __commonJS({
    "node_modules/tailwindcss/lib/util/createPlugin.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function createPlugin(plugin2, config) {
        return {
          handler: plugin2,
          config
        };
      }
      createPlugin.withOptions = function(pluginFunction, configFunction = () => ({})) {
        const optionsFunction = function(options) {
          return {
            __options: options,
            handler: pluginFunction(options),
            config: configFunction(options)
          };
        };
        optionsFunction.__isOptionsFunction = true;
        optionsFunction.__pluginFunction = pluginFunction;
        optionsFunction.__configFunction = configFunction;
        return optionsFunction;
      };
      var _default = createPlugin;
    }
  });

  // node_modules/tailwindcss/lib/public/create-plugin.js
  var require_create_plugin = __commonJS({
    "node_modules/tailwindcss/lib/public/create-plugin.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _createPlugin = /* @__PURE__ */ _interop_require_default(require_createPlugin());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var _default = _createPlugin.default;
    }
  });

  // node_modules/tailwindcss/plugin.js
  var require_plugin = __commonJS({
    "node_modules/tailwindcss/plugin.js"(exports, module) {
      var createPlugin = require_create_plugin();
      module.exports = (createPlugin.__esModule ? createPlugin : { default: createPlugin }).default;
    }
  });

  // node_modules/@tailwindcss/aspect-ratio/src/index.js
  var require_src = __commonJS({
    "node_modules/@tailwindcss/aspect-ratio/src/index.js"(exports, module) {
      var plugin2 = require_plugin();
      var baseStyles = {
        position: "relative",
        paddingBottom: `calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%)`
      };
      var childStyles = {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0"
      };
      var noneComponent = {
        ".aspect-none": {
          position: "static",
          paddingBottom: "0"
        },
        ".aspect-none > *": {
          position: "static",
          height: "auto",
          width: "auto",
          top: "auto",
          right: "auto",
          bottom: "auto",
          left: "auto"
        }
      };
      var aspectRatio = plugin2(
        function({ addComponents, matchComponents, theme: theme2, variants, e }) {
          const values = theme2("aspectRatio");
          if (matchComponents) {
            matchComponents(
              {
                "aspect-w": (value) => [
                  {
                    ...baseStyles,
                    "--tw-aspect-w": value
                  },
                  {
                    "> *": childStyles
                  }
                ],
                "aspect-h": (value) => ({ "--tw-aspect-h": value })
              },
              { values }
            );
            addComponents(noneComponent);
            return;
          }
          const baseSelectors = Object.entries(values).map(([key, value]) => {
            return `.${e(`aspect-w-${key}`)}`;
          }).join(",\n");
          const childSelectors = Object.entries(values).map(([key, value]) => {
            return `.${e(`aspect-w-${key}`)} > *`;
          }).join(",\n");
          addComponents(
            [
              {
                [baseSelectors]: baseStyles,
                [childSelectors]: childStyles
              },
              noneComponent,
              Object.entries(values).map(([key, value]) => {
                return {
                  [`.${e(`aspect-w-${key}`)}`]: {
                    "--tw-aspect-w": value
                  }
                };
              }),
              Object.entries(values).map(([key, value]) => {
                return {
                  [`.${e(`aspect-h-${key}`)}`]: {
                    "--tw-aspect-h": value
                  }
                };
              })
            ],
            variants("aspectRatio")
          );
        },
        {
          theme: {
            aspectRatio: {
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
              8: "8",
              9: "9",
              10: "10",
              11: "11",
              12: "12",
              13: "13",
              14: "14",
              15: "15",
              16: "16"
            }
          },
          variants: {
            aspectRatio: ["responsive"]
          }
        }
      );
      module.exports = aspectRatio;
    }
  });

  // node_modules/@tailwindcss/container-queries/dist/index.js
  var require_dist = __commonJS({
    "node_modules/@tailwindcss/container-queries/dist/index.js"(exports, module) {
      "use strict";
      var _plugin = /* @__PURE__ */ _interopRequireDefault(require_plugin());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      module.exports = (0, _plugin.default)(function containerQueries(param) {
        var matchUtilities = param.matchUtilities, matchVariant = param.matchVariant, theme2 = param.theme;
        var parseValue = function parseValue2(value) {
          var _value_match;
          var _value_match_;
          var numericValue = (_value_match_ = (_value_match = value.match(/^(\d+\.\d+|\d+|\.\d+)\D+/)) === null || _value_match === void 0 ? void 0 : _value_match[1]) !== null && _value_match_ !== void 0 ? _value_match_ : null;
          if (numericValue === null)
            return null;
          return parseFloat(value);
        };
        var _theme;
        var values = (_theme = theme2("containers")) !== null && _theme !== void 0 ? _theme : {};
        matchUtilities({
          "@container": function(value, param2) {
            var modifier = param2.modifier;
            return {
              "container-type": value,
              "container-name": modifier
            };
          }
        }, {
          values: {
            DEFAULT: "inline-size",
            normal: "normal"
          },
          modifiers: "any"
        });
        matchVariant("@", function() {
          var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", modifier = (arguments.length > 1 ? arguments[1] : void 0).modifier;
          var parsed = parseValue(value);
          return parsed !== null ? "@container ".concat(modifier !== null && modifier !== void 0 ? modifier : "", " (min-width: ").concat(value, ")") : [];
        }, {
          values,
          sort: function sort(aVariant, zVariant) {
            var a = parseFloat(aVariant.value);
            var z = parseFloat(zVariant.value);
            if (a === null || z === null)
              return 0;
            if (a - z !== 0)
              return a - z;
            var _aVariant_modifier;
            var aLabel = (_aVariant_modifier = aVariant.modifier) !== null && _aVariant_modifier !== void 0 ? _aVariant_modifier : "";
            var _zVariant_modifier;
            var zLabel = (_zVariant_modifier = zVariant.modifier) !== null && _zVariant_modifier !== void 0 ? _zVariant_modifier : "";
            if (aLabel === "" && zLabel !== "") {
              return 1;
            } else if (aLabel !== "" && zLabel === "") {
              return -1;
            }
            return aLabel.localeCompare(zLabel, "en", {
              numeric: true
            });
          }
        });
      }, {
        theme: {
          containers: {
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem"
          }
        }
      });
    }
  });

  // node_modules/mini-svg-data-uri/shorter-css-color-names.js
  var require_shorter_css_color_names = __commonJS({
    "node_modules/mini-svg-data-uri/shorter-css-color-names.js"(exports, module) {
      module.exports = {
        aqua: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
        azure: /#f0ffff(ff)?(?!\w)/gi,
        beige: /#f5f5dc(ff)?(?!\w)/gi,
        bisque: /#ffe4c4(ff)?(?!\w)/gi,
        black: /#000000(ff)?(?!\w)|#000(f)?(?!\w)/gi,
        blue: /#0000ff(ff)?(?!\w)|#00f(f)?(?!\w)/gi,
        brown: /#a52a2a(ff)?(?!\w)/gi,
        coral: /#ff7f50(ff)?(?!\w)/gi,
        cornsilk: /#fff8dc(ff)?(?!\w)/gi,
        crimson: /#dc143c(ff)?(?!\w)/gi,
        cyan: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
        darkblue: /#00008b(ff)?(?!\w)/gi,
        darkcyan: /#008b8b(ff)?(?!\w)/gi,
        darkgrey: /#a9a9a9(ff)?(?!\w)/gi,
        darkred: /#8b0000(ff)?(?!\w)/gi,
        deeppink: /#ff1493(ff)?(?!\w)/gi,
        dimgrey: /#696969(ff)?(?!\w)/gi,
        gold: /#ffd700(ff)?(?!\w)/gi,
        green: /#008000(ff)?(?!\w)/gi,
        grey: /#808080(ff)?(?!\w)/gi,
        honeydew: /#f0fff0(ff)?(?!\w)/gi,
        hotpink: /#ff69b4(ff)?(?!\w)/gi,
        indigo: /#4b0082(ff)?(?!\w)/gi,
        ivory: /#fffff0(ff)?(?!\w)/gi,
        khaki: /#f0e68c(ff)?(?!\w)/gi,
        lavender: /#e6e6fa(ff)?(?!\w)/gi,
        lime: /#00ff00(ff)?(?!\w)|#0f0(f)?(?!\w)/gi,
        linen: /#faf0e6(ff)?(?!\w)/gi,
        maroon: /#800000(ff)?(?!\w)/gi,
        moccasin: /#ffe4b5(ff)?(?!\w)/gi,
        navy: /#000080(ff)?(?!\w)/gi,
        oldlace: /#fdf5e6(ff)?(?!\w)/gi,
        olive: /#808000(ff)?(?!\w)/gi,
        orange: /#ffa500(ff)?(?!\w)/gi,
        orchid: /#da70d6(ff)?(?!\w)/gi,
        peru: /#cd853f(ff)?(?!\w)/gi,
        pink: /#ffc0cb(ff)?(?!\w)/gi,
        plum: /#dda0dd(ff)?(?!\w)/gi,
        purple: /#800080(ff)?(?!\w)/gi,
        red: /#ff0000(ff)?(?!\w)|#f00(f)?(?!\w)/gi,
        salmon: /#fa8072(ff)?(?!\w)/gi,
        seagreen: /#2e8b57(ff)?(?!\w)/gi,
        seashell: /#fff5ee(ff)?(?!\w)/gi,
        sienna: /#a0522d(ff)?(?!\w)/gi,
        silver: /#c0c0c0(ff)?(?!\w)/gi,
        skyblue: /#87ceeb(ff)?(?!\w)/gi,
        snow: /#fffafa(ff)?(?!\w)/gi,
        tan: /#d2b48c(ff)?(?!\w)/gi,
        teal: /#008080(ff)?(?!\w)/gi,
        thistle: /#d8bfd8(ff)?(?!\w)/gi,
        tomato: /#ff6347(ff)?(?!\w)/gi,
        violet: /#ee82ee(ff)?(?!\w)/gi,
        wheat: /#f5deb3(ff)?(?!\w)/gi,
        white: /#ffffff(ff)?(?!\w)|#fff(f)?(?!\w)/gi
      };
    }
  });

  // node_modules/mini-svg-data-uri/index.js
  var require_mini_svg_data_uri = __commonJS({
    "node_modules/mini-svg-data-uri/index.js"(exports, module) {
      var shorterNames = require_shorter_css_color_names();
      var REGEX = {
        whitespace: /\s+/g,
        urlHexPairs: /%[\dA-F]{2}/g,
        quotes: /"/g
      };
      function collapseWhitespace(str) {
        return str.trim().replace(REGEX.whitespace, " ");
      }
      function dataURIPayload(string) {
        return encodeURIComponent(string).replace(REGEX.urlHexPairs, specialHexEncode);
      }
      function colorCodeToShorterNames(string) {
        Object.keys(shorterNames).forEach(function(key) {
          if (shorterNames[key].test(string)) {
            string = string.replace(shorterNames[key], key);
          }
        });
        return string;
      }
      function specialHexEncode(match) {
        switch (match) {
          case "%20":
            return " ";
          case "%3D":
            return "=";
          case "%3A":
            return ":";
          case "%2F":
            return "/";
          default:
            return match.toLowerCase();
        }
      }
      function svgToTinyDataUri(svgString) {
        if (typeof svgString !== "string") {
          throw new TypeError("Expected a string, but received " + typeof svgString);
        }
        if (svgString.charCodeAt(0) === 65279) {
          svgString = svgString.slice(1);
        }
        var body = colorCodeToShorterNames(collapseWhitespace(svgString)).replace(REGEX.quotes, "'");
        return "data:image/svg+xml," + dataURIPayload(body);
      }
      svgToTinyDataUri.toSrcset = function toSrcset(svgString) {
        return svgToTinyDataUri(svgString).replace(/ /g, "%20");
      };
      module.exports = svgToTinyDataUri;
    }
  });

  // node_modules/tailwindcss/lib/public/default-theme.js
  var require_default_theme = __commonJS({
    "node_modules/tailwindcss/lib/public/default-theme.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _cloneDeep = require_cloneDeep();
      var _configfull = /* @__PURE__ */ _interop_require_default(require_config_full());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var _default = (0, _cloneDeep.cloneDeep)(_configfull.default.theme);
    }
  });

  // node_modules/tailwindcss/defaultTheme.js
  var require_defaultTheme = __commonJS({
    "node_modules/tailwindcss/defaultTheme.js"(exports, module) {
      var defaultTheme = require_default_theme();
      module.exports = (defaultTheme.__esModule ? defaultTheme : { default: defaultTheme }).default;
    }
  });

  // node_modules/tailwindcss/colors.js
  var require_colors2 = __commonJS({
    "node_modules/tailwindcss/colors.js"(exports, module) {
      var colors = require_colors();
      module.exports = (colors.__esModule ? colors : { default: colors }).default;
    }
  });

  // node_modules/@tailwindcss/forms/src/index.js
  var require_src2 = __commonJS({
    "node_modules/@tailwindcss/forms/src/index.js"(exports, module) {
      var svgToDataUri = require_mini_svg_data_uri();
      var plugin2 = require_plugin();
      var defaultTheme = require_defaultTheme();
      var colors = require_colors2();
      var [baseFontSize, { lineHeight: baseLineHeight }] = defaultTheme.fontSize.base;
      var { spacing, borderWidth, borderRadius } = defaultTheme;
      function resolveColor(color, opacityVariableName) {
        return color.replace("<alpha-value>", `var(${opacityVariableName}, 1)`);
      }
      var forms = plugin2.withOptions(function(options = { strategy: void 0 }) {
        return function({ addBase, addComponents, theme: theme2 }) {
          const strategy = options.strategy === void 0 ? ["base", "class"] : [options.strategy];
          const rules = [
            {
              base: [
                "[type='text']",
                "input:where(:not([type]))",
                "[type='email']",
                "[type='url']",
                "[type='password']",
                "[type='number']",
                "[type='date']",
                "[type='datetime-local']",
                "[type='month']",
                "[type='search']",
                "[type='tel']",
                "[type='time']",
                "[type='week']",
                "[multiple]",
                "textarea",
                "select"
              ],
              class: [".form-input", ".form-textarea", ".form-select", ".form-multiselect"],
              styles: {
                appearance: "none",
                "background-color": "#fff",
                "border-color": resolveColor(
                  theme2("colors.gray.500", colors.gray[500]),
                  "--tw-border-opacity"
                ),
                "border-width": borderWidth["DEFAULT"],
                "border-radius": borderRadius.none,
                "padding-top": spacing[2],
                "padding-right": spacing[3],
                "padding-bottom": spacing[2],
                "padding-left": spacing[3],
                "font-size": baseFontSize,
                "line-height": baseLineHeight,
                "--tw-shadow": "0 0 #0000",
                "&:focus": {
                  outline: "2px solid transparent",
                  "outline-offset": "2px",
                  "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
                  "--tw-ring-offset-width": "0px",
                  "--tw-ring-offset-color": "#fff",
                  "--tw-ring-color": resolveColor(
                    theme2("colors.blue.600", colors.blue[600]),
                    "--tw-ring-opacity"
                  ),
                  "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
                  "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
                  "box-shadow": `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,
                  "border-color": resolveColor(
                    theme2("colors.blue.600", colors.blue[600]),
                    "--tw-border-opacity"
                  )
                }
              }
            },
            {
              base: ["input::placeholder", "textarea::placeholder"],
              class: [".form-input::placeholder", ".form-textarea::placeholder"],
              styles: {
                color: resolveColor(theme2("colors.gray.500", colors.gray[500]), "--tw-text-opacity"),
                opacity: "1"
              }
            },
            {
              base: ["::-webkit-datetime-edit-fields-wrapper"],
              class: [".form-input::-webkit-datetime-edit-fields-wrapper"],
              styles: {
                padding: "0"
              }
            },
            {
              base: ["::-webkit-date-and-time-value"],
              class: [".form-input::-webkit-date-and-time-value"],
              styles: {
                "min-height": "1.5em"
              }
            },
            {
              base: ["::-webkit-date-and-time-value"],
              class: [".form-input::-webkit-date-and-time-value"],
              styles: {
                "text-align": "inherit"
              }
            },
            {
              base: ["::-webkit-datetime-edit"],
              class: [".form-input::-webkit-datetime-edit"],
              styles: {
                display: "inline-flex"
              }
            },
            {
              base: [
                "::-webkit-datetime-edit",
                "::-webkit-datetime-edit-year-field",
                "::-webkit-datetime-edit-month-field",
                "::-webkit-datetime-edit-day-field",
                "::-webkit-datetime-edit-hour-field",
                "::-webkit-datetime-edit-minute-field",
                "::-webkit-datetime-edit-second-field",
                "::-webkit-datetime-edit-millisecond-field",
                "::-webkit-datetime-edit-meridiem-field"
              ],
              class: [
                ".form-input::-webkit-datetime-edit",
                ".form-input::-webkit-datetime-edit-year-field",
                ".form-input::-webkit-datetime-edit-month-field",
                ".form-input::-webkit-datetime-edit-day-field",
                ".form-input::-webkit-datetime-edit-hour-field",
                ".form-input::-webkit-datetime-edit-minute-field",
                ".form-input::-webkit-datetime-edit-second-field",
                ".form-input::-webkit-datetime-edit-millisecond-field",
                ".form-input::-webkit-datetime-edit-meridiem-field"
              ],
              styles: {
                "padding-top": 0,
                "padding-bottom": 0
              }
            },
            {
              base: ["select"],
              class: [".form-select"],
              styles: {
                "background-image": `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${resolveColor(
                    theme2("colors.gray.500", colors.gray[500]),
                    "--tw-stroke-opacity"
                  )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
                )}")`,
                "background-position": `right ${spacing[2]} center`,
                "background-repeat": `no-repeat`,
                "background-size": `1.5em 1.5em`,
                "padding-right": spacing[10],
                "print-color-adjust": `exact`
              }
            },
            {
              base: ["[multiple]", '[size]:where(select:not([size="1"]))'],
              class: ['.form-select:where([size]:not([size="1"]))'],
              styles: {
                "background-image": "initial",
                "background-position": "initial",
                "background-repeat": "unset",
                "background-size": "initial",
                "padding-right": spacing[3],
                "print-color-adjust": "unset"
              }
            },
            {
              base: [`[type='checkbox']`, `[type='radio']`],
              class: [".form-checkbox", ".form-radio"],
              styles: {
                appearance: "none",
                padding: "0",
                "print-color-adjust": "exact",
                display: "inline-block",
                "vertical-align": "middle",
                "background-origin": "border-box",
                "user-select": "none",
                "flex-shrink": "0",
                height: spacing[4],
                width: spacing[4],
                color: resolveColor(theme2("colors.blue.600", colors.blue[600]), "--tw-text-opacity"),
                "background-color": "#fff",
                "border-color": resolveColor(
                  theme2("colors.gray.500", colors.gray[500]),
                  "--tw-border-opacity"
                ),
                "border-width": borderWidth["DEFAULT"],
                "--tw-shadow": "0 0 #0000"
              }
            },
            {
              base: [`[type='checkbox']`],
              class: [".form-checkbox"],
              styles: {
                "border-radius": borderRadius["none"]
              }
            },
            {
              base: [`[type='radio']`],
              class: [".form-radio"],
              styles: {
                "border-radius": "100%"
              }
            },
            {
              base: [`[type='checkbox']:focus`, `[type='radio']:focus`],
              class: [".form-checkbox:focus", ".form-radio:focus"],
              styles: {
                outline: "2px solid transparent",
                "outline-offset": "2px",
                "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
                "--tw-ring-offset-width": "2px",
                "--tw-ring-offset-color": "#fff",
                "--tw-ring-color": resolveColor(
                  theme2("colors.blue.600", colors.blue[600]),
                  "--tw-ring-opacity"
                ),
                "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
                "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
                "box-shadow": `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`
              }
            },
            {
              base: [`[type='checkbox']:checked`, `[type='radio']:checked`],
              class: [".form-checkbox:checked", ".form-radio:checked"],
              styles: {
                "border-color": `transparent`,
                "background-color": `currentColor`,
                "background-size": `100% 100%`,
                "background-position": `center`,
                "background-repeat": `no-repeat`
              }
            },
            {
              base: [`[type='checkbox']:checked`],
              class: [".form-checkbox:checked"],
              styles: {
                "background-image": `url("${svgToDataUri(
                  `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
                )}")`
              }
            },
            {
              base: [`[type='radio']:checked`],
              class: [".form-radio:checked"],
              styles: {
                "background-image": `url("${svgToDataUri(
                  `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`
                )}")`
              }
            },
            {
              base: [
                `[type='checkbox']:checked:hover`,
                `[type='checkbox']:checked:focus`,
                `[type='radio']:checked:hover`,
                `[type='radio']:checked:focus`
              ],
              class: [
                ".form-checkbox:checked:hover",
                ".form-checkbox:checked:focus",
                ".form-radio:checked:hover",
                ".form-radio:checked:focus"
              ],
              styles: {
                "border-color": "transparent",
                "background-color": "currentColor"
              }
            },
            {
              base: [`[type='checkbox']:indeterminate`],
              class: [".form-checkbox:indeterminate"],
              styles: {
                "background-image": `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`
                )}")`,
                "border-color": `transparent`,
                "background-color": `currentColor`,
                "background-size": `100% 100%`,
                "background-position": `center`,
                "background-repeat": `no-repeat`
              }
            },
            {
              base: [`[type='checkbox']:indeterminate:hover`, `[type='checkbox']:indeterminate:focus`],
              class: [".form-checkbox:indeterminate:hover", ".form-checkbox:indeterminate:focus"],
              styles: {
                "border-color": "transparent",
                "background-color": "currentColor"
              }
            },
            {
              base: [`[type='file']`],
              class: null,
              styles: {
                background: "unset",
                "border-color": "inherit",
                "border-width": "0",
                "border-radius": "0",
                padding: "0",
                "font-size": "unset",
                "line-height": "inherit"
              }
            },
            {
              base: [`[type='file']:focus`],
              class: null,
              styles: {
                outline: [`1px solid ButtonText`, `1px auto -webkit-focus-ring-color`]
              }
            }
          ];
          const getStrategyRules = (strategy2) => rules.map((rule) => {
            if (rule[strategy2] === null)
              return null;
            return { [rule[strategy2]]: rule.styles };
          }).filter(Boolean);
          if (strategy.includes("base")) {
            addBase(getStrategyRules("base"));
          }
          if (strategy.includes("class")) {
            addComponents(getStrategyRules("class"));
          }
        };
      });
      module.exports = forms;
    }
  });

  // node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/tslib/tslib.js"(exports, module) {
      var __extends;
      var __assign;
      var __rest;
      var __decorate;
      var __param;
      var __esDecorate;
      var __runInitializers;
      var __propKey;
      var __setFunctionName;
      var __metadata;
      var __awaiter;
      var __generator;
      var __exportStar;
      var __values;
      var __read;
      var __spread;
      var __spreadArrays;
      var __spreadArray;
      var __await;
      var __asyncGenerator;
      var __asyncDelegator;
      var __asyncValues;
      var __makeTemplateObject;
      var __importStar;
      var __importDefault;
      var __classPrivateFieldGet;
      var __classPrivateFieldSet;
      var __classPrivateFieldIn;
      var __createBinding;
      var __addDisposableResource;
      var __disposeResources;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
              d[p] = b[p];
        };
        __extends = function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        };
        __decorate = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
          function accept(f) {
            if (f !== void 0 && typeof f !== "function")
              throw new TypeError("Function expected");
            return f;
          }
          var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
          var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
          var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
          var _, done = false;
          for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
              context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
              context.access[p] = contextIn.access[p];
            context.addInitializer = function(f) {
              if (done)
                throw new TypeError("Cannot add initializers after decoration has completed");
              extraInitializers.push(accept(f || null));
            };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
              if (result === void 0)
                continue;
              if (result === null || typeof result !== "object")
                throw new TypeError("Object expected");
              if (_ = accept(result.get))
                descriptor.get = _;
              if (_ = accept(result.set))
                descriptor.set = _;
              if (_ = accept(result.init))
                initializers.unshift(_);
            } else if (_ = accept(result)) {
              if (kind === "field")
                initializers.unshift(_);
              else
                descriptor[key] = _;
            }
          }
          if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
          done = true;
        };
        __runInitializers = function(thisArg, initializers, value) {
          var useValue = arguments.length > 2;
          for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
          }
          return useValue ? value : void 0;
        };
        __propKey = function(x) {
          return typeof x === "symbol" ? x : "".concat(x);
        };
        __setFunctionName = function(f, name, prefix2) {
          if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
          return Object.defineProperty(f, "name", { configurable: true, value: prefix2 ? "".concat(prefix2, " ", name) : name });
        };
        __metadata = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar = function(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding(o, m, p);
        };
        __createBinding = Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          var desc = Object.getOwnPropertyDescriptor(m, k);
          if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() {
              return m[k];
            } };
          }
          Object.defineProperty(o, k2, desc);
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __values = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error2) {
            e = { error: error2 };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
          return ar;
        };
        __spreadArrays = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        __spreadArray = function(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        __await = function(v) {
          return this instanceof __await ? (this.v = v, this) : new __await(v);
        };
        __asyncGenerator = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject = function(cooked, raw2) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw2 });
          } else {
            cooked.raw = raw2;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        } : function(o, v) {
          o["default"] = v;
        };
        __importStar = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet = function(receiver, state, value, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
        };
        __classPrivateFieldIn = function(state, receiver) {
          if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
            throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof state === "function" ? receiver === state : state.has(receiver);
        };
        __addDisposableResource = function(env, value, async) {
          if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function")
              throw new TypeError("Object expected.");
            var dispose;
            if (async) {
              if (!Symbol.asyncDispose)
                throw new TypeError("Symbol.asyncDispose is not defined.");
              dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
              if (!Symbol.dispose)
                throw new TypeError("Symbol.dispose is not defined.");
              dispose = value[Symbol.dispose];
            }
            if (typeof dispose !== "function")
              throw new TypeError("Object not disposable.");
            env.stack.push({ value, dispose, async });
          } else if (async) {
            env.stack.push({ async: true });
          }
          return value;
        };
        var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error2, suppressed, message) {
          var e = new Error(message);
          return e.name = "SuppressedError", e.error = error2, e.suppressed = suppressed, e;
        };
        __disposeResources = function(env) {
          function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
          }
          function next2() {
            while (env.stack.length) {
              var rec = env.stack.pop();
              try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async)
                  return Promise.resolve(result).then(next2, function(e) {
                    fail(e);
                    return next2();
                  });
              } catch (e) {
                fail(e);
              }
            }
            if (env.hasError)
              throw env.error;
          }
          return next2();
        };
        exporter("__extends", __extends);
        exporter("__assign", __assign);
        exporter("__rest", __rest);
        exporter("__decorate", __decorate);
        exporter("__param", __param);
        exporter("__esDecorate", __esDecorate);
        exporter("__runInitializers", __runInitializers);
        exporter("__propKey", __propKey);
        exporter("__setFunctionName", __setFunctionName);
        exporter("__metadata", __metadata);
        exporter("__awaiter", __awaiter);
        exporter("__generator", __generator);
        exporter("__exportStar", __exportStar);
        exporter("__createBinding", __createBinding);
        exporter("__values", __values);
        exporter("__read", __read);
        exporter("__spread", __spread);
        exporter("__spreadArrays", __spreadArrays);
        exporter("__spreadArray", __spreadArray);
        exporter("__await", __await);
        exporter("__asyncGenerator", __asyncGenerator);
        exporter("__asyncDelegator", __asyncDelegator);
        exporter("__asyncValues", __asyncValues);
        exporter("__makeTemplateObject", __makeTemplateObject);
        exporter("__importStar", __importStar);
        exporter("__importDefault", __importDefault);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet);
        exporter("__classPrivateFieldIn", __classPrivateFieldIn);
        exporter("__addDisposableResource", __addDisposableResource);
        exporter("__disposeResources", __disposeResources);
      });
    }
  });

  // node_modules/just-unique/index.cjs
  var require_just_unique = __commonJS({
    "node_modules/just-unique/index.cjs"(exports, module) {
      module.exports = unique;
      function unique(arr, sorted, strings) {
        if (!Array.isArray(arr)) {
          throw new Error("expected an array for the first argument");
        }
        if (sorted != null && typeof sorted != "boolean") {
          throw new Error("expected a boolean, null or undefined for the second argument");
        }
        if (strings != null && typeof strings != "boolean") {
          throw new Error("expected a boolean, null or undefined for the third argument");
        }
        if (!sorted && strings && arr[0] !== Object(arr[0])) {
          return stringUnique(arr);
        }
        var result = [], duplicate, seenNaN, lastAdded;
        var len = arr.length;
        for (var i = 0; i < len; i++) {
          var elem = arr[i];
          if (typeof elem == "number" && isNaN(elem)) {
            duplicate = seenNaN;
            seenNaN = true;
          }
          duplicate = duplicate || lastAdded && lastAdded === elem;
          if (!duplicate && !sorted) {
            duplicate = result.indexOf(elem) > -1;
          }
          if (!duplicate) {
            result.push(elem);
            lastAdded = elem;
          } else {
            duplicate = false;
          }
        }
        return result;
      }
      function stringUnique(arr) {
        var lookup = {};
        var len = arr.length;
        for (var i = 0; i < len; i++) {
          lookup[arr[i]] = true;
        }
        return Object.keys(lookup);
      }
    }
  });

  // node_modules/tailwindcss-themer/lib/utils/optionsUtils.js
  var require_optionsUtils = __commonJS({
    "node_modules/tailwindcss-themer/lib/utils/optionsUtils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getThemesFromOptions = exports.validateOptions = exports.defaultThemeName = void 0;
      var tslib_1 = require_tslib();
      var just_unique_1 = tslib_1.__importDefault(require_just_unique());
      exports.defaultThemeName = "__default";
      var validateOptions = ({ themes = [] }) => {
        if (themes.some((x) => !x.name)) {
          throw new Error("Every theme in the themes array in the multiThemePlugin options must have a name property set to a unique string");
        }
        const names = themes.map((x) => x.name);
        if ((0, just_unique_1.default)(names).length != names.length) {
          throw new Error("Every theme in the themes array in the multiThemePlugin options must have a unique name");
        }
        if (themes.some((x) => x.name === exports.defaultThemeName)) {
          throw new Error(`No theme in the themes array in the multiThemePlugin options cannot have a name of "${exports.defaultThemeName}"`);
        }
      };
      exports.validateOptions = validateOptions;
      var getThemesFromOptions = (options) => {
        (0, exports.validateOptions)(options);
        const { defaultTheme, themes = [] } = options;
        return [
          Object.assign(Object.assign({ extend: {} }, defaultTheme), { name: exports.defaultThemeName }),
          ...themes.map((x) => Object.assign({ extend: {} }, x))
        ];
      };
      exports.getThemesFromOptions = getThemesFromOptions;
    }
  });

  // node_modules/lodash.merge/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.merge/index.js"(exports, module) {
      var LARGE_ARRAY_SIZE = 200;
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var MAX_SAFE_INTEGER = 9007199254740991;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var asyncTag = "[object AsyncFunction]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var nullTag = "[object Null]";
      var objectTag = "[object Object]";
      var proxyTag = "[object Proxy]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var undefinedTag = "[object Undefined]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function baseTimes(n, iteratee) {
        var index2 = -1, result = Array(n);
        while (++index2 < n) {
          result[index2] = iteratee(index2);
        }
        return result;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      function overArg(func, transform2) {
        return function(arg) {
          return func(transform2(arg));
        };
      }
      var arrayProto = Array.prototype;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var coreJsData = root["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var maskSrcKey = function() {
        var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid2 ? "Symbol(src)_1." + uid2 : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var objectCtorString = funcToString.call(Object);
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var Symbol2 = root.Symbol;
      var Uint8Array2 = root.Uint8Array;
      var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      var objectCreate = Object.create;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var splice = arrayProto.splice;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var nativeMax = Math.max;
      var nativeNow = Date.now;
      var Map2 = getNative(root, "Map");
      var nativeCreate = getNative(Object, "create");
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject4(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      function Hash(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      function hashGet(key) {
        var data2 = this.__data__;
        if (nativeCreate) {
          var result = data2[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty2.call(data2, key) ? data2[key] : void 0;
      }
      function hashHas(key) {
        var data2 = this.__data__;
        return nativeCreate ? data2[key] !== void 0 : hasOwnProperty2.call(data2, key);
      }
      function hashSet(key, value) {
        var data2 = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data2[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data2 = this.__data__, index2 = assocIndexOf(data2, key);
        if (index2 < 0) {
          return false;
        }
        var lastIndex = data2.length - 1;
        if (index2 == lastIndex) {
          data2.pop();
        } else {
          splice.call(data2, index2, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data2 = this.__data__, index2 = assocIndexOf(data2, key);
        return index2 < 0 ? void 0 : data2[index2][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data2 = this.__data__, index2 = assocIndexOf(data2, key);
        if (index2 < 0) {
          ++this.size;
          data2.push([key, value]);
        } else {
          data2[index2][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data2 = getMapData(this, key), size2 = data2.size;
        data2.set(key, value);
        this.size += data2.size == size2 ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function Stack(entries) {
        var data2 = this.__data__ = new ListCache(entries);
        this.size = data2.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data2 = this.__data__, result = data2["delete"](key);
        this.size = data2.size;
        return result;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data2 = this.__data__;
        if (data2 instanceof ListCache) {
          var pairs = data2.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data2.size;
            return this;
          }
          data2 = this.__data__ = new MapCache(pairs);
        }
        data2.set(key, value);
        this.size = data2.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      function assignMergeValue(object, key, value) {
        if (value !== void 0 && !eq2(object[key], value) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty2.call(object, key) && eq2(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq2(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      var baseFor = createBaseFor();
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString2(value);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsNative(value) {
        if (!isObject4(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseKeysIn(object) {
        if (!isObject4(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject4(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
            if (newValue === void 0) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
        var isCommon = newValue === void 0;
        if (isCommon) {
          var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray2(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject4(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseRest(func, start2) {
        return setToString(overRest(func, start2, identity), func + "");
      }
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result);
        return result;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
        return result;
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function copyArray(source, array) {
        var index2 = -1, length = source.length;
        array || (array = Array(length));
        while (++index2 < length) {
          array[index2] = source[index2];
        }
        return array;
      }
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index2 = -1, length = props.length;
        while (++index2 < length) {
          var key = props[index2];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
          if (newValue === void 0) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? void 0 : customizer;
            length = 1;
          }
          object = Object(object);
          while (++index2 < length) {
            var source = sources[index2];
            if (source) {
              assigner(object, source, index2, customizer);
            }
          }
          return object;
        });
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index2];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function getMapData(map, key) {
        var data2 = map.__data__;
        return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index2, object) {
        if (!isObject4(object)) {
          return false;
        }
        var type = typeof index2;
        if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
          return eq2(object[index2], value);
        }
        return false;
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      function objectToString2(value) {
        return nativeObjectToString.call(value);
      }
      function overRest(func, start2, transform2) {
        start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
        return function() {
          var args = arguments, index2 = -1, length = nativeMax(args.length - start2, 0), array = Array(length);
          while (++index2 < length) {
            array[index2] = args[start2 + index2];
          }
          index2 = -1;
          var otherArgs = Array(start2 + 1);
          while (++index2 < start2) {
            otherArgs[index2] = args[index2];
          }
          otherArgs[start2] = transform2(array);
          return apply(func, this, otherArgs);
        };
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      var setToString = shortOut(baseSetToString);
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function eq2(value, other) {
        return value === other || value !== value && other !== other;
      }
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArray2 = Array.isArray;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      function isFunction(value) {
        if (!isObject4(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject4(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      var merge = createAssigner(function(object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });
      function constant(value) {
        return function() {
          return value;
        };
      }
      function identity(value) {
        return value;
      }
      function stubFalse() {
        return false;
      }
      module.exports = merge;
    }
  });

  // node_modules/lodash.mergewith/index.js
  var require_lodash2 = __commonJS({
    "node_modules/lodash.mergewith/index.js"(exports, module) {
      var LARGE_ARRAY_SIZE = 200;
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var MAX_SAFE_INTEGER = 9007199254740991;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var asyncTag = "[object AsyncFunction]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var nullTag = "[object Null]";
      var objectTag = "[object Object]";
      var proxyTag = "[object Proxy]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var undefinedTag = "[object Undefined]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function baseTimes(n, iteratee) {
        var index2 = -1, result = Array(n);
        while (++index2 < n) {
          result[index2] = iteratee(index2);
        }
        return result;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      function overArg(func, transform2) {
        return function(arg) {
          return func(transform2(arg));
        };
      }
      var arrayProto = Array.prototype;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var coreJsData = root["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var maskSrcKey = function() {
        var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid2 ? "Symbol(src)_1." + uid2 : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var objectCtorString = funcToString.call(Object);
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var Symbol2 = root.Symbol;
      var Uint8Array2 = root.Uint8Array;
      var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      var objectCreate = Object.create;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var splice = arrayProto.splice;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var nativeMax = Math.max;
      var nativeNow = Date.now;
      var Map2 = getNative(root, "Map");
      var nativeCreate = getNative(Object, "create");
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject4(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      function Hash(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      function hashGet(key) {
        var data2 = this.__data__;
        if (nativeCreate) {
          var result = data2[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty2.call(data2, key) ? data2[key] : void 0;
      }
      function hashHas(key) {
        var data2 = this.__data__;
        return nativeCreate ? data2[key] !== void 0 : hasOwnProperty2.call(data2, key);
      }
      function hashSet(key, value) {
        var data2 = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data2[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data2 = this.__data__, index2 = assocIndexOf(data2, key);
        if (index2 < 0) {
          return false;
        }
        var lastIndex = data2.length - 1;
        if (index2 == lastIndex) {
          data2.pop();
        } else {
          splice.call(data2, index2, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data2 = this.__data__, index2 = assocIndexOf(data2, key);
        return index2 < 0 ? void 0 : data2[index2][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data2 = this.__data__, index2 = assocIndexOf(data2, key);
        if (index2 < 0) {
          ++this.size;
          data2.push([key, value]);
        } else {
          data2[index2][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data2 = getMapData(this, key), size2 = data2.size;
        data2.set(key, value);
        this.size += data2.size == size2 ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function Stack(entries) {
        var data2 = this.__data__ = new ListCache(entries);
        this.size = data2.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data2 = this.__data__, result = data2["delete"](key);
        this.size = data2.size;
        return result;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data2 = this.__data__;
        if (data2 instanceof ListCache) {
          var pairs = data2.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data2.size;
            return this;
          }
          data2 = this.__data__ = new MapCache(pairs);
        }
        data2.set(key, value);
        this.size = data2.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      function assignMergeValue(object, key, value) {
        if (value !== void 0 && !eq2(object[key], value) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty2.call(object, key) && eq2(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq2(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      var baseFor = createBaseFor();
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString2(value);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsNative(value) {
        if (!isObject4(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseKeysIn(object) {
        if (!isObject4(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject4(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
            if (newValue === void 0) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
        var isCommon = newValue === void 0;
        if (isCommon) {
          var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray2(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject4(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseRest(func, start2) {
        return setToString(overRest(func, start2, identity), func + "");
      }
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result);
        return result;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
        return result;
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function copyArray(source, array) {
        var index2 = -1, length = source.length;
        array || (array = Array(length));
        while (++index2 < length) {
          array[index2] = source[index2];
        }
        return array;
      }
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index2 = -1, length = props.length;
        while (++index2 < length) {
          var key = props[index2];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
          if (newValue === void 0) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? void 0 : customizer;
            length = 1;
          }
          object = Object(object);
          while (++index2 < length) {
            var source = sources[index2];
            if (source) {
              assigner(object, source, index2, customizer);
            }
          }
          return object;
        });
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index2];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function getMapData(map, key) {
        var data2 = map.__data__;
        return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index2, object) {
        if (!isObject4(object)) {
          return false;
        }
        var type = typeof index2;
        if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
          return eq2(object[index2], value);
        }
        return false;
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      function objectToString2(value) {
        return nativeObjectToString.call(value);
      }
      function overRest(func, start2, transform2) {
        start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
        return function() {
          var args = arguments, index2 = -1, length = nativeMax(args.length - start2, 0), array = Array(length);
          while (++index2 < length) {
            array[index2] = args[start2 + index2];
          }
          index2 = -1;
          var otherArgs = Array(start2 + 1);
          while (++index2 < start2) {
            otherArgs[index2] = args[index2];
          }
          otherArgs[start2] = transform2(array);
          return apply(func, this, otherArgs);
        };
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      var setToString = shortOut(baseSetToString);
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function eq2(value, other) {
        return value === other || value !== value && other !== other;
      }
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArray2 = Array.isArray;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      function isFunction(value) {
        if (!isObject4(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject4(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });
      function constant(value) {
        return function() {
          return value;
        };
      }
      function identity(value) {
        return value;
      }
      function stubFalse() {
        return false;
      }
      module.exports = mergeWith;
    }
  });

  // node_modules/color-name/index.js
  var require_color_name = __commonJS({
    "node_modules/color-name/index.js"(exports, module) {
      "use strict";
      module.exports = {
        "aliceblue": [240, 248, 255],
        "antiquewhite": [250, 235, 215],
        "aqua": [0, 255, 255],
        "aquamarine": [127, 255, 212],
        "azure": [240, 255, 255],
        "beige": [245, 245, 220],
        "bisque": [255, 228, 196],
        "black": [0, 0, 0],
        "blanchedalmond": [255, 235, 205],
        "blue": [0, 0, 255],
        "blueviolet": [138, 43, 226],
        "brown": [165, 42, 42],
        "burlywood": [222, 184, 135],
        "cadetblue": [95, 158, 160],
        "chartreuse": [127, 255, 0],
        "chocolate": [210, 105, 30],
        "coral": [255, 127, 80],
        "cornflowerblue": [100, 149, 237],
        "cornsilk": [255, 248, 220],
        "crimson": [220, 20, 60],
        "cyan": [0, 255, 255],
        "darkblue": [0, 0, 139],
        "darkcyan": [0, 139, 139],
        "darkgoldenrod": [184, 134, 11],
        "darkgray": [169, 169, 169],
        "darkgreen": [0, 100, 0],
        "darkgrey": [169, 169, 169],
        "darkkhaki": [189, 183, 107],
        "darkmagenta": [139, 0, 139],
        "darkolivegreen": [85, 107, 47],
        "darkorange": [255, 140, 0],
        "darkorchid": [153, 50, 204],
        "darkred": [139, 0, 0],
        "darksalmon": [233, 150, 122],
        "darkseagreen": [143, 188, 143],
        "darkslateblue": [72, 61, 139],
        "darkslategray": [47, 79, 79],
        "darkslategrey": [47, 79, 79],
        "darkturquoise": [0, 206, 209],
        "darkviolet": [148, 0, 211],
        "deeppink": [255, 20, 147],
        "deepskyblue": [0, 191, 255],
        "dimgray": [105, 105, 105],
        "dimgrey": [105, 105, 105],
        "dodgerblue": [30, 144, 255],
        "firebrick": [178, 34, 34],
        "floralwhite": [255, 250, 240],
        "forestgreen": [34, 139, 34],
        "fuchsia": [255, 0, 255],
        "gainsboro": [220, 220, 220],
        "ghostwhite": [248, 248, 255],
        "gold": [255, 215, 0],
        "goldenrod": [218, 165, 32],
        "gray": [128, 128, 128],
        "green": [0, 128, 0],
        "greenyellow": [173, 255, 47],
        "grey": [128, 128, 128],
        "honeydew": [240, 255, 240],
        "hotpink": [255, 105, 180],
        "indianred": [205, 92, 92],
        "indigo": [75, 0, 130],
        "ivory": [255, 255, 240],
        "khaki": [240, 230, 140],
        "lavender": [230, 230, 250],
        "lavenderblush": [255, 240, 245],
        "lawngreen": [124, 252, 0],
        "lemonchiffon": [255, 250, 205],
        "lightblue": [173, 216, 230],
        "lightcoral": [240, 128, 128],
        "lightcyan": [224, 255, 255],
        "lightgoldenrodyellow": [250, 250, 210],
        "lightgray": [211, 211, 211],
        "lightgreen": [144, 238, 144],
        "lightgrey": [211, 211, 211],
        "lightpink": [255, 182, 193],
        "lightsalmon": [255, 160, 122],
        "lightseagreen": [32, 178, 170],
        "lightskyblue": [135, 206, 250],
        "lightslategray": [119, 136, 153],
        "lightslategrey": [119, 136, 153],
        "lightsteelblue": [176, 196, 222],
        "lightyellow": [255, 255, 224],
        "lime": [0, 255, 0],
        "limegreen": [50, 205, 50],
        "linen": [250, 240, 230],
        "magenta": [255, 0, 255],
        "maroon": [128, 0, 0],
        "mediumaquamarine": [102, 205, 170],
        "mediumblue": [0, 0, 205],
        "mediumorchid": [186, 85, 211],
        "mediumpurple": [147, 112, 219],
        "mediumseagreen": [60, 179, 113],
        "mediumslateblue": [123, 104, 238],
        "mediumspringgreen": [0, 250, 154],
        "mediumturquoise": [72, 209, 204],
        "mediumvioletred": [199, 21, 133],
        "midnightblue": [25, 25, 112],
        "mintcream": [245, 255, 250],
        "mistyrose": [255, 228, 225],
        "moccasin": [255, 228, 181],
        "navajowhite": [255, 222, 173],
        "navy": [0, 0, 128],
        "oldlace": [253, 245, 230],
        "olive": [128, 128, 0],
        "olivedrab": [107, 142, 35],
        "orange": [255, 165, 0],
        "orangered": [255, 69, 0],
        "orchid": [218, 112, 214],
        "palegoldenrod": [238, 232, 170],
        "palegreen": [152, 251, 152],
        "paleturquoise": [175, 238, 238],
        "palevioletred": [219, 112, 147],
        "papayawhip": [255, 239, 213],
        "peachpuff": [255, 218, 185],
        "peru": [205, 133, 63],
        "pink": [255, 192, 203],
        "plum": [221, 160, 221],
        "powderblue": [176, 224, 230],
        "purple": [128, 0, 128],
        "rebeccapurple": [102, 51, 153],
        "red": [255, 0, 0],
        "rosybrown": [188, 143, 143],
        "royalblue": [65, 105, 225],
        "saddlebrown": [139, 69, 19],
        "salmon": [250, 128, 114],
        "sandybrown": [244, 164, 96],
        "seagreen": [46, 139, 87],
        "seashell": [255, 245, 238],
        "sienna": [160, 82, 45],
        "silver": [192, 192, 192],
        "skyblue": [135, 206, 235],
        "slateblue": [106, 90, 205],
        "slategray": [112, 128, 144],
        "slategrey": [112, 128, 144],
        "snow": [255, 250, 250],
        "springgreen": [0, 255, 127],
        "steelblue": [70, 130, 180],
        "tan": [210, 180, 140],
        "teal": [0, 128, 128],
        "thistle": [216, 191, 216],
        "tomato": [255, 99, 71],
        "turquoise": [64, 224, 208],
        "violet": [238, 130, 238],
        "wheat": [245, 222, 179],
        "white": [255, 255, 255],
        "whitesmoke": [245, 245, 245],
        "yellow": [255, 255, 0],
        "yellowgreen": [154, 205, 50]
      };
    }
  });

  // node_modules/is-arrayish/index.js
  var require_is_arrayish = __commonJS({
    "node_modules/is-arrayish/index.js"(exports, module) {
      module.exports = function isArrayish(obj) {
        if (!obj || typeof obj === "string") {
          return false;
        }
        return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
      };
    }
  });

  // node_modules/simple-swizzle/index.js
  var require_simple_swizzle = __commonJS({
    "node_modules/simple-swizzle/index.js"(exports, module) {
      "use strict";
      var isArrayish = require_is_arrayish();
      var concat = Array.prototype.concat;
      var slice = Array.prototype.slice;
      var swizzle = module.exports = function swizzle2(args) {
        var results = [];
        for (var i = 0, len = args.length; i < len; i++) {
          var arg = args[i];
          if (isArrayish(arg)) {
            results = concat.call(results, slice.call(arg));
          } else {
            results.push(arg);
          }
        }
        return results;
      };
      swizzle.wrap = function(fn) {
        return function() {
          return fn(swizzle(arguments));
        };
      };
    }
  });

  // node_modules/color-string/index.js
  var require_color_string = __commonJS({
    "node_modules/color-string/index.js"(exports, module) {
      var colorNames = require_color_name();
      var swizzle = require_simple_swizzle();
      var hasOwnProperty2 = Object.hasOwnProperty;
      var reverseNames = /* @__PURE__ */ Object.create(null);
      for (name in colorNames) {
        if (hasOwnProperty2.call(colorNames, name)) {
          reverseNames[colorNames[name]] = name;
        }
      }
      var name;
      var cs = module.exports = {
        to: {},
        get: {}
      };
      cs.get = function(string) {
        var prefix2 = string.substring(0, 3).toLowerCase();
        var val;
        var model;
        switch (prefix2) {
          case "hsl":
            val = cs.get.hsl(string);
            model = "hsl";
            break;
          case "hwb":
            val = cs.get.hwb(string);
            model = "hwb";
            break;
          default:
            val = cs.get.rgb(string);
            model = "rgb";
            break;
        }
        if (!val) {
          return null;
        }
        return { model, value: val };
      };
      cs.get.rgb = function(string) {
        if (!string) {
          return null;
        }
        var abbr = /^#([a-f0-9]{3,4})$/i;
        var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
        var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
        var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
        var keyword = /^(\w+)$/;
        var rgb = [0, 0, 0, 1];
        var match;
        var i;
        var hexAlpha;
        if (match = string.match(hex)) {
          hexAlpha = match[2];
          match = match[1];
          for (i = 0; i < 3; i++) {
            var i2 = i * 2;
            rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
          }
          if (hexAlpha) {
            rgb[3] = parseInt(hexAlpha, 16) / 255;
          }
        } else if (match = string.match(abbr)) {
          match = match[1];
          hexAlpha = match[3];
          for (i = 0; i < 3; i++) {
            rgb[i] = parseInt(match[i] + match[i], 16);
          }
          if (hexAlpha) {
            rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
          }
        } else if (match = string.match(rgba)) {
          for (i = 0; i < 3; i++) {
            rgb[i] = parseInt(match[i + 1], 0);
          }
          if (match[4]) {
            if (match[5]) {
              rgb[3] = parseFloat(match[4]) * 0.01;
            } else {
              rgb[3] = parseFloat(match[4]);
            }
          }
        } else if (match = string.match(per)) {
          for (i = 0; i < 3; i++) {
            rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
          }
          if (match[4]) {
            if (match[5]) {
              rgb[3] = parseFloat(match[4]) * 0.01;
            } else {
              rgb[3] = parseFloat(match[4]);
            }
          }
        } else if (match = string.match(keyword)) {
          if (match[1] === "transparent") {
            return [0, 0, 0, 0];
          }
          if (!hasOwnProperty2.call(colorNames, match[1])) {
            return null;
          }
          rgb = colorNames[match[1]];
          rgb[3] = 1;
          return rgb;
        } else {
          return null;
        }
        for (i = 0; i < 3; i++) {
          rgb[i] = clamp(rgb[i], 0, 255);
        }
        rgb[3] = clamp(rgb[3], 0, 1);
        return rgb;
      };
      cs.get.hsl = function(string) {
        if (!string) {
          return null;
        }
        var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
        var match = string.match(hsl);
        if (match) {
          var alpha = parseFloat(match[4]);
          var h = (parseFloat(match[1]) % 360 + 360) % 360;
          var s = clamp(parseFloat(match[2]), 0, 100);
          var l = clamp(parseFloat(match[3]), 0, 100);
          var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
          return [h, s, l, a];
        }
        return null;
      };
      cs.get.hwb = function(string) {
        if (!string) {
          return null;
        }
        var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
        var match = string.match(hwb);
        if (match) {
          var alpha = parseFloat(match[4]);
          var h = (parseFloat(match[1]) % 360 + 360) % 360;
          var w = clamp(parseFloat(match[2]), 0, 100);
          var b = clamp(parseFloat(match[3]), 0, 100);
          var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
          return [h, w, b, a];
        }
        return null;
      };
      cs.to.hex = function() {
        var rgba = swizzle(arguments);
        return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
      };
      cs.to.rgb = function() {
        var rgba = swizzle(arguments);
        return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
      };
      cs.to.rgb.percent = function() {
        var rgba = swizzle(arguments);
        var r = Math.round(rgba[0] / 255 * 100);
        var g = Math.round(rgba[1] / 255 * 100);
        var b = Math.round(rgba[2] / 255 * 100);
        return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
      };
      cs.to.hsl = function() {
        var hsla = swizzle(arguments);
        return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
      };
      cs.to.hwb = function() {
        var hwba = swizzle(arguments);
        var a = "";
        if (hwba.length >= 4 && hwba[3] !== 1) {
          a = ", " + hwba[3];
        }
        return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
      };
      cs.to.keyword = function(rgb) {
        return reverseNames[rgb.slice(0, 3)];
      };
      function clamp(num, min, max) {
        return Math.min(Math.max(min, num), max);
      }
      function hexDouble(num) {
        var str = Math.round(num).toString(16).toUpperCase();
        return str.length < 2 ? "0" + str : str;
      }
    }
  });

  // node_modules/color-convert/conversions.js
  var require_conversions = __commonJS({
    "node_modules/color-convert/conversions.js"(exports, module) {
      var cssKeywords = require_color_name();
      var reverseKeywords = {};
      for (const key of Object.keys(cssKeywords)) {
        reverseKeywords[cssKeywords[key]] = key;
      }
      var convert = {
        rgb: { channels: 3, labels: "rgb" },
        hsl: { channels: 3, labels: "hsl" },
        hsv: { channels: 3, labels: "hsv" },
        hwb: { channels: 3, labels: "hwb" },
        cmyk: { channels: 4, labels: "cmyk" },
        xyz: { channels: 3, labels: "xyz" },
        lab: { channels: 3, labels: "lab" },
        lch: { channels: 3, labels: "lch" },
        hex: { channels: 1, labels: ["hex"] },
        keyword: { channels: 1, labels: ["keyword"] },
        ansi16: { channels: 1, labels: ["ansi16"] },
        ansi256: { channels: 1, labels: ["ansi256"] },
        hcg: { channels: 3, labels: ["h", "c", "g"] },
        apple: { channels: 3, labels: ["r16", "g16", "b16"] },
        gray: { channels: 1, labels: ["gray"] }
      };
      module.exports = convert;
      for (const model of Object.keys(convert)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }
        const { channels, labels } = convert[model];
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", { value: channels });
        Object.defineProperty(convert[model], "labels", { value: labels });
      }
      convert.rgb.hsl = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const delta = max - min;
        let h;
        let s;
        if (max === min) {
          h = 0;
        } else if (r === max) {
          h = (g - b) / delta;
        } else if (g === max) {
          h = 2 + (b - r) / delta;
        } else if (b === max) {
          h = 4 + (r - g) / delta;
        }
        h = Math.min(h * 60, 360);
        if (h < 0) {
          h += 360;
        }
        const l = (min + max) / 2;
        if (max === min) {
          s = 0;
        } else if (l <= 0.5) {
          s = delta / (max + min);
        } else {
          s = delta / (2 - max - min);
        }
        return [h, s * 100, l * 100];
      };
      convert.rgb.hsv = function(rgb) {
        let rdif;
        let gdif;
        let bdif;
        let h;
        let s;
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const v = Math.max(r, g, b);
        const diff = v - Math.min(r, g, b);
        const diffc = function(c) {
          return (v - c) / 6 / diff + 1 / 2;
        };
        if (diff === 0) {
          h = 0;
          s = 0;
        } else {
          s = diff / v;
          rdif = diffc(r);
          gdif = diffc(g);
          bdif = diffc(b);
          if (r === v) {
            h = bdif - gdif;
          } else if (g === v) {
            h = 1 / 3 + rdif - bdif;
          } else if (b === v) {
            h = 2 / 3 + gdif - rdif;
          }
          if (h < 0) {
            h += 1;
          } else if (h > 1) {
            h -= 1;
          }
        }
        return [
          h * 360,
          s * 100,
          v * 100
        ];
      };
      convert.rgb.hwb = function(rgb) {
        const r = rgb[0];
        const g = rgb[1];
        let b = rgb[2];
        const h = convert.rgb.hsl(rgb)[0];
        const w = 1 / 255 * Math.min(r, Math.min(g, b));
        b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
        return [h, w * 100, b * 100];
      };
      convert.rgb.cmyk = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const k = Math.min(1 - r, 1 - g, 1 - b);
        const c = (1 - r - k) / (1 - k) || 0;
        const m = (1 - g - k) / (1 - k) || 0;
        const y = (1 - b - k) / (1 - k) || 0;
        return [c * 100, m * 100, y * 100, k * 100];
      };
      function comparativeDistance(x, y) {
        return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
      }
      convert.rgb.keyword = function(rgb) {
        const reversed = reverseKeywords[rgb];
        if (reversed) {
          return reversed;
        }
        let currentClosestDistance = Infinity;
        let currentClosestKeyword;
        for (const keyword of Object.keys(cssKeywords)) {
          const value = cssKeywords[keyword];
          const distance = comparativeDistance(rgb, value);
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
        return currentClosestKeyword;
      };
      convert.keyword.rgb = function(keyword) {
        return cssKeywords[keyword];
      };
      convert.rgb.xyz = function(rgb) {
        let r = rgb[0] / 255;
        let g = rgb[1] / 255;
        let b = rgb[2] / 255;
        r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
        g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
        b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
        const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
        const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
        const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
        return [x * 100, y * 100, z * 100];
      };
      convert.rgb.lab = function(rgb) {
        const xyz = convert.rgb.xyz(rgb);
        let x = xyz[0];
        let y = xyz[1];
        let z = xyz[2];
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
        y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
        z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
        const l = 116 * y - 16;
        const a = 500 * (x - y);
        const b = 200 * (y - z);
        return [l, a, b];
      };
      convert.hsl.rgb = function(hsl) {
        const h = hsl[0] / 360;
        const s = hsl[1] / 100;
        const l = hsl[2] / 100;
        let t2;
        let t3;
        let val;
        if (s === 0) {
          val = l * 255;
          return [val, val, val];
        }
        if (l < 0.5) {
          t2 = l * (1 + s);
        } else {
          t2 = l + s - l * s;
        }
        const t1 = 2 * l - t2;
        const rgb = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
          t3 = h + 1 / 3 * -(i - 1);
          if (t3 < 0) {
            t3++;
          }
          if (t3 > 1) {
            t3--;
          }
          if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
          } else if (2 * t3 < 1) {
            val = t2;
          } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
          } else {
            val = t1;
          }
          rgb[i] = val * 255;
        }
        return rgb;
      };
      convert.hsl.hsv = function(hsl) {
        const h = hsl[0];
        let s = hsl[1] / 100;
        let l = hsl[2] / 100;
        let smin = s;
        const lmin = Math.max(l, 0.01);
        l *= 2;
        s *= l <= 1 ? l : 2 - l;
        smin *= lmin <= 1 ? lmin : 2 - lmin;
        const v = (l + s) / 2;
        const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
        return [h, sv * 100, v * 100];
      };
      convert.hsv.rgb = function(hsv) {
        const h = hsv[0] / 60;
        const s = hsv[1] / 100;
        let v = hsv[2] / 100;
        const hi = Math.floor(h) % 6;
        const f = h - Math.floor(h);
        const p = 255 * v * (1 - s);
        const q = 255 * v * (1 - s * f);
        const t = 255 * v * (1 - s * (1 - f));
        v *= 255;
        switch (hi) {
          case 0:
            return [v, t, p];
          case 1:
            return [q, v, p];
          case 2:
            return [p, v, t];
          case 3:
            return [p, q, v];
          case 4:
            return [t, p, v];
          case 5:
            return [v, p, q];
        }
      };
      convert.hsv.hsl = function(hsv) {
        const h = hsv[0];
        const s = hsv[1] / 100;
        const v = hsv[2] / 100;
        const vmin = Math.max(v, 0.01);
        let sl;
        let l;
        l = (2 - s) * v;
        const lmin = (2 - s) * vmin;
        sl = s * vmin;
        sl /= lmin <= 1 ? lmin : 2 - lmin;
        sl = sl || 0;
        l /= 2;
        return [h, sl * 100, l * 100];
      };
      convert.hwb.rgb = function(hwb) {
        const h = hwb[0] / 360;
        let wh = hwb[1] / 100;
        let bl = hwb[2] / 100;
        const ratio = wh + bl;
        let f;
        if (ratio > 1) {
          wh /= ratio;
          bl /= ratio;
        }
        const i = Math.floor(6 * h);
        const v = 1 - bl;
        f = 6 * h - i;
        if ((i & 1) !== 0) {
          f = 1 - f;
        }
        const n = wh + f * (v - wh);
        let r;
        let g;
        let b;
        switch (i) {
          default:
          case 6:
          case 0:
            r = v;
            g = n;
            b = wh;
            break;
          case 1:
            r = n;
            g = v;
            b = wh;
            break;
          case 2:
            r = wh;
            g = v;
            b = n;
            break;
          case 3:
            r = wh;
            g = n;
            b = v;
            break;
          case 4:
            r = n;
            g = wh;
            b = v;
            break;
          case 5:
            r = v;
            g = wh;
            b = n;
            break;
        }
        return [r * 255, g * 255, b * 255];
      };
      convert.cmyk.rgb = function(cmyk) {
        const c = cmyk[0] / 100;
        const m = cmyk[1] / 100;
        const y = cmyk[2] / 100;
        const k = cmyk[3] / 100;
        const r = 1 - Math.min(1, c * (1 - k) + k);
        const g = 1 - Math.min(1, m * (1 - k) + k);
        const b = 1 - Math.min(1, y * (1 - k) + k);
        return [r * 255, g * 255, b * 255];
      };
      convert.xyz.rgb = function(xyz) {
        const x = xyz[0] / 100;
        const y = xyz[1] / 100;
        const z = xyz[2] / 100;
        let r;
        let g;
        let b;
        r = x * 3.2406 + y * -1.5372 + z * -0.4986;
        g = x * -0.9689 + y * 1.8758 + z * 0.0415;
        b = x * 0.0557 + y * -0.204 + z * 1.057;
        r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
        g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
        b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
        r = Math.min(Math.max(0, r), 1);
        g = Math.min(Math.max(0, g), 1);
        b = Math.min(Math.max(0, b), 1);
        return [r * 255, g * 255, b * 255];
      };
      convert.xyz.lab = function(xyz) {
        let x = xyz[0];
        let y = xyz[1];
        let z = xyz[2];
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
        y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
        z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
        const l = 116 * y - 16;
        const a = 500 * (x - y);
        const b = 200 * (y - z);
        return [l, a, b];
      };
      convert.lab.xyz = function(lab) {
        const l = lab[0];
        const a = lab[1];
        const b = lab[2];
        let x;
        let y;
        let z;
        y = (l + 16) / 116;
        x = a / 500 + y;
        z = y - b / 200;
        const y2 = y ** 3;
        const x2 = x ** 3;
        const z2 = z ** 3;
        y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
        x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
        z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
        x *= 95.047;
        y *= 100;
        z *= 108.883;
        return [x, y, z];
      };
      convert.lab.lch = function(lab) {
        const l = lab[0];
        const a = lab[1];
        const b = lab[2];
        let h;
        const hr = Math.atan2(b, a);
        h = hr * 360 / 2 / Math.PI;
        if (h < 0) {
          h += 360;
        }
        const c = Math.sqrt(a * a + b * b);
        return [l, c, h];
      };
      convert.lch.lab = function(lch) {
        const l = lch[0];
        const c = lch[1];
        const h = lch[2];
        const hr = h / 360 * 2 * Math.PI;
        const a = c * Math.cos(hr);
        const b = c * Math.sin(hr);
        return [l, a, b];
      };
      convert.rgb.ansi16 = function(args, saturation = null) {
        const [r, g, b] = args;
        let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
        value = Math.round(value / 50);
        if (value === 0) {
          return 30;
        }
        let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
        if (value === 2) {
          ansi += 60;
        }
        return ansi;
      };
      convert.hsv.ansi16 = function(args) {
        return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
      };
      convert.rgb.ansi256 = function(args) {
        const r = args[0];
        const g = args[1];
        const b = args[2];
        if (r === g && g === b) {
          if (r < 8) {
            return 16;
          }
          if (r > 248) {
            return 231;
          }
          return Math.round((r - 8) / 247 * 24) + 232;
        }
        const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
        return ansi;
      };
      convert.ansi16.rgb = function(args) {
        let color = args % 10;
        if (color === 0 || color === 7) {
          if (args > 50) {
            color += 3.5;
          }
          color = color / 10.5 * 255;
          return [color, color, color];
        }
        const mult = (~~(args > 50) + 1) * 0.5;
        const r = (color & 1) * mult * 255;
        const g = (color >> 1 & 1) * mult * 255;
        const b = (color >> 2 & 1) * mult * 255;
        return [r, g, b];
      };
      convert.ansi256.rgb = function(args) {
        if (args >= 232) {
          const c = (args - 232) * 10 + 8;
          return [c, c, c];
        }
        args -= 16;
        let rem;
        const r = Math.floor(args / 36) / 5 * 255;
        const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
        const b = rem % 6 / 5 * 255;
        return [r, g, b];
      };
      convert.rgb.hex = function(args) {
        const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
        const string = integer.toString(16).toUpperCase();
        return "000000".substring(string.length) + string;
      };
      convert.hex.rgb = function(args) {
        const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!match) {
          return [0, 0, 0];
        }
        let colorString = match[0];
        if (match[0].length === 3) {
          colorString = colorString.split("").map((char) => {
            return char + char;
          }).join("");
        }
        const integer = parseInt(colorString, 16);
        const r = integer >> 16 & 255;
        const g = integer >> 8 & 255;
        const b = integer & 255;
        return [r, g, b];
      };
      convert.rgb.hcg = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const max = Math.max(Math.max(r, g), b);
        const min = Math.min(Math.min(r, g), b);
        const chroma = max - min;
        let grayscale;
        let hue;
        if (chroma < 1) {
          grayscale = min / (1 - chroma);
        } else {
          grayscale = 0;
        }
        if (chroma <= 0) {
          hue = 0;
        } else if (max === r) {
          hue = (g - b) / chroma % 6;
        } else if (max === g) {
          hue = 2 + (b - r) / chroma;
        } else {
          hue = 4 + (r - g) / chroma;
        }
        hue /= 6;
        hue %= 1;
        return [hue * 360, chroma * 100, grayscale * 100];
      };
      convert.hsl.hcg = function(hsl) {
        const s = hsl[1] / 100;
        const l = hsl[2] / 100;
        const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
        let f = 0;
        if (c < 1) {
          f = (l - 0.5 * c) / (1 - c);
        }
        return [hsl[0], c * 100, f * 100];
      };
      convert.hsv.hcg = function(hsv) {
        const s = hsv[1] / 100;
        const v = hsv[2] / 100;
        const c = s * v;
        let f = 0;
        if (c < 1) {
          f = (v - c) / (1 - c);
        }
        return [hsv[0], c * 100, f * 100];
      };
      convert.hcg.rgb = function(hcg) {
        const h = hcg[0] / 360;
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        if (c === 0) {
          return [g * 255, g * 255, g * 255];
        }
        const pure = [0, 0, 0];
        const hi = h % 1 * 6;
        const v = hi % 1;
        const w = 1 - v;
        let mg = 0;
        switch (Math.floor(hi)) {
          case 0:
            pure[0] = 1;
            pure[1] = v;
            pure[2] = 0;
            break;
          case 1:
            pure[0] = w;
            pure[1] = 1;
            pure[2] = 0;
            break;
          case 2:
            pure[0] = 0;
            pure[1] = 1;
            pure[2] = v;
            break;
          case 3:
            pure[0] = 0;
            pure[1] = w;
            pure[2] = 1;
            break;
          case 4:
            pure[0] = v;
            pure[1] = 0;
            pure[2] = 1;
            break;
          default:
            pure[0] = 1;
            pure[1] = 0;
            pure[2] = w;
        }
        mg = (1 - c) * g;
        return [
          (c * pure[0] + mg) * 255,
          (c * pure[1] + mg) * 255,
          (c * pure[2] + mg) * 255
        ];
      };
      convert.hcg.hsv = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const v = c + g * (1 - c);
        let f = 0;
        if (v > 0) {
          f = c / v;
        }
        return [hcg[0], f * 100, v * 100];
      };
      convert.hcg.hsl = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const l = g * (1 - c) + 0.5 * c;
        let s = 0;
        if (l > 0 && l < 0.5) {
          s = c / (2 * l);
        } else if (l >= 0.5 && l < 1) {
          s = c / (2 * (1 - l));
        }
        return [hcg[0], s * 100, l * 100];
      };
      convert.hcg.hwb = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const v = c + g * (1 - c);
        return [hcg[0], (v - c) * 100, (1 - v) * 100];
      };
      convert.hwb.hcg = function(hwb) {
        const w = hwb[1] / 100;
        const b = hwb[2] / 100;
        const v = 1 - b;
        const c = v - w;
        let g = 0;
        if (c < 1) {
          g = (v - c) / (1 - c);
        }
        return [hwb[0], c * 100, g * 100];
      };
      convert.apple.rgb = function(apple) {
        return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
      };
      convert.rgb.apple = function(rgb) {
        return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
      };
      convert.gray.rgb = function(args) {
        return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
      };
      convert.gray.hsl = function(args) {
        return [0, 0, args[0]];
      };
      convert.gray.hsv = convert.gray.hsl;
      convert.gray.hwb = function(gray) {
        return [0, 100, gray[0]];
      };
      convert.gray.cmyk = function(gray) {
        return [0, 0, 0, gray[0]];
      };
      convert.gray.lab = function(gray) {
        return [gray[0], 0, 0];
      };
      convert.gray.hex = function(gray) {
        const val = Math.round(gray[0] / 100 * 255) & 255;
        const integer = (val << 16) + (val << 8) + val;
        const string = integer.toString(16).toUpperCase();
        return "000000".substring(string.length) + string;
      };
      convert.rgb.gray = function(rgb) {
        const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
        return [val / 255 * 100];
      };
    }
  });

  // node_modules/color-convert/route.js
  var require_route = __commonJS({
    "node_modules/color-convert/route.js"(exports, module) {
      var conversions = require_conversions();
      function buildGraph() {
        const graph = {};
        const models = Object.keys(conversions);
        for (let len = models.length, i = 0; i < len; i++) {
          graph[models[i]] = {
            distance: -1,
            parent: null
          };
        }
        return graph;
      }
      function deriveBFS(fromModel) {
        const graph = buildGraph();
        const queue2 = [fromModel];
        graph[fromModel].distance = 0;
        while (queue2.length) {
          const current = queue2.pop();
          const adjacents = Object.keys(conversions[current]);
          for (let len = adjacents.length, i = 0; i < len; i++) {
            const adjacent = adjacents[i];
            const node = graph[adjacent];
            if (node.distance === -1) {
              node.distance = graph[current].distance + 1;
              node.parent = current;
              queue2.unshift(adjacent);
            }
          }
        }
        return graph;
      }
      function link(from, to) {
        return function(args) {
          return to(from(args));
        };
      }
      function wrapConversion(toModel, graph) {
        const path = [graph[toModel].parent, toModel];
        let fn = conversions[graph[toModel].parent][toModel];
        let cur = graph[toModel].parent;
        while (graph[cur].parent) {
          path.unshift(graph[cur].parent);
          fn = link(conversions[graph[cur].parent][cur], fn);
          cur = graph[cur].parent;
        }
        fn.conversion = path;
        return fn;
      }
      module.exports = function(fromModel) {
        const graph = deriveBFS(fromModel);
        const conversion = {};
        const models = Object.keys(graph);
        for (let len = models.length, i = 0; i < len; i++) {
          const toModel = models[i];
          const node = graph[toModel];
          if (node.parent === null) {
            continue;
          }
          conversion[toModel] = wrapConversion(toModel, graph);
        }
        return conversion;
      };
    }
  });

  // node_modules/color-convert/index.js
  var require_color_convert = __commonJS({
    "node_modules/color-convert/index.js"(exports, module) {
      var conversions = require_conversions();
      var route = require_route();
      var convert = {};
      var models = Object.keys(conversions);
      function wrapRaw(fn) {
        const wrappedFn = function(...args) {
          const arg0 = args[0];
          if (arg0 === void 0 || arg0 === null) {
            return arg0;
          }
          if (arg0.length > 1) {
            args = arg0;
          }
          return fn(args);
        };
        if ("conversion" in fn) {
          wrappedFn.conversion = fn.conversion;
        }
        return wrappedFn;
      }
      function wrapRounded(fn) {
        const wrappedFn = function(...args) {
          const arg0 = args[0];
          if (arg0 === void 0 || arg0 === null) {
            return arg0;
          }
          if (arg0.length > 1) {
            args = arg0;
          }
          const result = fn(args);
          if (typeof result === "object") {
            for (let len = result.length, i = 0; i < len; i++) {
              result[i] = Math.round(result[i]);
            }
          }
          return result;
        };
        if ("conversion" in fn) {
          wrappedFn.conversion = fn.conversion;
        }
        return wrappedFn;
      }
      models.forEach((fromModel) => {
        convert[fromModel] = {};
        Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
        Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
        const routes = route(fromModel);
        const routeModels = Object.keys(routes);
        routeModels.forEach((toModel) => {
          const fn = routes[toModel];
          convert[fromModel][toModel] = wrapRounded(fn);
          convert[fromModel][toModel].raw = wrapRaw(fn);
        });
      });
      module.exports = convert;
    }
  });

  // node_modules/color/index.js
  var require_color2 = __commonJS({
    "node_modules/color/index.js"(exports, module) {
      var colorString = require_color_string();
      var convert = require_color_convert();
      var skippedModels = [
        "keyword",
        "gray",
        "hex"
      ];
      var hashedModelKeys = {};
      for (const model of Object.keys(convert)) {
        hashedModelKeys[[...convert[model].labels].sort().join("")] = model;
      }
      var limiters = {};
      function Color(object, model) {
        if (!(this instanceof Color)) {
          return new Color(object, model);
        }
        if (model && model in skippedModels) {
          model = null;
        }
        if (model && !(model in convert)) {
          throw new Error("Unknown model: " + model);
        }
        let i;
        let channels;
        if (object == null) {
          this.model = "rgb";
          this.color = [0, 0, 0];
          this.valpha = 1;
        } else if (object instanceof Color) {
          this.model = object.model;
          this.color = [...object.color];
          this.valpha = object.valpha;
        } else if (typeof object === "string") {
          const result = colorString.get(object);
          if (result === null) {
            throw new Error("Unable to parse color from string: " + object);
          }
          this.model = result.model;
          channels = convert[this.model].channels;
          this.color = result.value.slice(0, channels);
          this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
        } else if (object.length > 0) {
          this.model = model || "rgb";
          channels = convert[this.model].channels;
          const newArray = Array.prototype.slice.call(object, 0, channels);
          this.color = zeroArray(newArray, channels);
          this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
        } else if (typeof object === "number") {
          this.model = "rgb";
          this.color = [
            object >> 16 & 255,
            object >> 8 & 255,
            object & 255
          ];
          this.valpha = 1;
        } else {
          this.valpha = 1;
          const keys = Object.keys(object);
          if ("alpha" in object) {
            keys.splice(keys.indexOf("alpha"), 1);
            this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
          }
          const hashedKeys = keys.sort().join("");
          if (!(hashedKeys in hashedModelKeys)) {
            throw new Error("Unable to parse color from object: " + JSON.stringify(object));
          }
          this.model = hashedModelKeys[hashedKeys];
          const { labels } = convert[this.model];
          const color = [];
          for (i = 0; i < labels.length; i++) {
            color.push(object[labels[i]]);
          }
          this.color = zeroArray(color);
        }
        if (limiters[this.model]) {
          channels = convert[this.model].channels;
          for (i = 0; i < channels; i++) {
            const limit = limiters[this.model][i];
            if (limit) {
              this.color[i] = limit(this.color[i]);
            }
          }
        }
        this.valpha = Math.max(0, Math.min(1, this.valpha));
        if (Object.freeze) {
          Object.freeze(this);
        }
      }
      Color.prototype = {
        toString() {
          return this.string();
        },
        toJSON() {
          return this[this.model]();
        },
        string(places) {
          let self2 = this.model in colorString.to ? this : this.rgb();
          self2 = self2.round(typeof places === "number" ? places : 1);
          const args = self2.valpha === 1 ? self2.color : [...self2.color, this.valpha];
          return colorString.to[self2.model](args);
        },
        percentString(places) {
          const self2 = this.rgb().round(typeof places === "number" ? places : 1);
          const args = self2.valpha === 1 ? self2.color : [...self2.color, this.valpha];
          return colorString.to.rgb.percent(args);
        },
        array() {
          return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
        },
        object() {
          const result = {};
          const { channels } = convert[this.model];
          const { labels } = convert[this.model];
          for (let i = 0; i < channels; i++) {
            result[labels[i]] = this.color[i];
          }
          if (this.valpha !== 1) {
            result.alpha = this.valpha;
          }
          return result;
        },
        unitArray() {
          const rgb = this.rgb().color;
          rgb[0] /= 255;
          rgb[1] /= 255;
          rgb[2] /= 255;
          if (this.valpha !== 1) {
            rgb.push(this.valpha);
          }
          return rgb;
        },
        unitObject() {
          const rgb = this.rgb().object();
          rgb.r /= 255;
          rgb.g /= 255;
          rgb.b /= 255;
          if (this.valpha !== 1) {
            rgb.alpha = this.valpha;
          }
          return rgb;
        },
        round(places) {
          places = Math.max(places || 0, 0);
          return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
        },
        alpha(value) {
          if (value !== void 0) {
            return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
          }
          return this.valpha;
        },
        red: getset("rgb", 0, maxfn(255)),
        green: getset("rgb", 1, maxfn(255)),
        blue: getset("rgb", 2, maxfn(255)),
        hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
        saturationl: getset("hsl", 1, maxfn(100)),
        lightness: getset("hsl", 2, maxfn(100)),
        saturationv: getset("hsv", 1, maxfn(100)),
        value: getset("hsv", 2, maxfn(100)),
        chroma: getset("hcg", 1, maxfn(100)),
        gray: getset("hcg", 2, maxfn(100)),
        white: getset("hwb", 1, maxfn(100)),
        wblack: getset("hwb", 2, maxfn(100)),
        cyan: getset("cmyk", 0, maxfn(100)),
        magenta: getset("cmyk", 1, maxfn(100)),
        yellow: getset("cmyk", 2, maxfn(100)),
        black: getset("cmyk", 3, maxfn(100)),
        x: getset("xyz", 0, maxfn(95.047)),
        y: getset("xyz", 1, maxfn(100)),
        z: getset("xyz", 2, maxfn(108.833)),
        l: getset("lab", 0, maxfn(100)),
        a: getset("lab", 1),
        b: getset("lab", 2),
        keyword(value) {
          if (value !== void 0) {
            return new Color(value);
          }
          return convert[this.model].keyword(this.color);
        },
        hex(value) {
          if (value !== void 0) {
            return new Color(value);
          }
          return colorString.to.hex(this.rgb().round().color);
        },
        hexa(value) {
          if (value !== void 0) {
            return new Color(value);
          }
          const rgbArray = this.rgb().round().color;
          let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
          if (alphaHex.length === 1) {
            alphaHex = "0" + alphaHex;
          }
          return colorString.to.hex(rgbArray) + alphaHex;
        },
        rgbNumber() {
          const rgb = this.rgb().color;
          return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
        },
        luminosity() {
          const rgb = this.rgb().color;
          const lum = [];
          for (const [i, element] of rgb.entries()) {
            const chan = element / 255;
            lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
          }
          return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
        },
        contrast(color2) {
          const lum1 = this.luminosity();
          const lum2 = color2.luminosity();
          if (lum1 > lum2) {
            return (lum1 + 0.05) / (lum2 + 0.05);
          }
          return (lum2 + 0.05) / (lum1 + 0.05);
        },
        level(color2) {
          const contrastRatio = this.contrast(color2);
          if (contrastRatio >= 7) {
            return "AAA";
          }
          return contrastRatio >= 4.5 ? "AA" : "";
        },
        isDark() {
          const rgb = this.rgb().color;
          const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
          return yiq < 128;
        },
        isLight() {
          return !this.isDark();
        },
        negate() {
          const rgb = this.rgb();
          for (let i = 0; i < 3; i++) {
            rgb.color[i] = 255 - rgb.color[i];
          }
          return rgb;
        },
        lighten(ratio) {
          const hsl = this.hsl();
          hsl.color[2] += hsl.color[2] * ratio;
          return hsl;
        },
        darken(ratio) {
          const hsl = this.hsl();
          hsl.color[2] -= hsl.color[2] * ratio;
          return hsl;
        },
        saturate(ratio) {
          const hsl = this.hsl();
          hsl.color[1] += hsl.color[1] * ratio;
          return hsl;
        },
        desaturate(ratio) {
          const hsl = this.hsl();
          hsl.color[1] -= hsl.color[1] * ratio;
          return hsl;
        },
        whiten(ratio) {
          const hwb = this.hwb();
          hwb.color[1] += hwb.color[1] * ratio;
          return hwb;
        },
        blacken(ratio) {
          const hwb = this.hwb();
          hwb.color[2] += hwb.color[2] * ratio;
          return hwb;
        },
        grayscale() {
          const rgb = this.rgb().color;
          const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
          return Color.rgb(value, value, value);
        },
        fade(ratio) {
          return this.alpha(this.valpha - this.valpha * ratio);
        },
        opaquer(ratio) {
          return this.alpha(this.valpha + this.valpha * ratio);
        },
        rotate(degrees) {
          const hsl = this.hsl();
          let hue = hsl.color[0];
          hue = (hue + degrees) % 360;
          hue = hue < 0 ? 360 + hue : hue;
          hsl.color[0] = hue;
          return hsl;
        },
        mix(mixinColor, weight) {
          if (!mixinColor || !mixinColor.rgb) {
            throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
          }
          const color1 = mixinColor.rgb();
          const color2 = this.rgb();
          const p = weight === void 0 ? 0.5 : weight;
          const w = 2 * p - 1;
          const a = color1.alpha() - color2.alpha();
          const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
          const w2 = 1 - w1;
          return Color.rgb(
            w1 * color1.red() + w2 * color2.red(),
            w1 * color1.green() + w2 * color2.green(),
            w1 * color1.blue() + w2 * color2.blue(),
            color1.alpha() * p + color2.alpha() * (1 - p)
          );
        }
      };
      for (const model of Object.keys(convert)) {
        if (skippedModels.includes(model)) {
          continue;
        }
        const { channels } = convert[model];
        Color.prototype[model] = function(...args) {
          if (this.model === model) {
            return new Color(this);
          }
          if (args.length > 0) {
            return new Color(args, model);
          }
          return new Color([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
        };
        Color[model] = function(...args) {
          let color = args[0];
          if (typeof color === "number") {
            color = zeroArray(args, channels);
          }
          return new Color(color, model);
        };
      }
      function roundTo(number, places) {
        return Number(number.toFixed(places));
      }
      function roundToPlace(places) {
        return function(number) {
          return roundTo(number, places);
        };
      }
      function getset(model, channel, modifier) {
        model = Array.isArray(model) ? model : [model];
        for (const m of model) {
          (limiters[m] || (limiters[m] = []))[channel] = modifier;
        }
        model = model[0];
        return function(value) {
          let result;
          if (value !== void 0) {
            if (modifier) {
              value = modifier(value);
            }
            result = this[model]();
            result.color[channel] = value;
            return result;
          }
          result = this[model]().color[channel];
          if (modifier) {
            result = modifier(result);
          }
          return result;
        };
      }
      function maxfn(max) {
        return function(v) {
          return Math.max(0, Math.min(max, v));
        };
      }
      function assertArray(value) {
        return Array.isArray(value) ? value : [value];
      }
      function zeroArray(array, length) {
        for (let i = 0; i < length; i++) {
          if (typeof array[i] !== "number") {
            array[i] = 0;
          }
        }
        return array;
      }
      module.exports = Color;
    }
  });

  // node_modules/tailwindcss-themer/lib/utils/colorUtils.js
  var require_colorUtils = __commonJS({
    "node_modules/tailwindcss-themer/lib/utils/colorUtils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isColor = exports.withOpacity = exports.toRgb = void 0;
      var tslib_1 = require_tslib();
      var color_1 = tslib_1.__importDefault(require_color2());
      var toRgb = (value) => {
        const [r, g, b] = (0, color_1.default)(value).rgb().array();
        return `${r}, ${g}, ${b}`;
      };
      exports.toRgb = toRgb;
      var withOpacity = (customPropName) => ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== void 0) {
          return `rgba(var(${customPropName}), ${opacityValue})`;
        }
        if (opacityVariable !== void 0) {
          return `rgba(var(${customPropName}), var(${opacityVariable}, 1))`;
        }
        return `rgb(var(${customPropName}))`;
      };
      exports.withOpacity = withOpacity;
      var isColor = (value) => {
        if (typeof value === "number") {
          return false;
        }
        try {
          (0, color_1.default)(value);
          return true;
        } catch (_a) {
          return false;
        }
      };
      exports.isColor = isColor;
    }
  });

  // node_modules/tailwindcss-themer/lib/utils/customPropUtils.js
  var require_customPropUtils = __commonJS({
    "node_modules/tailwindcss-themer/lib/utils/customPropUtils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.asCustomProp = exports.toCustomPropName = exports.toCustomPropValue = void 0;
      var colorUtils_1 = require_colorUtils();
      var toCustomPropValue = (value) => {
        if (typeof value === "number") {
          return value.toString();
        } else if ((0, colorUtils_1.isColor)(value)) {
          return (0, colorUtils_1.toRgb)(value);
        } else {
          return value;
        }
      };
      exports.toCustomPropValue = toCustomPropValue;
      var whitespaceRegex = /\s/g;
      var toCustomPropName = (valuePath) => {
        if (valuePath.some((x) => whitespaceRegex.test(x))) {
          throw new Error(`cannot have whitespace in any property in a theme config, found "${valuePath.find((x) => whitespaceRegex.test(x))}"`);
        }
        return `--${valuePath.filter((step) => step.toLowerCase() !== "default").join("-")}`;
      };
      exports.toCustomPropName = toCustomPropName;
      var asCustomProp = (value, valuePath) => {
        const customPropName = (0, exports.toCustomPropName)(valuePath);
        if ((0, colorUtils_1.isColor)(value)) {
          return (0, colorUtils_1.withOpacity)(customPropName);
        } else {
          return `var(${customPropName})`;
        }
      };
      exports.asCustomProp = asCustomProp;
    }
  });

  // node_modules/tailwindcss-themer/lib/utils/themeUtils.js
  var require_themeUtils = __commonJS({
    "node_modules/tailwindcss-themer/lib/utils/themeUtils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.resolveThemeExtensionsAsTailwindExtension = exports.resolveThemeExtensionAsCustomProps = void 0;
      var tslib_1 = require_tslib();
      var lodash_merge_1 = tslib_1.__importDefault(require_lodash());
      var lodash_mergewith_1 = tslib_1.__importDefault(require_lodash2());
      var customPropUtils_1 = require_customPropUtils();
      var resolveThemeExtensionAsCustomPropsRecursionHelper = (themeExtensionValue, api, pathSteps = []) => typeof themeExtensionValue === "undefined" || themeExtensionValue === null ? {} : Array.isArray(themeExtensionValue) ? themeExtensionValue.map((x, i) => resolveThemeExtensionAsCustomPropsRecursionHelper(x, api, [
        ...pathSteps,
        i.toString()
      ])).reduce((acc, curr) => Object.assign(Object.assign({}, acc), curr), {}) : typeof themeExtensionValue === "function" ? (() => {
        if (pathSteps.length === 1) {
          return resolveThemeExtensionAsCustomPropsRecursionHelper(themeExtensionValue({ theme: api.theme }), api, pathSteps);
        } else {
          throw new Error(`callback found on path "${pathSteps.join(".")}" and they are only allowed at the top level`);
        }
      })() : typeof themeExtensionValue === "object" ? Object.entries(themeExtensionValue).reduce((acc, [key, value]) => Object.assign(Object.assign({}, acc), resolveThemeExtensionAsCustomPropsRecursionHelper(value, api, [
        ...pathSteps,
        key
      ])), {}) : typeof themeExtensionValue === "string" || typeof themeExtensionValue === "number" ? {
        [(0, customPropUtils_1.toCustomPropName)(pathSteps)]: (0, customPropUtils_1.toCustomPropValue)(themeExtensionValue)
      } : (() => {
        throw new Error(`unusable value found in config on path "${pathSteps.join(".")}"`);
      })();
      var resolveThemeExtensionAsCustomProps = (themeExtension, api) => resolveThemeExtensionAsCustomPropsRecursionHelper(themeExtension, api);
      exports.resolveThemeExtensionAsCustomProps = resolveThemeExtensionAsCustomProps;
      var toThemeExtensionResolverCallback = (value, valuePath) => (theme2) => {
        const config = value(theme2);
        return resolveThemeExtensionsAsTailwindExtensionRecursionHelper(config, valuePath);
      };
      var resolveThemeExtensionsAsTailwindExtensionRecursionHelper = (themeExtensionValue, pathSteps = []) => typeof themeExtensionValue === "undefined" || themeExtensionValue === null ? themeExtensionValue : Array.isArray(themeExtensionValue) ? themeExtensionValue.map((x, i) => resolveThemeExtensionsAsTailwindExtensionRecursionHelper(x, [
        ...pathSteps,
        i.toString()
      ])) : typeof themeExtensionValue === "function" ? (() => {
        if (pathSteps.length === 1) {
          return toThemeExtensionResolverCallback(themeExtensionValue, pathSteps);
        } else {
          throw new Error(`callback found on path "${pathSteps.join(".")}" and they are only allowed at the top level`);
        }
      })() : typeof themeExtensionValue === "object" ? Object.entries(themeExtensionValue).reduce((acc, [key, value]) => Object.assign(Object.assign({}, acc), { [key]: resolveThemeExtensionsAsTailwindExtensionRecursionHelper(value, [...pathSteps, key]) }), {}) : (0, customPropUtils_1.asCustomProp)(themeExtensionValue, pathSteps);
      var mergeAndResolveCallbacks = (objectVal, srcVal) => {
        if (typeof objectVal === "undefined") {
          return;
        } else if (typeof objectVal === "function" || typeof srcVal === "function") {
          return (...params) => {
            const objectValResolved = typeof objectVal === "function" ? objectVal(...params) : objectVal;
            const srcValResolved = typeof srcVal === "function" ? srcVal(...params) : srcVal;
            if (typeof objectValResolved === "function" || typeof srcValResolved === "function") {
              throw new Error("nested callbacks are not supported in tailwind config");
            } else if (typeof objectValResolved !== typeof srcValResolved) {
              throw new Error("all callbacks must return values with types mergable with other themes e.g. a callback that returns a string must be set to a property that other themes dont have objects set to it");
            }
            return (0, lodash_merge_1.default)(objectValResolved, srcValResolved);
          };
        } else if (typeof objectVal !== typeof srcVal && (typeof objectVal === "object" || typeof srcVal === "object")) {
          const objectValResolved = typeof objectVal === "object" ? objectVal : { DEFAULT: objectVal };
          const srcValResolved = typeof srcVal === "object" ? srcVal : { DEFAULT: srcVal };
          return (0, lodash_merge_1.default)(objectValResolved, srcValResolved);
        } else {
          return void 0;
        }
      };
      var resolveThemeExtensionsAsTailwindExtension = (themes) => {
        const mergedThemeExtension = (0, lodash_mergewith_1.default)({}, ...themes.map((x) => x.extend), mergeAndResolveCallbacks);
        return resolveThemeExtensionsAsTailwindExtensionRecursionHelper(mergedThemeExtension);
      };
      exports.resolveThemeExtensionsAsTailwindExtension = resolveThemeExtensionsAsTailwindExtension;
    }
  });

  // node_modules/tailwindcss-themer/lib/index.js
  var require_lib = __commonJS({
    "node_modules/tailwindcss-themer/lib/index.js"(exports, module) {
      "use strict";
      var tslib_1 = require_tslib();
      var plugin_1 = tslib_1.__importDefault(require_plugin());
      var optionsUtils_1 = require_optionsUtils();
      var themeUtils_1 = require_themeUtils();
      var defaultOptions = {
        defaultTheme: { extend: {} },
        themes: []
      };
      var addThemeVariants = (themes, { addVariant, e }) => void themes.map(({ name }) => addVariant(name === optionsUtils_1.defaultThemeName ? "defaultTheme" : name, `.${e(name === optionsUtils_1.defaultThemeName ? "defaultTheme" : name)} &`));
      var addThemeStyles = (themes, api) => {
        const { addBase, e } = api;
        themes.forEach(({ name, extend: extend3 }) => {
          addBase({
            [name === optionsUtils_1.defaultThemeName ? ":root" : `.${e(name)}`]: (0, themeUtils_1.resolveThemeExtensionAsCustomProps)(extend3, api)
          });
        });
      };
      var multiThemePlugin = plugin_1.default.withOptions((options = defaultOptions) => (api) => {
        const themes = (0, optionsUtils_1.getThemesFromOptions)(options);
        addThemeVariants(themes, api);
        addThemeStyles(themes, api);
      }, (options = defaultOptions) => ({
        theme: {
          extend: (0, themeUtils_1.resolveThemeExtensionsAsTailwindExtension)((0, optionsUtils_1.getThemesFromOptions)(options))
        }
      }));
      module.exports = multiThemePlugin;
    }
  });

  // tailwind.config.js
  var require_tailwind_config = __commonJS({
    "tailwind.config.js"(exports, module) {
      var plugin2 = require_plugin();
      module.exports = {
        content: ["./**/*.php"],
        safelist: [
          {
            pattern: /justify-/,
            variants: ["sm", "md", "lg"]
          },
          {
            pattern: /text-(xs|sm|lg|xl)/
          },
          {
            pattern: /(text|bg)-(black|white|primary|gray|gray-700|primary-50|primary-600|red|red-50|red-800|green-50|green-700|neon|neon-800|success|warning|error)$/
          },
          {
            pattern: /bg-(pale(rose|purple|peach|cyan|pink|blue|green)|default)$/
          },
          {
            pattern: /bg-wmde20-(green|yellow|purple|white)$/
          },
          {
            pattern: /bg-bonbon-(primary|success|warning|default)$/
          },
          {
            pattern: /mt-(36|0)/
          }
        ],
        theme: {
          screens: {
            xxs: "120px",
            xs: "320px",
            sm: "640px",
            md: "821px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px"
          },
          fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "2rem",
            "4xl": "2.5rem",
            "5xl": "3.5rem",
            "6xl": "6rem",
            "3vw": "10vw"
          },
          fontFamily: {
            alt: ["Montserrat", "sans-serif"],
            sans: ["Roboto", "sans-serif"]
          },
          fontWeight: {
            normal: 300,
            robotonormal: 320,
            medium: 400,
            semibold: 500,
            bold: 700
          },
          extend: {
            spacing: {
              "desktopscrolledheader": "140px",
              "mobilescrolledheader": "130px"
            },
            dropShadow: {
              navbar: ["0px 3px 8px rgba(0, 0, 0, 0.24)"]
            },
            boxShadow: {
              xl: "0 0px 60px -15px rgba(0, 0, 0, 0.3)",
              navbar: "0 8px 30px rgb(0,0,0,0.12);",
              hard: "-10px 10px 0 0 rgb(0,0,0,1);"
            },
            maxWidth: {
              32: "8rem"
            },
            minHeight: {
              32: "8rem"
            },
            height: {
              specialscreen: "calc(100vh - 5rem)"
            },
            maxHeight: {
              "screen-80": "80vh",
              "screen-1/2": "50vh",
              specialscreen: "calc(100vh - 5rem)",
              mobilespecialscreen: "calc(100vh - 2.5rem)"
            },
            scale: {
              cards: "1.01"
            },
            containers: {
              "2xs": "13.125rem"
            },
            keyframes: {
              float: {
                "0%, 100%": { transform: "translateY(0%)" },
                "50%": { transform: "translateY(20%)" }
              }
            },
            animation: {
              float: "float 5s ease-in-out infinite",
              floatslow: "float 7s ease-in-out infinite",
              floatfast: "float 3s ease-in-out infinite"
            }
          }
        },
        corePlugins: {
          aspectRatio: false
        },
        plugins: [
          require_src(),
          require_dist(),
          require_src2(),
          require_lib()({
            defaultTheme: {
              extend: {
                colors: {
                  primary: {
                    50: "#e5eeff",
                    100: "#cfe0ff",
                    200: "#a9c3ff",
                    300: "#7599ff",
                    400: "#3f5dff",
                    500: "#1423ff",
                    600: "#0008ff",
                    700: "#0009ff",
                    800: "#0008e3",
                    900: "#000094",
                    DEFAULT: "#000068"
                  },
                  secondary: {
                    50: "#f7f7f7",
                    DEFAULT: "#f7f7f7",
                    100: "#e3e3e3",
                    200: "#c8c8c8",
                    300: "#a4a4a4",
                    400: "#818181",
                    500: "#666666",
                    600: "#515151",
                    700: "#434343",
                    800: "#383838",
                    900: "#000000"
                  },
                  focus: {
                    50: "#e7f6ff",
                    100: "#d3efff",
                    200: "#b0dfff",
                    300: "#81c8ff",
                    400: "#4fa1ff",
                    500: "#2878ff",
                    DEFAULT: "#2878ff",
                    600: "#044bff",
                    700: "#0049ff",
                    800: "#0038c4",
                    900: "#0b3aa4"
                  },
                  black: {
                    DEFAULT: "black"
                  },
                  red: {
                    50: "#fff0f2",
                    100: "#ffe2e6",
                    200: "#ffc9d4",
                    300: "#ff9db1",
                    400: "#ff6688",
                    DEFAULT: "#ff3164",
                    600: "#f21b5a",
                    650: "#f21b5a",
                    700: "#cb0544",
                    800: "#B0003E",
                    900: "#910a3d"
                  },
                  gray: {
                    50: "#f7f7f7",
                    100: "#DCDCDC",
                    200: "#c8c8c8",
                    300: "#a4a4a4",
                    400: "#797979",
                    DEFAULT: "#F6F6F6",
                    500: "#666666",
                    600: "#515151",
                    700: "#434343",
                    800: "#383838",
                    900: "#313131"
                  },
                  green: {
                    50: "#edfcf4",
                    100: "#d2f9e2",
                    200: "#a9f1cb",
                    300: "#72e3ae",
                    400: "#39ce8e",
                    500: "#15b474",
                    600: "#0a915e",
                    DEFAULT: "#087951",
                    800: "#095c3f",
                    900: "#084c35"
                  },
                  neon: {
                    50: "#fcffe5",
                    100: "#f5ffc8",
                    DEFAULT: "#ebff9a",
                    300: "#d8fb5b",
                    400: "#c4f229",
                    500: "#a5d80a",
                    600: "#80ad03",
                    700: "#608308",
                    800: "#4d670d",
                    900: "#415710"
                  },
                  orange: {
                    50: "#fffaec",
                    100: "#fff3d3",
                    200: "#ffe4a5",
                    300: "#ffce6d",
                    400: "#ffae32",
                    500: "#ff930a",
                    DEFAULT: "#ff7b00",
                    700: "#cc5902",
                    800: "#a1450b",
                    900: "#823b0c",
                    950: "#461b04"
                  },
                  wmde20: {
                    green: "#7CA88B",
                    yellow: "#FAE49B",
                    purple: "#A59DD8",
                    white: "#fff",
                    DEFAULT: "#A59DD8"
                  },
                  bonbon: {
                    success: "#D2EADE",
                    primary: "#D8DEFF",
                    warning: "#FBE0D0",
                    DEFAULT: "#D8DEFF"
                  }
                }
              }
            },
            themes: [
              {
                name: "team-members-scheme",
                extend: {
                  colors: {
                    palerose: {
                      DEFAULT: "#FBC5B4"
                    },
                    palepurple: {
                      DEFAULT: "#E0D3FF"
                    },
                    palepeach: {
                      DEFAULT: "#FADAB6"
                    },
                    palecyan: {
                      DEFAULT: "#D4E9DE"
                    },
                    palepink: {
                      DEFAULT: "#F7DAEF"
                    },
                    paleblue: {
                      DEFAULT: "#C0D8F4"
                    },
                    palegreen: {
                      DEFAULT: "#E3F9D6"
                    },
                    default: {
                      DEFAULT: "#d5d2d7"
                    }
                  }
                }
              },
              {
                name: "orga-scheme",
                extend: {
                  colors: {
                    red: {
                      DEFAULT: "#D04425"
                    },
                    cyan: {
                      DEFAULT: "#00B9FF"
                    },
                    blue: {
                      DEFAULT: "#3A25FF",
                      200: "#EEEAFF"
                    },
                    black: {
                      DEFAULT: "#000"
                    }
                  }
                }
              },
              {
                name: "white-scheme",
                extend: {
                  colors: {
                    primary: {
                      DEFAULT: "#fff"
                    },
                    black: {
                      DEFAULT: "#fff"
                    }
                  }
                }
              }
            ]
          })
        ]
      };
    }
  });

  // src/js/tailwindhelpers.js
  var tailwindhelpers_exports = {};
  __export(tailwindhelpers_exports, {
    fullConfig: () => fullConfig,
    getBreakpointValue: () => getBreakpointValue,
    getCurrentBreakpoint: () => getCurrentBreakpoint,
    isMinBreakpoint: () => isMinBreakpoint
  });
  var import_resolveConfig = __toESM(require_resolveConfig2());
  var import_tailwind = __toESM(require_tailwind_config());
  var fullConfig = (0, import_resolveConfig.default)(import_tailwind.default);
  var getBreakpointValue = (bpName) => {
    if (bpName == "" || typeof bpName == "undefined") {
      return 0;
    } else {
      let bpValue = fullConfig.theme.screens[bpName];
      bpValue = bpValue.slice(0, bpValue.indexOf("px"));
      return parseInt(bpValue);
    }
  };
  var getCurrentBreakpoint = (width) => {
    let currentBreakpoint = "";
    let biggestBreakpointValue = 0;
    for (const breakpoint of Object.keys(fullConfig.theme.screens)) {
      const breakpointValue = getBreakpointValue(breakpoint);
      if (breakpointValue > biggestBreakpointValue && window.innerWidth >= breakpointValue) {
        biggestBreakpointValue = breakpointValue;
        currentBreakpoint = breakpoint;
      }
    }
    return currentBreakpoint;
  };
  var isMinBreakpoint = (width, bpName) => {
    return width >= getBreakpointValue(bpName);
  };

  // node_modules/alpinejs/dist/module.esm.js
  var flushPending = false;
  var flushing = false;
  var queue = [];
  var lastFlushedIndex = -1;
  function scheduler(callback) {
    queueJob(callback);
  }
  function queueJob(job) {
    if (!queue.includes(job))
      queue.push(job);
    queueFlush();
  }
  function dequeueJob(job) {
    let index2 = queue.indexOf(job);
    if (index2 !== -1 && index2 > lastFlushedIndex)
      queue.splice(index2, 1);
  }
  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }
  function flushJobs() {
    flushPending = false;
    flushing = true;
    for (let i = 0; i < queue.length; i++) {
      queue[i]();
      lastFlushedIndex = i;
    }
    queue.length = 0;
    lastFlushedIndex = -1;
    flushing = false;
  }
  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;
  function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
  }
  function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback) => engine.effect(callback, { scheduler: (task) => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    } });
    raw = engine.raw;
  }
  function overrideEffect(override) {
    effect = override;
  }
  function elementBoundEffect(el) {
    let cleanup2 = () => {
    };
    let wrappedEffect = (callback) => {
      let effectReference = effect(callback);
      if (!el._x_effects) {
        el._x_effects = /* @__PURE__ */ new Set();
        el._x_runEffects = () => {
          el._x_effects.forEach((i) => i());
        };
      }
      el._x_effects.add(effectReference);
      cleanup2 = () => {
        if (effectReference === void 0)
          return;
        el._x_effects.delete(effectReference);
        release(effectReference);
      };
      return effectReference;
    };
    return [wrappedEffect, () => {
      cleanup2();
    }];
  }
  function dispatch(el, name, detail = {}) {
    el.dispatchEvent(
      new CustomEvent(name, {
        detail,
        bubbles: true,
        composed: true,
        cancelable: true
      })
    );
  }
  function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
      Array.from(el.children).forEach((el2) => walk(el2, callback));
      return;
    }
    let skip = false;
    callback(el, () => skip = true);
    if (skip)
      return;
    let node = el.firstElementChild;
    while (node) {
      walk(node, callback, false);
      node = node.nextElementSibling;
    }
  }
  function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
  }
  var started = false;
  function start() {
    if (started)
      warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
    started = true;
    if (!document.body)
      warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el) => initTree(el, walk));
    onElRemoved((el) => destroyTree(el));
    onAttributesAdded((el, attrs) => {
      directives(el, attrs).forEach((handle) => handle());
    });
    let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el) => {
      initTree(el);
    });
    dispatch(document, "alpine:initialized");
  }
  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];
  function rootSelectors() {
    return rootSelectorCallbacks.map((fn) => fn());
  }
  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
  }
  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }
  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }
  function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element) => {
      const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
      if (selectors.some((selector) => element.matches(selector)))
        return true;
    });
  }
  function findClosest(el, callback) {
    if (!el)
      return;
    if (callback(el))
      return el;
    if (el._x_teleportBack)
      el = el._x_teleportBack;
    if (!el.parentElement)
      return;
    return findClosest(el.parentElement, callback);
  }
  function isRoot(el) {
    return rootSelectors().some((selector) => el.matches(selector));
  }
  var initInterceptors = [];
  function interceptInit(callback) {
    initInterceptors.push(callback);
  }
  function initTree(el, walker = walk, intercept = () => {
  }) {
    deferHandlingDirectives(() => {
      walker(el, (el2, skip) => {
        intercept(el2, skip);
        initInterceptors.forEach((i) => i(el2, skip));
        directives(el2, el2.attributes).forEach((handle) => handle());
        el2._x_ignore && skip();
      });
    });
  }
  function destroyTree(root) {
    walk(root, (el) => {
      cleanupAttributes(el);
      cleanupElement(el);
    });
  }
  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];
  function onElAdded(callback) {
    onElAddeds.push(callback);
  }
  function onElRemoved(el, callback) {
    if (typeof callback === "function") {
      if (!el._x_cleanups)
        el._x_cleanups = [];
      el._x_cleanups.push(callback);
    } else {
      callback = el;
      onElRemoveds.push(callback);
    }
  }
  function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
  }
  function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups)
      el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name])
      el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
  }
  function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups)
      return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
      if (names === void 0 || names.includes(name)) {
        value.forEach((i) => i());
        delete el._x_attributeCleanups[name];
      }
    });
  }
  function cleanupElement(el) {
    if (el._x_cleanups) {
      while (el._x_cleanups.length)
        el._x_cleanups.pop()();
    }
  }
  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;
  function startObservingMutations() {
    observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
    currentlyObserving = true;
  }
  function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
  }
  var recordQueue = [];
  var willProcessRecordQueue = false;
  function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords());
    if (recordQueue.length && !willProcessRecordQueue) {
      willProcessRecordQueue = true;
      queueMicrotask(() => {
        processRecordQueue();
        willProcessRecordQueue = false;
      });
    }
  }
  function processRecordQueue() {
    onMutate(recordQueue);
    recordQueue.length = 0;
  }
  function mutateDom(callback) {
    if (!currentlyObserving)
      return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
  }
  var isCollecting = false;
  var deferredMutations = [];
  function deferMutations() {
    isCollecting = true;
  }
  function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
  }
  function onMutate(mutations) {
    if (isCollecting) {
      deferredMutations = deferredMutations.concat(mutations);
      return;
    }
    let addedNodes = [];
    let removedNodes = [];
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for (let i = 0; i < mutations.length; i++) {
      if (mutations[i].target._x_ignoreMutationObserver)
        continue;
      if (mutations[i].type === "childList") {
        mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
        mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
      }
      if (mutations[i].type === "attributes") {
        let el = mutations[i].target;
        let name = mutations[i].attributeName;
        let oldValue = mutations[i].oldValue;
        let add2 = () => {
          if (!addedAttributes.has(el))
            addedAttributes.set(el, []);
          addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
        };
        let remove2 = () => {
          if (!removedAttributes.has(el))
            removedAttributes.set(el, []);
          removedAttributes.get(el).push(name);
        };
        if (el.hasAttribute(name) && oldValue === null) {
          add2();
        } else if (el.hasAttribute(name)) {
          remove2();
          add2();
        } else {
          remove2();
        }
      }
    }
    removedAttributes.forEach((attrs, el) => {
      cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el) => {
      onAttributeAddeds.forEach((i) => i(el, attrs));
    });
    for (let node of removedNodes) {
      if (addedNodes.includes(node))
        continue;
      onElRemoveds.forEach((i) => i(node));
      destroyTree(node);
    }
    addedNodes.forEach((node) => {
      node._x_ignoreSelf = true;
      node._x_ignore = true;
    });
    for (let node of addedNodes) {
      if (removedNodes.includes(node))
        continue;
      if (!node.isConnected)
        continue;
      delete node._x_ignoreSelf;
      delete node._x_ignore;
      onElAddeds.forEach((i) => i(node));
      node._x_ignore = true;
      node._x_ignoreSelf = true;
    }
    addedNodes.forEach((node) => {
      delete node._x_ignoreSelf;
      delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  }
  function scope(node) {
    return mergeProxies(closestDataStack(node));
  }
  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
    return () => {
      node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
    };
  }
  function closestDataStack(node) {
    if (node._x_dataStack)
      return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }
    if (!node.parentNode) {
      return [];
    }
    return closestDataStack(node.parentNode);
  }
  function mergeProxies(objects) {
    return new Proxy({ objects }, mergeProxyTrap);
  }
  var mergeProxyTrap = {
    ownKeys({ objects }) {
      return Array.from(
        new Set(objects.flatMap((i) => Object.keys(i)))
      );
    },
    has({ objects }, name) {
      if (name == Symbol.unscopables)
        return false;
      return objects.some(
        (obj) => Object.prototype.hasOwnProperty.call(obj, name)
      );
    },
    get({ objects }, name, thisProxy) {
      if (name == "toJSON")
        return collapseProxies;
      return Reflect.get(
        objects.find(
          (obj) => Object.prototype.hasOwnProperty.call(obj, name)
        ) || {},
        name,
        thisProxy
      );
    },
    set({ objects }, name, value) {
      return Reflect.set(
        objects.find(
          (obj) => Object.prototype.hasOwnProperty.call(obj, name)
        ) || objects[objects.length - 1],
        name,
        value
      );
    }
  };
  function collapseProxies() {
    let keys = Reflect.ownKeys(this);
    return keys.reduce((acc, key) => {
      acc[key] = Reflect.get(this, key);
      return acc;
    }, {});
  }
  function initInterceptors2(data2) {
    let isObject22 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
        if (enumerable === false || value === void 0)
          return;
        let path = basePath === "" ? key : `${basePath}.${key}`;
        if (typeof value === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject22(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };
    return recurse(data2);
  }
  function interceptor(callback, mutateObj = () => {
  }) {
    let obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize(data2, path, key) {
        return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
      }
    };
    mutateObj(obj);
    return (initialValue) => {
      if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
        let initialize = obj.initialize.bind(obj);
        obj.initialize = (data2, path, key) => {
          let innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }
      return obj;
    };
  }
  function get(obj, path) {
    return path.split(".").reduce((carry, segment) => carry[segment], obj);
  }
  function set(obj, path, value) {
    if (typeof path === "string")
      path = path.split(".");
    if (path.length === 1)
      obj[path[0]] = value;
    else if (path.length === 0)
      throw error;
    else {
      if (obj[path[0]])
        return set(obj[path[0]], path.slice(1), value);
      else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  }
  var magics = {};
  function magic(name, callback) {
    magics[name] = callback;
  }
  function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback]) => {
      let memoizedUtilities = null;
      function getUtilities() {
        if (memoizedUtilities) {
          return memoizedUtilities;
        } else {
          let [utilities, cleanup2] = getElementBoundUtilities(el);
          memoizedUtilities = { interceptor, ...utilities };
          onElRemoved(el, cleanup2);
          return memoizedUtilities;
        }
      }
      Object.defineProperty(obj, `$${name}`, {
        get() {
          return callback(el, getUtilities());
        },
        enumerable: false
      });
    });
    return obj;
  }
  function tryCatch(el, expression, callback, ...args) {
    try {
      return callback(...args);
    } catch (e) {
      handleError(e, el, expression);
    }
  }
  function handleError(error2, el, expression = void 0) {
    Object.assign(error2, { el, expression });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(() => {
      throw error2;
    }, 0);
  }
  var shouldAutoEvaluateFunctions = true;
  function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    let result = callback();
    shouldAutoEvaluateFunctions = cache;
    return result;
  }
  function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value) => result = value, extras);
    return result;
  }
  function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
  }
  var theEvaluatorFunction = normalEvaluator;
  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }
  function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [overriddenMagics, ...closestDataStack(el)];
    let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
  }
  function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
      runIfTypeOfFunction(receiver, result);
    };
  }
  var evaluatorMemo = {};
  function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }
    let AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
    const safeAsyncFunction = () => {
      try {
        let func2 = new AsyncFunction(
          ["__self", "scope"],
          `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`
        );
        Object.defineProperty(func2, "name", {
          value: `[Alpine] ${expression}`
        });
        return func2;
      } catch (error2) {
        handleError(error2, el, expression);
        return Promise.resolve();
      }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
  }
  function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      func.result = void 0;
      func.finished = false;
      let completeScope = mergeProxies([scope2, ...dataStack]);
      if (typeof func === "function") {
        let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
        if (func.finished) {
          runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
          func.result = void 0;
        } else {
          promise.then((result) => {
            runIfTypeOfFunction(receiver, result, completeScope, params, el);
          }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
        }
      }
    };
  }
  function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
      let result = value.apply(scope2, params);
      if (result instanceof Promise) {
        result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
      } else {
        receiver(result);
      }
    } else if (typeof value === "object" && value instanceof Promise) {
      value.then((i) => receiver(i));
    } else {
      receiver(value);
    }
  }
  var prefixAsString = "x-";
  function prefix(subject = "") {
    return prefixAsString + subject;
  }
  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }
  var directiveHandlers = {};
  function directive(name, callback) {
    directiveHandlers[name] = callback;
    return {
      before(directive2) {
        if (!directiveHandlers[directive2]) {
          console.warn(
            "Cannot find directive `${directive}`. `${name}` will use the default order of execution"
          );
          return;
        }
        const pos = directiveOrder.indexOf(directive2);
        directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
      }
    };
  }
  function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
      let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(vAttributes);
      vAttributes = vAttributes.map((attribute) => {
        if (staticAttributes.find((attr2) => attr2.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2) => {
      return getDirectiveHandler(el, directive2);
    });
  }
  function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr2) => !outNonAlpineAttributes(attr2));
  }
  var isDeferringHandlers = false;
  var directiveHandlerStacks = /* @__PURE__ */ new Map();
  var currentHandlerStackKey = Symbol();
  function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = () => {
      while (directiveHandlerStacks.get(key).length)
        directiveHandlerStacks.get(key).shift()();
      directiveHandlerStacks.delete(key);
    };
    let stopDeferring = () => {
      isDeferringHandlers = false;
      flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
  }
  function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback) => cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
      Alpine: alpine_default,
      effect: effect3,
      cleanup: cleanup2,
      evaluateLater: evaluateLater.bind(evaluateLater, el),
      evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = () => cleanups.forEach((i) => i());
    return [utilities, doCleanup];
  }
  function getDirectiveHandler(el, directive2) {
    let noop = () => {
    };
    let handler4 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = () => {
      if (el._x_ignore || el._x_ignoreSelf)
        return;
      handler4.inline && handler4.inline(el, directive2, utilities);
      handler4 = handler4.bind(handler4, el, directive2, utilities);
      isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
  }
  var startingWith = (subject, replacement) => ({ name, value }) => {
    if (name.startsWith(subject))
      name = name.replace(subject, replacement);
    return { name, value };
  };
  var into = (i) => i;
  function toTransformedAttributes(callback = () => {
  }) {
    return ({ name, value }) => {
      let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform2) => {
        return transform2(carry);
      }, { name, value });
      if (newName !== name)
        callback(newName, name);
      return { name: newName, value: newValue };
    };
  }
  var attributeTransformers = [];
  function mapAttributes(callback) {
    attributeTransformers.push(callback);
  }
  function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
  }
  var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value }) => {
      let typeMatch = name.match(alpineAttributeRegex());
      let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
      let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      let original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i) => i.replace(".", "")),
        expression: value,
        original
      };
    };
  }
  var DEFAULT = "DEFAULT";
  var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
  ];
  function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  }
  var tickStack = [];
  var isHolding = false;
  function nextTick(callback = () => {
  }) {
    queueMicrotask(() => {
      isHolding || setTimeout(() => {
        releaseNextTicks();
      });
    });
    return new Promise((res) => {
      tickStack.push(() => {
        callback();
        res();
      });
    });
  }
  function releaseNextTicks() {
    isHolding = false;
    while (tickStack.length)
      tickStack.shift()();
  }
  function holdNextTicks() {
    isHolding = true;
  }
  function setClasses(el, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el, value.join(" "));
    } else if (typeof value === "object" && value !== null) {
      return setClassesFromObject(el, value);
    } else if (typeof value === "function") {
      return setClasses(el, value());
    }
    return setClassesFromString(el, value);
  }
  function setClassesFromString(el, classString) {
    let split = (classString2) => classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes) => {
      el.classList.add(...classes);
      return () => {
        el.classList.remove(...classes);
      };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }
  function setClassesFromObject(el, classObject) {
    let split = (classString) => classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i) => {
      if (el.classList.contains(i)) {
        el.classList.remove(i);
        removed.push(i);
      }
    });
    forAdd.forEach((i) => {
      if (!el.classList.contains(i)) {
        el.classList.add(i);
        added.push(i);
      }
    });
    return () => {
      removed.forEach((i) => el.classList.add(i));
      added.forEach((i) => el.classList.remove(i));
    };
  }
  function setStyles(el, value) {
    if (typeof value === "object" && value !== null) {
      return setStylesFromObject(el, value);
    }
    return setStylesFromString(el, value);
  }
  function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2]) => {
      previousStyles[key] = el.style[key];
      if (!key.startsWith("--")) {
        key = kebabCase(key);
      }
      el.style.setProperty(key, value2);
    });
    setTimeout(() => {
      if (el.style.length === 0) {
        el.removeAttribute("style");
      }
    });
    return () => {
      setStyles(el, previousStyles);
    };
  }
  function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return () => {
      el.setAttribute("style", cache || "");
    };
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function once(callback, fallback = () => {
  }) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      } else {
        fallback.apply(this, arguments);
      }
    };
  }
  directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "function")
      expression = evaluate2(expression);
    if (expression === false)
      return;
    if (!expression || typeof expression === "boolean") {
      registerTransitionsFromHelper(el, modifiers, value);
    } else {
      registerTransitionsFromClassString(el, expression, value);
    }
  });
  function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
      "enter": (classes) => {
        el._x_transition.enter.during = classes;
      },
      "enter-start": (classes) => {
        el._x_transition.enter.start = classes;
      },
      "enter-end": (classes) => {
        el._x_transition.enter.end = classes;
      },
      "leave": (classes) => {
        el._x_transition.leave.during = classes;
      },
      "leave-start": (classes) => {
        el._x_transition.leave.start = classes;
      },
      "leave-end": (classes) => {
        el._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }
  function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index2) => index2 < modifiers.indexOf("out"));
    }
    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index2) => index2 > modifiers.indexOf("out"));
    }
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay3 = modifierValue(modifiers, "delay", 0) / 1e3;
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
      el._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: `${delay3}s`,
        transitionProperty: property,
        transitionDuration: `${durationIn}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.enter.start = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
      el._x_transition.enter.end = {
        opacity: 1,
        transform: `scale(1)`
      };
    }
    if (transitioningOut) {
      el._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: `${delay3}s`,
        transitionProperty: property,
        transitionDuration: `${durationOut}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.leave.start = {
        opacity: 1,
        transform: `scale(1)`
      };
      el._x_transition.leave.end = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
    }
  }
  function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition)
      el._x_transition = {
        enter: { during: defaultValue, start: defaultValue, end: defaultValue },
        leave: { during: defaultValue, start: defaultValue, end: defaultValue },
        in(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    const nextTick22 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = () => nextTick22(show);
    if (value) {
      if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
        el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
      } else {
        el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
      }
      return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
      el._x_transition.out(() => {
      }, () => resolve(hide));
      el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
    }) : Promise.resolve(hide);
    queueMicrotask(() => {
      let closest2 = closestHide(el);
      if (closest2) {
        if (!closest2._x_hideChildren)
          closest2._x_hideChildren = [];
        closest2._x_hideChildren.push(el);
      } else {
        nextTick22(() => {
          let hideAfterChildren = (el2) => {
            let carry = Promise.all([
              el2._x_hidePromise,
              ...(el2._x_hideChildren || []).map(hideAfterChildren)
            ]).then(([i]) => i());
            delete el2._x_hidePromise;
            delete el2._x_hideChildren;
            return carry;
          };
          hideAfterChildren(el).catch((e) => {
            if (!e.isFromCancelledTransition)
              throw e;
          });
        });
      }
    });
  };
  function closestHide(el) {
    let parent2 = el.parentNode;
    if (!parent2)
      return;
    return parent2._x_hidePromise ? parent2 : closestHide(parent2);
  }
  function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
  }, after = () => {
  }) {
    if (el._x_transitioning)
      el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
      before();
      after();
      return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
      start() {
        undoStart = setFunction(el, start2);
      },
      during() {
        undoDuring = setFunction(el, during);
      },
      before,
      end() {
        undoStart();
        undoEnd = setFunction(el, end);
      },
      after,
      cleanup() {
        undoDuring();
        undoEnd();
      }
    });
  }
  function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(() => {
      mutateDom(() => {
        interrupted = true;
        if (!reachedBefore)
          stages.before();
        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }
        stages.after();
        if (el.isConnected)
          stages.cleanup();
        delete el._x_transitioning;
      });
    });
    el._x_transitioning = {
      beforeCancels: [],
      beforeCancel(callback) {
        this.beforeCancels.push(callback);
      },
      cancel: once(function() {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        ;
        finish();
      }),
      finish
    };
    mutateDom(() => {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      let delay3 = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0)
        duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
      mutateDom(() => {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        mutateDom(() => {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el._x_transitioning.finish, duration + delay3);
        reachedEnd = true;
      });
    });
  }
  function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1)
      return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback;
    if (key === "scale") {
      if (isNaN(rawValue))
        return fallback;
    }
    if (key === "duration" || key === "delay") {
      let match = rawValue.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }
    return rawValue;
  }
  var isCloning = false;
  function skipDuringClone(callback, fallback = () => {
  }) {
    return (...args) => isCloning ? fallback(...args) : callback(...args);
  }
  function onlyDuringClone(callback) {
    return (...args) => isCloning && callback(...args);
  }
  function cloneNode(from, to) {
    if (from._x_dataStack) {
      to._x_dataStack = from._x_dataStack;
      to.setAttribute("data-has-alpine-state", true);
    }
    isCloning = true;
    dontRegisterReactiveSideEffects(() => {
      initTree(to, (el, callback) => {
        callback(el, () => {
        });
      });
    });
    isCloning = false;
  }
  var isCloningLegacy = false;
  function clone(oldEl, newEl) {
    if (!newEl._x_dataStack)
      newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    isCloningLegacy = true;
    dontRegisterReactiveSideEffects(() => {
      cloneTree(newEl);
    });
    isCloning = false;
    isCloningLegacy = false;
  }
  function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback) => {
      walk(el2, (el3, skip) => {
        if (hasRunThroughFirstEl && isRoot(el3))
          return skip();
        hasRunThroughFirstEl = true;
        callback(el3, skip);
      });
    };
    initTree(el, shallowWalker);
  }
  function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el) => {
      let storedEffect = cache(callback2);
      release(storedEffect);
      return () => {
      };
    });
    callback();
    overrideEffect(cache);
  }
  function shouldSkipRegisteringDataDuringClone(el) {
    if (!isCloning)
      return false;
    if (isCloningLegacy)
      return true;
    return el.hasAttribute("data-has-alpine-state");
  }
  function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings)
      el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch (name) {
      case "value":
        bindInputValue(el, value);
        break;
      case "style":
        bindStyles(el, value);
        break;
      case "class":
        bindClasses(el, value);
        break;
      case "selected":
      case "checked":
        bindAttributeAndProperty(el, name, value);
        break;
      default:
        bindAttribute(el, name, value);
        break;
    }
  }
  function bindInputValue(el, value) {
    if (el.type === "radio") {
      if (el.attributes.value === void 0) {
        el.value = value;
      }
      if (window.fromModel) {
        el.checked = checkedAttrLooseCompare(el.value, value);
      }
    } else if (el.type === "checkbox") {
      if (Number.isInteger(value)) {
        el.value = value;
      } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
        } else {
          el.checked = !!value;
        }
      }
    } else if (el.tagName === "SELECT") {
      updateSelect(el, value);
    } else {
      if (el.value === value)
        return;
      el.value = value === void 0 ? "" : value;
    }
  }
  function bindClasses(el, value) {
    if (el._x_undoAddedClasses)
      el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
  }
  function bindStyles(el, value) {
    if (el._x_undoAddedStyles)
      el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
  }
  function bindAttributeAndProperty(el, name, value) {
    bindAttribute(el, name, value);
    setPropertyIfChanged(el, name, value);
  }
  function bindAttribute(el, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el.removeAttribute(name);
    } else {
      if (isBooleanAttr(name))
        value = name;
      setIfChanged(el, name, value);
    }
  }
  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }
  function setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) {
      el[propName] = value;
    }
  }
  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2) => {
      return value2 + "";
    });
    Array.from(el.options).forEach((option) => {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function isBooleanAttr(attrName) {
    const booleanAttributes = [
      "disabled",
      "checked",
      "required",
      "readonly",
      "hidden",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule"
    ];
    return booleanAttributes.includes(attrName);
  }
  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
  }
  function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    return getAttributeBinding(el, name, fallback);
  }
  function extractProp(el, name, fallback, extract = true) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
      let binding = el._x_inlineBindings[name];
      binding.extract = extract;
      return dontAutoEvaluateFunctions(() => {
        return evaluate(el, binding.expression);
      });
    }
    return getAttributeBinding(el, name, fallback);
  }
  function getAttributeBinding(el, name, fallback) {
    let attr2 = el.getAttribute(name);
    if (attr2 === null)
      return typeof fallback === "function" ? fallback() : fallback;
    if (attr2 === "")
      return true;
    if (isBooleanAttr(name)) {
      return !![name, "true"].includes(attr2);
    }
    return attr2;
  }
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      let context = this, args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
    let firstRun = true;
    let outerHash, innerHash, outerHashLatest, innerHashLatest;
    let reference = effect(() => {
      let outer, inner;
      if (firstRun) {
        outer = outerGet();
        innerSet(JSON.parse(JSON.stringify(outer)));
        inner = innerGet();
        firstRun = false;
      } else {
        outer = outerGet();
        inner = innerGet();
        outerHashLatest = JSON.stringify(outer);
        innerHashLatest = JSON.stringify(inner);
        if (outerHashLatest !== outerHash) {
          inner = innerGet();
          innerSet(outer);
          inner = outer;
        } else {
          outerSet(JSON.parse(innerHashLatest ?? null));
          outer = inner;
        }
      }
      outerHash = JSON.stringify(outer);
      innerHash = JSON.stringify(inner);
    });
    return () => {
      release(reference);
    };
  }
  function plugin(callback) {
    let callbacks = Array.isArray(callback) ? callback : [callback];
    callbacks.forEach((i) => i(alpine_default));
  }
  var stores = {};
  var isReactive = false;
  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }
    if (value === void 0) {
      return stores[name];
    }
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
    initInterceptors2(stores[name]);
  }
  function getStores() {
    return stores;
  }
  var binds = {};
  function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
    if (name instanceof Element) {
      return applyBindingsObject(name, getBindings());
    } else {
      binds[name] = getBindings;
    }
    return () => {
    };
  }
  function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback(...args);
          };
        }
      });
    });
    return obj;
  }
  function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute) => {
      if (staticAttributes.find((attr2) => attr2.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    directives(el, attributes, original).map((handle) => {
      cleanupRunners.push(handle.runCleanups);
      handle();
    });
    return () => {
      while (cleanupRunners.length)
        cleanupRunners.pop()();
    };
  }
  var datas = {};
  function data(name, callback) {
    datas[name] = callback;
  }
  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback.bind(context)(...args);
          };
        },
        enumerable: false
      });
    });
    return obj;
  }
  var Alpine = {
    get reactive() {
      return reactive;
    },
    get release() {
      return release;
    },
    get effect() {
      return effect;
    },
    get raw() {
      return raw;
    },
    version: "3.13.1",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    startObservingMutations,
    stopObservingMutations,
    setReactivityEngine,
    onAttributeRemoved,
    onAttributesAdded,
    closestDataStack,
    skipDuringClone,
    onlyDuringClone,
    addRootSelector,
    addInitSelector,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    interceptInit,
    setEvaluator,
    mergeProxies,
    extractProp,
    findClosest,
    onElRemoved,
    closestRoot,
    destroyTree,
    interceptor,
    transition,
    setStyles,
    mutateDom,
    directive,
    entangle,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    cloneNode,
    bound: getBinding,
    $data: scope,
    walk,
    data,
    bind: bind2
  };
  var alpine_default = Alpine;
  function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var targetMap = /* @__PURE__ */ new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol(true ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }
  function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) {
      effect3();
    }
    return effect3;
  }
  function stop(effect3) {
    if (effect3.active) {
      cleanup(effect3);
      if (effect3.options.onStop) {
        effect3.options.onStop();
      }
      effect3.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
      if (!effect3.active) {
        return fn();
      }
      if (!effectStack.includes(effect3)) {
        cleanup(effect3);
        try {
          enableTracking();
          effectStack.push(effect3);
          activeEffect = effect3;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
  }
  function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect3);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = /* @__PURE__ */ new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect3) => {
          if (effect3 !== activeEffect || effect3.allowRecurse) {
            effects.add(effect3);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect3) => {
      if (effect3.options.onTrigger) {
        effect3.options.onTrigger({
          effect: effect3,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect3.options.scheduler) {
        effect3.options.scheduler(effect3);
      } else {
        effect3();
      }
    };
    effects.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
          track(arr, "get", i + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        const res = toRaw(this)[key].apply(this, args);
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        return isReadonly ? readonly(res) : reactive2(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      if (true) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      if (true) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var toReactive = (value) => isObject(value) ? reactive2(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "get", key);
    }
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "has", key);
    }
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
      ),
      set: createReadonlyMethod(
        "set"
      ),
      delete: createReadonlyMethod(
        "delete"
      ),
      clear: createReadonlyMethod(
        "clear"
      ),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
      ),
      set: createReadonlyMethod(
        "set"
      ),
      delete: createReadonlyMethod(
        "delete"
      ),
      clear: createReadonlyMethod(
        "clear"
      ),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
  function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive2(target) {
    if (target && target["__v_isReadonly"]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (true) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function toRaw(observed) {
    return observed && toRaw(observed["__v_raw"]) || observed;
  }
  function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
  }
  magic("nextTick", () => nextTick);
  magic("dispatch", (el) => dispatch.bind(dispatch, el));
  magic("watch", (el, { evaluateLater: evaluateLater2, effect: effect3 }) => (key, callback) => {
    let evaluate2 = evaluateLater2(key);
    let firstTime = true;
    let oldValue;
    let effectReference = effect3(() => evaluate2((value) => {
      JSON.stringify(value);
      if (!firstTime) {
        queueMicrotask(() => {
          callback(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    }));
    el._x_effects.delete(effectReference);
  });
  magic("store", getStores);
  magic("data", (el) => scope(el));
  magic("root", (el) => closestRoot(el));
  magic("refs", (el) => {
    if (el._x_refs_proxy)
      return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
  });
  function getArrayOfRefObject(el) {
    let refObjects = [];
    let currentEl = el;
    while (currentEl) {
      if (currentEl._x_refs)
        refObjects.push(currentEl._x_refs);
      currentEl = currentEl.parentNode;
    }
    return refObjects;
  }
  var globalIdMemo = {};
  function findAndIncrementId(name) {
    if (!globalIdMemo[name])
      globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
  }
  function closestIdRoot(el, name) {
    return findClosest(el, (element) => {
      if (element._x_ids && element._x_ids[name])
        return true;
    });
  }
  function setIdRoot(el, name) {
    if (!el._x_ids)
      el._x_ids = {};
    if (!el._x_ids[name])
      el._x_ids[name] = findAndIncrementId(name);
  }
  magic("id", (el) => (name, key = null) => {
    let root = closestIdRoot(el, name);
    let id = root ? root._x_ids[name] : findAndIncrementId(name);
    return key ? `${name}-${id}-${key}` : `${name}-${id}`;
  });
  magic("el", (el) => el);
  warnMissingPluginMagic("Focus", "focus", "focus");
  warnMissingPluginMagic("Persist", "persist", "persist");
  function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el) => warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
    let func = evaluateLater2(expression);
    let innerGet = () => {
      let result;
      func((i) => result = i);
      return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val) => evaluateInnerSet(() => {
    }, { scope: { "__placeholder": val } });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(() => {
      if (!el._x_model)
        return;
      el._x_removeModelListeners["default"]();
      let outerGet = el._x_model.get;
      let outerSet = el._x_model.set;
      let releaseEntanglement = entangle(
        {
          get() {
            return outerGet();
          },
          set(value) {
            outerSet(value);
          }
        },
        {
          get() {
            return innerGet();
          },
          set(value) {
            innerSet(value);
          }
        }
      );
      cleanup2(releaseEntanglement);
    });
  });
  directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-teleport can only be used on a <template> tag", el);
    let target = getTarget(expression);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    el.setAttribute("data-teleport-template", true);
    clone2.setAttribute("data-teleport-target", true);
    if (el._x_forwardEvents) {
      el._x_forwardEvents.forEach((eventName) => {
        clone2.addEventListener(eventName, (e) => {
          e.stopPropagation();
          el.dispatchEvent(new e.constructor(e.type, e));
        });
      });
    }
    addScopeToNode(clone2, {}, el);
    let placeInDom = (clone3, target2, modifiers2) => {
      if (modifiers2.includes("prepend")) {
        target2.parentNode.insertBefore(clone3, target2);
      } else if (modifiers2.includes("append")) {
        target2.parentNode.insertBefore(clone3, target2.nextSibling);
      } else {
        target2.appendChild(clone3);
      }
    };
    mutateDom(() => {
      placeInDom(clone2, target, modifiers);
      initTree(clone2);
      clone2._x_ignore = true;
    });
    el._x_teleportPutBack = () => {
      let target2 = getTarget(expression);
      mutateDom(() => {
        placeInDom(el._x_teleport, target2, modifiers);
      });
    };
    cleanup2(() => clone2.remove());
  });
  var teleportContainerDuringClone = document.createElement("div");
  function getTarget(expression) {
    let target = skipDuringClone(() => {
      return document.querySelector(expression);
    }, () => {
      return teleportContainerDuringClone;
    })();
    if (!target)
      warn(`Cannot find x-teleport element for selector: "${expression}"`);
    return target;
  }
  var handler = () => {
  };
  handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(() => {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };
  directive("ignore", handler);
  directive("effect", (el, { expression }, { effect: effect3 }) => effect3(evaluateLater(el, expression)));
  function on(el, event2, modifiers, callback) {
    let listenerTarget = el;
    let handler4 = (e) => callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
    if (modifiers.includes("dot"))
      event2 = dotSyntax(event2);
    if (modifiers.includes("camel"))
      event2 = camelCase2(event2);
    if (modifiers.includes("passive"))
      options.passive = true;
    if (modifiers.includes("capture"))
      options.capture = true;
    if (modifiers.includes("window"))
      listenerTarget = window;
    if (modifiers.includes("document"))
      listenerTarget = document;
    if (modifiers.includes("debounce")) {
      let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = debounce(handler4, wait);
    }
    if (modifiers.includes("throttle")) {
      let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = throttle(handler4, wait);
    }
    if (modifiers.includes("prevent"))
      handler4 = wrapHandler(handler4, (next2, e) => {
        e.preventDefault();
        next2(e);
      });
    if (modifiers.includes("stop"))
      handler4 = wrapHandler(handler4, (next2, e) => {
        e.stopPropagation();
        next2(e);
      });
    if (modifiers.includes("self"))
      handler4 = wrapHandler(handler4, (next2, e) => {
        e.target === el && next2(e);
      });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler4 = wrapHandler(handler4, (next2, e) => {
        if (el.contains(e.target))
          return;
        if (e.target.isConnected === false)
          return;
        if (el.offsetWidth < 1 && el.offsetHeight < 1)
          return;
        if (el._x_isShown === false)
          return;
        next2(e);
      });
    }
    if (modifiers.includes("once")) {
      handler4 = wrapHandler(handler4, (next2, e) => {
        next2(e);
        listenerTarget.removeEventListener(event2, handler4, options);
      });
    }
    handler4 = wrapHandler(handler4, (next2, e) => {
      if (isKeyEvent(event2)) {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
          return;
        }
      }
      next2(e);
    });
    listenerTarget.addEventListener(event2, handler4, options);
    return () => {
      listenerTarget.removeEventListener(event2, handler4, options);
    };
  }
  function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
  }
  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function kebabCase2(subject) {
    if ([" ", "_"].includes(
      subject
    ))
      return subject;
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function isKeyEvent(event2) {
    return ["keydown", "keyup"].includes(event2);
  }
  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i) => {
      return !["window", "document", "prevent", "stop", "once", "capture"].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
      let debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.includes("throttle")) {
      let debounceIndex = keyModifiers.indexOf("throttle");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0)
      return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
      return false;
    const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
        if (modifier === "cmd" || modifier === "super")
          modifier = "meta";
        return e[`${modifier}Key`];
      });
      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (keyToModifiers(e.key).includes(keyModifiers[0]))
          return false;
      }
    }
    return true;
  }
  function keyToModifiers(key) {
    if (!key)
      return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
      "ctrl": "control",
      "slash": "/",
      "space": " ",
      "spacebar": " ",
      "cmd": "meta",
      "esc": "escape",
      "up": "arrow-up",
      "down": "arrow-down",
      "left": "arrow-left",
      "right": "arrow-right",
      "period": ".",
      "equal": "=",
      "minus": "-",
      "underscore": "_"
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier) => {
      if (modifierToKeyMap[modifier] === key)
        return modifier;
    }).filter((modifier) => modifier);
  }
  directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let scopeTarget = el;
    if (modifiers.includes("parent")) {
      scopeTarget = el.parentNode;
    }
    let evaluateGet = evaluateLater(scopeTarget, expression);
    let evaluateSet;
    if (typeof expression === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
    } else if (typeof expression === "function" && typeof expression() === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
    } else {
      evaluateSet = () => {
      };
    }
    let getValue = () => {
      let result;
      evaluateGet((value) => result = value);
      return isGetterSetter(result) ? result.get() : result;
    };
    let setValue = (value) => {
      let result;
      evaluateGet((value2) => result = value2);
      if (isGetterSetter(result)) {
        result.set(value);
      } else {
        evaluateSet(() => {
        }, {
          scope: { "__placeholder": value }
        });
      }
    };
    if (typeof expression === "string" && el.type === "radio") {
      mutateDom(() => {
        if (!el.hasAttribute("name"))
          el.setAttribute("name", expression);
      });
    }
    var event2 = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let removeListener = isCloning ? () => {
    } : on(el, event2, modifiers, (e) => {
      setValue(getInputValue(el, modifiers, e, getValue()));
    });
    if (modifiers.includes("fill")) {
      if ([null, ""].includes(getValue()) || el.type === "checkbox" && Array.isArray(getValue())) {
        el.dispatchEvent(new Event(event2, {}));
      }
    }
    if (!el._x_removeModelListeners)
      el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(() => el._x_removeModelListeners["default"]());
    if (el.form) {
      let removeResetListener = on(el.form, "reset", [], (e) => {
        nextTick(() => el._x_model && el._x_model.set(el.value));
      });
      cleanup2(() => removeResetListener());
    }
    el._x_model = {
      get() {
        return getValue();
      },
      set(value) {
        setValue(value);
      }
    };
    el._x_forceModelUpdate = (value) => {
      if (value === void 0 && typeof expression === "string" && expression.match(/\./))
        value = "";
      window.fromModel = true;
      mutateDom(() => bind(el, "value", value));
      delete window.fromModel;
    };
    effect3(() => {
      let value = getValue();
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
        return;
      el._x_forceModelUpdate(value);
    });
  });
  function getInputValue(el, modifiers, event2, currentValue) {
    return mutateDom(() => {
      if (event2 instanceof CustomEvent && event2.detail !== void 0)
        return event2.detail !== null && event2.detail !== void 0 ? event2.detail : event2.target.value;
      else if (el.type === "checkbox") {
        if (Array.isArray(currentValue)) {
          let newValue = modifiers.includes("number") ? safeParseNumber(event2.target.value) : event2.target.value;
          return event2.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
        } else {
          return event2.target.checked;
        }
      } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
        return modifiers.includes("number") ? Array.from(event2.target.selectedOptions).map((option) => {
          let rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event2.target.selectedOptions).map((option) => {
          return option.value || option.text;
        });
      } else {
        let rawValue = event2.target.value;
        return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
      }
    });
  }
  function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
  }
  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }
  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function isGetterSetter(value) {
    return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
  }
  directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
  addInitSelector(() => `[${prefix("init")}]`);
  directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "string") {
      return !!expression.trim() && evaluate2(expression, {}, false);
    }
    return evaluate2(expression, {}, false);
  }));
  directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.textContent = value;
        });
      });
    });
  });
  directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.innerHTML = value;
          el._x_ignoreSelf = true;
          initTree(el);
          delete el._x_ignoreSelf;
        });
      });
    });
  });
  mapAttributes(startingWith(":", into(prefix("bind:"))));
  var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3 }) => {
    if (!value) {
      let bindingProviders = {};
      injectBindingProviders(bindingProviders);
      let getBindings = evaluateLater(el, expression);
      getBindings((bindings) => {
        applyBindingsObject(el, bindings, original);
      }, { scope: bindingProviders });
      return;
    }
    if (value === "key")
      return storeKeyForXFor(el, expression);
    if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
      return;
    }
    let evaluate2 = evaluateLater(el, expression);
    effect3(() => evaluate2((result) => {
      if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
        result = "";
      }
      mutateDom(() => bind(el, value, result, modifiers));
    }));
  };
  handler2.inline = (el, { value, modifiers, expression }) => {
    if (!value)
      return;
    if (!el._x_inlineBindings)
      el._x_inlineBindings = {};
    el._x_inlineBindings[value] = { expression, extract: false };
  };
  directive("bind", handler2);
  function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
  }
  addRootSelector(() => `[${prefix("data")}]`);
  directive("data", (el, { expression }, { cleanup: cleanup2 }) => {
    if (shouldSkipRegisteringDataDuringClone(el))
      return;
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, { scope: dataProviderContext });
    if (data2 === void 0 || data2 === true)
      data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors2(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(() => {
      reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
      undo();
    });
  });
  directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide)
      el._x_doHide = () => {
        mutateDom(() => {
          el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
      };
    if (!el._x_doShow)
      el._x_doShow = () => {
        mutateDom(() => {
          if (el.style.length === 1 && el.style.display === "none") {
            el.removeAttribute("style");
          } else {
            el.style.removeProperty("display");
          }
        });
      };
    let hide = () => {
      el._x_doHide();
      el._x_isShown = false;
    };
    let show = () => {
      el._x_doShow();
      el._x_isShown = true;
    };
    let clickAwayCompatibleShow = () => setTimeout(show);
    let toggle = once(
      (value) => value ? show() : hide(),
      (value) => {
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
          el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        } else {
          value ? clickAwayCompatibleShow() : hide();
        }
      }
    );
    let oldValue;
    let firstTime = true;
    effect3(() => evaluate2((value) => {
      if (!firstTime && value === oldValue)
        return;
      if (modifiers.includes("immediate"))
        value ? clickAwayCompatibleShow() : hide();
      toggle(value);
      oldValue = value;
      firstTime = false;
    }));
  });
  directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(
      el,
      el._x_keyExpression || "index"
    );
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(() => {
      Object.values(el._x_lookup).forEach((el2) => el2.remove());
      delete el._x_prevKeys;
      delete el._x_lookup;
    });
  });
  function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject22 = (i) => typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items) => {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), (i) => i + 1);
      }
      if (items === void 0)
        items = [];
      let lookup = el._x_lookup;
      let prevKeys = el._x_prevKeys;
      let scopes = [];
      let keys = [];
      if (isObject22(items)) {
        items = Object.entries(items).map(([key, value]) => {
          let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey((value2) => keys.push(value2), { scope: { index: key, ...scope2 } });
          scopes.push(scope2);
        });
      } else {
        for (let i = 0; i < items.length; i++) {
          let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
          evaluateKey((value) => keys.push(value), { scope: { index: i, ...scope2 } });
          scopes.push(scope2);
        }
      }
      let adds = [];
      let moves = [];
      let removes = [];
      let sames = [];
      for (let i = 0; i < prevKeys.length; i++) {
        let key = prevKeys[i];
        if (keys.indexOf(key) === -1)
          removes.push(key);
      }
      prevKeys = prevKeys.filter((key) => !removes.includes(key));
      let lastKey = "template";
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let prevIndex = prevKeys.indexOf(key);
        if (prevIndex === -1) {
          prevKeys.splice(i, 0, key);
          adds.push([lastKey, i]);
        } else if (prevIndex !== i) {
          let keyInSpot = prevKeys.splice(i, 1)[0];
          let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(i, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(key);
        }
        lastKey = key;
      }
      for (let i = 0; i < removes.length; i++) {
        let key = removes[i];
        if (!!lookup[key]._x_effects) {
          lookup[key]._x_effects.forEach(dequeueJob);
        }
        lookup[key].remove();
        lookup[key] = null;
        delete lookup[key];
      }
      for (let i = 0; i < moves.length; i++) {
        let [keyInSpot, keyForSpot] = moves[i];
        let elInSpot = lookup[keyInSpot];
        let elForSpot = lookup[keyForSpot];
        let marker = document.createElement("div");
        mutateDom(() => {
          if (!elForSpot)
            warn(`x-for ":key" is undefined or invalid`, templateEl);
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
          marker.before(elInSpot);
          elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
          marker.remove();
        });
        elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
      }
      for (let i = 0; i < adds.length; i++) {
        let [lastKey2, index2] = adds[i];
        let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
        if (lastEl._x_currentIfEl)
          lastEl = lastEl._x_currentIfEl;
        let scope2 = scopes[index2];
        let key = keys[index2];
        let clone2 = document.importNode(templateEl.content, true).firstElementChild;
        let reactiveScope = reactive(scope2);
        addScopeToNode(clone2, reactiveScope, templateEl);
        clone2._x_refreshXForScope = (newScope) => {
          Object.entries(newScope).forEach(([key2, value]) => {
            reactiveScope[key2] = value;
          });
        };
        mutateDom(() => {
          lastEl.after(clone2);
          initTree(clone2);
        });
        if (typeof key === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }
        lookup[key] = clone2;
      }
      for (let i = 0; i < sames.length; i++) {
        lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
      }
      templateEl._x_prevKeys = keys;
    });
  }
  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch)
      return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }
    return res;
  }
  function getIterationScopeVariables(iteratorNames, item, index2, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
      names.forEach((name, i) => {
        scopeVariables[name] = item[i];
      });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
      let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
      names.forEach((name) => {
        scopeVariables[name] = item[name];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }
    if (iteratorNames.index)
      scopeVariables[iteratorNames.index] = index2;
    if (iteratorNames.collection)
      scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }
  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function handler3() {
  }
  handler3.inline = (el, { expression }, { cleanup: cleanup2 }) => {
    let root = closestRoot(el);
    if (!root._x_refs)
      root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(() => delete root._x_refs[expression]);
  };
  directive("ref", handler3);
  directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-if can only be used on a <template> tag", el);
    let evaluate2 = evaluateLater(el, expression);
    let show = () => {
      if (el._x_currentIfEl)
        return el._x_currentIfEl;
      let clone2 = el.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone2, {}, el);
      mutateDom(() => {
        el.after(clone2);
        initTree(clone2);
      });
      el._x_currentIfEl = clone2;
      el._x_undoIf = () => {
        walk(clone2, (node) => {
          if (!!node._x_effects) {
            node._x_effects.forEach(dequeueJob);
          }
        });
        clone2.remove();
        delete el._x_currentIfEl;
      };
      return clone2;
    };
    let hide = () => {
      if (!el._x_undoIf)
        return;
      el._x_undoIf();
      delete el._x_undoIf;
    };
    effect3(() => evaluate2((value) => {
      value ? show() : hide();
    }));
    cleanup2(() => el._x_undoIf && el._x_undoIf());
  });
  directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
    let names = evaluate2(expression);
    names.forEach((name) => setIdRoot(el, name));
  });
  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
    let evaluate2 = expression ? evaluateLater(el, expression) : () => {
    };
    if (el.tagName.toLowerCase() === "template") {
      if (!el._x_forwardEvents)
        el._x_forwardEvents = [];
      if (!el._x_forwardEvents.includes(value))
        el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e) => {
      evaluate2(() => {
      }, { scope: { "$event": e }, params: [e] });
    });
    cleanup2(() => removeListener());
  }));
  warnMissingPluginDirective("Collapse", "collapse", "collapse");
  warnMissingPluginDirective("Intersect", "intersect", "intersect");
  warnMissingPluginDirective("Focus", "trap", "focus");
  warnMissingPluginDirective("Mask", "mask", "mask");
  function warnMissingPluginDirective(name, directiveName, slug) {
    directive(directiveName, (el) => warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
  var src_default = alpine_default;
  var module_default = src_default;

  // node_modules/@alpinejs/focus/dist/module.esm.js
  var candidateSelectors = ["input", "select", "textarea", "a[href]", "button", "[tabindex]:not(slot)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"];
  var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
  var NoElement = typeof Element === "undefined";
  var matches = NoElement ? function() {
  } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
    return element.getRootNode();
  } : function(element) {
    return element.ownerDocument;
  };
  var getCandidates = function getCandidates2(el, includeContainer, filter2) {
    var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
    if (includeContainer && matches.call(el, candidateSelector)) {
      candidates.unshift(el);
    }
    candidates = candidates.filter(filter2);
    return candidates;
  };
  var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
    var candidates = [];
    var elementsToCheck = Array.from(elements);
    while (elementsToCheck.length) {
      var element = elementsToCheck.shift();
      if (element.tagName === "SLOT") {
        var assigned = element.assignedElements();
        var content = assigned.length ? assigned : element.children;
        var nestedCandidates = getCandidatesIteratively2(content, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, nestedCandidates);
        } else {
          candidates.push({
            scope: element,
            candidates: nestedCandidates
          });
        }
      } else {
        var validCandidate = matches.call(element, candidateSelector);
        if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
          candidates.push(element);
        }
        var shadowRoot = element.shadowRoot || typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
        var validShadowRoot = !options.shadowRootFilter || options.shadowRootFilter(element);
        if (shadowRoot && validShadowRoot) {
          var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
          if (options.flatten) {
            candidates.push.apply(candidates, _nestedCandidates);
          } else {
            candidates.push({
              scope: element,
              candidates: _nestedCandidates
            });
          }
        } else {
          elementsToCheck.unshift.apply(elementsToCheck, element.children);
        }
      }
    }
    return candidates;
  };
  var getTabindex = function getTabindex2(node, isScope) {
    if (node.tabIndex < 0) {
      if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || node.isContentEditable) && isNaN(parseInt(node.getAttribute("tabindex"), 10))) {
        return 0;
      }
    }
    return node.tabIndex;
  };
  var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
    return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
  };
  var isInput = function isInput2(node) {
    return node.tagName === "INPUT";
  };
  var isHiddenInput = function isHiddenInput2(node) {
    return isInput(node) && node.type === "hidden";
  };
  var isDetailsWithSummary = function isDetailsWithSummary2(node) {
    var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
      return child.tagName === "SUMMARY";
    });
    return r;
  };
  var getCheckedRadio = function getCheckedRadio2(nodes, form) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].checked && nodes[i].form === form) {
        return nodes[i];
      }
    }
  };
  var isTabbableRadio = function isTabbableRadio2(node) {
    if (!node.name) {
      return true;
    }
    var radioScope = node.form || getRootNode(node);
    var queryRadios = function queryRadios2(name) {
      return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
    };
    var radioSet;
    if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
      radioSet = queryRadios(window.CSS.escape(node.name));
    } else {
      try {
        radioSet = queryRadios(node.name);
      } catch (err) {
        console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
        return false;
      }
    }
    var checked = getCheckedRadio(radioSet, node.form);
    return !checked || checked === node;
  };
  var isRadio = function isRadio2(node) {
    return isInput(node) && node.type === "radio";
  };
  var isNonTabbableRadio = function isNonTabbableRadio2(node) {
    return isRadio(node) && !isTabbableRadio(node);
  };
  var isZeroArea = function isZeroArea2(node) {
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
    return width === 0 && height === 0;
  };
  var isHidden = function isHidden2(node, _ref) {
    var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
    if (getComputedStyle(node).visibility === "hidden") {
      return true;
    }
    var isDirectSummary = matches.call(node, "details>summary:first-of-type");
    var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
    if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
      return true;
    }
    var nodeRootHost = getRootNode(node).host;
    var nodeIsAttached = (nodeRootHost === null || nodeRootHost === void 0 ? void 0 : nodeRootHost.ownerDocument.contains(nodeRootHost)) || node.ownerDocument.contains(node);
    if (!displayCheck || displayCheck === "full") {
      if (typeof getShadowRoot === "function") {
        var originalNode = node;
        while (node) {
          var parentElement = node.parentElement;
          var rootNode = getRootNode(node);
          if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
            return isZeroArea(node);
          } else if (node.assignedSlot) {
            node = node.assignedSlot;
          } else if (!parentElement && rootNode !== node.ownerDocument) {
            node = rootNode.host;
          } else {
            node = parentElement;
          }
        }
        node = originalNode;
      }
      if (nodeIsAttached) {
        return !node.getClientRects().length;
      }
    } else if (displayCheck === "non-zero-area") {
      return isZeroArea(node);
    }
    return false;
  };
  var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
      var parentNode = node.parentElement;
      while (parentNode) {
        if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
          for (var i = 0; i < parentNode.children.length; i++) {
            var child = parentNode.children.item(i);
            if (child.tagName === "LEGEND") {
              return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
            }
          }
          return true;
        }
        parentNode = parentNode.parentElement;
      }
    }
    return false;
  };
  var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
    if (node.disabled || isHiddenInput(node) || isHidden(node, options) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
      return false;
    }
    return true;
  };
  var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
    if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
      return false;
    }
    return true;
  };
  var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
    var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
    if (isNaN(tabIndex) || tabIndex >= 0) {
      return true;
    }
    return false;
  };
  var sortByOrder = function sortByOrder2(candidates) {
    var regularTabbables = [];
    var orderedTabbables = [];
    candidates.forEach(function(item, i) {
      var isScope = !!item.scope;
      var element = isScope ? item.scope : item;
      var candidateTabindex = getTabindex(element, isScope);
      var elements = isScope ? sortByOrder2(item.candidates) : element;
      if (candidateTabindex === 0) {
        isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
      } else {
        orderedTabbables.push({
          documentOrder: i,
          tabIndex: candidateTabindex,
          item,
          isScope,
          content: elements
        });
      }
    });
    return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
      sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
      return acc;
    }, []).concat(regularTabbables);
  };
  var tabbable = function tabbable2(el, options) {
    options = options || {};
    var candidates;
    if (options.getShadowRoot) {
      candidates = getCandidatesIteratively([el], options.includeContainer, {
        filter: isNodeMatchingSelectorTabbable.bind(null, options),
        flatten: false,
        getShadowRoot: options.getShadowRoot,
        shadowRootFilter: isValidShadowRootTabbable
      });
    } else {
      candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
    }
    return sortByOrder(candidates);
  };
  var focusable = function focusable2(el, options) {
    options = options || {};
    var candidates;
    if (options.getShadowRoot) {
      candidates = getCandidatesIteratively([el], options.includeContainer, {
        filter: isNodeMatchingSelectorFocusable.bind(null, options),
        flatten: true,
        getShadowRoot: options.getShadowRoot
      });
    } else {
      candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
    }
    return candidates;
  };
  var isTabbable = function isTabbable2(node, options) {
    options = options || {};
    if (!node) {
      throw new Error("No node provided");
    }
    if (matches.call(node, candidateSelector) === false) {
      return false;
    }
    return isNodeMatchingSelectorTabbable(options, node);
  };
  var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
  var isFocusable = function isFocusable2(node, options) {
    options = options || {};
    if (!node) {
      throw new Error("No node provided");
    }
    if (matches.call(node, focusableCandidateSelector) === false) {
      return false;
    }
    return isNodeMatchingSelectorFocusable(options, node);
  };
  function ownKeys2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var activeFocusTraps = function() {
    var trapQueue = [];
    return {
      activateTrap: function activateTrap(trap) {
        if (trapQueue.length > 0) {
          var activeTrap = trapQueue[trapQueue.length - 1];
          if (activeTrap !== trap) {
            activeTrap.pause();
          }
        }
        var trapIndex = trapQueue.indexOf(trap);
        if (trapIndex === -1) {
          trapQueue.push(trap);
        } else {
          trapQueue.splice(trapIndex, 1);
          trapQueue.push(trap);
        }
      },
      deactivateTrap: function deactivateTrap(trap) {
        var trapIndex = trapQueue.indexOf(trap);
        if (trapIndex !== -1) {
          trapQueue.splice(trapIndex, 1);
        }
        if (trapQueue.length > 0) {
          trapQueue[trapQueue.length - 1].unpause();
        }
      }
    };
  }();
  var isSelectableInput = function isSelectableInput2(node) {
    return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
  };
  var isEscapeEvent = function isEscapeEvent2(e) {
    return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
  };
  var isTabEvent = function isTabEvent2(e) {
    return e.key === "Tab" || e.keyCode === 9;
  };
  var delay = function delay2(fn) {
    return setTimeout(fn, 0);
  };
  var findIndex = function findIndex2(arr, fn) {
    var idx = -1;
    arr.every(function(value, i) {
      if (fn(value)) {
        idx = i;
        return false;
      }
      return true;
    });
    return idx;
  };
  var valueOrHandler = function valueOrHandler2(value) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    return typeof value === "function" ? value.apply(void 0, params) : value;
  };
  var getActualTarget = function getActualTarget2(event2) {
    return event2.target.shadowRoot && typeof event2.composedPath === "function" ? event2.composedPath()[0] : event2.target;
  };
  var createFocusTrap = function createFocusTrap2(elements, userOptions) {
    var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
    var config = _objectSpread2({
      returnFocusOnDeactivate: true,
      escapeDeactivates: true,
      delayInitialFocus: true
    }, userOptions);
    var state = {
      containers: [],
      containerGroups: [],
      tabbableGroups: [],
      nodeFocusedBeforeActivation: null,
      mostRecentlyFocusedNode: null,
      active: false,
      paused: false,
      delayInitialFocusTimer: void 0
    };
    var trap;
    var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
      return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
    };
    var findContainerIndex = function findContainerIndex2(element) {
      return state.containerGroups.findIndex(function(_ref) {
        var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
        return container.contains(element) || tabbableNodes.find(function(node) {
          return node === element;
        });
      });
    };
    var getNodeForOption = function getNodeForOption2(optionName) {
      var optionValue = config[optionName];
      if (typeof optionValue === "function") {
        for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          params[_key2 - 1] = arguments[_key2];
        }
        optionValue = optionValue.apply(void 0, params);
      }
      if (optionValue === true) {
        optionValue = void 0;
      }
      if (!optionValue) {
        if (optionValue === void 0 || optionValue === false) {
          return optionValue;
        }
        throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
      }
      var node = optionValue;
      if (typeof optionValue === "string") {
        node = doc.querySelector(optionValue);
        if (!node) {
          throw new Error("`".concat(optionName, "` as selector refers to no known node"));
        }
      }
      return node;
    };
    var getInitialFocusNode = function getInitialFocusNode2() {
      var node = getNodeForOption("initialFocus");
      if (node === false) {
        return false;
      }
      if (node === void 0) {
        if (findContainerIndex(doc.activeElement) >= 0) {
          node = doc.activeElement;
        } else {
          var firstTabbableGroup = state.tabbableGroups[0];
          var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
          node = firstTabbableNode || getNodeForOption("fallbackFocus");
        }
      }
      if (!node) {
        throw new Error("Your focus-trap needs to have at least one focusable element");
      }
      return node;
    };
    var updateTabbableNodes = function updateTabbableNodes2() {
      state.containerGroups = state.containers.map(function(container) {
        var tabbableNodes = tabbable(container, config.tabbableOptions);
        var focusableNodes = focusable(container, config.tabbableOptions);
        return {
          container,
          tabbableNodes,
          focusableNodes,
          firstTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[0] : null,
          lastTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : null,
          nextTabbableNode: function nextTabbableNode(node) {
            var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            var nodeIdx = focusableNodes.findIndex(function(n) {
              return n === node;
            });
            if (nodeIdx < 0) {
              return void 0;
            }
            if (forward) {
              return focusableNodes.slice(nodeIdx + 1).find(function(n) {
                return isTabbable(n, config.tabbableOptions);
              });
            }
            return focusableNodes.slice(0, nodeIdx).reverse().find(function(n) {
              return isTabbable(n, config.tabbableOptions);
            });
          }
        };
      });
      state.tabbableGroups = state.containerGroups.filter(function(group) {
        return group.tabbableNodes.length > 0;
      });
      if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
        throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
      }
    };
    var tryFocus = function tryFocus2(node) {
      if (node === false) {
        return;
      }
      if (node === doc.activeElement) {
        return;
      }
      if (!node || !node.focus) {
        tryFocus2(getInitialFocusNode());
        return;
      }
      node.focus({
        preventScroll: !!config.preventScroll
      });
      state.mostRecentlyFocusedNode = node;
      if (isSelectableInput(node)) {
        node.select();
      }
    };
    var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
      var node = getNodeForOption("setReturnFocus", previousActiveElement);
      return node ? node : node === false ? false : previousActiveElement;
    };
    var checkPointerDown = function checkPointerDown2(e) {
      var target = getActualTarget(e);
      if (findContainerIndex(target) >= 0) {
        return;
      }
      if (valueOrHandler(config.clickOutsideDeactivates, e)) {
        trap.deactivate({
          returnFocus: config.returnFocusOnDeactivate && !isFocusable(target, config.tabbableOptions)
        });
        return;
      }
      if (valueOrHandler(config.allowOutsideClick, e)) {
        return;
      }
      e.preventDefault();
    };
    var checkFocusIn = function checkFocusIn2(e) {
      var target = getActualTarget(e);
      var targetContained = findContainerIndex(target) >= 0;
      if (targetContained || target instanceof Document) {
        if (targetContained) {
          state.mostRecentlyFocusedNode = target;
        }
      } else {
        e.stopImmediatePropagation();
        tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
      }
    };
    var checkTab = function checkTab2(e) {
      var target = getActualTarget(e);
      updateTabbableNodes();
      var destinationNode = null;
      if (state.tabbableGroups.length > 0) {
        var containerIndex = findContainerIndex(target);
        var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : void 0;
        if (containerIndex < 0) {
          if (e.shiftKey) {
            destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
          } else {
            destinationNode = state.tabbableGroups[0].firstTabbableNode;
          }
        } else if (e.shiftKey) {
          var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref2) {
            var firstTabbableNode = _ref2.firstTabbableNode;
            return target === firstTabbableNode;
          });
          if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
            startOfGroupIndex = containerIndex;
          }
          if (startOfGroupIndex >= 0) {
            var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
            var destinationGroup = state.tabbableGroups[destinationGroupIndex];
            destinationNode = destinationGroup.lastTabbableNode;
          }
        } else {
          var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
            var lastTabbableNode = _ref3.lastTabbableNode;
            return target === lastTabbableNode;
          });
          if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
            lastOfGroupIndex = containerIndex;
          }
          if (lastOfGroupIndex >= 0) {
            var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
            var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
            destinationNode = _destinationGroup.firstTabbableNode;
          }
        }
      } else {
        destinationNode = getNodeForOption("fallbackFocus");
      }
      if (destinationNode) {
        e.preventDefault();
        tryFocus(destinationNode);
      }
    };
    var checkKey = function checkKey2(e) {
      if (isEscapeEvent(e) && valueOrHandler(config.escapeDeactivates, e) !== false) {
        e.preventDefault();
        trap.deactivate();
        return;
      }
      if (isTabEvent(e)) {
        checkTab(e);
        return;
      }
    };
    var checkClick = function checkClick2(e) {
      var target = getActualTarget(e);
      if (findContainerIndex(target) >= 0) {
        return;
      }
      if (valueOrHandler(config.clickOutsideDeactivates, e)) {
        return;
      }
      if (valueOrHandler(config.allowOutsideClick, e)) {
        return;
      }
      e.preventDefault();
      e.stopImmediatePropagation();
    };
    var addListeners = function addListeners2() {
      if (!state.active) {
        return;
      }
      activeFocusTraps.activateTrap(trap);
      state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
        tryFocus(getInitialFocusNode());
      }) : tryFocus(getInitialFocusNode());
      doc.addEventListener("focusin", checkFocusIn, true);
      doc.addEventListener("mousedown", checkPointerDown, {
        capture: true,
        passive: false
      });
      doc.addEventListener("touchstart", checkPointerDown, {
        capture: true,
        passive: false
      });
      doc.addEventListener("click", checkClick, {
        capture: true,
        passive: false
      });
      doc.addEventListener("keydown", checkKey, {
        capture: true,
        passive: false
      });
      return trap;
    };
    var removeListeners = function removeListeners2() {
      if (!state.active) {
        return;
      }
      doc.removeEventListener("focusin", checkFocusIn, true);
      doc.removeEventListener("mousedown", checkPointerDown, true);
      doc.removeEventListener("touchstart", checkPointerDown, true);
      doc.removeEventListener("click", checkClick, true);
      doc.removeEventListener("keydown", checkKey, true);
      return trap;
    };
    trap = {
      get active() {
        return state.active;
      },
      get paused() {
        return state.paused;
      },
      activate: function activate(activateOptions) {
        if (state.active) {
          return this;
        }
        var onActivate = getOption(activateOptions, "onActivate");
        var onPostActivate = getOption(activateOptions, "onPostActivate");
        var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
        if (!checkCanFocusTrap) {
          updateTabbableNodes();
        }
        state.active = true;
        state.paused = false;
        state.nodeFocusedBeforeActivation = doc.activeElement;
        if (onActivate) {
          onActivate();
        }
        var finishActivation = function finishActivation2() {
          if (checkCanFocusTrap) {
            updateTabbableNodes();
          }
          addListeners();
          if (onPostActivate) {
            onPostActivate();
          }
        };
        if (checkCanFocusTrap) {
          checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
          return this;
        }
        finishActivation();
        return this;
      },
      deactivate: function deactivate(deactivateOptions) {
        if (!state.active) {
          return this;
        }
        var options = _objectSpread2({
          onDeactivate: config.onDeactivate,
          onPostDeactivate: config.onPostDeactivate,
          checkCanReturnFocus: config.checkCanReturnFocus
        }, deactivateOptions);
        clearTimeout(state.delayInitialFocusTimer);
        state.delayInitialFocusTimer = void 0;
        removeListeners();
        state.active = false;
        state.paused = false;
        activeFocusTraps.deactivateTrap(trap);
        var onDeactivate = getOption(options, "onDeactivate");
        var onPostDeactivate = getOption(options, "onPostDeactivate");
        var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
        var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
        if (onDeactivate) {
          onDeactivate();
        }
        var finishDeactivation = function finishDeactivation2() {
          delay(function() {
            if (returnFocus) {
              tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
            }
            if (onPostDeactivate) {
              onPostDeactivate();
            }
          });
        };
        if (returnFocus && checkCanReturnFocus) {
          checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
          return this;
        }
        finishDeactivation();
        return this;
      },
      pause: function pause() {
        if (state.paused || !state.active) {
          return this;
        }
        state.paused = true;
        removeListeners();
        return this;
      },
      unpause: function unpause() {
        if (!state.paused || !state.active) {
          return this;
        }
        state.paused = false;
        updateTabbableNodes();
        addListeners();
        return this;
      },
      updateContainerElements: function updateContainerElements(containerElements) {
        var elementsAsArray = [].concat(containerElements).filter(Boolean);
        state.containers = elementsAsArray.map(function(element) {
          return typeof element === "string" ? doc.querySelector(element) : element;
        });
        if (state.active) {
          updateTabbableNodes();
        }
        return this;
      }
    };
    trap.updateContainerElements(elements);
    return trap;
  };
  function src_default2(Alpine2) {
    let lastFocused;
    let currentFocused;
    window.addEventListener("focusin", () => {
      lastFocused = currentFocused;
      currentFocused = document.activeElement;
    });
    Alpine2.magic("focus", (el) => {
      let within = el;
      return {
        __noscroll: false,
        __wrapAround: false,
        within(el2) {
          within = el2;
          return this;
        },
        withoutScrolling() {
          this.__noscroll = true;
          return this;
        },
        noscroll() {
          this.__noscroll = true;
          return this;
        },
        withWrapAround() {
          this.__wrapAround = true;
          return this;
        },
        wrap() {
          return this.withWrapAround();
        },
        focusable(el2) {
          return isFocusable(el2);
        },
        previouslyFocused() {
          return lastFocused;
        },
        lastFocused() {
          return lastFocused;
        },
        focused() {
          return currentFocused;
        },
        focusables() {
          if (Array.isArray(within))
            return within;
          return focusable(within, { displayCheck: "none" });
        },
        all() {
          return this.focusables();
        },
        isFirst(el2) {
          let els = this.all();
          return els[0] && els[0].isSameNode(el2);
        },
        isLast(el2) {
          let els = this.all();
          return els.length && els.slice(-1)[0].isSameNode(el2);
        },
        getFirst() {
          return this.all()[0];
        },
        getLast() {
          return this.all().slice(-1)[0];
        },
        getNext() {
          let list = this.all();
          let current = document.activeElement;
          if (list.indexOf(current) === -1)
            return;
          if (this.__wrapAround && list.indexOf(current) === list.length - 1) {
            return list[0];
          }
          return list[list.indexOf(current) + 1];
        },
        getPrevious() {
          let list = this.all();
          let current = document.activeElement;
          if (list.indexOf(current) === -1)
            return;
          if (this.__wrapAround && list.indexOf(current) === 0) {
            return list.slice(-1)[0];
          }
          return list[list.indexOf(current) - 1];
        },
        first() {
          this.focus(this.getFirst());
        },
        last() {
          this.focus(this.getLast());
        },
        next() {
          this.focus(this.getNext());
        },
        previous() {
          this.focus(this.getPrevious());
        },
        prev() {
          return this.previous();
        },
        focus(el2) {
          if (!el2)
            return;
          setTimeout(() => {
            if (!el2.hasAttribute("tabindex"))
              el2.setAttribute("tabindex", "0");
            el2.focus({ preventScroll: this._noscroll });
          });
        }
      };
    });
    Alpine2.directive("trap", Alpine2.skipDuringClone(
      (el, { expression, modifiers }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
        let evaluator = evaluateLater2(expression);
        let oldValue = false;
        let options = {
          escapeDeactivates: false,
          allowOutsideClick: true,
          fallbackFocus: () => el
        };
        let autofocusEl = el.querySelector("[autofocus]");
        if (autofocusEl)
          options.initialFocus = autofocusEl;
        let trap = createFocusTrap(el, options);
        let undoInert = () => {
        };
        let undoDisableScrolling = () => {
        };
        const releaseFocus = () => {
          undoInert();
          undoInert = () => {
          };
          undoDisableScrolling();
          undoDisableScrolling = () => {
          };
          trap.deactivate({
            returnFocus: !modifiers.includes("noreturn")
          });
        };
        effect3(() => evaluator((value) => {
          if (oldValue === value)
            return;
          if (value && !oldValue) {
            setTimeout(() => {
              if (modifiers.includes("inert"))
                undoInert = setInert(el);
              if (modifiers.includes("noscroll"))
                undoDisableScrolling = disableScrolling();
              trap.activate();
            });
          }
          if (!value && oldValue) {
            releaseFocus();
          }
          oldValue = !!value;
        }));
        cleanup2(releaseFocus);
      },
      (el, { expression, modifiers }, { evaluate: evaluate2 }) => {
        if (modifiers.includes("inert") && evaluate2(expression))
          setInert(el);
      }
    ));
  }
  function setInert(el) {
    let undos = [];
    crawlSiblingsUp(el, (sibling) => {
      let cache = sibling.hasAttribute("aria-hidden");
      sibling.setAttribute("aria-hidden", "true");
      undos.push(() => cache || sibling.removeAttribute("aria-hidden"));
    });
    return () => {
      while (undos.length)
        undos.pop()();
    };
  }
  function crawlSiblingsUp(el, callback) {
    if (el.isSameNode(document.body) || !el.parentNode)
      return;
    Array.from(el.parentNode.children).forEach((sibling) => {
      if (sibling.isSameNode(el)) {
        crawlSiblingsUp(el.parentNode, callback);
      } else {
        callback(sibling);
      }
    });
  }
  function disableScrolling() {
    let overflow = document.documentElement.style.overflow;
    let paddingRight = document.documentElement.style.paddingRight;
    let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.documentElement.style.overflow = overflow;
      document.documentElement.style.paddingRight = paddingRight;
    };
  }
  var module_default2 = src_default2;

  // node_modules/ssr-window/ssr-window.esm.js
  function isObject2(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend(target = {}, src = {}) {
    Object.keys(src).forEach((key) => {
      if (typeof target[key] === "undefined")
        target[key] = src[key];
      else if (isObject2(src[key]) && isObject2(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function CustomEvent2() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  // node_modules/dom7/dom7.esm.js
  function makeReactive(obj) {
    const proto = obj.__proto__;
    Object.defineProperty(obj, "__proto__", {
      get() {
        return proto;
      },
      set(value) {
        proto.__proto__ = value;
      }
    });
  }
  var Dom7 = class extends Array {
    constructor(items) {
      if (typeof items === "number") {
        super(items);
      } else {
        super(...items || []);
        makeReactive(this);
      }
    }
  };
  function arrayFlat(arr = []) {
    const res = [];
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        res.push(...arrayFlat(el));
      } else {
        res.push(el);
      }
    });
    return res;
  }
  function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
  }
  function arrayUnique(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1)
        uniqueArray.push(arr[i]);
    }
    return uniqueArray;
  }
  function qsa(selector, context) {
    if (typeof selector !== "string") {
      return [selector];
    }
    const a = [];
    const res = context.querySelectorAll(selector);
    for (let i = 0; i < res.length; i += 1) {
      a.push(res[i]);
    }
    return a;
  }
  function $(selector, context) {
    const window2 = getWindow();
    const document2 = getDocument();
    let arr = [];
    if (!context && selector instanceof Dom7) {
      return selector;
    }
    if (!selector) {
      return new Dom7(arr);
    }
    if (typeof selector === "string") {
      const html2 = selector.trim();
      if (html2.indexOf("<") >= 0 && html2.indexOf(">") >= 0) {
        let toCreate = "div";
        if (html2.indexOf("<li") === 0)
          toCreate = "ul";
        if (html2.indexOf("<tr") === 0)
          toCreate = "tbody";
        if (html2.indexOf("<td") === 0 || html2.indexOf("<th") === 0)
          toCreate = "tr";
        if (html2.indexOf("<tbody") === 0)
          toCreate = "table";
        if (html2.indexOf("<option") === 0)
          toCreate = "select";
        const tempParent = document2.createElement(toCreate);
        tempParent.innerHTML = html2;
        for (let i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        arr = qsa(selector.trim(), context || document2);
      }
    } else if (selector.nodeType || selector === window2 || selector === document2) {
      arr.push(selector);
    } else if (Array.isArray(selector)) {
      if (selector instanceof Dom7)
        return selector;
      arr = selector;
    }
    return new Dom7(arrayUnique(arr));
  }
  $.fn = Dom7.prototype;
  function addClass(...classes) {
    const classNames = arrayFlat(classes.map((c) => c.split(" ")));
    this.forEach((el) => {
      el.classList.add(...classNames);
    });
    return this;
  }
  function removeClass(...classes) {
    const classNames = arrayFlat(classes.map((c) => c.split(" ")));
    this.forEach((el) => {
      el.classList.remove(...classNames);
    });
    return this;
  }
  function toggleClass(...classes) {
    const classNames = arrayFlat(classes.map((c) => c.split(" ")));
    this.forEach((el) => {
      classNames.forEach((className) => {
        el.classList.toggle(className);
      });
    });
  }
  function hasClass(...classes) {
    const classNames = arrayFlat(classes.map((c) => c.split(" ")));
    return arrayFilter(this, (el) => {
      return classNames.filter((className) => el.classList.contains(className)).length > 0;
    }).length > 0;
  }
  function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === "string") {
      if (this[0])
        return this[0].getAttribute(attrs);
      return void 0;
    }
    for (let i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        this[i].setAttribute(attrs, value);
      } else {
        for (const attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  function removeAttr(attr2) {
    for (let i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr2);
    }
    return this;
  }
  function transform(transform2) {
    for (let i = 0; i < this.length; i += 1) {
      this[i].style.transform = transform2;
    }
    return this;
  }
  function transition2(duration) {
    for (let i = 0; i < this.length; i += 1) {
      this[i].style.transitionDuration = typeof duration !== "string" ? `${duration}ms` : duration;
    }
    return this;
  }
  function on2(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === "function") {
      [eventType, listener, capture] = args;
      targetSelector = void 0;
    }
    if (!capture)
      capture = false;
    function handleLiveEvent(e) {
      const target = e.target;
      if (!target)
        return;
      const eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector))
        listener.apply(target, eventData);
      else {
        const parents2 = $(target).parents();
        for (let k = 0; k < parents2.length; k += 1) {
          if ($(parents2[k]).is(targetSelector))
            listener.apply(parents2[k], eventData);
        }
      }
    }
    function handleEvent(e) {
      const eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    const events2 = eventType.split(" ");
    let j;
    for (let i = 0; i < this.length; i += 1) {
      const el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events2.length; j += 1) {
          const event2 = events2[j];
          if (!el.dom7Listeners)
            el.dom7Listeners = {};
          if (!el.dom7Listeners[event2])
            el.dom7Listeners[event2] = [];
          el.dom7Listeners[event2].push({
            listener,
            proxyListener: handleEvent
          });
          el.addEventListener(event2, handleEvent, capture);
        }
      } else {
        for (j = 0; j < events2.length; j += 1) {
          const event2 = events2[j];
          if (!el.dom7LiveListeners)
            el.dom7LiveListeners = {};
          if (!el.dom7LiveListeners[event2])
            el.dom7LiveListeners[event2] = [];
          el.dom7LiveListeners[event2].push({
            listener,
            proxyListener: handleLiveEvent
          });
          el.addEventListener(event2, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === "function") {
      [eventType, listener, capture] = args;
      targetSelector = void 0;
    }
    if (!capture)
      capture = false;
    const events2 = eventType.split(" ");
    for (let i = 0; i < events2.length; i += 1) {
      const event2 = events2[i];
      for (let j = 0; j < this.length; j += 1) {
        const el = this[j];
        let handlers;
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event2];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event2];
        }
        if (handlers && handlers.length) {
          for (let k = handlers.length - 1; k >= 0; k -= 1) {
            const handler4 = handlers[k];
            if (listener && handler4.listener === listener) {
              el.removeEventListener(event2, handler4.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler4.listener && handler4.listener.dom7proxy && handler4.listener.dom7proxy === listener) {
              el.removeEventListener(event2, handler4.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event2, handler4.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger2(...args) {
    const window2 = getWindow();
    const events2 = args[0].split(" ");
    const eventData = args[1];
    for (let i = 0; i < events2.length; i += 1) {
      const event2 = events2[i];
      for (let j = 0; j < this.length; j += 1) {
        const el = this[j];
        if (window2.CustomEvent) {
          const evt = new window2.CustomEvent(event2, {
            detail: eventData,
            bubbles: true,
            cancelable: true
          });
          el.dom7EventData = args.filter((data2, dataIndex) => dataIndex > 0);
          el.dispatchEvent(evt);
          el.dom7EventData = [];
          delete el.dom7EventData;
        }
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    const dom = this;
    function fireCallBack(e) {
      if (e.target !== this)
        return;
      callback.call(this, e);
      dom.off("transitionend", fireCallBack);
    }
    if (callback) {
      dom.on("transitionend", fireCallBack);
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        const styles2 = this.styles();
        return this[0].offsetWidth + parseFloat(styles2.getPropertyValue("margin-right")) + parseFloat(styles2.getPropertyValue("margin-left"));
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        const styles2 = this.styles();
        return this[0].offsetHeight + parseFloat(styles2.getPropertyValue("margin-top")) + parseFloat(styles2.getPropertyValue("margin-bottom"));
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      const window2 = getWindow();
      const document2 = getDocument();
      const el = this[0];
      const box = el.getBoundingClientRect();
      const body = document2.body;
      const clientTop = el.clientTop || body.clientTop || 0;
      const clientLeft = el.clientLeft || body.clientLeft || 0;
      const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
      const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
      return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
      };
    }
    return null;
  }
  function styles() {
    const window2 = getWindow();
    if (this[0])
      return window2.getComputedStyle(this[0], null);
    return {};
  }
  function css(props, value) {
    const window2 = getWindow();
    let i;
    if (arguments.length === 1) {
      if (typeof props === "string") {
        if (this[0])
          return window2.getComputedStyle(this[0], null).getPropertyValue(props);
      } else {
        for (i = 0; i < this.length; i += 1) {
          for (const prop in props) {
            this[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === "string") {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  function each(callback) {
    if (!callback)
      return this;
    this.forEach((el, index2) => {
      callback.apply(el, [el, index2]);
    });
    return this;
  }
  function filter(callback) {
    const result = arrayFilter(this, callback);
    return $(result);
  }
  function html(html2) {
    if (typeof html2 === "undefined") {
      return this[0] ? this[0].innerHTML : null;
    }
    for (let i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html2;
    }
    return this;
  }
  function text(text2) {
    if (typeof text2 === "undefined") {
      return this[0] ? this[0].textContent.trim() : null;
    }
    for (let i = 0; i < this.length; i += 1) {
      this[i].textContent = text2;
    }
    return this;
  }
  function is(selector) {
    const window2 = getWindow();
    const document2 = getDocument();
    const el = this[0];
    let compareWith;
    let i;
    if (!el || typeof selector === "undefined")
      return false;
    if (typeof selector === "string") {
      if (el.matches)
        return el.matches(selector);
      if (el.webkitMatchesSelector)
        return el.webkitMatchesSelector(selector);
      if (el.msMatchesSelector)
        return el.msMatchesSelector(selector);
      compareWith = $(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el)
          return true;
      }
      return false;
    }
    if (selector === document2) {
      return el === document2;
    }
    if (selector === window2) {
      return el === window2;
    }
    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el)
          return true;
      }
      return false;
    }
    return false;
  }
  function index() {
    let child = this[0];
    let i;
    if (child) {
      i = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1)
          i += 1;
      }
      return i;
    }
    return void 0;
  }
  function eq(index2) {
    if (typeof index2 === "undefined")
      return this;
    const length = this.length;
    if (index2 > length - 1) {
      return $([]);
    }
    if (index2 < 0) {
      const returnIndex = length + index2;
      if (returnIndex < 0)
        return $([]);
      return $([this[returnIndex]]);
    }
    return $([this[index2]]);
  }
  function append(...els) {
    let newChild;
    const document2 = getDocument();
    for (let k = 0; k < els.length; k += 1) {
      newChild = els[k];
      for (let i = 0; i < this.length; i += 1) {
        if (typeof newChild === "string") {
          const tempDiv = document2.createElement("div");
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (let j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }
    return this;
  }
  function prepend(newChild) {
    const document2 = getDocument();
    let i;
    let j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === "string") {
        const tempDiv = document2.createElement("div");
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return $([this[0].nextElementSibling]);
        }
        return $([]);
      }
      if (this[0].nextElementSibling)
        return $([this[0].nextElementSibling]);
      return $([]);
    }
    return $([]);
  }
  function nextAll(selector) {
    const nextEls = [];
    let el = this[0];
    if (!el)
      return $([]);
    while (el.nextElementSibling) {
      const next2 = el.nextElementSibling;
      if (selector) {
        if ($(next2).is(selector))
          nextEls.push(next2);
      } else
        nextEls.push(next2);
      el = next2;
    }
    return $(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      const el = this[0];
      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return $([el.previousElementSibling]);
        }
        return $([]);
      }
      if (el.previousElementSibling)
        return $([el.previousElementSibling]);
      return $([]);
    }
    return $([]);
  }
  function prevAll(selector) {
    const prevEls = [];
    let el = this[0];
    if (!el)
      return $([]);
    while (el.previousElementSibling) {
      const prev2 = el.previousElementSibling;
      if (selector) {
        if ($(prev2).is(selector))
          prevEls.push(prev2);
      } else
        prevEls.push(prev2);
      el = prev2;
    }
    return $(prevEls);
  }
  function parent(selector) {
    const parents2 = [];
    for (let i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector))
            parents2.push(this[i].parentNode);
        } else {
          parents2.push(this[i].parentNode);
        }
      }
    }
    return $(parents2);
  }
  function parents(selector) {
    const parents2 = [];
    for (let i = 0; i < this.length; i += 1) {
      let parent2 = this[i].parentNode;
      while (parent2) {
        if (selector) {
          if ($(parent2).is(selector))
            parents2.push(parent2);
        } else {
          parents2.push(parent2);
        }
        parent2 = parent2.parentNode;
      }
    }
    return $(parents2);
  }
  function closest(selector) {
    let closest2 = this;
    if (typeof selector === "undefined") {
      return $([]);
    }
    if (!closest2.is(selector)) {
      closest2 = closest2.parents(selector).eq(0);
    }
    return closest2;
  }
  function find(selector) {
    const foundElements = [];
    for (let i = 0; i < this.length; i += 1) {
      const found = this[i].querySelectorAll(selector);
      for (let j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return $(foundElements);
  }
  function children(selector) {
    const children2 = [];
    for (let i = 0; i < this.length; i += 1) {
      const childNodes = this[i].children;
      for (let j = 0; j < childNodes.length; j += 1) {
        if (!selector || $(childNodes[j]).is(selector)) {
          children2.push(childNodes[j]);
        }
      }
    }
    return $(children2);
  }
  function remove() {
    for (let i = 0; i < this.length; i += 1) {
      if (this[i].parentNode)
        this[i].parentNode.removeChild(this[i]);
    }
    return this;
  }
  var noTrigger = "resize scroll".split(" ");
  function shortcut(name) {
    function eventHandler(...args) {
      if (typeof args[0] === "undefined") {
        for (let i = 0; i < this.length; i += 1) {
          if (noTrigger.indexOf(name) < 0) {
            if (name in this[i])
              this[i][name]();
            else {
              $(this[i]).trigger(name);
            }
          }
        }
        return this;
      }
      return this.on(name, ...args);
    }
    return eventHandler;
  }
  var click = shortcut("click");
  var blur = shortcut("blur");
  var focus = shortcut("focus");
  var focusin = shortcut("focusin");
  var focusout = shortcut("focusout");
  var keyup = shortcut("keyup");
  var keydown = shortcut("keydown");
  var keypress = shortcut("keypress");
  var submit = shortcut("submit");
  var change = shortcut("change");
  var mousedown = shortcut("mousedown");
  var mousemove = shortcut("mousemove");
  var mouseup = shortcut("mouseup");
  var mouseenter = shortcut("mouseenter");
  var mouseleave = shortcut("mouseleave");
  var mouseout = shortcut("mouseout");
  var mouseover = shortcut("mouseover");
  var touchstart = shortcut("touchstart");
  var touchend = shortcut("touchend");
  var touchmove = shortcut("touchmove");
  var resize = shortcut("resize");
  var scroll = shortcut("scroll");

  // node_modules/swiper/shared/dom.js
  var Methods = {
    addClass,
    removeClass,
    hasClass,
    toggleClass,
    attr,
    removeAttr,
    transform,
    transition: transition2,
    on: on2,
    off,
    trigger: trigger2,
    transitionEnd,
    outerWidth,
    outerHeight,
    styles,
    offset,
    css,
    each,
    html,
    text,
    is,
    index,
    eq,
    append,
    prepend,
    next,
    nextAll,
    prev,
    prevAll,
    parent,
    parents,
    closest,
    find,
    children,
    filter,
    remove
  };
  Object.keys(Methods).forEach((methodName) => {
    Object.defineProperty($.fn, methodName, {
      value: Methods[methodName],
      writable: true
    });
  });
  var dom_default = $;

  // node_modules/swiper/shared/utils.js
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e) {
      }
      try {
        delete object[key];
      } catch (e) {
      }
    });
  }
  function nextTick2(callback, delay3 = 0) {
    return setTimeout(callback, delay3);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle2(el) {
    const window2 = getWindow();
    let style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis = "x") {
    const window2 = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle2(el, null);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m41;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[12]);
      else
        curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m42;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[13]);
      else
        curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject3(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
  }
  function isNode(node) {
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend2(...args) {
    const to = Object(args[0]);
    const noExtend = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < args.length; i += 1) {
      const nextSource = args[i];
      if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject3(to[nextKey]) && isObject3(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject3(to[nextKey]) && isObject3(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll({
    swiper,
    targetPosition,
    side
  }) {
    const window2 = getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window2.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = () => {
      time = new Date().getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = "";
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition
          });
        });
        window2.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
    };
    animate();
  }

  // node_modules/swiper/shared/get-support.js
  var support;
  function calcSupport() {
    const window2 = getWindow();
    const document2 = getDocument();
    return {
      smoothScroll: document2.documentElement && "scrollBehavior" in document2.documentElement.style,
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch),
      passiveListener: function checkPassiveListener() {
        let supportsPassive = false;
        try {
          const opts = Object.defineProperty({}, "passive", {
            get() {
              supportsPassive = true;
            }
          });
          window2.addEventListener("testPassiveListener", null, opts);
        } catch (e) {
        }
        return supportsPassive;
      }(),
      gestures: function checkGestures() {
        return "ongesturestart" in window2;
      }()
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }

  // node_modules/swiper/shared/get-device.js
  var deviceCached;
  function calcDevice({
    userAgent
  } = {}) {
    const support2 = getSupport();
    const window2 = getWindow();
    const platform = window2.navigator.platform;
    const ua = userAgent || window2.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window2.screen.width;
    const screenHeight = window2.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad)
        ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    return device;
  }
  function getDevice(overrides = {}) {
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }

  // node_modules/swiper/shared/get-browser.js
  var browser;
  function calcBrowser() {
    const window2 = getWindow();
    function isSafari() {
      const ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    return {
      isSafari: isSafari(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }

  // node_modules/swiper/core/modules/resize/resize.js
  function Resize({
    swiper,
    on: on3,
    emit
  }) {
    const window2 = getWindow();
    let observer2 = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      observer2 = new ResizeObserver((entries) => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(({
          contentBoxSize,
          contentRect,
          target
        }) => {
          if (target && target !== swiper.el)
            return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
      observer2.observe(swiper.el);
    };
    const removeObserver = () => {
      if (observer2 && observer2.unobserve && swiper.el) {
        observer2.unobserve(swiper.el);
        observer2 = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      emit("orientationchange");
    };
    on3("init", () => {
      if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
        createObserver();
        return;
      }
      window2.addEventListener("resize", resizeHandler);
      window2.addEventListener("orientationchange", orientationChangeHandler);
    });
    on3("destroy", () => {
      removeObserver();
      window2.removeEventListener("resize", resizeHandler);
      window2.removeEventListener("orientationchange", orientationChangeHandler);
    });
  }

  // node_modules/swiper/core/modules/observer/observer.js
  function Observer({
    swiper,
    extendParams,
    on: on3,
    emit
  }) {
    const observers = [];
    const window2 = getWindow();
    const attach = (target, options = {}) => {
      const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      const observer2 = new ObserverFunc((mutations) => {
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate2() {
          emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer2.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: typeof options.childList === "undefined" ? true : options.childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      observers.push(observer2);
    };
    const init = () => {
      if (!swiper.params.observer)
        return;
      if (swiper.params.observeParents) {
        const containerParents = swiper.$el.parents();
        for (let i = 0; i < containerParents.length; i += 1) {
          attach(containerParents[i]);
        }
      }
      attach(swiper.$el[0], {
        childList: swiper.params.observeSlideChildren
      });
      attach(swiper.$wrapperEl[0], {
        attributes: false
      });
    };
    const destroy = () => {
      observers.forEach((observer2) => {
        observer2.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on3("init", init);
    on3("destroy", destroy);
  }

  // node_modules/swiper/core/events-emitter.js
  var events_emitter_default = {
    on(events2, handler4, priority) {
      const self2 = this;
      if (typeof handler4 !== "function")
        return self2;
      const method = priority ? "unshift" : "push";
      events2.split(" ").forEach((event2) => {
        if (!self2.eventsListeners[event2])
          self2.eventsListeners[event2] = [];
        self2.eventsListeners[event2][method](handler4);
      });
      return self2;
    },
    once(events2, handler4, priority) {
      const self2 = this;
      if (typeof handler4 !== "function")
        return self2;
      function onceHandler(...args) {
        self2.off(events2, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        handler4.apply(self2, args);
      }
      onceHandler.__emitterProxy = handler4;
      return self2.on(events2, onceHandler, priority);
    },
    onAny(handler4, priority) {
      const self2 = this;
      if (typeof handler4 !== "function")
        return self2;
      const method = priority ? "unshift" : "push";
      if (self2.eventsAnyListeners.indexOf(handler4) < 0) {
        self2.eventsAnyListeners[method](handler4);
      }
      return self2;
    },
    offAny(handler4) {
      const self2 = this;
      if (!self2.eventsAnyListeners)
        return self2;
      const index2 = self2.eventsAnyListeners.indexOf(handler4);
      if (index2 >= 0) {
        self2.eventsAnyListeners.splice(index2, 1);
      }
      return self2;
    },
    off(events2, handler4) {
      const self2 = this;
      if (!self2.eventsListeners)
        return self2;
      events2.split(" ").forEach((event2) => {
        if (typeof handler4 === "undefined") {
          self2.eventsListeners[event2] = [];
        } else if (self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler, index2) => {
            if (eventHandler === handler4 || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler4) {
              self2.eventsListeners[event2].splice(index2, 1);
            }
          });
        }
      });
      return self2;
    },
    emit(...args) {
      const self2 = this;
      if (!self2.eventsListeners)
        return self2;
      let events2;
      let data2;
      let context;
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events2 = args[0];
        data2 = args.slice(1, args.length);
        context = self2;
      } else {
        events2 = args[0].events;
        data2 = args[0].data;
        context = args[0].context || self2;
      }
      data2.unshift(context);
      const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
      eventsArray.forEach((event2) => {
        if (self2.eventsAnyListeners && self2.eventsAnyListeners.length) {
          self2.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context, [event2, ...data2]);
          });
        }
        if (self2.eventsListeners && self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler) => {
            eventHandler.apply(context, data2);
          });
        }
      });
      return self2;
    }
  };

  // node_modules/swiper/core/update/updateSize.js
  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const $el = swiper.$el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }
    width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
    height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
    if (Number.isNaN(width))
      width = 0;
    if (Number.isNaN(height))
      height = 0;
    Object.assign(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height
    });
  }

  // node_modules/swiper/core/update/updateSlides.js
  function updateSlides() {
    const swiper = this;
    function getDirectionLabel(property) {
      if (swiper.isHorizontal()) {
        return property;
      }
      return {
        "width": "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        "marginRight": "marginBottom"
      }[property];
    }
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const {
      $wrapperEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index2 = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    }
    swiper.virtualSize = -spaceBetween;
    if (rtl)
      slides.css({
        marginLeft: "",
        marginBottom: "",
        marginTop: ""
      });
    else
      slides.css({
        marginRight: "",
        marginBottom: "",
        marginTop: ""
      });
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slidesLength);
    }
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
      return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for (let i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      const slide = slides.eq(i);
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
      }
      if (slide.css("display") === "none")
        continue;
      if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slides[i].style[getDirectionLabel("width")] = ``;
        }
        const slideStyles = getComputedStyle(slide[0]);
        const currentTransform = slide[0].style.transform;
        const currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
        } else {
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth,
              offsetWidth
            } = slide[0];
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3)
          slidePosition = 0;
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if (index2 % params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if ((index2 - Math.min(swiper.params.slidesPerGroupSkip, index2)) % swiper.params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index2 += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      $wrapperEl.css({
        width: `${swiper.virtualSize + params.spaceBetween}px`
      });
    }
    if (params.setWrapperSize) {
      $wrapperEl.css({
        [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
      });
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
    }
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths)
          slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0)
      snapGrid = [0];
    if (params.spaceBetween !== 0) {
      const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
      slides.filter((_, slideIndex) => {
        if (!params.cssMode)
          return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).css({
        [key]: `${spaceBetween}px`
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      const maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map((snap) => {
        if (snap < 0)
          return -offsetBefore;
        if (snap > maxSnap)
          return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      if (allSlidesSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach((snap, snapIndex) => {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach((snap, snapIndex) => {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
      setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow)
        swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
  }

  // node_modules/swiper/core/update/updateAutoHeight.js
  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index2) => {
      if (isVirtual) {
        return swiper.slides.filter((el) => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index2)[0];
      }
      return swiper.slides.eq(index2)[0];
    };
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        swiper.visibleSlides.each((slide) => {
          activeSlides.push(slide);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          const index2 = swiper.activeIndex + i;
          if (index2 > swiper.slides.length && !isVirtual)
            break;
          activeSlides.push(getSlideByIndex(index2));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight || newHeight === 0)
      swiper.$wrapperEl.css("height", `${newHeight}px`);
  }

  // node_modules/swiper/core/update/updateSlidesOffset.js
  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  // node_modules/swiper/core/update/updateSlidesProgress.js
  function updateSlidesProgress(translate = this && this.translate || 0) {
    const swiper = this;
    const params = swiper.params;
    const {
      slides,
      rtlTranslate: rtl,
      snapGrid
    } = swiper;
    if (slides.length === 0)
      return;
    if (typeof slides[0].swiperSlideOffset === "undefined")
      swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl)
      offsetCenter = translate;
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for (let i = 0; i < slides.length; i += 1) {
      const slide = slides[i];
      let slideOffset = slide.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
      slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
    swiper.visibleSlides = dom_default(swiper.visibleSlides);
  }

  // node_modules/swiper/core/update/updateProgress.js
  function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === "undefined") {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let {
      progress,
      isBeginning,
      isEnd
    } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Object.assign(swiper, {
      progress,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
      swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }

  // node_modules/swiper/core/update/updateSlidesClasses.js
  function updateSlidesClasses() {
    const swiper = this;
    const {
      slides,
      params,
      $wrapperEl,
      activeIndex,
      realIndex
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
    let activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
    } else {
      activeSlide = slides.eq(activeIndex);
    }
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
      }
    }
    let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
      }
    }
    swiper.emitSlidesClasses();
  }

  // node_modules/swiper/core/update/updateActiveIndex.js
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const {
      slidesGrid,
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    if (typeof activeIndex === "undefined") {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === "undefined")
          activeIndex = 0;
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
    Object.assign(swiper, {
      snapIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      swiper.emit("slideChange");
    }
  }

  // node_modules/swiper/core/update/updateClickedSlide.js
  function updateClickedSlide(e) {
    const swiper = this;
    const params = swiper.params;
    const slide = dom_default(e).closest(`.${params.slideClass}`)[0];
    let slideFound = false;
    let slideIndex;
    if (slide) {
      for (let i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(dom_default(slide).attr("data-swiper-slide-index"), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = void 0;
      swiper.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  // node_modules/swiper/core/update/index.js
  var update_default = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };

  // node_modules/swiper/core/translate/getTranslate.js
  function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
    const swiper = this;
    const {
      params,
      rtlTranslate: rtl,
      translate,
      $wrapperEl
    } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }
    if (params.cssMode) {
      return translate;
    }
    let currentTranslate = getTranslate($wrapperEl[0], axis);
    if (rtl)
      currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }

  // node_modules/swiper/core/translate/setTranslate.js
  function setTranslate(translate, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl,
      params,
      $wrapperEl,
      wrapperEl,
      progress
    } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }

  // node_modules/swiper/core/translate/minTranslate.js
  function minTranslate() {
    return -this.snapGrid[0];
  }

  // node_modules/swiper/core/translate/maxTranslate.js
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }

  // node_modules/swiper/core/translate/translateTo.js
  function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
    const swiper = this;
    const {
      params,
      wrapperEl
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate2 = swiper.minTranslate();
    const maxTranslate2 = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate2)
      newTranslate = minTranslate2;
    else if (translateBounds && translate < maxTranslate2)
      newTranslate = maxTranslate2;
    else
      newTranslate = translate;
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth"
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd3(e) {
            if (!swiper || swiper.destroyed)
              return;
            if (e.target !== this)
              return;
            swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }

  // node_modules/swiper/core/translate/index.js
  var translate_default = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };

  // node_modules/swiper/core/transition/setTransition.js
  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.$wrapperEl.transition(duration);
    }
    swiper.emit("setTransition", duration, byController);
  }

  // node_modules/swiper/core/transition/transitionEmit.js
  function transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step
  }) {
    const {
      activeIndex,
      previousIndex
    } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex)
        dir = "next";
      else if (activeIndex < previousIndex)
        dir = "prev";
      else
        dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit(`slideResetTransition${step}`);
        return;
      }
      swiper.emit(`slideChangeTransition${step}`);
      if (dir === "next") {
        swiper.emit(`slideNextTransition${step}`);
      } else {
        swiper.emit(`slidePrevTransition${step}`);
      }
    }
  }

  // node_modules/swiper/core/transition/transitionStart.js
  function transitionStart(runCallbacks = true, direction) {
    const swiper = this;
    const {
      params
    } = swiper;
    if (params.cssMode)
      return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "Start"
    });
  }

  // node_modules/swiper/core/transition/transitionEnd.js
  function transitionEnd2(runCallbacks = true, direction) {
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.animating = false;
    if (params.cssMode)
      return;
    swiper.setTransition(0);
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "End"
    });
  }

  // node_modules/swiper/core/transition/index.js
  var transition_default = {
    setTransition,
    transitionStart,
    transitionEnd: transitionEnd2
  };

  // node_modules/swiper/core/slide/slideTo.js
  function slideTo(index2 = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
    if (typeof index2 !== "number" && typeof index2 !== "string") {
      throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index2}] given.`);
    }
    if (typeof index2 === "string") {
      const indexAsNumber = parseInt(index2, 10);
      const isValidNumber = isFinite(indexAsNumber);
      if (!isValidNumber) {
        throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index2}] given.`);
      }
      index2 = indexAsNumber;
    }
    const swiper = this;
    let slideIndex = index2;
    if (slideIndex < 0)
      slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
      return false;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }
    const translate = -snapGrid[snapIndex];
    swiper.updateProgress(translate);
    if (params.normalizeSlideIndex) {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        const normalizedTranslate = -Math.floor(translate * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex)
          return false;
      }
    }
    let direction;
    if (slideIndex > activeIndex)
      direction = "next";
    else if (slideIndex < activeIndex)
      direction = "prev";
    else
      direction = "reset";
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t = rtl ? translate : -translate;
      if (speed === 0) {
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = "none";
          swiper._immediateVirtual = true;
        }
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = "";
            swiper._swiperImmediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: t,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t,
          behavior: "smooth"
        });
      }
      return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd3(e) {
          if (!swiper || swiper.destroyed)
            return;
          if (e.target !== this)
            return;
          swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }

  // node_modules/swiper/core/slide/slideToLoop.js
  function slideToLoop(index2 = 0, speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    let newIndex = index2;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  // node_modules/swiper/core/slide/slideNext.js
  function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const {
      animating,
      enabled,
      params
    } = swiper;
    if (!enabled)
      return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    if (params.loop) {
      if (animating && params.loopPreventsSlide)
        return false;
      swiper.loopFix();
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }

  // node_modules/swiper/core/slide/slidePrev.js
  function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const {
      params,
      animating,
      snapGrid,
      slidesGrid,
      rtlTranslate,
      enabled
    } = swiper;
    if (!enabled)
      return swiper;
    if (params.loop) {
      if (animating && params.loopPreventsSlide)
        return false;
      swiper.loopFix();
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0)
        return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
      let prevSnapIndex;
      snapGrid.forEach((snap, snapIndex) => {
        if (normalizedTranslate >= snap) {
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0)
        prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      return swiper.slideTo(swiper.slides.length - 1, speed, runCallbacks, internal);
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  // node_modules/swiper/core/slide/slideReset.js
  function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  // node_modules/swiper/core/slide/slideToClosest.js
  function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
    const swiper = this;
    let index2 = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index2);
    const snapIndex = skip + Math.floor((index2 - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
        index2 += swiper.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index2 -= swiper.params.slidesPerGroup;
      }
    }
    index2 = Math.max(index2, 0);
    index2 = Math.min(index2, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index2, speed, runCallbacks, internal);
  }

  // node_modules/swiper/core/slide/slideToClickedSlide.js
  function slideToClickedSlide() {
    const swiper = this;
    const {
      params,
      $wrapperEl
    } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    if (params.loop) {
      if (swiper.animating)
        return;
      realIndex = parseInt(dom_default(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
          nextTick2(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
        nextTick2(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  // node_modules/swiper/core/slide/index.js
  var slide_default = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };

  // node_modules/swiper/core/loop/loopCreate.js
  function loopCreate() {
    const swiper = this;
    const document2 = getDocument();
    const {
      params,
      $wrapperEl
    } = swiper;
    const $selector = $wrapperEl.children().length > 0 ? dom_default($wrapperEl.children()[0].parentNode) : $wrapperEl;
    $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
    let slides = $selector.children(`.${params.slideClass}`);
    if (params.loopFillGroupWithBlank) {
      const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (let i = 0; i < blankSlidesNum; i += 1) {
          const blankNode = dom_default(document2.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
          $selector.append(blankNode);
        }
        slides = $selector.children(`.${params.slideClass}`);
      }
    }
    if (params.slidesPerView === "auto" && !params.loopedSlides)
      params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }
    const prependSlides = [];
    const appendSlides = [];
    slides.each((el, index2) => {
      const slide = dom_default(el);
      if (index2 < swiper.loopedSlides) {
        appendSlides.push(el);
      }
      if (index2 < slides.length && index2 >= slides.length - swiper.loopedSlides) {
        prependSlides.push(el);
      }
      slide.attr("data-swiper-slide-index", index2);
    });
    for (let i = 0; i < appendSlides.length; i += 1) {
      $selector.append(dom_default(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
      $selector.prepend(dom_default(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  // node_modules/swiper/core/loop/loopFix.js
  function loopFix() {
    const swiper = this;
    swiper.emit("beforeLoopFix");
    const {
      activeIndex,
      slides,
      loopedSlides,
      allowSlidePrev,
      allowSlideNext,
      snapGrid,
      rtlTranslate: rtl
    } = swiper;
    let newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    const snapTranslate = -snapGrid[activeIndex];
    const diff = snapTranslate - swiper.getTranslate();
    if (activeIndex < loopedSlides) {
      newIndex = slides.length - loopedSlides * 3 + activeIndex;
      newIndex += loopedSlides;
      const slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if (activeIndex >= slides.length - loopedSlides) {
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      const slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
  }

  // node_modules/swiper/core/loop/loopDestroy.js
  function loopDestroy() {
    const swiper = this;
    const {
      $wrapperEl,
      params,
      slides
    } = swiper;
    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
    slides.removeAttr("data-swiper-slide-index");
  }

  // node_modules/swiper/core/loop/index.js
  var loop_default = {
    loopCreate,
    loopFix,
    loopDestroy
  };

  // node_modules/swiper/core/grab-cursor/setGrabCursor.js
  function setGrabCursor(moving) {
    const swiper = this;
    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
      return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    el.style.cursor = "move";
    el.style.cursor = moving ? "-webkit-grabbing" : "-webkit-grab";
    el.style.cursor = moving ? "-moz-grabbin" : "-moz-grab";
    el.style.cursor = moving ? "grabbing" : "grab";
  }

  // node_modules/swiper/core/grab-cursor/unsetGrabCursor.js
  function unsetGrabCursor() {
    const swiper = this;
    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
  }

  // node_modules/swiper/core/grab-cursor/index.js
  var grab_cursor_default = {
    setGrabCursor,
    unsetGrabCursor
  };

  // node_modules/swiper/core/events/onTouchStart.js
  function closestElement(selector, base = this) {
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow())
        return null;
      if (el.assignedSlot)
        el = el.assignedSlot;
      const found = el.closest(selector);
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function onTouchStart(event2) {
    const swiper = this;
    const document2 = getDocument();
    const window2 = getWindow();
    const data2 = swiper.touchEventsData;
    const {
      params,
      touches,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let e = event2;
    if (e.originalEvent)
      e = e.originalEvent;
    let $targetEl = dom_default(e.target);
    if (params.touchEventsTarget === "wrapper") {
      if (!$targetEl.closest(swiper.wrapperEl).length)
        return;
    }
    data2.isTouchEvent = e.type === "touchstart";
    if (!data2.isTouchEvent && "which" in e && e.which === 3)
      return;
    if (!data2.isTouchEvent && "button" in e && e.button > 0)
      return;
    if (data2.isTouched && data2.isMoved)
      return;
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    if (swipingClassHasValue && e.target && e.target.shadowRoot && event2.path && event2.path[0]) {
      $targetEl = dom_default(event2.path[0]);
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$targetEl.closest(params.swipeHandler)[0])
        return;
    }
    touches.currentX = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event2.preventDefault();
      } else {
        return;
      }
    }
    Object.assign(data2, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data2.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = void 0;
    if (params.threshold > 0)
      data2.allowThresholdMove = false;
    if (e.type !== "touchstart") {
      let preventDefault = true;
      if ($targetEl.is(data2.focusableElements))
        preventDefault = false;
      if (document2.activeElement && dom_default(document2.activeElement).is(data2.focusableElements) && document2.activeElement !== $targetEl[0]) {
        document2.activeElement.blur();
      }
      const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
        e.preventDefault();
      }
    }
    swiper.emit("touchStart", e);
  }

  // node_modules/swiper/core/events/onTouchMove.js
  function onTouchMove(event2) {
    const document2 = getDocument();
    const swiper = this;
    const data2 = swiper.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      enabled
    } = swiper;
    if (!enabled)
      return;
    let e = event2;
    if (e.originalEvent)
      e = e.originalEvent;
    if (!data2.isTouched) {
      if (data2.startMoving && data2.isScrolling) {
        swiper.emit("touchMoveOpposite", e);
      }
      return;
    }
    if (data2.isTouchEvent && e.type !== "touchmove")
      return;
    const targetTouch = e.type === "touchmove" && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    const pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
    const pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      swiper.allowClick = false;
      if (data2.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data2.touchStartTime = now();
      }
      return;
    }
    if (data2.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data2.isTouched = false;
          data2.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (data2.isTouchEvent && document2.activeElement) {
      if (e.target === document2.activeElement && dom_default(e.target).is(data2.focusableElements)) {
        data2.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data2.allowTouchCallbacks) {
      swiper.emit("touchMove", e);
    }
    if (e.targetTouches && e.targetTouches.length > 1)
      return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold)
      return;
    if (typeof data2.isScrolling === "undefined") {
      let touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data2.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data2.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data2.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    if (typeof data2.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data2.startMoving = true;
      }
    }
    if (data2.isScrolling) {
      data2.isTouched = false;
      return;
    }
    if (!data2.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    if (!data2.isMoved) {
      if (params.loop && !params.cssMode) {
        swiper.loopFix();
      }
      data2.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
      }
      data2.allowMomentumBounce = false;
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e);
    }
    swiper.emit("sliderMove", e);
    data2.isMoved = true;
    let diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl)
      diff = -diff;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    data2.currentTranslate = diff + data2.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0 && data2.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance)
        data2.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data2.startTranslate + diff) ** resistanceRatio;
    } else if (diff < 0 && data2.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance)
        data2.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data2.startTranslate - diff) ** resistanceRatio;
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data2.currentTranslate < data2.startTranslate) {
      data2.currentTranslate = data2.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data2.currentTranslate > data2.startTranslate) {
      data2.currentTranslate = data2.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data2.currentTranslate = data2.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data2.allowThresholdMove) {
        if (!data2.allowThresholdMove) {
          data2.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data2.currentTranslate = data2.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data2.currentTranslate = data2.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode)
      return;
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    swiper.updateProgress(data2.currentTranslate);
    swiper.setTranslate(data2.currentTranslate);
  }

  // node_modules/swiper/core/events/onTouchEnd.js
  function onTouchEnd(event2) {
    const swiper = this;
    const data2 = swiper.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      slidesGrid,
      enabled
    } = swiper;
    if (!enabled)
      return;
    let e = event2;
    if (e.originalEvent)
      e = e.originalEvent;
    if (data2.allowTouchCallbacks) {
      swiper.emit("touchEnd", e);
    }
    data2.allowTouchCallbacks = false;
    if (!data2.isTouched) {
      if (data2.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data2.isMoved = false;
      data2.startMoving = false;
      return;
    }
    if (params.grabCursor && data2.isMoved && data2.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }
    const touchEndTime = now();
    const timeDiff = touchEndTime - data2.touchStartTime;
    if (swiper.allowClick) {
      const pathTree = e.path || e.composedPath && e.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
      swiper.emit("tap click", e);
      if (timeDiff < 300 && touchEndTime - data2.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e);
      }
    }
    data2.lastClickTime = now();
    nextTick2(() => {
      if (!swiper.destroyed)
        swiper.allowClick = true;
    });
    if (!data2.isTouched || !data2.isMoved || !swiper.swipeDirection || touches.diff === 0 || data2.currentTranslate === data2.startTranslate) {
      data2.isTouched = false;
      data2.isMoved = false;
      data2.startMoving = false;
      return;
    }
    data2.isTouched = false;
    data2.isMoved = false;
    data2.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data2.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (swiper.params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos
      });
      return;
    }
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + increment2] !== "undefined") {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
          stopIndex = i;
          groupSize = slidesGrid[i + increment2] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio)
          swiper.slideTo(stopIndex + increment);
        else
          swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio)
          swiper.slideTo(stopIndex + increment);
        else
          swiper.slideTo(stopIndex);
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(stopIndex + increment);
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }

  // node_modules/swiper/core/events/onResize.js
  function onResize() {
    const swiper = this;
    const {
      params,
      el
    } = swiper;
    if (el && el.offsetWidth === 0)
      return;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    const {
      allowSlideNext,
      allowSlidePrev,
      snapGrid
    } = swiper;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.run();
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  // node_modules/swiper/core/events/onClick.js
  function onClick(e) {
    const swiper = this;
    if (!swiper.enabled)
      return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks)
        e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  // node_modules/swiper/core/events/onScroll.js
  function onScroll() {
    const swiper = this;
    const {
      wrapperEl,
      rtlTranslate,
      enabled
    } = swiper;
    if (!enabled)
      return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === -0)
      swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }

  // node_modules/swiper/core/events/index.js
  var dummyEventAttached = false;
  function dummyEventListener() {
  }
  var events = (swiper, method) => {
    const document2 = getDocument();
    const {
      params,
      touchEvents,
      el,
      wrapperEl,
      device,
      support: support2
    } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    if (!support2.touch) {
      el[domMethod](touchEvents.start, swiper.onTouchStart, false);
      document2[domMethod](touchEvents.move, swiper.onTouchMove, capture);
      document2[domMethod](touchEvents.end, swiper.onTouchEnd, false);
    } else {
      const passiveListener = touchEvents.start === "touchstart" && support2.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
      el[domMethod](touchEvents.move, swiper.onTouchMove, support2.passiveListener ? {
        passive: false,
        capture
      } : capture);
      el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
      if (touchEvents.cancel) {
        el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper[swiperMethod]("observerUpdate", onResize, true);
    }
  };
  function attachEvents() {
    const swiper = this;
    const document2 = getDocument();
    const {
      params,
      support: support2
    } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    if (support2.touch && !dummyEventAttached) {
      document2.addEventListener("touchstart", dummyEventListener);
      dummyEventAttached = true;
    }
    events(swiper, "on");
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, "off");
  }
  var events_default = {
    attachEvents,
    detachEvents
  };

  // node_modules/swiper/core/breakpoints/setBreakpoint.js
  var isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const {
      activeIndex,
      initialized,
      loopedSlides = 0,
      params,
      $el
    } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0)
      return;
    const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint)
      return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      $el.addClass(`${params.containerModifierClass}grid`);
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
        $el.addClass(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend2(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }
    swiper.emit("breakpoint", breakpointParams);
  }

  // node_modules/swiper/core/breakpoints/getBreakpoint.js
  function getBreakpoint(breakpoints, base = "window", containerEl) {
    if (!breakpoints || base === "container" && !containerEl)
      return void 0;
    let breakpoint = false;
    const window2 = getWindow();
    const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point
        };
      }
      return {
        value: point,
        point
      };
    });
    points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
    for (let i = 0; i < points.length; i += 1) {
      const {
        point,
        value
      } = points[i];
      if (base === "window") {
        if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }

  // node_modules/swiper/core/breakpoints/index.js
  var breakpoints_default = {
    setBreakpoint,
    getBreakpoint
  };

  // node_modules/swiper/core/classes/addClasses.js
  function prepareClasses(entries, prefix2) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix2 + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix2 + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const {
      classNames,
      params,
      rtl,
      $el,
      device,
      support: support2
    } = swiper;
    const suffixes = prepareClasses(["initialized", params.direction, {
      "pointer-events": !support2.touch
    }, {
      "free-mode": swiper.params.freeMode && params.freeMode.enabled
    }, {
      "autoheight": params.autoHeight
    }, {
      "rtl": rtl
    }, {
      "grid": params.grid && params.grid.rows > 1
    }, {
      "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
    }, {
      "android": device.android
    }, {
      "ios": device.ios
    }, {
      "css-mode": params.cssMode
    }, {
      "centered": params.cssMode && params.centeredSlides
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    $el.addClass([...classNames].join(" "));
    swiper.emitContainerClasses();
  }

  // node_modules/swiper/core/classes/removeClasses.js
  function removeClasses() {
    const swiper = this;
    const {
      $el,
      classNames
    } = swiper;
    $el.removeClass(classNames.join(" "));
    swiper.emitContainerClasses();
  }

  // node_modules/swiper/core/classes/index.js
  var classes_default = {
    addClasses,
    removeClasses
  };

  // node_modules/swiper/core/images/loadImage.js
  function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    const window2 = getWindow();
    let image;
    function onReady() {
      if (callback)
        callback();
    }
    const isPicture = dom_default(imageEl).parent("picture")[0];
    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
      if (src) {
        image = new window2.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      onReady();
    }
  }

  // node_modules/swiper/core/images/preloadImages.js
  function preloadImages() {
    const swiper = this;
    swiper.imagesToLoad = swiper.$el.find("img");
    function onReady() {
      if (typeof swiper === "undefined" || swiper === null || !swiper || swiper.destroyed)
        return;
      if (swiper.imagesLoaded !== void 0)
        swiper.imagesLoaded += 1;
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady)
          swiper.update();
        swiper.emit("imagesReady");
      }
    }
    for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
      const imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
    }
  }

  // node_modules/swiper/core/images/index.js
  var images_default = {
    loadImage,
    preloadImages
  };

  // node_modules/swiper/core/check-overflow/index.js
  function checkOverflow() {
    const swiper = this;
    const {
      isLocked: wasLocked,
      params
    } = swiper;
    const {
      slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
  }
  var check_overflow_default = {
    checkOverflow
  };

  // node_modules/swiper/core/defaults.js
  var defaults_default = {
    init: true,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: false,
    userAgent: null,
    url: null,
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    autoHeight: false,
    setWrapperSize: false,
    virtualTranslate: false,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    watchOverflow: true,
    roundLengths: false,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    uniqueNavElements: true,
    resistance: true,
    resistanceRatio: 0.85,
    watchSlidesProgress: false,
    grabCursor: false,
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    preloadImages: true,
    updateOnImagesReady: true,
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    rewind: false,
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: true,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: true,
    _emitClasses: false
  };

  // node_modules/swiper/core/moduleExtendParams.js
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj = {}) {
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend2(allModulesParams, obj);
        return;
      }
      if (["navigation", "pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
        params[moduleParamName] = {
          auto: true
        };
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend2(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName])
        params[moduleParamName] = {
          enabled: false
        };
      extend2(allModulesParams, obj);
    };
  }

  // node_modules/swiper/core/core.js
  var prototypes = {
    eventsEmitter: events_emitter_default,
    update: update_default,
    translate: translate_default,
    transition: transition_default,
    slide: slide_default,
    loop: loop_default,
    grabCursor: grab_cursor_default,
    events: events_default,
    breakpoints: breakpoints_default,
    checkOverflow: check_overflow_default,
    classes: classes_default,
    images: images_default
  };
  var extendedDefaults = {};
  var Swiper = class {
    constructor(...args) {
      let el;
      let params;
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params)
        params = {};
      params = extend2({}, params);
      if (el && !params.el)
        params.el = el;
      if (params.el && dom_default(params.el).length > 1) {
        const swipers = [];
        dom_default(params.el).each((containerEl) => {
          const newParams = extend2({}, params, {
            el: containerEl
          });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }
      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper.modules.forEach((mod) => {
        mod({
          swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      });
      const swiperParams = extend2({}, defaults_default, allModulesParams);
      swiper.params = extend2({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend2({}, swiper.params);
      swiper.passedParams = extend2({}, params);
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach((eventName) => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }
      swiper.$ = dom_default;
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el,
        classNames: [],
        slides: dom_default(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical() {
          return swiper.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: true,
        isEnd: false,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        touchEvents: function touchEvents() {
          const touch = ["touchstart", "touchmove", "touchend", "touchcancel"];
          const desktop = ["pointerdown", "pointermove", "pointerup"];
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
            cancel: touch[3]
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2]
          };
          return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: swiper.params.focusableElements,
          lastClickTime: now(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: true,
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit("_swiper");
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    enable() {
      const swiper = this;
      if (swiper.enabled)
        return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit("enable");
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled)
        return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      const cls = swiper.el.className.split(" ").filter((className) => {
        return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      return slideEl.className.split(" ").filter((className) => {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(" ");
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      const updates = [];
      swiper.slides.each((slideEl) => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view = "current", exact = false) {
      const swiper = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex
      } = swiper;
      let spv = 1;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex].swiperSlideSize;
        let breakLoop;
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
      } else {
        if (view === "current") {
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed)
        return;
      const {
        snapGrid,
        params
      } = swiper;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate2() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
        setTranslate2();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate = true) {
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper;
      }
      swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.each((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate)
        swiper.update();
      return swiper;
    }
    mount(el) {
      const swiper = this;
      if (swiper.mounted)
        return true;
      const $el = dom_default(el || swiper.params.el);
      el = $el[0];
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      const getWrapperSelector = () => {
        return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = dom_default(el.shadowRoot.querySelector(getWrapperSelector()));
          res.children = (options) => $el.children(options);
          return res;
        }
        return $el.children(getWrapperSelector());
      };
      let $wrapperEl = getWrapper();
      if ($wrapperEl.length === 0 && swiper.params.createElements) {
        const document2 = getDocument();
        const wrapper = document2.createElement("div");
        $wrapperEl = dom_default(wrapper);
        wrapper.className = swiper.params.wrapperClass;
        $el.append(wrapper);
        $el.children(`.${swiper.params.slideClass}`).each((slideEl) => {
          $wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper, {
        $el,
        el,
        $wrapperEl,
        wrapperEl: $wrapperEl[0],
        mounted: true,
        rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
        wrongRTL: $wrapperEl.css("display") === "-webkit-box"
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized)
        return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false)
        return swiper;
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }
      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      }
      swiper.attachEvents();
      swiper.initialized = true;
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    }
    destroy(deleteInstance = true, cleanStyles = true) {
      const swiper = this;
      const {
        params,
        $el,
        $wrapperEl,
        slides
      } = swiper;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr("style");
        $wrapperEl.removeAttr("style");
        if (slides && slides.length) {
          slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach((eventName) => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend2(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults_default;
    }
    static installModule(mod) {
      if (!Swiper.prototype.__modules__)
        Swiper.prototype.__modules__ = [];
      const modules = Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules.indexOf(mod) < 0) {
        modules.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach((m) => Swiper.installModule(m));
        return Swiper;
      }
      Swiper.installModule(module);
      return Swiper;
    }
  };
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);
  var core_default = Swiper;

  // node_modules/swiper/modules/mousewheel/mousewheel.js
  function Mousewheel({
    swiper,
    extendParams,
    on: on3,
    emit
  }) {
    const window2 = getWindow();
    extendParams({
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null
      }
    });
    swiper.mousewheel = {
      enabled: false
    };
    let timeout;
    let lastScrollTime = now();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
      const PIXEL_STEP = 10;
      const LINE_HEIGHT = 40;
      const PAGE_HEIGHT = 800;
      let sX = 0;
      let sY = 0;
      let pX = 0;
      let pY = 0;
      if ("detail" in e) {
        sY = e.detail;
      }
      if ("wheelDelta" in e) {
        sY = -e.wheelDelta / 120;
      }
      if ("wheelDeltaY" in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ("wheelDeltaX" in e) {
        sX = -e.wheelDeltaX / 120;
      }
      if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }
      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;
      if ("deltaY" in e) {
        pY = e.deltaY;
      }
      if ("deltaX" in e) {
        pX = e.deltaX;
      }
      if (e.shiftKey && !pX) {
        pX = pY;
        pY = 0;
      }
      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }
      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }
      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }
      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
      };
    }
    function handleMouseEnter() {
      if (!swiper.enabled)
        return;
      swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
      if (!swiper.enabled)
        return;
      swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
      if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
        return false;
      }
      if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
        return false;
      }
      if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
        return true;
      }
      if (newEvent.direction < 0) {
        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
          swiper.slideNext();
          emit("scroll", newEvent.raw);
        }
      } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
        swiper.slidePrev();
        emit("scroll", newEvent.raw);
      }
      lastScrollTime = new window2.Date().getTime();
      return false;
    }
    function releaseScroll(newEvent) {
      const params = swiper.params.mousewheel;
      if (newEvent.direction < 0) {
        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
          return true;
        }
      } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
        return true;
      }
      return false;
    }
    function handle(event2) {
      let e = event2;
      let disableParentSwiper = true;
      if (!swiper.enabled)
        return;
      const params = swiper.params.mousewheel;
      if (swiper.params.cssMode) {
        e.preventDefault();
      }
      let target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarget !== "container") {
        target = dom_default(swiper.params.mousewheel.eventsTarget);
      }
      if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges)
        return true;
      if (e.originalEvent)
        e = e.originalEvent;
      let delta = 0;
      const rtlFactor = swiper.rtlTranslate ? -1 : 1;
      const data2 = normalize(e);
      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data2.pixelX) > Math.abs(data2.pixelY))
            delta = -data2.pixelX * rtlFactor;
          else
            return true;
        } else if (Math.abs(data2.pixelY) > Math.abs(data2.pixelX))
          delta = -data2.pixelY;
        else
          return true;
      } else {
        delta = Math.abs(data2.pixelX) > Math.abs(data2.pixelY) ? -data2.pixelX * rtlFactor : -data2.pixelY;
      }
      if (delta === 0)
        return true;
      if (params.invert)
        delta = -delta;
      let positions = swiper.getTranslate() + delta * params.sensitivity;
      if (positions >= swiper.minTranslate())
        positions = swiper.minTranslate();
      if (positions <= swiper.maxTranslate())
        positions = swiper.maxTranslate();
      disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
      if (disableParentSwiper && swiper.params.nested)
        e.stopPropagation();
      if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event2
        };
        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift();
        }
        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
        recentWheelEvents.push(newEvent);
        if (prevEvent) {
          if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
            animateSlider(newEvent);
          }
        } else {
          animateSlider(newEvent);
        }
        if (releaseScroll(newEvent)) {
          return true;
        }
      } else {
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta)
        };
        const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
        if (!ignoreWheelEvents) {
          lastEventBeforeSnap = void 0;
          if (swiper.params.loop) {
            swiper.loopFix();
          }
          let position = swiper.getTranslate() + delta * params.sensitivity;
          const wasBeginning = swiper.isBeginning;
          const wasEnd = swiper.isEnd;
          if (position >= swiper.minTranslate())
            position = swiper.minTranslate();
          if (position <= swiper.maxTranslate())
            position = swiper.maxTranslate();
          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
          if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
            swiper.updateSlidesClasses();
          }
          if (swiper.params.freeMode.sticky) {
            clearTimeout(timeout);
            timeout = void 0;
            if (recentWheelEvents.length >= 15) {
              recentWheelEvents.shift();
            }
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
            const firstEvent = recentWheelEvents[0];
            recentWheelEvents.push(newEvent);
            if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
              recentWheelEvents.splice(0);
            } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
              const snapToThreshold = delta > 0 ? 0.8 : 0.2;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              timeout = nextTick2(() => {
                swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
              }, 0);
            }
            if (!timeout) {
              timeout = nextTick2(() => {
                const snapToThreshold = 0.5;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
              }, 500);
            }
          }
          if (!ignoreWheelEvents)
            emit("scroll", e);
          if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction)
            swiper.autoplay.stop();
          if (position === swiper.minTranslate() || position === swiper.maxTranslate())
            return true;
        }
      }
      if (e.preventDefault)
        e.preventDefault();
      else
        e.returnValue = false;
      return false;
    }
    function events2(method) {
      let target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarget !== "container") {
        target = dom_default(swiper.params.mousewheel.eventsTarget);
      }
      target[method]("mouseenter", handleMouseEnter);
      target[method]("mouseleave", handleMouseLeave);
      target[method]("wheel", handle);
    }
    function enable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener("wheel", handle);
        return true;
      }
      if (swiper.mousewheel.enabled)
        return false;
      events2("on");
      swiper.mousewheel.enabled = true;
      return true;
    }
    function disable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, handle);
        return true;
      }
      if (!swiper.mousewheel.enabled)
        return false;
      events2("off");
      swiper.mousewheel.enabled = false;
      return true;
    }
    on3("init", () => {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        disable();
      }
      if (swiper.params.mousewheel.enabled)
        enable();
    });
    on3("destroy", () => {
      if (swiper.params.cssMode) {
        enable();
      }
      if (swiper.mousewheel.enabled)
        disable();
    });
    Object.assign(swiper.mousewheel, {
      enable,
      disable
    });
  }

  // node_modules/swiper/shared/create-element-if-not-defined.js
  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    const document2 = getDocument();
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = swiper.$el.children(`.${checkProps[key]}`)[0];
          if (!element) {
            element = document2.createElement("div");
            element.className = checkProps[key];
            swiper.$el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }

  // node_modules/swiper/modules/navigation/navigation.js
  function Navigation({
    swiper,
    extendParams,
    on: on3,
    emit
  }) {
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    });
    swiper.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null
    };
    function getEl(el) {
      let $el;
      if (el) {
        $el = dom_default(el);
        if (swiper.params.uniqueNavElements && typeof el === "string" && $el.length > 1 && swiper.$el.find(el).length === 1) {
          $el = swiper.$el.find(el);
        }
      }
      return $el;
    }
    function toggleEl($el, disabled) {
      const params = swiper.params.navigation;
      if ($el && $el.length > 0) {
        $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
        if ($el[0] && $el[0].tagName === "BUTTON")
          $el[0].disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
        }
      }
    }
    function update() {
      if (swiper.params.loop)
        return;
      const {
        $nextEl,
        $prevEl
      } = swiper.navigation;
      toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
      toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
        return;
      swiper.slidePrev();
    }
    function onNextClick(e) {
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind)
        return;
      swiper.slideNext();
    }
    function init() {
      const params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      });
      if (!(params.nextEl || params.prevEl))
        return;
      const $nextEl = getEl(params.nextEl);
      const $prevEl = getEl(params.prevEl);
      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on("click", onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on("click", onPrevClick);
      }
      Object.assign(swiper.navigation, {
        $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl,
        prevEl: $prevEl && $prevEl[0]
      });
      if (!swiper.enabled) {
        if ($nextEl)
          $nextEl.addClass(params.lockClass);
        if ($prevEl)
          $prevEl.addClass(params.lockClass);
      }
    }
    function destroy() {
      const {
        $nextEl,
        $prevEl
      } = swiper.navigation;
      if ($nextEl && $nextEl.length) {
        $nextEl.off("click", onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off("click", onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    }
    on3("init", () => {
      init();
      update();
    });
    on3("toEdge fromEdge lock unlock", () => {
      update();
    });
    on3("destroy", () => {
      destroy();
    });
    on3("enable disable", () => {
      const {
        $nextEl,
        $prevEl
      } = swiper.navigation;
      if ($nextEl) {
        $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
      }
      if ($prevEl) {
        $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
      }
    });
    on3("click", (_s, e) => {
      const {
        $nextEl,
        $prevEl
      } = swiper.navigation;
      const targetEl = e.target;
      if (swiper.params.navigation.hideOnClick && !dom_default(targetEl).is($prevEl) && !dom_default(targetEl).is($nextEl)) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
          return;
        let isHidden3;
        if ($nextEl) {
          isHidden3 = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden3 = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }
        if (isHidden3 === true) {
          emit("navigationShow");
        } else {
          emit("navigationHide");
        }
        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    });
    Object.assign(swiper.navigation, {
      update,
      init,
      destroy
    });
  }

  // node_modules/swiper/shared/classes-to-selector.js
  function classesToSelector(classes = "") {
    return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
  }

  // node_modules/swiper/modules/pagination/pagination.js
  function Pagination({
    swiper,
    extendParams,
    on: on3,
    emit
  }) {
    const pfx = "swiper-pagination";
    extendParams({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: (number) => number,
        formatFractionTotal: (number) => number,
        bulletClass: `${pfx}-bullet`,
        bulletActiveClass: `${pfx}-bullet-active`,
        modifierClass: `${pfx}-`,
        currentClass: `${pfx}-current`,
        totalClass: `${pfx}-total`,
        hiddenClass: `${pfx}-hidden`,
        progressbarFillClass: `${pfx}-progressbar-fill`,
        progressbarOppositeClass: `${pfx}-progressbar-opposite`,
        clickableClass: `${pfx}-clickable`,
        lockClass: `${pfx}-lock`,
        horizontalClass: `${pfx}-horizontal`,
        verticalClass: `${pfx}-vertical`
      }
    });
    swiper.pagination = {
      el: null,
      $el: null,
      bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
      return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
    }
    function setSideBullets($bulletEl, position) {
      const {
        bulletActiveClass
      } = swiper.params.pagination;
      $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
    }
    function update() {
      const rtl = swiper.rtl;
      const params = swiper.params.pagination;
      if (isPaginationDisabled())
        return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const $el = swiper.pagination.$el;
      let current;
      const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
        if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
          current -= slidesLength - swiper.loopedSlides * 2;
        }
        if (current > total - 1)
          current -= total;
        if (current < 0 && swiper.params.paginationType !== "bullets")
          current = total + current;
      } else if (typeof swiper.snapIndex !== "undefined") {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        const bullets = swiper.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
          $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== void 0) {
            dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`).join(" "));
        if ($el.length > 1) {
          bullets.each((bullet) => {
            const $bullet = dom_default(bullet);
            const bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(`${params.bulletActiveClass}-main`);
              }
              if (bulletIndex === firstIndex) {
                setSideBullets($bullet, "prev");
              }
              if (bulletIndex === lastIndex) {
                setSideBullets($bullet, "next");
              }
            }
          });
        } else {
          const $bullet = bullets.eq(current);
          const bulletIndex = $bullet.index();
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            const $firstDisplayedBullet = bullets.eq(firstIndex);
            const $lastDisplayedBullet = bullets.eq(lastIndex);
            for (let i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
            }
            if (swiper.params.loop) {
              if (bulletIndex >= bullets.length) {
                for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                  bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                }
                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
              } else {
                setSideBullets($firstDisplayedBullet, "prev");
                setSideBullets($lastDisplayedBullet, "next");
              }
            } else {
              setSideBullets($firstDisplayedBullet, "prev");
              setSideBullets($lastDisplayedBullet, "next");
            }
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          const offsetProp = rtl ? "right" : "left";
          bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
        }
      }
      if (params.type === "fraction") {
        $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
        $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
      }
      if (params.type === "progressbar") {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
      }
      if (params.type === "custom" && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        emit("paginationRender", $el[0]);
      } else {
        emit("paginationUpdate", $el[0]);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
      }
    }
    function render() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled())
        return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const $el = swiper.pagination.$el;
      let paginationHTML = "";
      if (params.type === "bullets") {
        let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (let i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
        }
        $el.html(paginationHTML);
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
        }
        $el.html(paginationHTML);
      }
      if (params.type !== "custom") {
        emit("paginationRender", swiper.pagination.$el[0]);
      }
    }
    function init() {
      swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
        el: "swiper-pagination"
      });
      const params = swiper.params.pagination;
      if (!params.el)
        return;
      let $el = dom_default(params.el);
      if ($el.length === 0)
        return;
      if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1) {
        $el = swiper.$el.find(params.el);
        if ($el.length > 1) {
          $el = $el.filter((el) => {
            if (dom_default(el).parents(".swiper")[0] !== swiper.el)
              return false;
            return true;
          });
        }
      }
      if (params.type === "bullets" && params.clickable) {
        $el.addClass(params.clickableClass);
      }
      $el.addClass(params.modifierClass + params.type);
      $el.addClass(params.modifierClass + swiper.params.direction);
      if (params.type === "bullets" && params.dynamicBullets) {
        $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === "progressbar" && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        $el.on("click", classesToSelector(params.bulletClass), function onClick2(e) {
          e.preventDefault();
          let index2 = dom_default(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop)
            index2 += swiper.loopedSlides;
          swiper.slideTo(index2);
        });
      }
      Object.assign(swiper.pagination, {
        $el,
        el: $el[0]
      });
      if (!swiper.enabled) {
        $el.addClass(params.lockClass);
      }
    }
    function destroy() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled())
        return;
      const $el = swiper.pagination.$el;
      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      $el.removeClass(params.modifierClass + swiper.params.direction);
      if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass)
        swiper.pagination.bullets.removeClass(params.bulletActiveClass);
      if (params.clickable) {
        $el.off("click", classesToSelector(params.bulletClass));
      }
    }
    on3("init", () => {
      init();
      render();
      update();
    });
    on3("activeIndexChange", () => {
      if (swiper.params.loop) {
        update();
      } else if (typeof swiper.snapIndex === "undefined") {
        update();
      }
    });
    on3("snapIndexChange", () => {
      if (!swiper.params.loop) {
        update();
      }
    });
    on3("slidesLengthChange", () => {
      if (swiper.params.loop) {
        render();
        update();
      }
    });
    on3("snapGridLengthChange", () => {
      if (!swiper.params.loop) {
        render();
        update();
      }
    });
    on3("destroy", () => {
      destroy();
    });
    on3("enable disable", () => {
      const {
        $el
      } = swiper.pagination;
      if ($el) {
        $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
      }
    });
    on3("lock unlock", () => {
      update();
    });
    on3("click", (_s, e) => {
      const targetEl = e.target;
      const {
        $el
      } = swiper.pagination;
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !dom_default(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
          return;
        const isHidden3 = $el.hasClass(swiper.params.pagination.hiddenClass);
        if (isHidden3 === true) {
          emit("paginationShow");
        } else {
          emit("paginationHide");
        }
        $el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    });
    Object.assign(swiper.pagination, {
      render,
      update,
      init,
      destroy
    });
  }

  // node_modules/swiper/modules/autoplay/autoplay.js
  function Autoplay({
    swiper,
    extendParams,
    on: on3,
    emit
  }) {
    let timeout;
    swiper.autoplay = {
      running: false,
      paused: false
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3e3,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false
      }
    });
    function run() {
      const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      let delay3 = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr("data-swiper-autoplay")) {
        delay3 = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
      }
      clearTimeout(timeout);
      timeout = nextTick2(() => {
        let autoplayResult;
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
            emit("autoplay");
          } else if (!swiper.isBeginning) {
            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            emit("autoplay");
          } else {
            stop2();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
          emit("autoplay");
        } else if (!swiper.isEnd) {
          autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
          emit("autoplay");
        } else {
          stop2();
        }
        if (swiper.params.cssMode && swiper.autoplay.running)
          run();
        else if (autoplayResult === false) {
          run();
        }
      }, delay3);
    }
    function start2() {
      if (typeof timeout !== "undefined")
        return false;
      if (swiper.autoplay.running)
        return false;
      swiper.autoplay.running = true;
      emit("autoplayStart");
      run();
      return true;
    }
    function stop2() {
      if (!swiper.autoplay.running)
        return false;
      if (typeof timeout === "undefined")
        return false;
      if (timeout) {
        clearTimeout(timeout);
        timeout = void 0;
      }
      swiper.autoplay.running = false;
      emit("autoplayStop");
      return true;
    }
    function pause(speed) {
      if (!swiper.autoplay.running)
        return;
      if (swiper.autoplay.paused)
        return;
      if (timeout)
        clearTimeout(timeout);
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        run();
      } else {
        ["transitionend", "webkitTransitionEnd"].forEach((event2) => {
          swiper.$wrapperEl[0].addEventListener(event2, onTransitionEnd);
        });
      }
    }
    function onVisibilityChange() {
      const document2 = getDocument();
      if (document2.visibilityState === "hidden" && swiper.autoplay.running) {
        pause();
      }
      if (document2.visibilityState === "visible" && swiper.autoplay.paused) {
        run();
        swiper.autoplay.paused = false;
      }
    }
    function onTransitionEnd(e) {
      if (!swiper || swiper.destroyed || !swiper.$wrapperEl)
        return;
      if (e.target !== swiper.$wrapperEl[0])
        return;
      ["transitionend", "webkitTransitionEnd"].forEach((event2) => {
        swiper.$wrapperEl[0].removeEventListener(event2, onTransitionEnd);
      });
      swiper.autoplay.paused = false;
      if (!swiper.autoplay.running) {
        stop2();
      } else {
        run();
      }
    }
    function onMouseEnter() {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop2();
      } else {
        pause();
      }
      ["transitionend", "webkitTransitionEnd"].forEach((event2) => {
        swiper.$wrapperEl[0].removeEventListener(event2, onTransitionEnd);
      });
    }
    function onMouseLeave() {
      if (swiper.params.autoplay.disableOnInteraction) {
        return;
      }
      swiper.autoplay.paused = false;
      run();
    }
    function attachMouseEvents() {
      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.$el.on("mouseenter", onMouseEnter);
        swiper.$el.on("mouseleave", onMouseLeave);
      }
    }
    function detachMouseEvents() {
      swiper.$el.off("mouseenter", onMouseEnter);
      swiper.$el.off("mouseleave", onMouseLeave);
    }
    on3("init", () => {
      if (swiper.params.autoplay.enabled) {
        start2();
        const document2 = getDocument();
        document2.addEventListener("visibilitychange", onVisibilityChange);
        attachMouseEvents();
      }
    });
    on3("beforeTransitionStart", (_s, speed, internal) => {
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          stop2();
        }
      }
    });
    on3("sliderFirstMove", () => {
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          stop2();
        } else {
          pause();
        }
      }
    });
    on3("touchEnd", () => {
      if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
        run();
      }
    });
    on3("destroy", () => {
      detachMouseEvents();
      if (swiper.autoplay.running) {
        stop2();
      }
      const document2 = getDocument();
      document2.removeEventListener("visibilitychange", onVisibilityChange);
    });
    Object.assign(swiper.autoplay, {
      pause,
      run,
      start: start2,
      stop: stop2
    });
  }

  // node_modules/js-confetti/dist/es/index.js
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function normalizeComputedStyleValue(string) {
    return +string.replace(/px/, "");
  }
  function fixDPR(canvas2) {
    var dpr = window.devicePixelRatio;
    var computedStyles = getComputedStyle(canvas2);
    var width = normalizeComputedStyleValue(computedStyles.getPropertyValue("width"));
    var height = normalizeComputedStyleValue(computedStyles.getPropertyValue("height"));
    canvas2.setAttribute("width", (width * dpr).toString());
    canvas2.setAttribute("height", (height * dpr).toString());
  }
  function generateRandomNumber(min, max) {
    var fractionDigits = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    var randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits);
  }
  function generateRandomArrayElement(arr) {
    return arr[generateRandomNumber(0, arr.length)];
  }
  var FREE_FALLING_OBJECT_ACCELERATION = 125e-5;
  var MIN_DRAG_FORCE_COEFFICIENT = 5e-4;
  var MAX_DRAG_FORCE_COEFFICIENT = 9e-4;
  var ROTATION_SLOWDOWN_ACCELERATION = 1e-5;
  var INITIAL_SHAPE_RADIUS = 6;
  var INITIAL_EMOJI_SIZE = 80;
  var MIN_INITIAL_CONFETTI_SPEED = 0.9;
  var MAX_INITIAL_CONFETTI_SPEED = 1.7;
  var MIN_FINAL_X_CONFETTI_SPEED = 0.2;
  var MAX_FINAL_X_CONFETTI_SPEED = 0.6;
  var MIN_INITIAL_ROTATION_SPEED = 0.03;
  var MAX_INITIAL_ROTATION_SPEED = 0.07;
  var MIN_CONFETTI_ANGLE = 15;
  var MAX_CONFETTI_ANGLE = 82;
  var MAX_CONFETTI_POSITION_SHIFT = 150;
  var SHAPE_VISIBILITY_TRESHOLD = 100;
  var DEFAULT_CONFETTI_NUMBER = 250;
  var DEFAULT_EMOJIS_NUMBER = 40;
  var DEFAULT_CONFETTI_COLORS = ["#fcf403", "#62fc03", "#f4fc03", "#03e7fc", "#03fca5", "#a503fc", "#fc03ad", "#fc03c2"];
  function getWindowWidthCoefficient(canvasWidth) {
    var HD_SCREEN_WIDTH = 1920;
    return Math.log(canvasWidth) / Math.log(HD_SCREEN_WIDTH);
  }
  var ConfettiShape = /* @__PURE__ */ function() {
    function ConfettiShape2(args) {
      _classCallCheck(this, ConfettiShape2);
      var initialPosition = args.initialPosition, direction = args.direction, confettiRadius = args.confettiRadius, confettiColors = args.confettiColors, emojis = args.emojis, emojiSize = args.emojiSize, canvasWidth = args.canvasWidth;
      var randomConfettiSpeed = generateRandomNumber(MIN_INITIAL_CONFETTI_SPEED, MAX_INITIAL_CONFETTI_SPEED, 3);
      var initialSpeed = randomConfettiSpeed * getWindowWidthCoefficient(canvasWidth);
      this.confettiSpeed = {
        x: initialSpeed,
        y: initialSpeed
      };
      this.finalConfettiSpeedX = generateRandomNumber(MIN_FINAL_X_CONFETTI_SPEED, MAX_FINAL_X_CONFETTI_SPEED, 3);
      this.rotationSpeed = emojis.length ? 0.01 : generateRandomNumber(MIN_INITIAL_ROTATION_SPEED, MAX_INITIAL_ROTATION_SPEED, 3) * getWindowWidthCoefficient(canvasWidth);
      this.dragForceCoefficient = generateRandomNumber(MIN_DRAG_FORCE_COEFFICIENT, MAX_DRAG_FORCE_COEFFICIENT, 6);
      this.radius = {
        x: confettiRadius,
        y: confettiRadius
      };
      this.initialRadius = confettiRadius;
      this.rotationAngle = direction === "left" ? generateRandomNumber(0, 0.2, 3) : generateRandomNumber(-0.2, 0, 3);
      this.emojiSize = emojiSize;
      this.emojiRotationAngle = generateRandomNumber(0, 2 * Math.PI);
      this.radiusYUpdateDirection = "down";
      var angle = direction === "left" ? generateRandomNumber(MAX_CONFETTI_ANGLE, MIN_CONFETTI_ANGLE) * Math.PI / 180 : generateRandomNumber(-MIN_CONFETTI_ANGLE, -MAX_CONFETTI_ANGLE) * Math.PI / 180;
      this.absCos = Math.abs(Math.cos(angle));
      this.absSin = Math.abs(Math.sin(angle));
      var positionShift = generateRandomNumber(-MAX_CONFETTI_POSITION_SHIFT, 0);
      var shiftedInitialPosition = {
        x: initialPosition.x + (direction === "left" ? -positionShift : positionShift) * this.absCos,
        y: initialPosition.y - positionShift * this.absSin
      };
      this.currentPosition = Object.assign({}, shiftedInitialPosition);
      this.initialPosition = Object.assign({}, shiftedInitialPosition);
      this.color = emojis.length ? null : generateRandomArrayElement(confettiColors);
      this.emoji = emojis.length ? generateRandomArrayElement(emojis) : null;
      this.createdAt = new Date().getTime();
      this.direction = direction;
    }
    _createClass(ConfettiShape2, [{
      key: "draw",
      value: function draw(canvasContext) {
        var currentPosition = this.currentPosition, radius = this.radius, color = this.color, emoji = this.emoji, rotationAngle = this.rotationAngle, emojiRotationAngle = this.emojiRotationAngle, emojiSize = this.emojiSize;
        var dpr = window.devicePixelRatio;
        if (color) {
          canvasContext.fillStyle = color;
          canvasContext.beginPath();
          canvasContext.ellipse(currentPosition.x * dpr, currentPosition.y * dpr, radius.x * dpr, radius.y * dpr, rotationAngle, 0, 2 * Math.PI);
          canvasContext.fill();
        } else if (emoji) {
          canvasContext.font = "".concat(emojiSize, "px serif");
          canvasContext.save();
          canvasContext.translate(dpr * currentPosition.x, dpr * currentPosition.y);
          canvasContext.rotate(emojiRotationAngle);
          canvasContext.textAlign = "center";
          canvasContext.fillText(emoji, 0, 0);
          canvasContext.restore();
        }
      }
    }, {
      key: "updatePosition",
      value: function updatePosition(iterationTimeDelta, currentTime) {
        var confettiSpeed = this.confettiSpeed, dragForceCoefficient = this.dragForceCoefficient, finalConfettiSpeedX = this.finalConfettiSpeedX, radiusYUpdateDirection = this.radiusYUpdateDirection, rotationSpeed = this.rotationSpeed, createdAt = this.createdAt, direction = this.direction;
        var timeDeltaSinceCreation = currentTime - createdAt;
        if (confettiSpeed.x > finalConfettiSpeedX)
          this.confettiSpeed.x -= dragForceCoefficient * iterationTimeDelta;
        this.currentPosition.x += confettiSpeed.x * (direction === "left" ? -this.absCos : this.absCos) * iterationTimeDelta;
        this.currentPosition.y = this.initialPosition.y - confettiSpeed.y * this.absSin * timeDeltaSinceCreation + FREE_FALLING_OBJECT_ACCELERATION * Math.pow(timeDeltaSinceCreation, 2) / 2;
        this.rotationSpeed -= this.emoji ? 1e-4 : ROTATION_SLOWDOWN_ACCELERATION * iterationTimeDelta;
        if (this.rotationSpeed < 0)
          this.rotationSpeed = 0;
        if (this.emoji) {
          this.emojiRotationAngle += this.rotationSpeed * iterationTimeDelta % (2 * Math.PI);
          return;
        }
        if (radiusYUpdateDirection === "down") {
          this.radius.y -= iterationTimeDelta * rotationSpeed;
          if (this.radius.y <= 0) {
            this.radius.y = 0;
            this.radiusYUpdateDirection = "up";
          }
        } else {
          this.radius.y += iterationTimeDelta * rotationSpeed;
          if (this.radius.y >= this.initialRadius) {
            this.radius.y = this.initialRadius;
            this.radiusYUpdateDirection = "down";
          }
        }
      }
    }, {
      key: "getIsVisibleOnCanvas",
      value: function getIsVisibleOnCanvas(canvasHeight) {
        return this.currentPosition.y < canvasHeight + SHAPE_VISIBILITY_TRESHOLD;
      }
    }]);
    return ConfettiShape2;
  }();
  function createCanvas() {
    var canvas2 = document.createElement("canvas");
    canvas2.style.position = "fixed";
    canvas2.style.width = "100%";
    canvas2.style.height = "100%";
    canvas2.style.top = "0";
    canvas2.style.left = "0";
    canvas2.style.zIndex = "1000";
    canvas2.style.pointerEvents = "none";
    document.body.appendChild(canvas2);
    return canvas2;
  }
  function normalizeConfettiConfig(confettiConfig) {
    var _confettiConfig$confe = confettiConfig.confettiRadius, confettiRadius = _confettiConfig$confe === void 0 ? INITIAL_SHAPE_RADIUS : _confettiConfig$confe, _confettiConfig$confe2 = confettiConfig.confettiNumber, confettiNumber = _confettiConfig$confe2 === void 0 ? confettiConfig.confettiesNumber || (confettiConfig.emojis ? DEFAULT_EMOJIS_NUMBER : DEFAULT_CONFETTI_NUMBER) : _confettiConfig$confe2, _confettiConfig$confe3 = confettiConfig.confettiColors, confettiColors = _confettiConfig$confe3 === void 0 ? DEFAULT_CONFETTI_COLORS : _confettiConfig$confe3, _confettiConfig$emoji = confettiConfig.emojis, emojis = _confettiConfig$emoji === void 0 ? confettiConfig.emojies || [] : _confettiConfig$emoji, _confettiConfig$emoji2 = confettiConfig.emojiSize, emojiSize = _confettiConfig$emoji2 === void 0 ? INITIAL_EMOJI_SIZE : _confettiConfig$emoji2;
    if (confettiConfig.emojies)
      console.error("emojies argument is deprecated, please use emojis instead");
    if (confettiConfig.confettiesNumber)
      console.error("confettiesNumber argument is deprecated, please use confettiNumber instead");
    return {
      confettiRadius,
      confettiNumber,
      confettiColors,
      emojis,
      emojiSize
    };
  }
  var ConfettiBatch = /* @__PURE__ */ function() {
    function ConfettiBatch2(canvasContext) {
      var _this = this;
      _classCallCheck(this, ConfettiBatch2);
      this.canvasContext = canvasContext;
      this.shapes = [];
      this.promise = new Promise(function(completionCallback) {
        return _this.resolvePromise = completionCallback;
      });
    }
    _createClass(ConfettiBatch2, [{
      key: "getBatchCompletePromise",
      value: function getBatchCompletePromise() {
        return this.promise;
      }
    }, {
      key: "addShapes",
      value: function addShapes() {
        var _this$shapes;
        (_this$shapes = this.shapes).push.apply(_this$shapes, arguments);
      }
    }, {
      key: "complete",
      value: function complete() {
        var _a;
        if (this.shapes.length) {
          return false;
        }
        (_a = this.resolvePromise) === null || _a === void 0 ? void 0 : _a.call(this);
        return true;
      }
    }, {
      key: "processShapes",
      value: function processShapes(time, canvasHeight, cleanupInvisibleShapes) {
        var _this2 = this;
        var timeDelta = time.timeDelta, currentTime = time.currentTime;
        this.shapes = this.shapes.filter(function(shape) {
          shape.updatePosition(timeDelta, currentTime);
          shape.draw(_this2.canvasContext);
          if (!cleanupInvisibleShapes) {
            return true;
          }
          return shape.getIsVisibleOnCanvas(canvasHeight);
        });
      }
    }]);
    return ConfettiBatch2;
  }();
  var JSConfetti = /* @__PURE__ */ function() {
    function JSConfetti2() {
      var jsConfettiConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, JSConfetti2);
      this.activeConfettiBatches = [];
      this.canvas = jsConfettiConfig.canvas || createCanvas();
      this.canvasContext = this.canvas.getContext("2d");
      this.requestAnimationFrameRequested = false;
      this.lastUpdated = new Date().getTime();
      this.iterationIndex = 0;
      this.loop = this.loop.bind(this);
      requestAnimationFrame(this.loop);
    }
    _createClass(JSConfetti2, [{
      key: "loop",
      value: function loop2() {
        this.requestAnimationFrameRequested = false;
        fixDPR(this.canvas);
        var currentTime = new Date().getTime();
        var timeDelta = currentTime - this.lastUpdated;
        var canvasHeight = this.canvas.offsetHeight;
        var cleanupInvisibleShapes = this.iterationIndex % 10 === 0;
        this.activeConfettiBatches = this.activeConfettiBatches.filter(function(batch) {
          batch.processShapes({
            timeDelta,
            currentTime
          }, canvasHeight, cleanupInvisibleShapes);
          if (!cleanupInvisibleShapes) {
            return true;
          }
          return !batch.complete();
        });
        this.iterationIndex++;
        this.queueAnimationFrameIfNeeded(currentTime);
      }
    }, {
      key: "queueAnimationFrameIfNeeded",
      value: function queueAnimationFrameIfNeeded(currentTime) {
        if (this.requestAnimationFrameRequested) {
          return;
        }
        if (this.activeConfettiBatches.length < 1) {
          return;
        }
        this.requestAnimationFrameRequested = true;
        this.lastUpdated = currentTime || new Date().getTime();
        requestAnimationFrame(this.loop);
      }
    }, {
      key: "addConfetti",
      value: function addConfetti() {
        var confettiConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var _normalizeConfettiCon = normalizeConfettiConfig(confettiConfig), confettiRadius = _normalizeConfettiCon.confettiRadius, confettiNumber = _normalizeConfettiCon.confettiNumber, confettiColors = _normalizeConfettiCon.confettiColors, emojis = _normalizeConfettiCon.emojis, emojiSize = _normalizeConfettiCon.emojiSize;
        var canvasRect = this.canvas.getBoundingClientRect();
        var canvasWidth = canvasRect.width;
        var canvasHeight = canvasRect.height;
        var yPosition = canvasHeight * 5 / 7;
        var leftConfettiPosition = {
          x: 0,
          y: yPosition
        };
        var rightConfettiPosition = {
          x: canvasWidth,
          y: yPosition
        };
        var confettiGroup = new ConfettiBatch(this.canvasContext);
        for (var i = 0; i < confettiNumber / 2; i++) {
          var confettiOnTheRight = new ConfettiShape({
            initialPosition: leftConfettiPosition,
            direction: "right",
            confettiRadius,
            confettiColors,
            confettiNumber,
            emojis,
            emojiSize,
            canvasWidth
          });
          var confettiOnTheLeft = new ConfettiShape({
            initialPosition: rightConfettiPosition,
            direction: "left",
            confettiRadius,
            confettiColors,
            confettiNumber,
            emojis,
            emojiSize,
            canvasWidth
          });
          confettiGroup.addShapes(confettiOnTheRight, confettiOnTheLeft);
        }
        this.activeConfettiBatches.push(confettiGroup);
        this.queueAnimationFrameIfNeeded();
        return confettiGroup.getBatchCompletePromise();
      }
    }, {
      key: "clearCanvas",
      value: function clearCanvas() {
        this.activeConfettiBatches = [];
      }
    }, {
      key: "destroyCanvas",
      value: function destroyCanvas() {
        this.canvas.remove();
      }
    }]);
    return JSConfetti2;
  }();
  var es_default = JSConfetti;

  // src/js/site.js
  var canvas = document.getElementById("confetti-canvas");
  var button = document.getElementById("confetti-button");
  if (canvas || button) {
    const jsConfetti = new es_default({ canvas: canvas || document.createElement("canvas") });
    setTimeout(() => {
      jsConfetti.addConfetti({
        confettiColors: ["#7A75DF", "#F3BD2C", "#5FA87D", "#BCDEC6", "#F9E48E", "#CED3F7", "#3E3877", "#743713", "#1A3A2B"]
      });
    }, 1500);
    if (button) {
      button.addEventListener("click", () => {
        jsConfetti.addConfetti({
          confettiColors: ["#7A75DF", "#F3BD2C", "#5FA87D", "#BCDEC6", "#F9E48E", "#CED3F7", "#3E3877", "#743713", "#1A3A2B"]
        });
      });
    }
  }
  window.Alpine = module_default;
  module_default.plugin(module_default2);
  module_default.start();
  window.TW = tailwindhelpers_exports;
  var Swipers = {};
  for (sel in SwipersConfig) {
    document.querySelectorAll(`${sel} .swiper-container, ${sel} .swiper`).forEach((container) => {
      Swipers[container] = new core_default(container, {
        modules: [Navigation, Autoplay, Pagination, Mousewheel],
        mousewheel: { forceToAxis: true },
        ...SwipersConfig[sel]
      });
    });
  }
  window.Swipers = Swipers;
})();
/*! Bundled license information:

tabbable/dist/index.esm.js:
  (*!
  * tabbable 5.3.3
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)

focus-trap/dist/focus-trap.esm.js:
  (*!
  * focus-trap 6.9.4
  * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
  *)
*/
//# sourceMappingURL=site.js.map
