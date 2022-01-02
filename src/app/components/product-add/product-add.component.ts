import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/products.service';
import { CategoryService } from 'src/app/services/category.service';
import { Brands } from 'src/app/models/brands';
import { CPU } from 'src/app/models/cpu';
import { CpuService } from 'src/app/services/cpu.service';
import { GPU } from 'src/app/models/gpu';
import { GpuService } from 'src/app/services/gpu.service';
import { RAM } from 'src/app/models/ram';
import { RamService } from 'src/app/services/ram.service';
import { Storage } from 'src/app/models/storage';
import { MemoryService } from 'src/app/services/memory.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  brand: Brands[] = [];
  selectedBrand: Number;
  cpus: CPU[] = [];
  selectedCPU: Number;
  gpus: GPU[] = [];
  selectedGPU:Number;
  rams: RAM[] = [];
  selectedRAM:Number;
  storages: Storage[] = [];
  productAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService,
    private categoryService: CategoryService,
    private cpuService: CpuService,
    private gpuService: GpuService,
    private ramService: RamService,
    private memoryService: MemoryService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
    this.getCategory();
    this.getCPU();
    this.getGPU();
    this.getRAM();
    this.getStorage();
  }
  ChangeBrandId(event: any) {
    this.selectedBrand = event.target.value;
  }
  ChangeCpuId(event: any) {
    this.selectedCPU = event.target.value;
  }
  ChangeGpuId(event: any) {
    this.selectedCPU = event.target.value;
  }
  ChangeRamId(event: any) {
    this.selectedRAM = event.target.value;
  }

  createProductAddForm() {
    
    this.productAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      brandId: ['', Validators.required],
      sellerId: ['', Validators.required],
      storageId: ['', Validators.required],
      ramId: ['', Validators.required],
      cpuId: ['', Validators.required],
      gpuId: ['', Validators.required],
      monitor: ['', Validators.required],
      rating: ['', Validators.required],
    });
  }

  getCategory() {
    this.categoryService.getCategory().subscribe((response) => {
      this.brand = response.data;
    });
  }
  getCPU() {
    this.cpuService.getCPU().subscribe((response) => {
      this.cpus = response.data;
    });
  }
  getGPU() {
    this.gpuService.getGPU().subscribe((response) => {
      this.gpus = response.data;
    });
  }
  getRAM() {
    this.ramService.getRAM().subscribe((response) => {
      this.rams = response.data;
    });
  }
  getStorage() {
    this.memoryService.getStorage().subscribe((response) => {
      this.storages = response.data;
    });
  }

  convertInt(value:string):Number{
    return parseInt(value,10);
  }

  add() {
    console.log(this.productAddForm.value)
   if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe((response) => {
        console.log(this.productAddForm.value)
        this.toastrService.success('Formunuz Eklenmiştir.', 'Dikkat Dikkat');
      });
   } else {
  this.toastrService.error('Formunuz Geçersizdir.', 'Dikkat Dikkat');
 }
    }}
