class File{

    constructor(name,type,size,startTime,modTime,subFile){
    this.name=name;
    this.type=type;
    this.size=size;
    this.startTime=startTime;
    this.modTime=modTime;
    this.subFile=new Array();
    }

     list()
    {
        
          this.subFile.sort(function(a,b){
              if(a.type>b.type)
              return 1;
              else if(a.type<b.type)
              return -1;
              else return b.modTime>a.modTime;
              
          })
          for(let i=0;i<this.subFile.length;i++){
          console.log(JSON.stringify(this.subFile[i]));
        }
    }
    find(str){
        let i=0;
        for(i;i<this.subFile.length;i++)
           if(str.toUpperCase() == this.subFile[i].name.toUpperCase())
           {
               return this.subFile[i];
           }
           console.log(JSON.stringify(this.subFile[i])); 
    }
}
console.log('*'.padEnd(80, '*'));
let [f1,f2]=[
     new File("mobile",1,1,1000,1001),
      new File("index . htm1" ,2,2,1002,1003) 
    ];
  
    console.log(JSON.stringify(f1));
    console.log(JSON.stringify(f2));
    console.log(`
    list功能
    mobile文件夹的子文件排序输出如下`);
    
    let set=new Set([
      new  File("a1",1,1,63,68),
      new File("a2",2,2,72,75),
      new File  ("a3",1,1,1010,1011),
       new File ("a4",2,2,1068,1071),
        new File("a5",1,1,1006,1007)
    ]);
    var n=0;
    for (let item of set.keys()) {
        f1.subFile[n++]=item;
      }
      f1.list();
 



    console.log(`
    find（name）功能 
    大写和小写都有
    在mobile文件夹的(a2)和(A5)搜索结果如下`);
     var testa2=f1.find("a2");
     console.log(JSON.stringify(testa2));
     var testA5=f1.find("A5");
    console.log(JSON.stringify(testA5));
