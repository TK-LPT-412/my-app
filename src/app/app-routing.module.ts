import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ItemsComponent } from './items/items.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: "home/:id",
    component: ItemsComponent
  },
  {
    path: "product",
    component: ProductComponent,
    children: [
      {
        path: "contact",
        component: ContactComponent,
        children: [
          {
            path: "user/:id",
            component: ContactComponent,
            
          }
    
        ]
      }

    ]
  },
  // {
  //   path: "contact",
  //   component: ContactComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
