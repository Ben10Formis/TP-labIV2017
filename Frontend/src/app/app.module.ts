// importación de otros módulos de funcionalidad
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//
/*import { AlertModule } from 'ng2-bootstrap';
import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService, ProductService  } from './_services/index';*/

// importación de módulo de enrutado asociado
import { routing } from './app.routing';
/*import { AppComponent } from './app.component';
import { RegisterComponent } from './register/index';*/
import { HomeComponent } from './components/home/index';
/*import { NoContentComponent } from './no-content/index';
import { LoginComponent } from './login/index';

import { ProductsComponent, DetailProductsComponent, NewProductsComponent, ListProductsComponent } from './home/products/index';

import { OrdersComponent } from './home/orders/orders.component';

import { ClientComponent, NewClientComponent, DetailClientComponent } from './home/client/index';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';*/
//
// decorador que define un módulo
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, // el módulo funcional para la 'página home'
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,       // el módulo de rutas ya configurado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }