import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors,  AbstractControl } from '@angular/forms';
import { CustomvalidationServiceService } from '../services/customvalidation-service.service';
@Directive({
  selector: '[appMatchPasswordDirective]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MatchPasswordDirective,
    multi: true,

  }],
})
export class MatchPasswordDirective implements Validator{
  @Input("appMatchPassword") MatchPassword: string[] = [];
  constructor(private customValidator: CustomvalidationServiceService) { }

  validate(control: AbstractControl): ValidationErrors {
    return this.customValidator.matchPassword(
      this.MatchPassword[0],
      this.MatchPassword[1]
    )(control) || {};
  }

}
