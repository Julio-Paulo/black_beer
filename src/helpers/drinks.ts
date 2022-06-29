import ascov from '../assets/drinks/ascov.png'
import ascovR from '../assets/drinks/ascov_red.png'
import ascovP from '../assets/drinks/ascov_pessego.png'
import ascovB from '../assets/drinks/askov_blue.png'
import absolut from '../assets/drinks/absolut.png'
import sminorff from '../assets/drinks/sminorff.png'
import redLabel from '../assets/drinks/redlabel.png'
import blackLabel from '../assets/drinks/blacklabel.png'
import whiteHorse from '../assets/drinks/whitehorse.png'
import jackDaniels from '../assets/drinks/jack_daniels.png'
import coroteR from '../assets/drinks/corote_red.png'
import coroteB from '../assets/drinks/corote_blue.png'

export type drink = {
  name:string;
  //img:img;
  price:number;
  description:string
}

export const drinks: drink[] = [
  {name:'Askov', /*img:{ascov},*/ price:14.99, description:'Vodka Ascov sem sabor'},
  {name:'Askov Frutas vermehlas', /*img:{ascov},*/ price:14.99, description:'Vodka Ascov sabor frutas vermelhas'},
  {name:'Askov Pessego', /*img:{ascov},*/ price:14.99, description:'Vodka Ascov sabor Pessego'},
  {name:'Askov Blueberry', /*img:{ascov},*/ price:14.99, description:'Vodka Ascov sabor BlueBerry'},
  {name:'Absolut', /*img:{ascov},*/ price:94.99, description:'Vodka Absolut'},
  {name:'Sminorff', /*img:{ascov},*/ price:34.99, description:'Vodka Sminorff'},
  {name:'Red label', /*img:{ascov},*/ price:75.99, description:'Whisky Red Label'},
  {name:'black label', /*img:{ascov},*/ price:95.99, description:'Whisky Black Label'},
  {name:'White Horse', /*img:{ascov},*/ price:79.99, description:'Whisky White Horse'},
  {name:'Jack Daniels', /*img:{ascov},*/ price:175.99, description:'Whisky Jack Daniels'},
  {name:'Corote Morango', /*img:{ascov},*/ price:4.99, description:'Corote sabor morango'},
  {name:'Corote BlueBerry', /*img:{ascov},*/ price:4.99, description:'Corote sabor BlueBerry'},
  
];