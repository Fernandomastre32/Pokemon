import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
  standalone: false
})
export class CatalogPage implements OnInit {
  pokemons: any[] = [];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    const storedPokemon = localStorage.getItem('pokemonList');
    this.pokemons = storedPokemon ? JSON.parse(storedPokemon) : this.getDefaultPokemon();
  }

  getDefaultPokemon() {
    return Array(10).fill({
      name: '???',
      type: 'normal',
      image: 'https://via.placeholder.com/100', // Imagen genérica
    });
  }

  addPokemon() {
    const newPokemon = {
      name: `Poke-${this.pokemons.length + 1}`,
      type: this.getRandomType(),
      image: 'https://via.placeholder.com/100',
    };
    this.pokemons.push(newPokemon);
    localStorage.setItem('pokemonList', JSON.stringify(this.pokemons));
  }

  getRandomType(): string {
    const types = ['fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic'];
    return types[Math.floor(Math.random() * types.length)];
  }

  goToDetails(pokemon: any) {
    localStorage.setItem('selectedPokemon', JSON.stringify(pokemon));
    this.navCtrl.navigateForward('/details');
    
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