import { Component, OnInit } from '@angular/core';
import { PiadaService } from '../servicos/piada.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
  standalone: false
})
export class ListarPage implements OnInit {

  constructor(private piada:PiadaService) { }

  piadas: any [] = [];

  ngOnInit() {
    this.piada.getAllpiadas().subscribe((dados: any) => {
      console.log(dados)
      this.piadas = dados
    });
}
}