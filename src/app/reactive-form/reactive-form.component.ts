import { Component, OnInit} from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl,
} from "@angular/forms";
import { UserRegistration } from '../models/userRegistration';
import { CustomvalidationServiceService } from '../services/customvalidation-service.service';
import { UserNameValidationServiceService } from '../services/user-name-validation-service.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{
  protected registerForm!: FormGroup<UserRegistration>;
  protected submitted = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly customValidator: CustomvalidationServiceService,
    private readonly userNameValidationService: UserNameValidationServiceService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required, Validators.email]),
        username: new FormControl("", {
          asyncValidators: [
            this.userNameValidationService.validate.bind(
              this.userNameValidationService
            ),
          ],
          validators: [Validators.required],
        }),
        password: new FormControl("", [
          Validators.required,
          this.customValidator.patternValidator(),
        ]),
        confirmPassword: new FormControl("", [Validators.required]),
      },
      {
        validators: [
          this.customValidator.matchPassword("password", "confirmPassword"),
        ],
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.valid) {
      alert(
        "Form Submitted succesfully!!!\n Check the values in browser console."
      );
      console.table(this.registerForm.value);
    }
  }

  resetForm(): void {
    this.registerForm.reset();
  }

}
