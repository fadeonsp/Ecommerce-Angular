import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.css']
})
export class ShopContentComponent implements OnInit {

  qtdeProdutos = 200;
  produtos: {nome, preco}[];

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {

    this.productsService.getProducts().subscribe(
      (data) => {
        this.produtos = data['produtos'];
      }, (error) => {
        console.log(error);
      });
    this.produtos = new Array<{ nome, preco}>();

    this.produtos.push({ nome: 'produto1', preco: 90.10});
    this.produtos.push({ nome: 'produto2', preco: 90.10});
    this.produtos.push({ nome: 'produto3', preco: 90.10});
    this.produtos.push({ nome: 'produto4', preco: 90.10});
  }
  getQtdeProdutos() {
    return this.qtdeProdutos;
  }


}
