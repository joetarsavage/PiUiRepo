import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //Creates blank Hero array
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
	   this.getHeroes();
  }

  //gets the array of heroes from the service
  getHeroes(): void{
    this.heroService.getHeroes()
	   .subscribe(heroes => this.heroes = heroes);
  }
}