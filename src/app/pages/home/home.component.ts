import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  BaseDatos!:any;

  constructor(private router: Router, private route:ActivatedRoute, private data:ServiceService){}

  consulta(id:number){
    this.router.navigate(['/detalles', id]);
  }
  ngOnInit(): void {
    this.data.Data().subscribe(x=> this.BaseDatos = x );
    this.BaseDatos = JSON.parse(this.BaseDatos)
  }
}
