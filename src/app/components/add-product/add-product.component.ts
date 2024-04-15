import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private service: ProductService) { }
  product: any = {
    name: '',
    description: '',
    style: '',
    price: 100,
    category: '',
    imageUrl: ''
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const fileData = fileReader.result as ArrayBuffer;
      const byteArray = new Uint8Array(fileData);
      const numbersArray = Array.from(byteArray);
      const base64String = btoa(String.fromCharCode.apply(null, numbersArray));
      this.product.imageUrl = base64String;
      console.log(this.product)
    }
    fileReader.readAsArrayBuffer(file);
  }
  AddProduct() {
    this.service.addProduct(this.product).subscribe((data) => {
      console.log(data);
    })

  }

}
