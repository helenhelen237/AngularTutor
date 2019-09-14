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

    cook() {
        if (this.meat == '' && this.veggie == '') {
          return;
        } else if (this.meat == '') {
            if (this.allVeggies.includes(this.veggie)) {
            this.dish = '炒' + this.veggie;
            this.isCooked = true;
            } else {
                this.dish = this.veggie;
                this.badDish = true;
            }
        } else if (this.veggie == '') {
            if (this.allMeat.includes(this.meat)) {
                this.dish = '炖' + this.meat;
                this.isCooked = true;
            } else {
                this.dish = this.meat;
                this.badDish = true;
            }
        } else {
          if (this.allVeggies.includes(this.veggie) && this.allMeat.includes(this.meat)) {
            this.dish = this.veggie + '炒' + this.meat;
            this.isCooked = true;
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
