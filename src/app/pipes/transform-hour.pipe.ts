import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformHour',
  standalone: true
})
export class TransformHourPipe implements PipeTransform {

  /**
   * Pipe to convert duration in minutes to hours and minutes format
   * @param duration 
   * @returns duration's format
   */
  transform(duration : string) : string{
    
    const mins = parseInt(duration, 10);
    const hours = Math.floor(mins / 60);
    const minutesRemaining = mins % 60;

    return `${hours} h ${minutesRemaining} min`;
  
}

}
