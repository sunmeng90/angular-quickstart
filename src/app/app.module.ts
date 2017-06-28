//angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
//components
import { FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
//testing

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//routes
import { AppRoutingModule } from './app-routing.module';

//service
import { HeroService } from './hero.service';


//The providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent
//Parameterized route: path: 'detail/:id'(The colon (:) in the path indicates that :id is a placeholder for a specific hero id when navigating to the HeroDetailComponent.)
@NgModule({
  imports:      [ 
  	BrowserModule, 
  	FormsModule,
  	HttpModule,
  	AppRoutingModule,
  	InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [ 
  	AppComponent, 
  	DashboardComponent,
  	HeroesComponent, 
  	HeroDetailComponent,
    HeroSearchComponent
  ],
  providers: [ 
  	HeroService 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
	title = 'Tour of Heroes';
}
