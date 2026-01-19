const clamp = (value: number, min: number, max: number) => {
  'worklet';
  return Math.min(max, Math.max(min, value));
};

const toTwoDigitHex = (value: number) => {
  'worklet';
  return value.toString(16).padStart(2, '0').toUpperCase();
};

const normalizeHex = (hexColor: string) => {
  'worklet';
  const trimmed = hexColor.trim();
  const withoutHash = trimmed.startsWith('#') ? trimmed.slice(1) : trimmed;

  if (withoutHash.length === 3) {
    const [r, g, b] = withoutHash;
    return `#${r}${r}${g}${g}${b}${b}`.toUpperCase();
  }

  if (withoutHash.length === 6) {
    return `#${withoutHash}`.toUpperCase();
  }

  if (withoutHash.length === 8) {
    return `#${withoutHash.slice(0, 6)}`.toUpperCase();
  }

  return null;
};

/**
 * Adds opacity (0..100) to a hex color and returns `#RRGGBBAA`.
 *
 * Example: `withOpacity('#0E0E0E', 20)` => `#0E0E0E33`
 */
export const withOpacity = (color: string, opacityPercent: number) => {
  'worklet';
  const baseHex = normalizeHex(color);
  if (!baseHex) {
    return color;
  }

  const alpha = clamp(opacityPercent, 0, 100) / 100;
  const alphaByte = Math.round(alpha * 255);
  const alphaHex = toTwoDigitHex(alphaByte);

  return `${baseHex}${alphaHex}`;
};
