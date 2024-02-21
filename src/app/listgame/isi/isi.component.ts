import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-isi',
  templateUrl: './isi.component.html',
  styleUrls: ['./isi.component.css'],
})
export class IsiComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.display_game();
  }
  game?: any[];
  display_game() {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '0f1dd518dbmsh28beb12adac8b04p1e0648jsn7269198460c7',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    });
    this.http
      .get<any>(
        'https://free-to-play-games-database.p.rapidapi.com/api/games',
        {
          headers: headers,
        }
      )
      .subscribe((data) => {
        console.log(data);
        this.game = data;
      });
  }
}
