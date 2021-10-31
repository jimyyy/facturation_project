import { FormGroup } from "@angular/forms";

export function dateLessThan(datefrom: string, dateto: string) {
    return (formGroup: FormGroup): {[key: string]: any} => {
      let f = formGroup.controls[datefrom];
      let t = formGroup.controls[dateto];
      if (f.value > t.value) {
        return {
          dates: "Date from should be less than Date to"
        };
      }
      return {};
    }
}