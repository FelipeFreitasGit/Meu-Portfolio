import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/services/home.service';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})
export class ArtigosComponent implements OnInit {

  arrow: boolean;

  constructor(
    private router: Router,
    private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.currentArrow.subscribe(action => this.arrow = action);
  }

  arrowTrue() {
    this.router.navigate(['/artigos']);
    this.homeService.actionArrow(true);
  }

  arrowFalse() {
    this.router.navigate(['/']);
    this.homeService.actionArrow(false);
  }

}
