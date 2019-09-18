import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { VirtualTimeScheduler } from 'rxjs';
/*import { HttpClient } from '@angular/common/http';*/


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  nuevasCanciones: any = [];
  loading: boolean;
  error:boolean;
  mesagge:string
 /* paises:any[]=[]

  constructor(private http:HttpClient) { 
    console.log("constructor hecho")
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((data:any)=>{
     this.paises=data ;
    console.log(data)
    })
  }*/
  constructor( private spotify: SpotifyService){
    this.loading= true,
    this.error=false
    this.spotify.getNewReleases().subscribe( (data:any) => {
    this.nuevasCanciones=data;
    this.loading = false
    }, (errorService)=>{
      this.error=true,
      this.loading=false,
      this.mesagge=errorService.error.error.message,
      console.log(this.mesagge)
    });
  }

  ngOnInit() {
  }

}
