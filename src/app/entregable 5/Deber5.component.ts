import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
  // Lista de productos
products = [
  { 
    name: 'Fritada', 
    price: 5.50, // Precio actualizado
    inventoryStatus: 'Low Stock', // Inventario actualizado
    image: 'https://www.recetasnestle.com.ec/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/e5cb8814a143a1043c9930b8a57ddab3.jpg?itok=YjT5fCIC'
  },
  { 
    name: 'Encebollado', 
    price: 4.25, // Precio actualizado
    inventoryStatus: 'In Stock', // Inventario actualizado
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Semifinal_del_Campeonato_del_Encebollado_en_Esmeraldas_2015_%2818062294436%29.jpg/800px-Semifinal_del_Campeonato_del_Encebollado_en_Esmeraldas_2015_%2818062294436%29.jpg'
  },
  { 
    name: 'Guatita', 
    price: 12.99, // Precio actualizado
    inventoryStatus: 'Low Stock', // Inventario actualizado
    image: 'https://www.laylita.com/recetas/wp-content/uploads/2008/06/Guatita-ecuatoriana-mondongo-con-papas-en-salsa-de-mani.jpg'
  },
  { 
    name: 'Yahuarlocro', 
    price: 8.75, // Precio actualizado
    inventoryStatus: 'In Stock', // Inventario actualizado
    image: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/cf1fa44fbf8d9aafdba757700dfd5678.jpg'
  },
  { 
    name: 'Colada Morada', 
    price: 6.40, // Precio actualizado
    inventoryStatus: 'Low Stock', // Inventario actualizado
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwtrH_f59ts5pT-7YjyTJBQERuB0HmhG-kw&s'
  },
  { 
    name: 'Higos Con Queso', 
    price: 3.99, // Precio actualizado
    inventoryStatus: 'In Stock', // Inventario actualizado
    image: 'https://www.laylita.com/recetas/wp-content/uploads/2008/10/Dulce-de-higos-con-queso.jpg'
  }
];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 4 productos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 3 productos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 2 productos visibles en pantallas pequeñas
      numScroll: 1
    },

  ];

  // Método para determinar el severidad de la disponibilidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}
