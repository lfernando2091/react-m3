
export type EasingType = {
  default: string;
  accelerate: string;
  decelerate: string;
}

export type DurationType = {
  short1: string;
  short2: string;
  short3: string;
  short4: string;
  medium1: string;
  medium2: string;
  medium3: string;
  medium4: string;
  long1: string;
  long2: string;
  long3: string;
  long4: string;
  extraLong1: string;
  extraLong2: string;
  extraLong3: string;
  extraLong4: string;
}

export type Motion = {
  easing: {
    emphasized: EasingType;
    standard: EasingType;
    legacy: EasingType;
    linear: string;
  },
  duration: DurationType
}

export const MotionDefault: Motion = {
  easing: {
    emphasized: {
      default: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
      accelerate: 'cubic-bezier(0.3, 0.0, 0.8, 0.15)',
      decelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1.0)'
    },
    standard: {
      default: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
      accelerate: 'cubic-bezier(0.3, 0, 1, 1)',
      decelerate: 'cubic-bezier(0, 0, 0, 1)'
    },
    linear: 'cubic-bezier(0, 0, 1, 1)',
    legacy: {
      default: 'cubic-bezier(0.4, 0.0, 0.2, 1.0)',
      accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
      decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
    }
  },
  duration: {
    short1: '50ms',
    short2: '100ms',
    short3: '150ms',
    short4: '200ms',
    medium1: '250ms',
    medium2: '300ms',
    medium3: '350ms',
    medium4: '400ms',
    long1: '450ms',
    long2: '500ms',
    long3: '550ms',
    long4: '600ms',
    extraLong1: '700ms',
    extraLong2: '800ms',
    extraLong3: '900ms',
    extraLong4: '1000ms'
  }
}
