export function withSlots<T extends object, S>(component: T, slots: S): T & S {
  return Object.assign(component, slots);
}
