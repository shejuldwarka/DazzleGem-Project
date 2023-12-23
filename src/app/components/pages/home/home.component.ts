
import { Component, AfterViewInit  } from '@angular/core';
import { NgwWowService } from 'ngx-wow'; 
import $ from 'jquery';
import 'magnific-popup';

@Component({ 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  // banner
  herosliderConfig =  {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "fade": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 4000,
    "arrows": false,
    "dots": false,
  };
  bannerposts = [
    { img: 'assets/img/banner/01.jpg' },
    { img: 'assets/img/banner/02.jpg' },
  ];
  // Categories
  categoryposts = [
    { icon: 'flaticon-bracelet', title: 'Golden Pendants', numberofproduct: '12' },
    { icon: 'flaticon-ring', title: 'Diamond Rings', numberofproduct: '27' },
    { icon: 'flaticon-necklace', title: 'Gold Necklaces', numberofproduct: '18' },
    { icon: 'flaticon-earrings', title: 'Designer Earings', numberofproduct: '23' },
  ];

  // Trending collection
  trendingposts = [
    { img: 'assets/img/room-suite/01.jpg', title: 'Wedding Ring', text: 'Machine Design , 24 Carat', price: '$345/10gm' },
    { img: 'assets/img/room-suite/02.jpg', title: 'Gold Neckless', text: 'Machine Design , 24 Carat', price: '$345/10gm' },
    { img: 'assets/img/room-suite/03.jpg', title: 'Barry Gold Bangle', text: 'Machine Design , 24 Carat', price: '$345/10gm' },
    { img: 'assets/img/room-suite/01.jpg', title: 'Gold Earring', text: 'Machine Design , 24 Carat', price: '$345/10gm' },
  ];
  // condos post
  condosposts = [
    { img: 'assets/img/condos/menu-gallery-1.jpg', title: 'Handmade Earring', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do', price: '$299' },
    { img: 'assets/img/condos/menu-gallery-2.jpg', title: 'Diamond Nosering', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do', price: '$499' },
    { img: 'assets/img/condos/menu-gallery-3.jpg', title: 'Silver Bracelet', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do', price: '$299' },
    { img: 'assets/img/condos/menu-gallery-4.jpg', title: 'Gold Pendents', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do', price: '$199' },
  ];
  // Cta 
  ctabg = 'assets/img/others/product.png';
  // wideslider
  widesliderConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "fade": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 4000,
    "arrows": false,
    "dots": false,
    "responsive": [{
      "breakpoint": 992,
      "settings": {
        "slidesToShow": 3,
      },
    },
    {
      "breakpoint": 767,
      "settings": {
        "slidesToShow": 1,
      },
    },
    ],
  };
  shopposts = [
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Ankle Bracelet', price1: '$390', price2: '$480' },
    { img: 'assets/img/shop/02.jpg', tag1: 'New', title: 'Stud Earrings', price1: '$290' },
    { img: 'assets/img/shop/03.jpg', tag1: 'Sale', tag2: '-10%', title: 'Crumpled Ring', price1: '$450', price2: '$510' },
    { img: 'assets/img/shop/04.jpg', tag1: 'Sale', tag2: '-25%', title: 'Moon Necklace', price1: '$500', price2: '$580' },
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Ankle Bracelet', price1: '$390', price2: '$480' },
    { img: 'assets/img/shop/02.jpg', tag1: 'New', title: 'Stud Earrings', price1: '$290' },
    { img: 'assets/img/shop/03.jpg', tag1: 'Sale', tag2: '-10%', title: 'Crumpled Ring', price1: '$450', price2: '$510' },
    { img: 'assets/img/shop/04.jpg', tag1: 'Sale', tag2: '-25%', title: 'Moon Necklace', price1: '$500', price2: '$580' },
  ];
  texture = 'assets/img/texture-1.png';
  // Tabs
  earingposts = [
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Ankle Bracelet', price1: '$390', price2: '$480' },
    { img: 'assets/img/shop/02.jpg', tag1: 'New', title: 'Stud Earrings', price1: '$290', price2: '$300' },
    { img: 'assets/img/shop/03.jpg', tag1: 'New', tag2: '-10%', title: 'Crumpled Ring', price1: '$450', price2: '$510' },
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Golden Pendant', price1: '$780', price2: '$800' },
  ];

  ringsposts = [
    { img: 'assets/img/shop/03.jpg', tag2: '-10%', title: 'Diamond Ring.', price1: '$890', price2: '$900' },
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Stud Earrings ', price1: '$580', price2: '$630' },
    { img: 'assets/img/shop/02.jpg', tag1: 'Sale', tag2: '-40%', title: 'Ankle Bracelet', price1: '$290', price2: '$300' },
    { img: 'assets/img/shop/03.jpg', tag2: '-10%', title: 'Diamond Ring.', price1: '$890', price2: '$920' },
  ];

  necklessposts = [
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Ankle Bracelet', price1: '$390', price2: '$480' },
    { img: 'assets/img/shop/02.jpg', tag1: 'New', title: 'Stud Earrings', price1: '$290', price2: '$300' },
    { img: 'assets/img/shop/03.jpg', tag1: 'New', tag2: '-10%', title: 'Crumpled Ring', price1: '$450', price2: '$510' },
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Golden Pendant', price1: '$780', price2: '$800' },
  ];

  braceletposts = [
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Ankle Bracelet', price1: '$390', price2: '$480' },
    { img: 'assets/img/shop/02.jpg', tag1: 'New', title: 'Stud Earrings', price1: '$290', price2: '$300' },
    { img: 'assets/img/shop/03.jpg', tag1: 'New', tag2: '-10%', title: 'Crumpled Ring', price1: '$450', price2: '$510' },
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Golden Pendant', price1: '$780', price2: '$800' },
  ];
  armletsposts = [
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Ankle Bracelet', price1: '$390', price2: '$480' },
    { img: 'assets/img/shop/02.jpg', tag1: 'New', title: 'Stud Earrings', price1: '$290', price2: '$300' },
    { img: 'assets/img/shop/03.jpg', tag1: 'New', tag2: '-10%', title: 'Crumpled Ring', price1: '$450', price2: '$510' },
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Golden Pendant', price1: '$780', price2: '$800' },
  ];
  ankletsposts = [
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Ankle Bracelet', price1: '$390', price2: '$480' },
    { img: 'assets/img/shop/02.jpg', tag1: 'New', title: 'Stud Earrings', price1: '$290', price2: '$300' },
    { img: 'assets/img/shop/03.jpg', tag1: 'New', tag2: '-10%', title: 'Crumpled Ring', price1: '$450', price2: '$510' },
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Golden Pendant', price1: '$780', price2: '$800' },
  ];
  // Service post
  serviceposts = [
    { img: 'assets/img/service/1.png', icon: 'flaticon-earrings', title: 'Artifical Earings', text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet' },
    { img: 'assets/img/service/2.png', icon: 'flaticon-bracelet', title: 'Bracelet Curb', text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet' },
    { img: 'assets/img/service/3.png', icon: 'flaticon-necklace', title: 'Azrouel Variable', text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet' },
  ];
  // Lastestpost
  latestposts = [
    { img: 'assets/img/shop/01.jpg', title: 'Ankle Bracelet', price: '$390' },
    { img: 'assets/img/shop/02.jpg', title: 'Stud Earrings', price: '$480' },
    { img: 'assets/img/shop/03.jpg', title: 'Crumpled Ring', price: '$290' },
    { img: 'assets/img/shop/04.jpg', title: 'Moon Necklace', price: '$390' },
  ];
  // Counter
  counterposts = [
    { icon: 'flaticon-bracelet-1', number: '84', prefix: 'k', title: 'Jewelriess in Album' },
    { icon: 'flaticon-like', number: '10', prefix: 'M', title: 'Happy Feedbacks' },
    { icon: 'flaticon-earrings', number: '02', prefix: 'k', title: 'Categories Served' },
    { icon: 'flaticon-user-1', number: '100', prefix: 'M', title: 'Happy Clients' },
  ];
  // Masonary image
  msimg1 = 'assets/img/room-type/03.jpg';
  msimg2 = 'assets/img/room-type/01.jpg';
  msimg3 = 'assets/img/room-type/02.jpg';
  // Video poster
  videoimg = 'assets/img/text-block/03.jpg';
 
  // Blog post
  latestpostsliderConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "fade": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 4000,
    "arrows": true,
    "dots": false,
    "prevArrow": '.latest-post-arrow .prev-arrow',
    "nextArrow": '.latest-post-arrow .next-arrow',
    "responsive": [{
      "breakpoint": 992,
      "settings": {
        "slidesToShow": 2,
      },
    },
    {
      "breakpoint": 576,
      "settings": {
        "slidesToShow": 1,
      },
    },
    ],
  };
  blogposts = [
    { img: 'assets/img/blog/blog-1.png', title: 'Ruby on Rose Accessories and Blue Gemstones.', postdate: '26 Jun, 2020', linktext: 'Read More' },
    { img: 'assets/img/blog/blog-2.png', title: 'Matching Jewellery Sets with your Outwear.', postdate: '26 Jun, 2020', linktext: 'Read More' },
    { img: 'assets/img/blog/blog-3.png', title: 'New Retro Collection of Pendants and Ring sets.', postdate: '26 Jun, 2020', linktext: 'Read More' },
    { img: 'assets/img/blog/blog-4.png', title: 'Special Wedding Rings Sets for Him and for Her.', postdate: '26 Jun, 2020', linktext: 'Read More' },
  ];
  ngAfterViewInit() {
    // Counter
    ($('.counter')as any).each(function () {
      ($(this)as any).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'swing',
        step: function () {
          ($(this)as any).text(Math.ceil(this.Counter));
        },
      });
    });
    // Video popup
    ($('.popup-video') as any).magnificPopup({
        type: 'iframe',
    });
    
  }
  

}
