import { Directive, forwardRef  } from '@angular/core';
import {
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
  AsyncValidator,
} from "@angular/forms";
import { Observable } from "rxjs";
import { UserNameValidationServiceService } from '../services/user-name-validation-service.service';

@Directive({
  selector: '[appValidateUserNameDirective]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => ValidateUserNameDirective),
      multi: true,
    },
  ],
})
export class ValidateUserNameDirective implements AsyncValidator{

  constructor(private userNameValidationService: UserNameValidationServiceService) { }
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.userNameValidationService.validate(control);
  }

}
