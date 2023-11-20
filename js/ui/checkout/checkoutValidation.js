export function formValidation() {
	const email = document.querySelector("#email");
	const errorEmail = document.querySelector("#email .validation");
	const firstName = document.querySelector("#first-name");
	const errorFirstName = document.querySelector("#first-name .validation");
	const lastName = document.querySelector("#last-name");
	const errorLastName = document.querySelector("#last-name .validation");
	const phone = document.querySelector("#phone");
	const errorPhone = document.querySelector("#phone .validation");
	const address = document.querySelector("#address");
	const errorAddress = document.querySelector("#address .validation");
	const zip = document.querySelector("#zip");
	const errorZip = document.querySelector("#zip .validation");
	const city = document.querySelector("#city");
	const errorCity = document.querySelector("#city .validation");

	// Display error
	function displayError(field, error) {
		field.innerHTML = `<p>${error}</p>`;
		field.classList.remove("display--none");
	}

	// Email validation
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

	email.addEventListener("blur", () => {
		if (email.value === "") {
			displayError(errorEmail, "Email is required");
		} else if (!emailRegex.test(email.value)) {
			displayError(errorEmail, "Email is not valid");
		} else {
			errorEmail.classList.add("display--none");
		}
	});

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
}
