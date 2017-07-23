import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sx-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit {

  data: any[];
  columnOptions: any[] = [{
        name: 'Updated',
        value: 'updated_at',
      }, {
        name: 'Created',
        value: 'created_at',
      }];

  sortKey: string = this.columnOptions[0].value;

  headers = {};

  ngOnInit(): void {
    this.columnOptions.forEach((option: any) => {
      this.headers[option.value] =  'ASC';
    });
  }
  isASC(sortKey: string): boolean {
    return this.headers[sortKey] === 'ASC';
  }

  sortBy(sortKey: string): void {
    const sortedData: any[] = [];
    if (this.headers[sortKey] === 'ASC') {
      this.headers[sortKey] = 'DESC';
    } else {
      this.headers[sortKey] = 'ASC';
    }
    this.data = sortedData;
  }

}
