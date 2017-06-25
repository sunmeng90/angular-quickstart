//angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//components
import { FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

//service
import { HeroService } from './hero.service';


//The providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent
//Parameterized route: path: 'detail/:id'(The colon (:) in the path indicates that :id is a placeholder for a specific hero id when navigating to the HeroDetailComponent.)
@NgModule({
  imports:      [ 
  	BrowserModule, 
  	FormsModule,
  	RouterModule.forRoot([
  		{
  			path: '',
  			redirectTo: '/dashboard',
  			pathMatch: 'full'
  		},
  		{
  			path: 'dashboard',
  			component: DashboardComponent
  		},
  		{
  			path: 'heroes',
  			component: HeroesComponent
  		},
  		{
  			path: 'detail/:id',
  			component: HeroDetailComponent
  		}
  	])
  ],
  declarations: [ 
  	AppComponent, 
  	DashboardComponent,
  	HeroesComponent, 
  	HeroDetailComponent 

  ],
  providers: [ 
  	HeroService 

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
	title = 'Tour of Heroes';
}
