import { Component } from '@angular/core';
import { 
  FormGroup, 
  FormBuilder, 
  Validators 
} from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidator } from './../../../shared/validators/email.validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {
  
  public myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.pattern( this._validatorsService.firstNameAndLastnamePattern )]],
    email: [ '', [ Validators.required, Validators.pattern( this._validatorsService.emailPattern )], this._emailValidator ],
    username: [ '', [ Validators.required, this._validatorsService.cantBeStrider ]],
    password: [ '', [ Validators.required, Validators.minLength(6) ]],
    password2: [ '', [ Validators.required ]]
  },
  {
    validators: [ customValidators.isFieldOneEqualToFieldTwo( 'password', 'password2' ) ]
  });

  constructor ( 
    private fb: FormBuilder, 
    private _validatorsService: ValidatorsService,
    private _emailValidator: EmailValidator  
  ) {}

  isValidField( field: string ) {
    return this._validatorsService.isValidField( this.myForm, field );
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
