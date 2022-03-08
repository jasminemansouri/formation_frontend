import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticledataService } from 'src/app/services/articledata.service';

@Component({
  selector: 'app-ajoutarticle',
  templateUrl: './ajoutarticle.component.html',
  styleUrls: ['./ajoutarticle.component.css'],
})
export class AjoutarticleComponent implements OnInit {
  myImg: any;
  blog = {
    titre: '',
    description: '',
    content: '',
  };
  selectImg(e: any) {
    this.myImg = e.target.files[0];
  }
  constructor(private data: ArticledataService, private router: Router) {}

  ngOnInit(): void {}
  ajouter() {
    let fd = new FormData();
    fd.append('titre', this.blog.titre),
      fd.append('description', this.blog.description),
      fd.append('content', this.blog.content),
      fd.append('image', this.myImg);

    this.data.create(fd).subscribe((res) => {
      this.router.navigate(['/admin/article']);
    });
  }
}
