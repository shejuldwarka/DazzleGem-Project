import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopsidebar',
  templateUrl: './shopsidebar.component.html',
  styleUrls: ['./shopsidebar.component.css']
})
export class ShopsidebarComponent implements OnInit {

  constructor() { }
  // Popular Products
  popularproducts = [
    { img: 'assets/img/recent-post-wid/04.png', title: 'Golden Pendant.', price: '500', discountprice: '580' },
    { img: 'assets/img/recent-post-wid/05.png', title: 'Silver Pendant.', price: '400', discountprice: '520' },
    { img: 'assets/img/recent-post-wid/06.png', title: 'Diamond Ring.', price: '390', discountprice: '450' },
  ];
  // Cart Products
  cartproducts = [
    { img: 'assets/img/recent-post-wid/04.png', title: 'Golden Pendant.', price: '500', discountprice: '580' },
    { img: 'assets/img/recent-post-wid/05.png', title: 'Silver Pendant.', price: '400', discountprice: '520' },
    { img: 'assets/img/recent-post-wid/06.png', title: 'Diamond Ring.', price: '390', discountprice: '450' },
  ];
  // Color selection
  colorposts = [
    { name: 'Red' },
    { name: 'Green' },
    { name: 'Brown' },
    { name: 'Grey' },
    { name: 'Orange' },
  ];
  // Instagram Feeds
  instafeeds = [
    { img: 'assets/img/instagram-wid/01.jpg' },
    { img: 'assets/img/instagram-wid/02.jpg' },
    { img: 'assets/img/instagram-wid/03.jpg' },
    { img: 'assets/img/instagram-wid/04.jpg' },
    { img: 'assets/img/instagram-wid/05.jpg' },
    { img: 'assets/img/instagram-wid/06.jpg' },
    { img: 'assets/img/instagram-wid/07.jpg' },
    { img: 'assets/img/instagram-wid/08.jpg' },
    { img: 'assets/img/instagram-wid/09.jpg' },
  ];
  // Tags
  tags = [
    { title: 'Rings' },
    { title: 'earrings' },
    { title: 'necklace' },
    { title: 'bracelets' },
    { title: 'wedding ring' },
    { title: 'bangles' },
    { title: 'hard ring' },
    { title: 'ankle bracelet' },
    { title: 'silver bracelet' },
    { title: 'earring' },
    { title: 'copper bracelet' },
    { title: 'tech' },
  ];
  ngOnInit(): void {
    
  }

}
