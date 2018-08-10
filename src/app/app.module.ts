
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingServiceService } from './setting.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ 
    /*{
      provide: LOCALE_ID,
      useValue: 'en-US',
    
    }*/
    SettingServiceService,
    {
      provide: LOCALE_ID,
      deps: [SettingServiceService],
      useFactory: (settingService) => settingService.getLocale()
      
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
