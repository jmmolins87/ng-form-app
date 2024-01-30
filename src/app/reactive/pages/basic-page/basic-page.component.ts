import { Component, OnInit } from '@angular/core';
import { 
  FormGroup, 
  FormBuilder, 
  Validators 
} from '@angular/forms';
import { ValidatorsService } from './../../../shared/services/validators.service';

const myProduct = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 6
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

  // *! / Método anticuado de crear un formulario
  // public myForm: FormGroup = new FormGroup ({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0)
  // });

  // ** Nuevo método de crear un formulario
  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: [0, [ Validators.required, Validators.min(0) ]],
    inStorage: [0, [ Validators.required, Validators.min(0) ]]
  });

  constructor( 
    private fb: FormBuilder,
    private _validatorsService: ValidatorsService
  ) {}

  ngOnInit(): void {
    
  }

  isValidField( field: string ): boolean | null {
    return this._validatorsService.isValidField(this.myForm, field);
  }

  getFieldError( field: string ): string | null {

    if( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for ( const key of Object.keys( errors ) ) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
          break;
        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } carácteres`;
          break;
        default:
          break;
      }
    }

    return null;

  }

  onSave():void {

    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    };
    console.log( this.myForm.value );
    this.myForm.reset({ price: 10, inStorage: 0 });
  }

}
