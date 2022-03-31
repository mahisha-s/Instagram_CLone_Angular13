import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, Message, MessageService, SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { RestAPIService } from '../shared-services/restAPI.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any;
  products: any;
  sortOptions: SelectItem[] | undefined;
  sortOrder!: number;
  sortField!: string;
  sortKey: any;
  displayPosition!: boolean;
  position!: string;
  previewData: any;
  selectedCountries: any;
  likes: any;
  timestamp: any;
  Image: any;
  disableSort: boolean = false;
  msgs2: Message[] | undefined;
  l: boolean = false;
  ul: boolean = false;
  btnName: any = 'Like';
  BASEURL = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json';
  constructor(private restapi: RestAPIService, private httpClient: HttpClient, private toast: MessageService) { }

  ngOnInit(): void {
    this.get();
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }

  onSortChange(event: { value: any; }) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
}


preview(product: any){
  this.previewData = [];
  this.previewData = product;
  this.likes = product.likes;
  this.timestamp = product.timestamp;
  this.Image = product.Image;
  this.l = true;
}

likeCheck(){
this.l = false;
this.ul = true;
this.btnName = "UnLike"
let templike = this.likes;
this.likes = this.likes + 1;
this.products.forEach((res: any) => {
  if(res.likes === templike && res.timestamp === this.timestamp && res.Image === this.Image){
    res.likes = this.likes;
  }
})
}

unlikeCheck(){
  this.l = true;
  this.ul = false;
  this.btnName = "Like"
  let tempunlike = this.likes;
  this.likes = this.likes - 1;
  this.products.forEach((res: any) => {
    if(res.likes === tempunlike && res.timestamp === this.timestamp && res.Image === this.Image){
      res.likes = this.likes;
    }
  })
  }


  sortbyLike(){
    this.disableSort = true;
   let sortArray = this.products.sort((a: { likes: number; },b: { likes: number; }) => (a.likes< b.likes) ? -1 : 1);
  //  this.products = [];
   this.products = sortArray;
   this.msgs2 = [
    {severity:'success', summary:'Success', detail:'Data Sorted by Likes'},
    // {severity:'info', summary:'Info', detail:'Message Content'},
    // {severity:'warn', summary:'Warning', detail:'Message Content'},
    // {severity:'error', summary:'Error', detail:'Message Content'}
];
  }


  get() {
    return this.httpClient.get(this.BASEURL).subscribe(res => {
      this.products = res;
    });
  }

}


