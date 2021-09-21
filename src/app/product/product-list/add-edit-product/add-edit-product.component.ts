import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  constructor( public activeModal: NgbActiveModal) { }
  @Input() name: any;
  @Input() inObj: any;
  obj = {
    productId: "",
    productName: "",
    productSKU:"",
    productPrice: "",
  };
  ngOnInit(): void {
    if(this.inObj) {
      this.obj = this.inObj;
    }
  }

  addData(form:NgForm) {
    // this.activeModal.close(form.value);
    this.activeModal.close(this.obj);

  }

}