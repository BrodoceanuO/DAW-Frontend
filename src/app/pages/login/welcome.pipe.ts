import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(value: string, email:string): string {
    return "Welcome " + email + "!"; 
  }

}
