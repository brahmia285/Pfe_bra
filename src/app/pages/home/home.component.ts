import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerExists = false;

  constructor() { }

  ngOnInit(): void {
    // Vérifie si la bannière existe dans assets
    const img = new Image();
    img.src = 'assets/banner-attijari.jpg';
    img.onload = () => this.bannerExists = true;
  }

}
