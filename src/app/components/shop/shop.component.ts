import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  constructor(private service: ProductService) { }
  public products: any[] = [];
  ngOnInit(): void {

    this.applyFilters()
  }
  selectedSortOption = ""
  selectedCategory = "all"
  applyFilters() {
    let filteredData: any[] = []
    if (this.selectedCategory == "all") {
      this.service.getAllProduct().subscribe((data) => {
        this.products = data
        if (this.selectedSortOption == "htol") {
          this.products.sort((a, b) => b.price - a.price);
        } else if (this.selectedSortOption == "ltoh") {
          this.products.sort((a, b) => a.price - b.price);
        }
      })
    }
    if (this.selectedCategory !== "all") {
      this.service.getProductByCategory(this.selectedCategory).subscribe((data) => {
        this.products = data
        if (this.selectedSortOption == "htol") {
          this.products.sort((a, b) => b.price - a.price);
        } else if (this.selectedSortOption == "ltoh") {
          this.products.sort((a, b) => a.price - b.price);
        }
      })
    }
  }
  addToCart(productId: any) {
    console.log("inside add to cart")
    const userId = localStorage.getItem("userId")
    if (userId) {
      const data = {
        userid: userId,
        poductid: productId
      }
      this.service.addToCart(data).subscribe((data) => {
        console.log(data)
      })

    }

  }

}
