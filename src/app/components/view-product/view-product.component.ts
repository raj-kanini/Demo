import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private service: ProductService) { }
  productId: string | null = '';
  public product: any = {} as any;


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.productId = param.get('id')
    });
    if (this.productId !== null)
      this.service.getProduct(parseInt(this.productId)).subscribe((data) => {
        this.product = data;
      })


  }
}
