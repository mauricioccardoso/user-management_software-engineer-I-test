import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat"

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);
dayjs.extend(customParseFormat);

class DayjsDateProvider implements IDateProvider {
  formatDate(date: Date) {
    return dayjs(date, "DD/MM/YYYY").utc().local().format();
  }

  calculateYears(date : Date) : number {
    const dateNow = dayjs();
    const dateFormatted = dayjs(date, "DD/MM/YYYY").toDate();

    return dateNow.diff(dateFormatted, 'year');
  }
}

export { DayjsDateProvider };
