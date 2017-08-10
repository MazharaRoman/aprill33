import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import { CONFIG } from '../config';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MoviesService {
  private popular_url = `${CONFIG.movies_url}/popular`;


  constructor(private http: Http) {

  }

  get(): Observable<any> {
    const options: RequestOptionsArgs = {
      search: {
        api_key: CONFIG.api_key
      }
    };

    return this.http
      .get(this.popular_url, options)
      .map( (data: any) => {
        return data.json().results;
      } )
      .catch( error => error.json() );
  }

}
