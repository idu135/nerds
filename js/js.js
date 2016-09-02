		var write = document.querySelector(".contacts-btn");
		var popup = document.querySelector(".modal-form");
		var close = document.querySelector(".modal-form-close");
		var cancel = document.querySelector(".btn-cancel");
		var login = popup.querySelector("[name=name]");
		var form = document.querySelector("form");
		var email = popup.querySelector("[name=e-mail]");
		var text = popup.querySelector("[name=text]");
		var savedlogin = localStorage.getItem("login");

		write.addEventListener("click", function(event){
			event.preventDefault();
			popup.classList.add("modal-form-show");

			if (savedlogin) {
				login.value = savedlogin;
				email.focus();
			} else{
				login.focus();
			}
		});
		close.addEventListener("click", function(event){
			event.preventDefault();
			popup.classList.remove("modal-form-show");
		})

		cancel.addEventListener("click", function(event){
			event.preventDefault();
			popup.classList.remove("modal-form-show");
		})
		form.addEventListener("submit", function(event){
			if(!(login.value && email.value && text.value)){
			event.preventDefault();
			popup.classList.add("submit-error");
			} else {
				localStorage.setItem("login", login.value);
			}
		});
		window.addEventListener("keydown", function(event) {
			if (event.keyCode == 27) {
				if (popup.classList.contains("modal-form-show")) {
					popup.classList.remove("modal-form-show");
				}
			}
		});
