#!/usr/bin/env node
let helpFn=require("./commands/help");
let organizeFn=require("./commands/organize");
let viewFn=require("./commands/view");
let input=process.argv.slice(2);
let command=input[0];
switch(command){
    case "view":
        viewFn.view(input[1],input[2]);
        break;
    case "organize":
        organizeFn.organize(input[1]);
        break;
    default:
        helpFn.help(); 
        break;
}