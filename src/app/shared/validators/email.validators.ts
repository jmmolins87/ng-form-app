import { Injectable } from '@angular/core';
import { 
    AbstractControl, 
    AsyncValidator, 
    ValidationErrors 
} from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

    validate( control: AbstractControl ): Observable<ValidationErrors | null> {
        const email = control.value;
        console.log({ email });

        const httpCallObservable = new Observable<ValidationErrors | null>(( subscriber ) => {
            if( email === '' ) {
                subscriber.next({ emailTaken: true });
                subscriber.complete();
                return;
            }

            subscriber.next( null );
            subscriber.complete();
        });

        return httpCallObservable;
    }

}