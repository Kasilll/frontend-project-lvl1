import image from './assets/image.png'
import {Imageblock,Titleblock,Textblock,Columsblock} from './classes/block'

export const model = [
    
    new Titleblock('Конструктор сайтов на чистом javascript',{
        tag:'h2',
        style: {
            background:'linear-gradient(to right, #ff0099, #493240)',
            color:'#fff',
            padding:'1.5rem',
            'text-align':'center'
        }
    }),
  
    new Textblock('here we go with some text',{}),
   
    new Columsblock(['11111','2222','33333'],{}),
   
    new Imageblock(image,{})
    
    ]