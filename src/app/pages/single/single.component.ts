import { Component } from '@angular/core';
import { districts } from 'src/assets/data';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  district:any

ngOnInit(){
  let id=localStorage.getItem("title")
  this.district=districts.filter(e=>e.name==id)
  console.log(this.district)
}
}