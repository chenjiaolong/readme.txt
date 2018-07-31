function File(name,type,size,startTime,modTime){
    this.name=name;
    this.type=type;
    this.size=size;
    this.startTime=startTime;
    this.modTime=modTime;
    this.subFile=new Array();

     this.list=function()
    {
        
          this.subFile.sort(function(a,b){
              if(a.type>b.type)
              return 1;
              else if(a.type<b.type)
              return -1;
              else return b.modTime>a.modTime;
              
          })
          for(var i=0;i<this.subFile.length;i++){
          console.log(JSON.stringify(this.subFile[i]));
        }
    }
    this.find=function(str){
        var i=0;
        for(var i;i<this.subFile.length;i++)
           if(str.toUpperCase() == this.subFile[i].name.toUpperCase())
           {
               return this.subFile[i];
           }
           console.log(JSON.stringify(this.subFile[i])); 
    }
}
    var f1=new File("mobile",1,1,1000,1001);
    console.log(JSON.stringify(f1));
    var f2=new File("index.html",2,2,1002,1003);
    console.log(JSON.stringify(f2));

    console.log(`
    list功能
    mobile文件夹的子文件排序输出如下`);
    var n=0;
    var a1 = new File("a1",1,1,63,68);
    f1.subFile[n++]=a1;
    var a2 = new File("a2",2,2,72,75);
    f1.subFile[n++]=a2;
    var a3 = new File("a3",1,1,1010,1011);
    f1.subFile[n++]=a3;
    var a4 = new File("a4",2,2,1068,1071);
    f1.subFile[n++]=a4;
    var a5 = new File("a5",1,1,1006,1007);
    f1.subFile[n++]=a5;
    f1.list();

    console.log(`
    find（name）功能 
    大写和小写都有
    在mobile文件夹的(a2)和(A5)搜索结果如下`);
var testa2=f1.find("a2");
console.log(JSON.stringify(testa2));
 var testA5=f1.find("A5");
console.log(JSON.stringify(testA5));
