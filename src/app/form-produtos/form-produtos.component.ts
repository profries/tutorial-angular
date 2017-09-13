import { Component, OnInit } from '@angular/core';
import { Produto } from "../produto";
import { CrudProdutosService } from "../crud-produtos.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  titulo = "Cadastro de Produtos";
  produto: Produto;
  constructor(private servico:CrudProdutosService, 
    private router:Router) { }

  ngOnInit() {
    this.produto = new Produto();
  }

  salvarProduto(){
    this.servico.adicionarProduto(this.produto);
    this.router.navigate(['/lista']);
  }
  
  cancelar(){
    this.produto = new Produto();
    this.router.navigate(['/lista']);
  }
}
