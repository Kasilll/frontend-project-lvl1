import {model} from './model';
import {Site} from './classes/site';
import './styles/main.css';
import {Sitebar} from './classes/sitebar';

const sitebar = new Sitebar('#panel')

const site = new Site('#site');
site.render(model);
sitebar.init();
// console.log(site);
// console.log(sitebar);
// const sitebar = new Sitebar('#panel');

    

    