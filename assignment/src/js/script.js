// JS SCRIPT 
let navigationHelper = {
    clearCatalog: function(){
        var pathname = window.location.href;
        var cols = document.querySelectorAll(".col");     
        for (let i = 0; i < cols.length; i++){
            cols[i].style.display = "none";
        }  

        // if current page is contact, hide form
        if (pathname.match("contact")){
            var form = document.querySelector(".form");
            if (form.style.display != "none"){
                form.style.display = "none";
            }  
        } 
        if (pathname.match("about")){
            var ig = document.querySelectorAll('.insta');
            ig.style.display === "none";        
        }
    },
    populateCatalog: function(catalog){
        switch(catalog){
            case "fem":
                var fem = document.querySelectorAll('#fem');
                document.title = "K THRIFTS | Feminine";
                for (let i = 0; i < fem.length; i++){
                    fem[i].style.display = "block";
                }  
                break;
            case "masc":
                document.title = "K THRIFTS | Masculine";
                var masc = document.querySelectorAll('#masc');
                for (let i = 0; i < masc.length; i++){
                    masc[i].style.display = "block";
                }  
                break;
            case "access":
                document.title = "K THRIFTS | Accessories";
                var access = document.querySelectorAll('#access');
                for (let i = 0; i < access.length; i++){
                    access[i].style.display = "block";
                }  
                break;
            case "about":
                document.title = "K THRIFTS | About";
                var ig = document.querySelectorAll('.insta');
                for (let i = 0; i < ig.length; i++){
                    ig[i].style.display = 'block';
                }
        }
       
    }
}
function setupSelectionHandlers(){
    var styles_fem = document.querySelector('#styles_fem');
    var styles_masc = document.querySelector('#styles_masc');
    var styles_access = document.querySelector('#styles_access');
    var about = document.querySelector('#about');
    styles_fem.addEventListener('click', function(e){
        e.preventDefault;
        navigationHelper.clearCatalog();
        navigationHelper.populateCatalog("fem");

    });
    styles_masc.addEventListener('click', function(e){
        e.preventDefault;
        navigationHelper.clearCatalog();
        navigationHelper.populateCatalog("masc");
    });
    styles_access.addEventListener('click', function(e){
        e.preventDefault;
        navigationHelper.clearCatalog();
        navigationHelper.populateCatalog("access");
    });
    about.addEventListener('click', function(e){
        e.preventDefault;
        navigationHelper.clearCatalog();
        navigationHelper.populateCatalog("about");
    });
}



window.onload = setupSelectionHandlers; 

