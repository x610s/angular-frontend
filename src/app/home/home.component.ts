import { Component, OnInit } from '@angular/core';
import { PlanserviceService } from '../servicios/planservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  planes: any[] = [];
  planesAny:any[] = [];
  planesHeroku: any[] = [];
  planesAnyHeroku:any[] = [];
  loading: Boolean;

  constructor(private _http: PlanserviceService) {
    this.loading=true;
    this._http.getClientes().subscribe((data: any)=>{
     this.planes =data;

    })

    this._http.getClientesJson().subscribe((data: any)=>{
      this.planesAny =data;

     })

     this._http.getClientesHeroku().subscribe((data: any)=>{
      this.planesHeroku =data;

     })

     this._http.getClientesJsonHeroku().subscribe((data: any)=>{
       this.planesAnyHeroku =data;
    console.log(this.planesAnyHeroku);
      })
  setTimeout(() => {
    this.loading= false;
  }, 3000);

   }

  ngOnInit(): void {
  }

}
