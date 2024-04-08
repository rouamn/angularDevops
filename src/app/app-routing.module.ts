import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoyerComponent } from './foyer/foyer/foyer.component';
import { ShowfoyerComponent } from './foyer/showfoyer/showfoyer.component';
import { UpdatefoyerComponent } from './foyer/updatefoyer/updatefoyer.component';

const routes: Routes = [
  
  { path: 'add', component: FoyerComponent },
  { path: '', component:  ShowfoyerComponent },
  { path: 'update/:id', component: UpdatefoyerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
