import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent {
  @Input() imagen: string = '';
  @Input() titulo: string = '';
  @Input() precio: string = '';
}
