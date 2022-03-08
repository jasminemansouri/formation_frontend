import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticledataService } from 'src/app/services/articledata.service';
import { EndpointService } from 'src/app/services/endpoint.service';

@Component({
  selector: 'app-updatearticle',
  templateUrl: './updatearticle.component.html',
  styleUrls: ['./updatearticle.component.css'],
})
export class UpdatearticleComponent implements OnInit {
  url: any; //Angular 11, for stricter type
  msg = '';

  myImg: any;
  myImg2: any;
  blog: any = {
    titre: '',
    description: '',
    content: '',
    image: '',
  };

  id: any;
  selectImg(e: any) {
    ////////////////// check file if exist
    if (!e.target.files[0] || e.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }
    /////////////// check type of file
    var mimeType = e.target.files[0].type;

    if (mimeType.match('image.*') == null) {
      this.msg = 'Only images are supported';
      this.url = '';
      return;
    }
    ///////////// do function
    this.myImg = new FileReader();
    this.myImg.readAsDataURL(e.target.files[0]);
    // console.log('img :');
    // console.log(this.myImg);
    this.myImg2 = e.target.files[0];
    // console.log('img2 :'+this.myImg2);
    // console.log('img2 :'+this.myImg2);
    this.myImg.onload = () => {
      this.msg = '';
      this.url = this.myImg.result;
    };
  }

  constructor(
    private actRoute: ActivatedRoute,
    private data: ArticledataService,
    private router: Router,
    public endpoint: EndpointService
  ) {}

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.data.getbyid(this.id).subscribe((res) => {
      this.blog = res;
    });
  }
  modifier() {
    let formData = new FormData();
    formData.append('titre', this.blog.titre);
    formData.append('description', this.blog.description);
    formData.append('content', this.blog.content);
    if (this.myImg2) {
      formData.append('image', this.myImg2);
      console.log(this.myImg2);
    }
    formData.forEach((value, key) => {
      console.log(key + ' ' + value);
    });
    this.data.update(this.id, formData).subscribe((res) => {
      console.log(this.id);
      console.log(res);
      this.router.navigate(['/admin/article']);
    });
  }
}
