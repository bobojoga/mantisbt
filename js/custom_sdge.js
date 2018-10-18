$(function() {

	// bojanje redova kod prikaza bugova
	$(".fa-status-box").each(
		function() {
			var $this = $(this);
			var col = $this.css('color');
			var a = col.slice(4).split(',');
			var newAlpha = 0.3;
			var bgCol = 'rgba(' + a[0] + ',' + parseInt(a[1]) + ','
					+ parseInt(a[2]) + ',' + newAlpha + ')';
			$this.closest("tr").css("background-color", bgCol);
		});

	// botun za printanje kod liste kada se hoce printat
	$(".fa-file-word-o").each(function() {
		var $this = $(this);
		var childNode = $this[0];

		if (childNode.title == "Word 2000") {
			var printLink = document.createElement("a");
			printLink.href = "#";

			printLink.addEventListener("click", function(e) {
				createPrintDialog();
			}, false);

			iconElement = document.createElement("i");
			iconElement.classList.add("fa");
			iconElement.classList.add("fa-print");
			iconElement.title = "Ispis stranice";

			printLink.appendChild(iconElement);
			printLink.innerHTML += '&nbsp;';

			childNode.parentNode.before(printLink);
		}
	});

	// back botun da se vrati sa liste di se printa
	$(".bigger-120").each(function() {
		var $this = $(this);
		var childNode = $this[0];

		var backDiv = document.createElement("div");
		backDiv.classList.add("btn-group");

		var backA = document.createElement("a");
		backA.href = "#";
		backDiv.classList.add("btn");
		backDiv.classList.add("btn-primary");
		backDiv.classList.add("btn-xs");
		backDiv.classList.add("btn-white");
		backDiv.classList.add("btn-round");

		backA.addEventListener("click", function(e) {
			goBack();
		}, false);

		backA.innerHTML += "Povratak";
		backDiv.appendChild(backA);

		childNode.before(backDiv);
	});
	
    var currentUrlIframe = window.location.href;

    // true ako je trenutni page bug_report_page.php ili view.php - dodavanje povratak botuna
    if (currentUrlIframe.indexOf('bug_report_page.php') !== -1 || currentUrlIframe.indexOf('view.php') !== -1) {
    	$("#breadcrumbs").each(function() {
                var $this = $(this);
                var childNode = $this[0];

                var backDiv = document.createElement("div");
                backDiv.classList.add("btn-group");

                var backA = document.createElement("a");
                backA.href = "#";
                backDiv.classList.add("btn");
                backDiv.classList.add("btn-primary");
                backDiv.classList.add("btn-xs");
                backDiv.classList.add("btn-white");
                backDiv.classList.add("btn-round");

                backA.addEventListener("click", function(e) {
                        goBack();
                }, false);

                backA.innerHTML += "Povratak";
                backDiv.appendChild(backA);

                childNode.appendChild(backDiv);
                
        });
    }
    
    // dodaj naziv ureda i ime i prezime korisnika ako je bug_report_page
    if (currentUrlIframe.indexOf('bug_report_page.php') !== -1 )
	    $('#custom_field_29').each(function() {
	        var imeIPrezimeKorisnikaElement = parent.document.getElementById("imeIPrezimeKorisnika");
	        var imeIPrezime = imeIPrezimeKorisnikaElement.innerText;
	        var trimmedImeIPrezime = imeIPrezime.substring(2, imeIPrezime.length);
	        var $this = $(this);
	        var childNode = $this[0];
	        childNode.value = trimmedImeIPrezime;
	    });

		$('#custom_field_28').each(function() {
	        var nazivUredaElement = parent.document.getElementById("nazivUreda");
	        var trimmedNazivUreda = nazivUredaElement.innerText;
	        var $this = $(this);
	        var childNode = $this[0];
	        childNode.value = trimmedNazivUreda;
		});
	}

});

function createPrintDialog() {
	window.print();
}

function goBack() {
	window.history.back();
}