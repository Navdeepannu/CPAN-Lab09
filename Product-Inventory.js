// Object
let inventory = {}

// Add Product
function addProduct(productId, name, quantity) {
    if (inventory[productId]){
        // If the product exists, update the quantity only
        inventory[productId].quantity += quantity;
    } else {

        inventory[productId] = {
                name: name,
                quantity: quantity
            }
        }    
    }
        
    // Display
    function displayInventory() {
        // Dislay the inventory (table format)
        console.log("Current Iventory: ");
        console.log("ID \t Name \t Quantity");
        for (productId in inventory) {
            console.log(productId + '\t' + inventory[productId].name + '\t' + inventory[productId].quantity);
        }
    }

    // Find Product
    function findProduct(productId) {
        if(inventory[productId]) {
            console.log("Product Id :", productId);
            console.log("Product Name :", inventory[productId].name);
            console.log("Product Quantity :", inventory[productId].quantity);
        } else {
            console.log("Product not found");
        }
    }

// Function call
// Add products
addProduct('P1', 'Product-1', 10);
addProduct('P2', 'Product-2', 4);
addProduct('P3', 'Product-3', 2);
addProduct('P2', 'Product-2', 2); // Product Already exists     

// Display the inventory
displayInventory();
        
// Find product from the inventory
findProduct('P2');
findProduct('P4'); // Non-existent product