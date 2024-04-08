import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoyerService } from 'src/app/foyer.service';
import { Foyer } from 'src/app/models/Foyer';

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.css']
})
export class FoyerComponent {

  foyer!: Foyer;
  constructor(private foyerservice: FoyerService, private router: Router,foyer: Foyer) {
     this.foyer=foyer;
  }

  saveFoyer() {
   
    
    this.foyerservice.addFoyer(this.foyer).subscribe(
      () => {
        this.router.navigate(['']);
        // alert('added');
      },
      (error) => {
        console.error('Error adding foyer:', error);
      }
    );
  }

}
