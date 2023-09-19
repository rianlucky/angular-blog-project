import { Component, Input } from '@angular/core';

function abrirNot(){
  console.log("abriu noticia")
}

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input()
  photoCover:string=""
  @Input()
  altCover:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardDescription:string=""
  @Input()
  autorNews:string=""
  @Input()
  autorDate:string=""
  @Input()
  id:string= ''

}


