import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( 
   public settingsService:SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema:string, link:any){
    this.settingsService.aplicarTema(tema);
    this.aplicarCheck(link);
  }

  aplicarCheck(link:any){
    let selectores:any = document.getElementsByClassName('selector');
    for (let ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck(){
    let selectores:any = document.getElementsByClassName('selector');
    let tema = this.settingsService.ajustes.tema;
    for (let ref of selectores){
      if(ref.getAttribute('data-theme')==tema){
        ref.classList.add('working');
        break;
      }
    }
  }
}
