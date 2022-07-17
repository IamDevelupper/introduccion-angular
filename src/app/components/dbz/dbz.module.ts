import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { MainPageComponent } from './main-page/main-page.component'
import { PersonajesComponent } from './personajes/personajes.component'
import { NuevoComponent } from './nuevo/nuevo.component'

import { DbzService } from 'src/app/servicios/dbz.service'

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    NuevoComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
