import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']  ;
  public heroeEliminado?: string;

  borrarUltimoHeroe(): void {
    this.heroeEliminado = this.heroNames.pop();
  }
}
