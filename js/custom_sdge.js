$(function() {

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

});

function createPrintDialog() {
	window.print();
}

function goBack() {
	window.history.back();
}