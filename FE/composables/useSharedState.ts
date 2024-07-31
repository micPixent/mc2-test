import { ref } from "vue";

export function useSharedState() {
  const sharedValue = ref("");

  const setSharedValue = (value: string) => {
    sharedValue.value = value;
  };

  return {
    sharedValue,
    setSharedValue,
  };
}
