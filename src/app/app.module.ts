import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { CrudProdutosService } from "./crud-produtos.service";

const routes: Routes = [
  {path:'', redirectTo:'lista',pathMatch:'full'},
  {path:'lista', component:TabelaProdutosComponent },
  {path:'novo', component:FormProdutosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TabelaProdutosComponent,
    FormProdutosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CrudProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
