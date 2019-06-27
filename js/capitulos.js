window.onload = function() {
    var capitulo = document.querySelectorAll("input[type='checkbox']");
    for (var n = 0; n < capitulo.length; n++) {
        var caja = capitulo[n];
        if (caja.hasAttribute("store")) {
            cargarcaja(caja);
        }
    }
    
    function cargarcaja(caja) {
        var IDcheckbox = caja.getAttribute("store");
        var valorviejo = localStorage.getItem(IDcheckbox); 
        console.log(valorviejo); 
        caja.checked = valorviejo === "true" ? true : false; 
        
		$(caja).change(function() {
   		localStorage.setItem(IDcheckbox, this.checked);  
		});
    }
};