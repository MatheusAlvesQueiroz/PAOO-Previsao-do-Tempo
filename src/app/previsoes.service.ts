import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Previsao } from './model/previsao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevisoesService {

  constructor(private httpClient: HttpClient) {
  }

  public obterPrevisoes(cidade): Observable<Previsao[]> {
    return this.httpClient.get<Previsao[]>("http://api.openweathermap.org/data/2.5/forecast?q=" + cidade + "&appid=b4162c6254ff29d05644adea10a7eb62&units=metric&lang=pt_br&cnt=15")
  }
}
