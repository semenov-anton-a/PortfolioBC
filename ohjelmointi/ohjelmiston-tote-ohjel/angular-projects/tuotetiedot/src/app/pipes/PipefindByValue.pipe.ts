import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'PipefindByValue'
})
export class PipefindByValue implements PipeTransform {

    transform(value: any[], input: string): any {
        if (input) {

            return value.filter(val => val.name.toLowerCase().indexOf(input.toLowerCase()) >= 0);
        
        } else {

            return value;

        }
    }

}