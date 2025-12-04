import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterLink, NgOptimizedImage],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
