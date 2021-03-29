import chap06 from "./index";

class DauSi extends chap06 {
    public name: string;
    public health: number;
    public mana: number;
    public vuKhi:string
    private ulti: string;
constructor(
        classs: string,
        gioiTinh: string,
        name: string,
        health: number,
        mana: number,
        vuKhi:string,
        ulti : string
        )
    {
        super(classs,gioiTinh);
        this.name = name;
        this.health = health;
        this.mana = mana;
        this.vuKhi = vuKhi;
        this.ulti = ulti
    }
        show():void {
            console.log(`
                Class: ${this.classs}
                Giới Tính: ${this.gioiTinh}
                Tên: ${this.name}
                Máu: ${this.health}
                Năng lượng: ${this.mana}
                Vũ Khí: ${this.vuKhi}
                Chiêu cuối: ${this.ulti}
            `);
        }
}
export default DauSi;
