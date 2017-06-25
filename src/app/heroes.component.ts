import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from './hero.service';

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

	ngOnInit(): void {
		this.getHeroes();
	}
}

