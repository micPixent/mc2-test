export function useState<T>(initialValue: T): [Ref<T>, (newValue: T) => void] {
  const state = ref(initialValue) as Ref<T>;

  const setState = (newValue: T) => {
    state.value = newValue;
  };

  return [state, setState];
}
