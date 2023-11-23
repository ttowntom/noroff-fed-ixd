export function createProductCard(products, category, product) {
	const card = document.createElement("article");

	const cardContent = document.createElement("a");
	cardContent.classList.add("product--card", "flex", "flex--column");
	cardContent.href = `/products/productDetails/?gender=${category}&id=${products[product].id}`;

	const cardImg = document.createElement("img");
	cardImg.src = products[product].image;
	cardImg.alt = products[product].title;

	const cardText = document.createElement("div");
	cardText.classList.add(
		"center",
		"flex",
		"flex--column",
		"flex--space-around"
	);

	const cardTitle = document.createElement("h3");
	cardTitle.innerText = products[product].title
		.replace("Rainy Days ", "")
		.replace(" Jacket", "");

	let price = document.createElement("div");
	price.classList.add("product--card-price-container");
	if (products[product].discountedPrice === products[product].price) {
		let basePrice = document.createElement("p");
		basePrice.classList.add(
			"product--card-uppercase",
			"product--card-single-line"
		);
		basePrice.innerText = "$" + products[product].price;
		price.appendChild(basePrice);
	} else if (products[product].discountedPrice < products[product].price) {
		let discount = document.createElement("p");
		discount.classList.add("product--card-uppercase", "product--card-on-sale");
		discount.innerText = "$" + products[product].discountedPrice;
		price.appendChild(discount);

		let basePrice = document.createElement("p");
		basePrice.innerText = "$" + products[product].price;
		basePrice.classList.add("line-through");
		price.appendChild(basePrice);
	}

	let bottomSection = document.createElement("div");
	bottomSection.classList.add("width--100");

	let hr = document.createElement("div");
	hr.classList.add("hr");

	let details = document.createElement("p");
	details.classList.add("product--card-details");
	details.classList.add("product--card-uppercase");
	details.innerText = "See details";

	bottomSection.appendChild(hr);
	bottomSection.appendChild(details);

	cardText.appendChild(cardTitle);
	cardText.appendChild(price);
	cardText.appendChild(bottomSection);

	cardContent.appendChild(cardImg);
	cardContent.appendChild(cardText);

	card.appendChild(cardContent);
	return card;
}
