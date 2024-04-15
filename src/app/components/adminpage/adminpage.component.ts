import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  products: any[] = []
  constructor(private service: ProductService, private toastr: ToastrService) { }

  isAddProductModalOpen: boolean = false;
  formData: any = {};

  openProductModal() {
    this.isAddProductModalOpen = true;
  }

  closeProductModal() {
    this.isAddProductModalOpen = false;
  }
  ngOnInit(): void {
    this.service.getAllProduct().subscribe((data) => {
      this.products = data
    })

  }


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
      this.toastr.success('Product Added', 'Success', {
        positionClass: 'toast-bottom-center',
        closeButton: true
      });
      this.ngOnInit()


      console.log(data);
      this.closeProductModal();

    })
  }
  deleteProduct(id: any) {
    this.service.deleteProduct(id).subscribe((data) => {
      this.toastr.warning('Deleted', "item deleted", {
        positionClass: 'toast-bottom-center',
        closeButton: true
      });
      this.ngOnInit()
    })

  }
}
