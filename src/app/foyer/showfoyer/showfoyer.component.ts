import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoyerService } from 'src/app/foyer.service';
import { Foyer } from 'src/app/models/Foyer';
@Component({
  selector: 'app-showfoyer',
  templateUrl: './showfoyer.component.html',
  styleUrls: ['./showfoyer.component.css']
})
export class ShowfoyerComponent {

  show = false
  foyers!: Foyer[];
constructor(private foyerService: FoyerService,private router: Router){}
  ngOnInit(): void {
    
    this.ShowFoyers();
  }

  ShowFoyers() {
    this.foyerService.findAll().subscribe(
      data => {
        this.foyers = data;
      },
      error => {
        console.log('Error fetching foyers:', error);
      }
    );
  }

  navigateToUpdateFoyer(fId: number) {
    this.router.navigate(['update',fId]);
  }

  navigateToaddFoyer() {
    this.router.navigate(['add']);
  }

  delete(id:any){
    this.foyerService.deleteFoyer(id).subscribe(
      ()=>{
      //alert('next')
      window.location.reload();
      },
      (err)=>{
      let status=err.status;
      switch (status){
      case 0:alert('server ') ;break;
      case 401:alert('unauthoriz ') ;break;
      case 404:alert('unauthoriz ') ;break;
      }
      },
      );
      }
}
