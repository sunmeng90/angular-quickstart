import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{
  //A Promise essentially promises to call back when the results are ready. You ask an asynchronous service to do some work and give it a callback function. The service does that work and eventually calls the function with the results or an error.
  getHeroes(): Promise<Hero[]> {
  	return Promise.resolve(HEROES);
  }//stub

  getHeroesSlowly(): Promise<Hero[]> {
  	return new Promise(resolve => {
  		//simulate server latency with 2 seconds delay
  		setTimeout(() => resolve(this.getHeroes()), 2000);
  	});
  }

  getHero(id: Number): Promise<Hero> {
    return this.getHeroes()
              .then(heroes => heroes.find( hero => hero.id === id));
  }
}