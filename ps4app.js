function replace() {
        document.getElementById("genshin").value = document.getElementById("gw2").value
        
        /*  Specific early fixes.  */   
        
                /* Convert all uppercase letters to lowercase letters. */
/*                 .toLowerCase() */
        
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
        
                /*  Numbers to letters.  */  
                .replace(/1(?=[^\[]*\])/gm, "Z")
                .replace(/2(?=[^\[]*\])/gm, "X")
                .replace(/3(?=[^\[]*\])/gm, "C")
                .replace(/4(?=[^\[]*\])/gm, "V")
                .replace(/5(?=[^\[]*\])/gm, "B")
                .replace(/6(?=[^\[]*\])/gm, "N")
                .replace(/7(?=[^\[]*\])/gm, "M")
                .replace(/8(?=[^\[]*\])/gm, "A")
                
                .replace(/1(?=[^\(]*\))/gm, "Q")
                .replace(/2(?=[^\(]*\))/gm, "W")
                .replace(/3(?=[^\(]*\))/gm, "E")
                .replace(/4(?=[^\(]*\))/gm, "R")      
                .replace(/5(?=[^\(]*\))/gm, "T")
                .replace(/6(?=[^\(]*\))/gm, "Y")
                .replace(/7(?=[^\(]*\))/gm, "U")            
                .replace(/8(?=[^\(]*\))/gm, "?")    
                
                .replace(/1/gm, "A")       
                .replace(/2/gm, "S") 
                .replace(/3/gm, "D")  
                .replace(/4/gm, "F")  
                .replace(/5/gm, "G")       
                .replace(/6/gm, "H") 
                .replace(/7/gm, "J")  
                .replace(/8/gm, "Q")  
                
                
                /*  Specific fixes.  */
                /*  Removes all octave brackets.  */
                .replace(/[\[\]\(\)\{\}]/gm, "")  

                /* Now let's make those letters into PS4 symbols! */

                .replace(/Z/gm, "(←(")       
                .replace(/X/gm, "(↑(") 
                .replace(/C/gm, "(→(")  
                .replace(/V/gm, "(↓(")  
                .replace(/B/gm, "(▢(")       
                .replace(/N/gm, "(△(") 
                .replace(/M/gm, "(O(")              
                
                .replace(/A/gm, "←")       
                .replace(/S/gm, "↑") 
                .replace(/D/gm, "→")  
                .replace(/F/gm, "↓")  
                .replace(/G/gm, "▢")       
                .replace(/H/gm, "△") 
                .replace(/J/gm, "O")        

                .replace(/Q/gm, ")←)")       
                .replace(/W/gm, ")↑)") 
                .replace(/E/gm, ")→)")  
                .replace(/R/gm, ")↓)")  
                .replace(/T/gm, ")▢)")       
                .replace(/Y/gm, ")△)") 
                .replace(/U/gm, ")O)")   
                
                /*  Removes all chord slashes.  */
                .replace(/\//gm, "")

                /* Removes )) and  (( and ) ) and ( ( and )   ) and (   ( etc */
                .replace(/\)([^\S\r\n]*)\)/gm, "$1")
                .replace(/\(([^\S\r\n]*)\(/gm, "$1")

                /* Merges unnecessary bracket and dot combinations. */
                .replace(/\)‧\)/gm, "‧")
                .replace(/\(‧\(/gm, "‧")

                /* Spaces out non-chord symbols from one another by one space more. */
                .replace(/(\S)([^\S\r\n]+)(\S)/gm, "$1 $2 $3")

                /* Spaces out the dots by one space. */
                 .replace(/‧/gm, " ‧ ") 

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
        