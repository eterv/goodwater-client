const { fromPairs } = require('lodash')

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  extraGray: {
    100: '#fafafa',
    200: '#f7f7f7',
    300: '#999999',
    400: '#4c4c4c',
    500: '#333333',
    600: '#262626',
  },
  danger: '#ff4f4f',
  'danger-hover': '#ff4343',
  'danger-active': '#ff3c3c',
  'danger-disabled': '#ffbaba',
  safe: '#4cac00',
  wait: '#ffcd00',
  normal: '#79828b',
  black: '#000000',
  dkgray: '#1c1c1c',
  gray: '#666666',
  ltgray: '#dfdfdf',
  white: '#ffffff',
  deepblue: '#111a3f',
  'deepblue-hover': '#0c132f',
  'deepblue-active': '#060a1b',
  'deepblue-disabled': '#acb5da',
  blue: '#34427a',
  'blue-hover': '#293569',
  'blue-active': '#1c2651',
  'blue-disabled': '#97a6e1',
  sky: '#1687ff',
  'sky-hover': '#007cff',
  'sky-active': '#006fe4',
  'sky-disabled': '#a0ceff',
  lightsky: '#dcedff',
  'lightsky-hover': '#cee6ff',
  'lightsky-active': '#bcddff',
  'lightsky-disabled': '#dcedff',
  'etc-1': '#dadee3',
  'etc-2': '#ccd5df',
  'etc-3': '#fff8f8',
  'etc-4': '#f8faff',
  'etc-5': '#5165a7',
  'etc-6': '#4cac00',
  'etc-7': '#b7c7d9',
  'etc-8': '#f6f8fb',
}

const icons = [
  ['attach', 'icon-20-20-attach.svg'],
  ['attach-disabled', 'icon-20-20-attach-disabled.svg'],

  ['checkbox-invalid-off', 'icon-24-form-24-ckb-in-valid-off.svg'],
  ['checkbox-invalid-off-disabled', 'icon-24-form-24-ckb-in-valid-disabled-off.svg'],
  ['checkbox-invalid-on', 'icon-24-form-24-ckb-in-valid.svg'],
  ['checkbox-invalid-on-disabled', 'icon-24-form-24-ckb-in-valid-disabled.svg'],
  ['checkbox-off', 'icon-24-form-24-ckb-off.svg'],
  ['checkbox-off-disabled', 'icon-24-form-24-ckb-disabled-off.svg'],
  ['checkbox-on', 'icon-24-form-24-ckb.svg'],
  ['checkbox-on-disabled', 'icon-24-form-24-ckb-disabled.svg'],

  ['delete-attach', 'icon-20-20-delete-attach.svg'],
  ['deletevalue', 'icon-20-20-deletevalue.svg'],

  ['radio-invalid-off', 'icon-24-form-24-radio-in-valid-off.svg'],
  ['radio-invalid-off-disabled', 'icon-24-form-24-radio-in-valid-disabled-off.svg'],
  ['radio-invalid-on', 'icon-24-form-24-radio-in-valid.svg'],
  ['radio-invalid-on-disabled', 'icon-24-form-24-radio-in-valid-disabled.svg'],
  ['radio-on', 'icon-24-form-24-radio.svg'],
  ['radio-on-disabled', 'icon-24-form-24-radio-disabled.svg'],
  ['radio-off', 'icon-24-form-24-radio-off.svg'],
  ['radio-off-disabled', 'icon-24-form-24-radio-disabled-off.svg'],

  ['security', 'icon-64-64-security.svg'],

  ['credit', 'icon-20-20-credit.svg'],
  ['participants', 'icon-20-20-participants.svg'],
  ['calendar', 'icon-20-20-calendar.svg'],
  ['bookmark-list', 'icon-20-20-bookmark-list.svg'],
  ['indicator-list', 'icon-20-20-indicator-list.png'],
  ['pc', 'icon-20-20-pc.svg'],
  ['pc-off', 'icon-20-20-pc-no.svg'],
  ['droid', 'icon-20-20-android.svg'],
  ['droid-off', 'icon-20-20-android-no.svg'],
  ['apple', 'icon-20-20-ios.svg'],
  ['apple-off', 'icon-20-20-ios-no.svg'],
]

const spacingSize = 241
const spacing = {
  auto: 'auto',
  ...fromPairs(
    Array.from({ length: spacingSize }, (_, i) => [
      i - (spacingSize >> 1),
      `${i - (spacingSize >> 1)}px`,
    ])
  ),
}

const zIndexSize = 101
const zIndex = {
  auto: 'auto',
  ...fromPairs(Array.from({ length: zIndexSize }, (_, i) => [i, i])),
}

module.exports = {
  purge: {
    mode: 'all',
    content: ['**/*.vue', '**/*.js', '**/*.jsx'],
    css: ['**/*.scss'],
  },
  darkMode: false,
  theme: {
    colors,
    borderRadius: {
      0: '0',
      6: '6px',
      12: '12px',
    },
    padding: spacing,
    margin: spacing,
    zIndex,
    extend: {
      backgroundImage: () => fromPairs(icons.map(([n, path]) => [n, `url(/assets/imgs/${path})`])),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

/*module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
*/
