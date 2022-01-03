import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/models/brands';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css']
})
export class MainCategoryComponent implements OnInit {

  categories : Brands[] = [];
  currentCategory : Brands;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.categoryService.getCategory().subscribe(response => {
      this.categories = response.data
    })
  }
  setCurrentCategory(product:Brands){
    this.currentCategory = product;
  }

  getCurrentCategoryClass(brands:Brands){
    if(brands == this.currentCategory){
      return "list-group-item active"
    }else{
        return "list-group-item"
      }
    }
  }

