import { 
    FormGroup, 
    ValidationErrors 
} from "@angular/forms";


export function isFieldOneEqualToFieldTwo( field1: string, field2: string ) {

    return ( formGroup: FormGroup ): ValidationErrors | null => {
        const pass1 = formGroup.controls[field1].value;
        const pass2 = formGroup.controls[field2].value;

        if( pass1 === pass2 ) {
            formGroup.controls[field2].setErrors( null );
            return null;
        }

        formGroup.controls[field2].setErrors( { notEqual: true } );
        return { notEqual: true };
    }

}

