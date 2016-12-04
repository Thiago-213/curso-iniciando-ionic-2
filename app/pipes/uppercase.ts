import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Uppercase pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'uppercase'
})
@Injectable()
export class Uppercase {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value: string, args: any[]) {
    value = value + ''; // make sure it's a string
    return value.toLowerCase();
  }
}
