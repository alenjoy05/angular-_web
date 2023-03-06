import { Component } from '@angular/core';
import { districts } from 'src/assets/data';

@Component({
  selector: 'app-single-page',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {

districts:any
  ngOnInit(){

    let id = localStorage.getItem('title')
    console.log("jh",id)
    this.districts = districts.filter(e=>e.name == id)
    console.log(this.districts)

  }

}
