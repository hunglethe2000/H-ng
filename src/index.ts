import lab3 from './chap05/index';
lab3.bai1_1();
lab3.bai1_2(3,4);
lab3.bai1_3();

import chap06 from './chap06';
import DauSi from './chap06/DauSi';
const Demacia = new chap06("Đấu Sĩ","Nam");
const Garen = new DauSi("Đấu Sĩ","Nam","Garen",750,250,"Kiếm","Demaciaaa");
Demacia.show();
Garen.show(); 

// Garen.vuKhi;    vuKhi: public 
// Garen.ulti;    ulti: private 
