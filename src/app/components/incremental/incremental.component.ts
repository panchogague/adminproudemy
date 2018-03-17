import { Component, OnInit, Input,Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incremental',
  templateUrl: './incremental.component.html',
  styles: []
})
export class IncrementalComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() porcentaje:number=50;
  @Input('nombre') leyenda:string="hola";
  @Output() cambioValor:EventEmitter<number> = new EventEmitter();
  constructor() {

   }

  ngOnInit() {
  }
  cambiarValor(valor){
    if(this.porcentaje >= 100){
      return ;
    }
    if(this.porcentaje <= 0){
      return ;
    }
    this.porcentaje += valor;
    this.cambioValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();
  }

  onChanges(newValue:number){
    
    if(newValue >= 100){
      this.porcentaje=100;
    }
    else if(newValue <= 0){
      this.porcentaje=0;
    }
    else{
      this.porcentaje=newValue;
    }
    console.log(this.porcentaje);
    this.txtProgress.nativeElement.value=this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }
}
