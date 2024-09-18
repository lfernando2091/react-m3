export type Shape = {
  borderRadius: number;
  corner: Corner;
}

export type Corner = {
  full: CornerAll;
  extraLarge: CornerAll & CornerTop;
  large: CornerAll & CornerTop & CornerEnd & CornerStart;
  medium: CornerAll;
  small: CornerAll;
  extraSmall: CornerAll & CornerTop;
  none: CornerAll;
}

export type CornerAll = {
  all: string;
}

export type CornerTop = {
  top: string;
}

export type CornerEnd = {
  end: string;
}

export type CornerStart = {
  start: string;
}

export const ShapeDefault: Shape = {
  borderRadius: 4,
  corner: {
    full: { all: '50%' },
    extraLarge: { all: '28px', top: '28px 28px 0px 0px' },
    large: { all: '16px', top: '16px 16px 0px 0px', end: '0px 16px 16px 0px', start: '16px 0px 0px 16px' },
    medium: { all: '12px' },
    small: { all: '8px' },
    extraSmall: { all: '4px', top: '4px 4px 0px 0px' },
    none: { all: '0px' },
  }
}
