import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataPage} from '../../data/dataPage'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  photoCover:string=""
  contentTitle:string=""
  contentDesc:string=""
  altImg:string=""
  autor:string=""
  autorDate:string=""

  private id:string|null= "0"

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit():void{
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
      )

    this.setValuestoComponent(this.id)
  }

  setValuestoComponent(id:string|null){
    const result = dataPage.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDesc = result.description
    this.photoCover = result.photo
    this.altImg = result.altImg
    this.autor = result.autor
    this.autorDate = result.Date

  }



}
