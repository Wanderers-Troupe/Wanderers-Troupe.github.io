function replace() {
document.getElementById("genshin").value = document.getElementById("gw2").value

/*  Specific early fixes.  */   

        /* Convert all uppercase letters to lowercase letters. */
/*         .toLowerCase() */

        /* Reverse (/ because people are stupid. */
        .replace(/\(\//gm, "/(")
    
        /* Reverse /] because people are stupid. */
        .replace(/\/\]/gm, "]/")
        
        /* Adding a dot between bracketed notes that are too close together. I think. */
        .replace(/([\d\)\]])([\d])/gm, "$1‧$2")
        
        /* Running it twice just to cover outliers. */ 
        .replace(/([\d\)\]])([\d])/gm, "$1‧$2")

        /* Adding a dot between bracketed notes that are too close together. I think. */
        .replace(/([\d])([\d\(\[])/gm, "$1‧$2")
        
        /* Running it twice just to cover outliers. */  
        .replace(/([\d])([\d\(\[])/gm, "$1‧$2")

        /* Adding a dot between )[ and ](. They are too close together. No need to run this one twice. */
        .replace(/([\]\)])([\[\(])/gm, "$1‧$2")

        /*  Octave bracket conversions.  */  
        .replace(/\(/gm, ")")
        .replace(/\[/gm, "(")
        .replace(/\]/gm, "(")

        /* Letters to numbers. */

        .replace(/Z/gm, "(1(")
        .replace(/X/gm, "(2(")
        .replace(/C/gm, "(3(")
        .replace(/V/gm, "(4(")
        .replace(/B/gm, "(5(")
        .replace(/N/gm, "(6(")
        .replace(/M/gm, "(7(")        

        .replace(/Q/gm, ")1)")
        .replace(/W/gm, ")2)")
        .replace(/E/gm, ")3)")
        .replace(/R/gm, ")4)")
        .replace(/T/gm, ")5)")
        .replace(/Y/gm, ")6)")
        .replace(/U/gm, ")7)")    

        .replace(/A/gm, "1")
        .replace(/S/gm, "2")
        .replace(/D/gm, "3")
        .replace(/F/gm, "4")
        .replace(/G/gm, "5")
        .replace(/H/gm, "6")
        .replace(/J/gm, "7")   

        /*  Numbers to PS4 symbols.  */  
        
/*         .replace(/1(?=[^\[]*\])/gm, "←")
        .replace(/2(?=[^\[]*\])/gm, "↑")
        .replace(/3(?=[^\[]*\])/gm, "→")
        .replace(/4(?=[^\[]*\])/gm, "↓")
        .replace(/5(?=[^\[]*\])/gm, "▢")
        .replace(/6(?=[^\[]*\])/gm, "△")
        .replace(/7(?=[^\[]*\])/gm, "O") */

        /* A lot of bullshit for replacing Cs of different octaves. */

         .replace(/(\(.*?)\(/gm, "$1CLOSINGBRACKET")

/*          .replace(/(\(.*?)(8)(?=.*?(CLOSINGBRACKET))/gm, "$1Ö$2Ö") 
         .replace(/Ö8Ö/gm, "ÖÖÖ")  */

/*          .replace(/(8)([^\(]*)(CLOSINGBRACKET)/gm, "Ö$1Ö$2$3") 
         .replace(/Ö8Ö/gm, "ÖÖÖ") 
 */
/*          .replace(/ÖÖÖ/gm, "(←(") */

/*           .replace(/CLOSINGBRACKET/gm, "(")  */
/*          .replace(/8/gm, ")←)") */


           .replace(/\(\(/gm, "")           
        
/*         .replace(/1(?=[^\(]*\))/gm, "←")
        .replace(/2(?=[^\(]*\))/gm, "↑")
        .replace(/3(?=[^\(]*\))/gm, "→")
        .replace(/4(?=[^\(]*\))/gm, "↓")      
        .replace(/5(?=[^\(]*\))/gm, "▢")
        .replace(/6(?=[^\(]*\))/gm, "△")
        .replace(/7(?=[^\(]*\))/gm, "O")            
        .replace(/8(?=[^\(]*\))/gm, "?")      */
        
         .replace(/1/gm, "←")       
        .replace(/2/gm, "↑") 
        .replace(/3/gm, "→")  
        .replace(/4/gm, "↓")  
        .replace(/5/gm, "▢")       
        .replace(/6/gm, "△") 
        .replace(/7/gm, "O")   
/*         .replace(/8/gm, ")←)")   */         
        
        /*  Specific fixes.  */
        /*  Removes all octave brackets.  */
     /*    .replace(/[\[\]\(\)\{\}]/gm, "")   */
        
        /*  Removes all chord slashes.  */
        .replace(/\//gm, "")

        /*  Removes empty [] brackets.  */
/*         .replace(/\[\]/gm, "") */

        /*  Removes empty () brackets.  */
/*         .replace(/\(\)/gm, "") */
        
        /* Turns for example [←→▢△] into ←[→▢△]. */
/*         .replace(/\[A/gm, "←[") */

        /* Turns for example [↓△←]△ into [↓△]←△. */
/*         .replace(/A\]/gm, "]←") */
        
        /* Removes ")(" */
/*         .replace(/[\)]([^\S\r\n]{0,1}[-\.,‧━—_~]{0,1}[^\S\r\n]{0,1})[\(]/gm, "$1") */
        
        /* Removes "][" */
/*         .replace(/[\]]([^\S\r\n]{0,1}[-\.,‧━—_~]{0,1}[^\S\r\n]{0,1})[\[]/gm, "$1") */

        /*  Removes (     (  */
            .replace(/\(([ \t]+)\(/gm, "$1")

        /*  Removes )     )  */
            .replace(/\)([ \t]+)\)/gm, "$1")

        /*  Turns )‧) into ‧  */
        .replace(/\)([^A-Z\d\[\]\(\)\/←↑→↓▢△O]+)\)/gm, "$1")

        /*  Turns (‧( into ‧  */
        .replace(/\(‧\(/gm, "‧")
        .replace(/\)‧\)/gm, "‧")        

        /*  Turns single spaces between symbols into double spaces  */
            .replace(/([\)\]←↑→↓▢△O])([ \t]+)([\)\]←↑→↓▢△O])/gm, "$1$2  $3")  

        /* Turns ]] into ]. */
/*         .replace(/\]\]/gm, "]")         */

        /* Turns [[ into [. */
/*         .replace(/\[\[/gm, "[")     */

        /* Turns )) into ). */
/*         .replace(/\)\)/gm, ")")    */     

        /* Turns (( into (. */
/*         .replace(/\(\(/gm, "(")  */   

        /* Spaces out dots and small lines a bit more. */
         .replace(/([‧-])/gm, " $1 ")     

;
    
}








function gw2Storage() {
    // If there's anything in the storage
    if (localStorage.getItem('text_in_gw2') !== null) {
 
    // ...then show it
    document.getElementById('gw2').value = localStorage.getItem('text_in_gw2');
    }

    // listen to key presses
    document.addEventListener('input', function(e) {

    // once a key is pressed, save whatever's in our box to localstorage
    localStorage.setItem('text_in_gw2', document.getElementById('gw2').value);
    });
}



function genshinStorage() {
    // If there's anything in the storage
    if (localStorage.getItem('text_in_genshin') !== null) {

    // ...then show it
    document.getElementById('genshin').value = localStorage.getItem('text_in_genshin');
    }

    // listen to key presses
    document.addEventListener('input', function(e) {

    // once a key is pressed, save whatever's in our box to localstorage
    localStorage.setItem('text_in_genshin', document.getElementById('genshin').value);
    });
}
