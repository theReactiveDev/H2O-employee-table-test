import { format, Locale } from "date-fns";
import * as locales from "date-fns/locale";
export const formatTableDate = (date: string | Date | number | undefined) => {
  if (date) {
    return format(new Date(date), "dd.MM.yyyy", {
      locale: locales["ru" as keyof typeof locales],
    });
  }
};
