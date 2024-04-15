import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  @ViewChild('content', { static: false }) el!: ElementRef
  constructor(private service: ProductService) { }
  userId: string | null = ""
  user: any = []
  totalPrice = 0
  cartLength = 0

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId")
    if (this.userId) {
      this.service.getUserById(parseInt(this.userId)).subscribe((data) => {
        this.user = data
        this.cartLength = data[0].cart.length;
        this.totalPrice = data[0].cart.reduce((total: number, product: any) => total + product.price, 0);
        console.log(this.totalPrice)
      })

    }

  }
  makePdf() {
    let pdf = new jsPDF()

    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("BillDetail.pdf")
      }
    })
  }


}
