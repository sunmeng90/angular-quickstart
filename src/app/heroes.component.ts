import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
//The providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent
//add implementation for the OnInit interface(lifecycle hook)
export class HeroesComponent implements OnInit { 
	heroes: Hero[];
	selectedHero: Hero;

	constructor(
    private router: Router,
    private heroService: HeroService){}

	//change the implementation to act on the Promise when it resolves.
	getHeroes(): void {
		//Arrow function is more succinct than the equivalent function expression and gracefully handles this.
		this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);

	}

	onSelect(hero: Hero): void{
		this.selectedHero = hero;
	}

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if(!name){return;}
    this.heroService.create(name)
      .then(hero => { 
        this.heroes.push(hero);
        this.selectedHero = null;
      })

  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

	ngOnInit(): void {
		this.getHeroes();
	}
}

