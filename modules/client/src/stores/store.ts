import {useThemeStore} from "@/stores/modules/themeStore";
import {useAuthStore} from "@/stores/modules/authStore";
import {usePlacesStore} from "@/stores/modules/placesStore";

export const useStore = () => {
  const theme = useThemeStore();
  const auth = useAuthStore();
  const places = usePlacesStore();

  return { theme, auth, places };
};
