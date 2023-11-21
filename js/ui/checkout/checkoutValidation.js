export function formValidation() {
	const emailInput = document.querySelector("#email-input");
	const firstNameInput = document.querySelector("#first-name-input");
	const lastNameInput = document.querySelector("#last-name-input");
	const phoneInput = document.querySelector("#phone-input");
	const addressInput = document.querySelector("#address-input");
	const zipInput = document.querySelector("#zip-input");
	const cityInput = document.querySelector("#city-input");

	// Add dirty listeners
	function addDirtyListeners() {
		const form = document.querySelector(".checkout--shipping-form");
		let inputs = form.getElementsByTagName("input");
		for (let i = 0; i < inputs.length; i++) {
			let input = inputs[i];
			input.addEventListener("input", dirtyInput);
			input.addEventListener("blur", dirtyInput);
		}
	}

	// Add dirty class
	function dirtyInput(evt) {
		let element = evt.target;
		if (element.nodeName === "INPUT") {
			element.classList.add("dirty");
		}
	}

	// Key filtering
	class FormKeyFiler {
		handleEvent(evt) {
			let element = evt.srcElement;
			let key = evt.key;

			// Allow navigation keys
			if (
				key === "Backspace" ||
				key === "Delete" ||
				key === "ArrowLeft" ||
				key === "ArrowRight" ||
				key === "Tab" ||
				key === "ArrowUp" ||
				key === "ArrowDown" ||
				key === "End" ||
				key === "Home" ||
				key === "PageUp" ||
				key === "PageDown" ||
				key === "Shift"
			)
				return;

			// Allow modifiers
			if (!evt.ctrlKey && !evt.metaKey && !evt.altKey) {
				// Use data-allow to allow specific characters
				if (element.hasAttribute("data-allow")) {
					let allowregex = element.getAttribute("data-allow");
					let testexpr = new RegExp(allowregex, "g");
					if (testexpr.test(key)) return;

					evt.preventDefault();
				}

				// Use data-block to block specific characters
				if (element.hasAttribute("data-block")) {
					let blockregex = element.getAttribute("data-block");
					let testexpr = new RegExp(blockregex, "g");
					if (testexpr.test(key)) evt.preventDefault();
				}
			}
		}
	}

	// Display error
	function displayError(field, error) {
		field.innerHTML = `<p>${error}</p>`;
		field.classList.remove("display--none");
	}

	// Use key filtering
	const filter = new FormKeyFiler();
	emailInput.addEventListener("keydown", filter);
	firstNameInput.addEventListener("keydown", filter);
	lastNameInput.addEventListener("keydown", filter);
	phoneInput.addEventListener("keydown", filter);
	addressInput.addEventListener("keydown", filter);
	zipInput.addEventListener("keydown", filter);
	cityInput.addEventListener("keydown", filter);

	// Add dirty listeners
	addDirtyListeners();
}
