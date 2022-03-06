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
      ,
      {
        name: 'Peppers'
      }      
      ,
      {
        name: 'Cheese'
      }      
      ,
      {
        name: 'Mushrooms'
      }      
      ,
      {
        name: 'Anchovies'
      }      
      ,
      {
        name: 'Canadian Bacon'
      }      
    ];

    return randomToppingsFromCloud;
  }
}
