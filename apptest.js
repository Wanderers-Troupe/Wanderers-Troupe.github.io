function replace() {
document.getElementById("genshin").value = document.getElementById("gw2").value

/*  Specific early fixes.  */   
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
        .replace(/[\[\]\(\)]/gm, "")  
        
        /*  Removes all chord slashes.  */
        .replace(/\//gm, "")
        
        /* Turns for example [ADGH] into A[DGH]. */
        .replace(/\[A/gm, "A[")

        /* Turns for example [VNA]H into [VN]AH. */
        .replace(/A\]/gm, "]A")
        
        /* Removes ")(" */
        .replace(/[\)]([^\S\r\n]{0,1}[-━—_~]{0,1}[^\S\r\n]{0,1})[\(]/gm, "$1")
        
        /* Removes "][" */
        .replace(/[\]]([^\S\r\n]{0,1}[-━—_~]{0,1}[^\S\r\n]{0,1})[\[]/gm, "$1");

    
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

$('.editor').highlightWithinTextarea({
    highlight: [
        {
            highlight: 'strawberry',
            className: 'red'
        },
        {
            highlight: 'blueberry',
            className: 'blue'
        },
        {
            highlight: /ba(na)*/gi,
            className: 'yellow'
        }
    ]
});
	