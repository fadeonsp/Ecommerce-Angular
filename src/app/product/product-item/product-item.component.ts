import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  produto: { nome: string, preco: number, imagem_produto: string}

  constructor() { }

  ngOnInit(): void {
  }

}
