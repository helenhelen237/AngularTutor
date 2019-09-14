import { Component } from '@angular/core';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  meat: string = '';
  veggie: string = '';
  isCooked = false;
  badDish = false;
  dish: string = '';
  allVeggies: string[] = ['菠菜', '白菜', '油菜', '蘑菇', '芹菜'];
  allMeat: string[] = ['牛肉', '鸡肉', '羊肉', '猪肉', '鱼'];

  eatVeggie() {
    return this.allVeggies.includes(this.veggie);
  }

  eatMeat() {
    return this.allMeat.includes(this.meat);
  }

  cook() {
    if (this.meat == '' && this.veggie == '') {
      return;
    } else if (this.meat == '') {
      if (this.eatVeggie()) {
        this.dish = '炒' + this.veggie;
        this.isCooked = true;
        this.badDish = false;
      } else {
        this.dish = this.veggie;
        this.badDish = true;
      }
    } else if (this.veggie == '') {
      if (this.eatMeat()) {
        this.dish = '炖' + this.meat;
        this.isCooked = true;
        this.badDish = false;
      } else {
        this.dish = this.meat;
        this.badDish = true;
      }
    } else {
      if (this.eatVeggie() && this.eatMeat()) {
        this.dish = this.veggie + '炒' + this.meat;
        this.isCooked = true;
        this.badDish = false;
      } else if (this.eatVeggie()) {
        this.dish = this.meat;
        this.badDish = true;
      } else if (this.eatMeat()) {
        this.dish = this.veggie;
        this.badDish = true;
      } else {
        this.dish = this.veggie + '和' + this.meat;
        this.badDish = true;
      }
    }
  }

  reset() {
    this.meat = '';
    this.veggie = '';
    this.isCooked = false;
    this.badDish = false;
    this.dish = '';
  }
}
