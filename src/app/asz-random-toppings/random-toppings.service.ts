import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomToppingsService {

  constructor() { }

  getRandomToppingsFromTheCloud() {
    // Pretend we make a web service call here.
    const randomToppingsFromCloud = [
      {
        name: 'Olives'
      }
      ,
      {
        name: 'Pepporini'
      }
      ,
      {
        name: 'Sausage'        
      },
      {
        name: 'Bacon'
      }
      ,
      {
        name: 'Pineapple'
      }
      ,
      {
        name: 'Jalepeno'
      }      
    ];

    return randomToppingsFromCloud;
  }
}
