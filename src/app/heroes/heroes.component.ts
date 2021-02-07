import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero: Hero | undefined; //you can also use !, ? or change tsconfig.json strictPropertyInitialization
  
  
  heroes = HEROES;

  hero2: Hero = {
    id: 2,
    name: 'Hades'

  };
  constructor() { 
    
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //Similar to viewDidLoad or onCreate
  ngOnInit(): void {
    
  }

 

}
