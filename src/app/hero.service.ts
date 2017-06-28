import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
//import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{
  private headers = new Headers({'Content-Type': 'application/json'});

  private heroesUrl='api/heroes';

  constructor(private http: Http){}

  //A Promise essentially promises to call back when the results are ready. You ask an asynchronous service to do some work and give it a callback function. The service does that work and eventually calls the function with the results or an error.
  getHeroes(): Promise<Hero[]> {
  	//return Promise.resolve(HEROES);
    return this.http.get(this.heroesUrl)
                .toPromise()
                .then(response => response.json().data as Hero[])
                .catch(this.handleError);
  }//stub

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHeroesSlowly(): Promise<Hero[]> {
  	return new Promise(resolve => {
  		//simulate server latency with 2 seconds delay
  		setTimeout(() => resolve(this.getHeroes()), 500);
  	});
  }

  getHero(id: Number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url=`${this.heroesUrl}/${hero.id}`;
    return this.http
        .put(url, JSON.stringify(hero), {headers: this.headers})
        .toPromise()
        .then(()=> hero)
        .catch(this.handleError);

  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name:name}), {headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Hero )
      .catch( this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .delete(url,{headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}