export function formValidation() {
	const email = document.querySelector("#email");
	const emailInput = document.querySelector("#email-input");
	const errorEmail = document.querySelector("#email .validation");
	const firstName = document.querySelector("#first-name");
	const firstNameInput = document.querySelector("#first-name-input");
	const errorFirstName = document.querySelector("#first-name .validation");
	const lastName = document.querySelector("#last-name");
	const lastNameInput = document.querySelector("#last-name-input");
	const errorLastName = document.querySelector("#last-name .validation");
	const phone = document.querySelector("#phone");
	const phoneInput = document.querySelector("#phone-input");
	const errorPhone = document.querySelector("#phone .validation");
	const address = document.querySelector("#address");
	const addressInput = document.querySelector("#address-input");
	const errorAddress = document.querySelector("#address .validation");
	const zip = document.querySelector("#zip");
	const zipInput = document.querySelector("#zip-input");
	const errorZip = document.querySelector("#zip .validation");
	const city = document.querySelector("#city");
	const cityInput = document.querySelector("#city-input");
	const errorCity = document.querySelector("#city .validation");

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

	// // Prevent spaces for input fields
	// function blockspace(evt) {
	// 	if (evt.key === " ") {
	// 		evt.preventDefault();
	// 	}
	// }

	// // Prevent letters for input fields
	// function blockletters(evt) {
	// 	let key = evt.key;
	// 	if (
	// 		(key >= "0" && key <= "9") ||
	// 		key === "Backspace" ||
	// 		key === "Delete" ||
	// 		key === "ArrowLeft" ||
	// 		key === "ArrowRight" ||
	// 		evt.shiftKey
	// 	) {
	// 		return;
	// 	}
	// 	evt.preventDefault();
	// }

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

	// Email validation
	// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// email.addEventListener("change", () => {
	// 	if (email.value === "") {
	// 		displayError(errorEmail, "Email is required");
	// 		console.log("email is required");
	// 	} else if (!emailRegex.test(email.value)) {
	// 		displayError(errorEmail, "Email is not valid");
	// 		console.log("email is not valid");
	// 	} else {
	// 		errorEmail.classList.add("display--none");
	// 	}
	// });

	// displayError(errorEmail, "Email is required");

	// // First name validation
	// displayError(errorFirstName, "First name is required");

	// // Last name validation
	// displayError(errorLastName, "Last name is required");

	// // Phone validation
	// displayError(errorPhone, "Phone is required");

	// // Address validation
	// displayError(errorAddress, "Address is required");

	// // Zip validation
	// displayError(errorZip, "Zip is required");

	// // City validation
	// displayError(errorCity, "City is required");

	// Use key filtering
	const filter = new FormKeyFiler();
	emailInput.addEventListener("keydown", filter);
	firstNameInput.addEventListener("keydown", filter);
	lastNameInput.addEventListener("keydown", filter);
	phoneInput.addEventListener("keydown", filter);
	addressInput.addEventListener("keydown", filter);
	zipInput.addEventListener("keydown", filter);
	cityInput.addEventListener("keydown", filter);

	// Block space inputs
	// email.addEventListener("keydown", blockspace);
	// phone.addEventListener("keydown", blockspace);
	// zip.addEventListener("keydown", blockspace);

	// Block letters inputs
	// phone.addEventListener("keydown", blockletters);

	// Add dirty listeners
	addDirtyListeners();
}
