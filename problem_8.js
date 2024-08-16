async function analyzeProductData() {
    const apiUrl = 'https://fakestoreapi.com/products';
    let products = [];
    let history = [];

    // Function to fetch product data
    async function fetchProductData() {
        try {
            const response = await fetch(apiUrl);
            products = await response.json();
            console.log("Fetched Products Data:");
            console.log(products.slice(0, 5)); // Display first 5 products
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    }

    // Function to filter products by category
    function filterByCategory(category) {
        const filteredProducts = products.filter(product => product.category === category);
        const timestamp = new Date().toISOString();
        history.push({ action: 'filter', category, timestamp, filteredProducts });
        console.log(`Filtered Products by category "${category}":`);
        console.log(filteredProducts);
    }

    // Function to find the product with the highest price
    function findHighestPricedProduct() {
        const highestPricedProduct = products.reduce((max, product) =>
            product.price > max.price ? product : max, products[0]);
        console.log("Product with the highest price:");
        console.log(highestPricedProduct);
    }

    // Function to calculate the average price of all products
    function calculateAveragePrice() {
        const total = products.reduce((sum, product) => sum + product.price, 0);
        const averagePrice = total / products.length;
        console.log("Average price of all products:");
        console.log(averagePrice.toFixed(2));
    }

    // Function to display interaction history
    function displayHistory() {
        console.log("Interaction History:");
        history.forEach(entry => {
            console.log(`Action: ${entry.action}, Category: ${entry.category || 'N/A'}, Timestamp: ${entry.timestamp}`);
            console.log(entry.filteredProducts);
        });
    }

    // Fetch the product data when the function is called
    await fetchProductData();

    // Example usage of the functions
    filterByCategory("electronics");
    filterByCategory("jewelery");
    findHighestPricedProduct();
    calculateAveragePrice();
    displayHistory();
}

// Call the function to execute the analysis
analyzeProductData();
