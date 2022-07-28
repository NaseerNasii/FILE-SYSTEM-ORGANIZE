function helpFn(){
    console.log(`
        
    You have enterd the wrong command.check from below once-
    
    node <file> <commanda> <folder> <argument>
    node mycli  view "D:\\WEB_DEV\\2_java_script\\File_System_Organizer"  flat
    node mycli  view  "D:\\WEB_DEV\\2_java_script\\File_System_Organizer" tree
    node mycli  organize  "D:\\WEB_DEV\\2_java_script\\File_System_Organizer" <optional>
    node mycli help
    `);
}
module.exports = {
    help:helpFn
}