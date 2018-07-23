import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesasMeseroPage } from './mesas-mesero';

@NgModule({
  declarations: [
    MesasMeseroPage,
  ],
  imports: [
    IonicPageModule.forChild(MesasMeseroPage),
  ],
})
export class MesasMeseroPageModule {}
