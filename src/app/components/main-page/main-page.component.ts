import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brands } from 'src/app/models/brands';
import { ProductImage } from 'src/app/models/productImages';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  brands:Brands[] = [];
  products:Product[] = [];
  images:ProductImage[] = [];
  filterText="";

  constructor(private productService:ProductService, 
    private activatedRoot:ActivatedRoute,private toastrService:ToastrService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getImages();

    this.activatedRoot.params.subscribe(params => {

      if(params["brandId"]){
        this.getProductsByBrandId(params["brandId"])
      }else{
        this.getProducts()
      }

    })
    
  }
  getImages(){
    this.productService.getImages().subscribe(response => {
      this.images = response.data
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe(response => {
      this.products = response.data
    })
  }
  // getInfo(productId:number){
  //   this.productService.getInfo(productId).subscribe(response => {
  //     this.products = response.data
  //   })
  // }

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
