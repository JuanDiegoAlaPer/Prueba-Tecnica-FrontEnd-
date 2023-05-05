import { Component } from '@angular/core';
import jsonData from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaFrontEnd';
  rows = jsonData.jsonData;
  selected = '';
  filtered = this.rows;

  applyFilter() {
    if (this.selected) {
      this.filtered = this.rows.filter(row => row.status === this.selected);
    } else {
      this.filtered = this.rows;
    }
  }
}
