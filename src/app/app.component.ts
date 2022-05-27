import { Component, VERSION } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Produto } from './produtos';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public produtos: Produto[] = [];

  public displayColumns: string[] = ['id', 'title', 'price', 'category'];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.getProdutos();
  }

  public getProdutos(): void {
    this.produtoService.getProdutos().subscribe({
      next: (response: Produto[]) => {
        this.produtos = response;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      },
    });
  }
}
