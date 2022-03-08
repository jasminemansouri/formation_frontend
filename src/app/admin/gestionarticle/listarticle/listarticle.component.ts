import { Component, OnInit } from '@angular/core';
import { ArticledataService } from 'src/app/services/articledata.service';
import { EndpointService } from 'src/app/services/endpoint.service';

@Component({
  selector: 'app-listarticle',
  templateUrl: './listarticle.component.html',
  styleUrls: ['./listarticle.component.css'],
})
export class ListarticleComponent implements OnInit {
  blogs: any;
  constructor(
    public endpoint: EndpointService,
    private data: ArticledataService
  ) {}

  ngOnInit(): void {
    this.data.getall().subscribe((res) => {
      this.blogs = res;
    });
  }
  delete(id: any) {
    this.data.delete(id).subscribe((res) => {
      this.ngOnInit();
    });
  }
}
