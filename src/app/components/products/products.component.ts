import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brands } from 'src/app/models/brands';
import { PairWithDetails } from 'src/app/models/details';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  brands:Brands[] = [];
  products:Product[] = [];

  pair:PairWithDetails[] = [];

  filterText="";

  constructor(private productService:ProductService, 
    private activatedRoot:ActivatedRoute,private toastrService:ToastrService,private cartService:CartService) { }

  ngOnInit(): void {

    this.activatedRoot.params.subscribe(params => {

      if(params["productId"]){
        this.getInfo(params["productId"])
      }else{
        this.getProducts()
      }

    })
    
  }

  getProducts(){
    this.productService.getProducts().subscribe(response => {
      this.products = response.data
    })
  }

  getProductsByBrandId(brandId:number){
    this.productService.getProductsByBrandId(brandId).subscribe(response => {
      this.products = response.data
    })
  }
  getInfo(productId:number){
    this.productService.getInfo(productId).subscribe(response => {

      this.pair = response.data
      
    })
  }

  addToCart(product:Product){
    if(product.stock===0){
      this.toastrService.error("HATA STOKTA YOK")

    }else{
      
    this.toastrService.success("SEPETE EKLENDİ",product.name)
    this.cartService.addToCart(product);
    }
  }

}
