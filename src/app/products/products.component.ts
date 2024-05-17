import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products:any[] = [

    {
     id: 1,
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOegisHsFH1MKDJ7Fm2nAwuYerz7uKfDzaGA&usqp=CAU",
     name: " Shiatsu Neck Massager",
     price: 60.00,
     description: "The iKristin neck and shoulder massager comes with 16 Bi-directional rotation kneading massage heads that provide deep kneading shiatsu massage to ease neck and shoulder muscles. The massage rollers auto-reverse every minute for better distribution of massage effects."
     

 
    },
    {
      id: 2,
      image:"https://fossil.scene7.com/is/image/FossilPartners/MKJ3969710_main?$sfcc_fos_large$",
      name: " Michael Kors Necklace",
      price: 40.00,
      description:" Michael Kors 14K Gold-Tone Logo Heart Necklace"
      
    },
    {
      id: 3,
      image:"https://i.pinimg.com/474x/57/1c/26/571c26ca6026e8c12210d993ec13e8d5.jpg",
      name: "Tom and Jerry Hoodie",
      price: 50.00,
      description:"This hoodie proudly features the classic Tom and Jerry print, adding a touch of nostalgia and charm. Embrace the warmth and coziness of this hoodie, perfect for showcasing your love for the iconic duo in absolute comfort and style"
      
    }
 
 
 
   ]
}
