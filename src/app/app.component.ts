import { Component } from '@angular/core';
import { Previsao } from './model/previsao';
import { PrevisoesService } from './previsoes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  previsoes: Previsao[];
  cidade = "São Paulo";

  constructor(private previsoesService: PrevisoesService) {
    this.callObterPrevisoes(this.cidade);
  }

  callObterPrevisoes(cidade) {
    this.previsoesService.obterPrevisoes(cidade).subscribe((previsoes) => {
      this.previsoes = previsoes['list'];
      this.cidade = previsoes['city']['name'];
    });
  }
}
