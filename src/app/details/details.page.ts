import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: false
})
export class DetailsPage  {

  pokemon: any = {};

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    const storedPokemon = localStorage.getItem('selectedPokemon');
    this.pokemon = storedPokemon ? JSON.parse(storedPokemon) : {};
  }

  goBack() {
    this.navCtrl.navigateBack('/catalog');
  }
  getPokemonColor(type: string): string {
    const pokemonColors: { [key: string]: string } = {
      fire: '#F08030',
      water: '#6890F0',
      grass: '#78C850',
      electric: '#F8D030',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      normal: '#A8A878',
    };
    return pokemonColors[type] || '#A8A878'; // Color por defecto (normal)
  }
  
}