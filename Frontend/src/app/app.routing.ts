/** Módulos de enrutado de Angular2 */
import { Routes, RouterModule } from '@angular/router';
/** Componente enrutable */
import { HomeComponent } from './components/home/index';
//import { LoginComponent } from './login/index';
//import { OrdersComponent } from './home/orders/index';
//import { ProductsComponent, PRODUCT_RECORDS_ROUTE } from './home/products/index';
//import { ClientComponent, CLIENT_RECORDS_ROUTE } from './home/client/index';
//import { NoContentComponent } from './no-content/index';
//import { AuthGuard } from './_guards/index';

// Array con las rutas de este módulo. Ninguna funcional.
/** Rutas asociadas a componentes */
const appRoutes: Routes = [
    { path: 'home', 
      component: HomeComponent, 
      //canActivate: [AuthGuard], 
      /*children: 
        [{ path: 'client', 
           component: ClientComponent, 
           children:
            [...CLIENT_RECORDS_ROUTE
            ]
          },
          { path: 'orders', 
            component: OrdersComponent
          },
          { path: 'products', 
            component: ProductsComponent, 
            children:
              [...PRODUCT_RECORDS_ROUTE
              ]
          },
        ]*/
    },
    /*{ path: 'login', 
      component: LoginComponent 
    },*/
    // otherwise redirect to home
    { path: '**', 
      redirectTo: 'home' 
    }
];
// configuración para el módulo raíz
// se importará desde el módulo padre
export const routing = RouterModule.forRoot(appRoutes);