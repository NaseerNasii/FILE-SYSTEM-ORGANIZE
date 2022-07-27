let fs=require("fs");
let path=require("path");
let utility={
    media:['mp4','mp3','mkv'],
    archives:['zip','7z','rar','tar','gz','ar','iso','xz'],
    documents:['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app:['exe','dmg','pkg','deb'],
    javascript:['js']
}

function organizeFn(src){
  console.log("organize your folders");
  if(src==undefined){
    src=process.cwd(); //current working path directory;
  }
    
    let dest=createFolder(src,"organizeFolder");
    organizehelper(src,dest);
}
function createFolder(src,parameter){
    let folderpath=path.join(src,parameter);//set a path
    if(fs.existsSync(folderpath) == false){//--->check directory is present or not
        fs.mkdirSync(folderpath);//------>helps to create a folder/directory
    }
    return folderpath;
}
function copyFile(src,dest){
    
    dest=path.join(dest,path.basename(src));
    fs.copyFileSync(src,dest);
    
}
function getcategory(src){
   //let extention=path.extname(src);//f1.txt-->txt,f2.pdf-->pdf
   let extention=src.split(".")[1]; 
   for(let key in utility){
        let valueArr=utility[key];
        for(let i=0;i<valueArr.length;i++){
           if(extention==valueArr[i])
              return key;
        }
    }
    return "others"// if path doesn't fall under any category
}
function organizehelper(src,dest){
//console.log("organizing");
if(fs.lstatSync(src).isFile()){//file
    //differentiate the file category
     let category=getcategory(src);
     let categoryPath=createFolder(dest,category);
     copyFile(src,categoryPath);
    


}else{//folder
     let children=fs.readdirSync(src);
     for(let i=0;i<children.length;i++){
        let child=children[i];
        let childpath=path.join(src,child);
      //  console.log(childpath);
      organizehelper(childpath,dest);
        
        
     }
}

}

module.exports={
    organize:organizeFn
}