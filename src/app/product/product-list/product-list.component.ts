import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Datalist } from 'src/app/Model/datalist';
import { ServiceService } from 'src/app/service.service';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  data:Datalist[]=[];
  popupData: any;
  storeTask:any;
  showBtn: boolean = false;

  constructor( private _service:ServiceService, private modalService: NgbModal ) { }

  ngOnInit(): void {

    this.storeTask=[];
    debugger;
    this._service.getproduct().subscribe(res=>{
     return this.data=res;
      // console.log(this.data);
  });
  }
  open() {
    const modalRef = this.modalService.open(AddEditProductComponent);
    modalRef.componentInstance.name = 'World'; //send data p2c
    modalRef.result.then((response) => { //receive data c2p
      console.log(response)
      this.storeTask.push(response);
      console.log(this.storeTask)
    }, (reason) => {
      console.log(reason);
    });
  }
  editTask(task: any) {
    const modalRef = this.modalService.open(PopupFormComponent);
    modalRef.componentInstance.inObj = task; //send data p2c
    modalRef.result.then((response) => { //receive data c2p
      console.log(response)
      this.storeTask.push(response);
      console.log(this.storeTask)
    }, (reason) => {
      console.log(reason);
    });
  }
  deleteTask(i: any) {
    this.storeTask.splice(i , 1);
  }
  show(i: string | number) {
    // this.showBtn = true;
    this.storeTask[i].showBtn = true;
  }
  hide(i: string | number) {
    // this.showBtn = false;
    this.storeTask[i].showBtn = false;
  }
}


function PopupFormComponent(PopupFormComponent: any) {
  throw new Error('Function not implemented.');
}

