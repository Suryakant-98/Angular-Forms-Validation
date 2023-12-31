import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";
import { CustomvalidationServiceService } from '../services/customvalidation-service.service';

@Directive({
  selector: '[appPasswordPatternDirective]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordPatternDirective,
      multi: true,
    },
  ],
})
export class PasswordPatternDirective implements Validator {

  constructor(private customValidator: CustomvalidationServiceService) { }
  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.patternValidator()(control);
  }

}
