/**
 * 将多种时间戳格式统一转为毫秒级 epoch。
 * 支持：秒级/毫秒级数字、ISO 字符串、Unix 字符串。
 * 无法解析时返回 0。
 */
export function toTimestamp(value: string | number | undefined): number {
  if (typeof value === "number") {
    return value > 1_000_000_000_000 ? value : value * 1000;
  }
  if (!value) return 0;
  const numeric = Number(value);
  if (Number.isFinite(numeric) && numeric > 0) {
    return numeric > 1_000_000_000_000 ? numeric : numeric * 1000;
  }
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}
