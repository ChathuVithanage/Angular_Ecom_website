import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit{
  constructor(private seller:SellerService, private router:Router){}

  ngOnInit():void{}

  signUp(data:object):void{
    console.warn(data)
    this.seller.userSignUp(data).subscribe((result)=>{
      if(result){
          this.router.navigate(['adminDashboard'])
      }
  });
  }
}
