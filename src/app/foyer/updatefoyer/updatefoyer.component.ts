import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoyerService } from 'src/app/foyer.service';

@Component({
  selector: 'app-updatefoyer',
  templateUrl: './updatefoyer.component.html',
  styleUrls: ['./updatefoyer.component.css']
})
export class UpdatefoyerComponent {


  foyer!:any;
  constructor(private fb:FormBuilder,private s:FoyerService, private ac:ActivatedRoute,private router: Router){}
  

  ngOnInit(){
    this.s.findById(this.ac.snapshot.params['id']).subscribe(
      (data)=>{
  this.foyer=data;
  this.formBuilder.patchValue(this.foyer)
  console.log(data)
      }
    );
     
}

formBuilder=this.fb.group(
  {
    idFoyer:[''],
    nomFoyer:[''],
    capaciteFoyer:[''],
   
  }
)

update(){
  this.s.updateFoyer(this.formBuilder.value).subscribe(
    ()=>{
      // alert('modification effectué');
      this.router.navigate(['']);
      
    }
)}
 }

