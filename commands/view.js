let fs=require("fs");
let path=require("path");
function viewFn(src,mode){
    console.log("view your folder");
    if(mode=="flat")
        viewhelperFlat(src);
    else
      viewhelperTree(src,"");
}
//function checkfileorfolder(path){
  //  let isFile=fs.lstatSync(path).isFile();
    //return isFile;
//}
function viewhelperFlat(src){
    //check is it file or folder
   // let isFile=checkfileorfolder(src);
    if(fs.lstatSync(src).isFile()){//file
        console.log(src,"*");
    }else{//folder
        console.log(src);
         let children=fs.readdirSync(src);
         for(let i=0;i<children.length;i++){
            let child=children[i];
            let childpath=path.join(src,child);
          //  console.log(childpath);
            viewhelperFlat(childpath);
            
            
         }
    }

}
function viewhelperTree(src,indent){
    //check is it file or folder
   // let isFile=checkfileorfolder(src);
    if(fs.lstatSync(src).isFile()){//file
        console.log(indent,path.basename(src),"*");
    }else{//folder
        console.log(indent,path.basename(src));
         let children=fs.readdirSync(src);
         for(let i=0;i<children.length;i++){
            let child=children[i];
            let childpath=path.join(src,child);
          //  console.log(childpath);
            viewhelperTree(childpath,indent+"____");
            
            
         }
    }

}
module.exports={
    view:viewFn
}