import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './admin/header/header.component';
import { GestionmenuComponent } from './admin/gestionmenu/gestionmenu.component';
import { AjoutmenuComponent } from './admin/gestionmenu/ajoutmenu/ajoutmenu.component';
import { ListmenuComponent } from './admin/gestionmenu/listmenu/listmenu.component';
import { UpdatemenuComponent } from './admin/gestionmenu/updatemenu/updatemenu.component';
import { GestionarticleComponent } from './admin/gestionarticle/gestionarticle.component';
import { AjoutarticleComponent } from './admin/gestionarticle/ajoutarticle/ajoutarticle.component';
import { ListarticleComponent } from './admin/gestionarticle/listarticle/listarticle.component';
import { UpdatearticleComponent } from './admin/gestionarticle/updatearticle/updatearticle.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ClientComponent,
    AdminComponent,
    HeaderComponent,
    GestionmenuComponent,
    AjoutmenuComponent,
    ListmenuComponent,
    UpdatemenuComponent,
    GestionarticleComponent,
    AjoutarticleComponent,
    ListarticleComponent,
    UpdatearticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
