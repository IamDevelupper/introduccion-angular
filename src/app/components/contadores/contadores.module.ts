import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HeroeModule } from '../heroes/heroes.module'
import { ContadorComponent } from './contador/contador.component'

@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports: [
    ContadorComponent
  ],
  imports: [
    CommonModule,
    HeroeModule
  ]
})

export class ContadoresModule {}
