import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarPageRoutingModule } from './listar-routing.module';

import { ListarPage } from './listar.page';
import { PiadaService } from '../servicos/piada.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPageRoutingModule
  ],
  declarations: [ListarPage],
  providers: [PiadaService]
})
export class ListarPageModule {}
