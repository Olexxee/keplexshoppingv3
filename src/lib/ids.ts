let id = 0;

export function createId(prefix = "kp") {
  id++;

  return `${prefix}-${id}`;
}
