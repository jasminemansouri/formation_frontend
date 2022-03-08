import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenudataService } from 'src/app/services/menudata.service';

@Component({
  selector: 'app-ajoutmenu',
  templateUrl: './ajoutmenu.component.html',
  styleUrls: ['./ajoutmenu.component.css'],
})
export class AjoutmenuComponent implements OnInit {
  myImg: any;
  menu = {
    titre: '',
    description: '',
    prix: 0,
    weight: 0,
    calories: 0,
  };
  selectImg(e: any) {
    this.myImg = e.target.files[0];
  }

  constructor(private data: MenudataService, private router: Router) {}

  ngOnInit(): void {}
  ajouter() {
    let formData = new FormData();
    formData.append('titre', this.menu.titre);
    formData.append('description', this.menu.description);
    formData.append('prix', this.menu.prix.toString());
    formData.append('weight', this.menu.weight.toString());
    formData.append('calories', this.menu.calories.toString());
    formData.append('img', this.myImg);

    this.data.create(formData).subscribe(
      (res) => {
        this.router.navigate(['/admin']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
