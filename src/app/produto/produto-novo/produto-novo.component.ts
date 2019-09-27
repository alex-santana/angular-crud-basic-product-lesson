import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder , NgForm} from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.scss']
})
export class ProdutoNovoComponent implements OnInit {
productForm: FormGroup;
isLoadingResults = false;

  constructor(private router: Router,private http:HttpClient, private formBuilder: FormBuilder, private service: ApiService) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'id': 0 ,
      'nome':[null, Validators.required],
      'descricao':[null, [Validators.required, Validators.minLength(4)]],
      'preco': [null, Validators.required]
    });
  }

  addProduto(form: NgForm) {
    this.isLoadingResults = true;
    this.service.addProduto(form)
      .subscribe(res => {
          const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/detalhe', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
