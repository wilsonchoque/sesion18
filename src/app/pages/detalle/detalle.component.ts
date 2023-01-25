import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id!:string | null;
  idConvert!:number
  DataLLamada!:any


  constructor(private router:Router, private route:ActivatedRoute, private data:ServiceService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id!==null){
      this.idConvert=parseInt(this.id)
    }
    this.data.Data().subscribe(x=> this.DataLLamada=x)
    this.DataLLamada=JSON.parse(this.DataLLamada)
  }
  back(){
    this.router.navigate(['/'])
  }  
}
