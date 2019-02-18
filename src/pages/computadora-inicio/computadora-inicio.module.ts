import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComputadoraInicioPage } from './computadora-inicio';

@NgModule({
  declarations: [
    ComputadoraInicioPage,
  ],
  imports: [
    IonicPageModule.forChild(ComputadoraInicioPage),
  ],
})
export class ComputadoraInicioPageModule {}
