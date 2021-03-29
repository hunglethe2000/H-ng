class chap06{
    classs: string;
    gioiTinh: string;
    constructor(a:string,b:string){
        this.classs = a;
        this.gioiTinh = b;
    }
    show():void{
        console.log(`
        Class: ${this.classs}
        Giới Tính: ${this.gioiTinh}
        `);
    }
}
export default chap06;

