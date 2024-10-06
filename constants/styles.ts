const COLORS = {
  primary: {
    10: '#F4F9FF',
    20: '#D6E9FF',
    30: '#B8D9FF',
    40: '#97C8FF',
    50: '#7CBAFF',
    60: '#5AA8FF',
    70: '#3A97FE',
    80: '#1A81F4',
    90: '#006EE9',
    100: '#105CDB',
  },
  textColor: '#4A4646',
  headerColor: '#000000',
  subHeader: '#474747',
  destructive: '#CB2F2F',
  white: '#FFF',
  black: '#000',
};

const FONT = {
  regular: 'PoppinsRegular',
  medium: 'PoppinsMedium',
  semiBold: 'PoppinsSemiBold',
  bold: 'PoppinsBold',
  righteous: 'Righteous',
};

const SIZES = {
  "2xs": 10,
  xs: 12,
  sm: 14,
  base: 16,
  lg: 20,
  xl: 24,
  "2l": 32,
  "3l": 40,
};


const SHADOWS = {
  small: {
    shadowColor: '#006EE9',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#006EE9',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { FONT, SIZES, SHADOWS, COLORS };
