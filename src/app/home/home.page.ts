import { Component } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu:MenuController) {}

  abrirMenu(){
    this.menu.enable(true,'meuMenu');
    this.menu.open('meuMenu');
  } 

  fecharMenu(){
    this.menu.close('meuMenu');
  } 
}
