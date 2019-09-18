import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("listo")
  }
  getQuery(query:string){
    const url =`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      "authorization":"Bearer BQDz9mb01mLml7rOlapJ97wMr2O1FWv7l5ImGEcRN-Aq3TwFFcqBiL1UZxBpr3q4hS9jx_phXJ4hX3OpvnE"
     })
     return this.http.get(url,{headers})
  }

  

  getNewReleases(){
    
  return this.getQuery("browse/new-releases?limit=40").pipe(map(data => data["albums"].items))

  }

  getArtista(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(map(data =>data["artists"].items))

  }
  getArtista1(id:string){
    return this.getQuery(`artists/${id}`)

  }
  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=ES`).pipe(map(data =>data["tracks"]))

  }

}
