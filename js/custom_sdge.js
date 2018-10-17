$(function() {

	//bojanje redova kod prikaza bugova
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

	//botun za printanje kod liste kada se hoce printat
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

	//back botun da se vrati sa liste di se printa
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
	
// Kada se rijesi domena mantisa, same origin policy blokira ovo ako je drugacija domena od parenta
//    $('label[for="custom_field_29"]').each(function() {
//    	
//    	var nesto = parent.document.getElementById("imeIPrezimeKorisnika");
//    
//	});
    
    var currentUrlIframe = window.location.href;

    //true ako je trenutni page bug_report_page.php
    if (currentUrlIframe.indexOf('bug_report_page.php') !== -1) {

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

});

function createPrintDialog() {
	window.print();
}

function goBack() {
	window.history.back();
}