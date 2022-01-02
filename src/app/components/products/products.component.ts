import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brands } from 'src/app/models/brands';
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
  filterText="";

  constructor(private productService:ProductService, 
    private activatedRoot:ActivatedRoute,private toastrService:ToastrService,private cartService:CartService) { }

  ngOnInit(): void {

    this.activatedRoot.params.subscribe(params => {

      if(params["brandId"]){
        this.getProductsByBrandId(params["brandId"])
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

  addToCart(product:Product){
    if(product.stock===0){
      this.toastrService.error("HATA STOKTA YOK")

    }else{
      
    this.toastrService.success("SEPETE EKLENDİ",product.name)
    this.cartService.addToCart(product);
    }
  }

}
