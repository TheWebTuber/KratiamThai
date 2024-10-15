const menuItems = [
    //appetizers
    { section: "APPETIZERS", name: "1. Tahoe Tod", price: "€ 7.00", details: "Fried tofu." },
    { section: "APPETIZERS", name: "2. Sate Kai", price: "€ 8.75", details: "Chicken satay Thai style." },
    { section: "APPETIZERS", name: "3. Tod Man Pla (3 pieces)", price: "€ 9.75", details: "Thai fish cakes." },
    { section: "APPETIZERS", name: "4. Poh Pia Tod (9 pieces)", price: "€ 7.00", details: "Fried mini vegetarian spring rolls." },
    { section: "APPETIZERS", name: "5. Kieuw Tod (4 pieces)", price: "€ 8.95", details: "Fried Thai dumplings with chicken and shrimp." },
    { section: "APPETIZERS", name: "6. Kieuw Kung Tod (3 pieces)", price: "€ 9.50", details: "Fried shrimp in dough." },
    { section: "APPETIZERS", name: "7. Kratiam Fancy", price: "€ 13.50", details: "Combination of various appetizers." },
    
    //soup
    { section: "SOUPS", name: "8. Tom Kha Kai", price: "€ 9.00", details: "Spicy chicken soup with coconut milk." },
    { section: "SOUPS", name: "9. Tom Kha Kung", price: "€ 9.95", details: "Spicy shrimp soup with coconut milk." },
    { section: "SOUPS", name: "10. Tom Yam Kai", price: "€ 8.50", details: "Spicy lime-flavored soup with chicken." },
    { section: "SOUPS", name: "11. Tom Yam Kung", price: "€ 9.25", details: "Spicy lime-flavored soup with shrimp." },
    { section: "SOUPS", name: "12. Tom Yam Talay", price: "€ 11.50", details: "Spicy lime-flavored seafood soup." },
    { section: "SOUPS", name: "13. Wan Tan", price: "€ 9.00", details: "Soup with vegetables and chicken meatballs wrapped in dough." },
    { section: "SOUPS", name: "14. Tom Jee", price: "Check Description", details: "Vegitarian soup with lime (Tom Yam € 7.00), Vegitarian soup with coconutmilk (Tom Kha € 8.00), Vegitarian soup with greens (Tom Yam € 7.00)" },
    
    //salad
    { section: "SALADS", name: "15. Som Tam 🌶️", price: "€ 15.50", details: "Spicy green papaya salad." },
    { section: "SALADS", name: "16. Tam Tang 🌶️", price: "€ 13.00", details: "Spicy cucumber salad with tomato and peanuts." },
    { section: "SALADS", name: "17. Yam Neua Yaang 🌶️🌶️", price: "€ 20.50", details: "Grilled beef salad with tomato and cucumber." },
    { section: "SALADS", name: "18. Lap Kai 🌶️", price: "€ 15.50", details: "Spicy minced chicken salad with mint and red onion." },
    { section: "SALADS", name: "19. Kratiam Yam Talay 🌶️🌶️", price: "€ 19.00", details: "Spicy seafood salad with celery, tomato, and onion." },
    
    // main courses choice
    { section: "MAIN COURSES (CHOICE) *see prices in description*", name: "20. Prieuw Waan", price: "€ 0.00", details: "Vega of vlees: Choose between Tofu (Vegetarian) - € 17.00, Chicken - € 18.50, Squid - € 18.50, Beef - € 22.00, Fish - € 19.00, Shrimp - € 20.00, Duck - € 23.00, Vegetables - € 17.00, Mix Seafood - € 25.75. Stir-fry with sweet and sour sauce, pineapple, tomato, cucumber, and peppers." },
    { section: "MAIN COURSES (CHOICE) *see prices in description*", name: "21. Med Ma Muang", price: "€ 0.00", details: "Vega of vlees: Choose between Tofu (Vegetarian) - € 17.00, Chicken - € 18.50, Squid - € 18.50, Beef - € 22.00, Fish - € 19.00, Shrimp - € 20.00, Duck - € 23.00, Vegetables - € 17.00, Mix Seafood - € 25.75. Stir-fry with cashew nuts, snow peas, onion, and peppers." },
    { section: "MAIN COURSES (CHOICE) *see prices in description*", name: "22. Kra Prouw 🌶️🌶️", price: "€ 0.00", details: "Vega of vlees: Choose between Tofu (Vegetarian) - € 17.00, Chicken - € 18.50, Squid - € 18.50, Beef - € 22.00, Fish - € 19.00, Shrimp - € 20.00, Duck - € 23.00, Vegetables - € 17.00, Mix Seafood - € 25.75. Stir-fry with Thai basil and sauce, long beans, onion, and chili." },
    { section: "MAIN COURSES (CHOICE) *see prices in description*", name: "23. Keang Kiew Waan 🌶️🌶️🌶️", price: "€ 0.00", details: "Vega of vlees: Choose between Tofu (Vegetarian) - € 17.00, Chicken - € 18.50, Squid - € 18.50, Beef - € 22.00, Fish - € 19.00, Shrimp - € 20.00, Duck - € 23.00, Vegetables - € 17.00, Mix Seafood - € 25.75. Green curry with coconut milk, Thai eggplant, bamboo shoots, and sweet basil." },
    { section: "MAIN COURSES (CHOICE) *see prices in description*", name: "24. Panaeng", price: "€ 0.00", details: "Vega of vlees: Choose between Tofu (Vegetarian) - € 17.00, Chicken - € 18.50, Squid - € 18.50, Beef - € 22.00, Fish - € 19.00, Shrimp - € 20.00, Duck - € 23.00, Vegetables - € 17.00, Mix Seafood - € 25.75. Panaeng curry with coconut milk, Thai eggplant, and broccoli." },
    { section: "MAIN COURSES (CHOICE) *see prices in description*", name: "25. Nam Man Hoi", price: "€ 0.00", details: "Vega of vlees: Choose between Tofu (Vegetarian) - € 17.00, Chicken - € 18.50, Squid - € 18.50, Beef - € 22.00, Fish - € 19.00, Shrimp - € 20.00, Duck - € 23.00, Vegetables - € 17.00, Mix Seafood - € 25.75. Stir-fry with oyster sauce, broccoli, snow peas, and mushrooms." },
    { section: "MAIN COURSES (CHOICE) *see prices in description*", name: "26. Prik Thai Dam 🌶️", price: "€ 0.00", details: "Vega of vlees: Choose between Tofu (Vegetarian) - € 17.00, Chicken - € 18.50, Squid - € 18.50, Beef - € 22.00, Fish - € 19.00, Shrimp - € 20.00, Duck - € 23.00, Vegetables - € 17.00, Mix Seafood - € 25.75. Stir-fry with garlic and black pepper sauce, bell peppers, onions, and mushrooms." },
    { section: "MAIN COURSES (CHOICE) *see prices in description*", name: "27. Massaman", price: "€ 0.00", details: "Vega of vlees: Choose between Tofu (Vegetarian) - € 17.00, Chicken - € 18.50, Squid - € 18.50, Beef - € 22.00, Fish - € 19.00, Shrimp - € 20.00, Duck - € 23.00, Vegetables - € 17.00, Mix Seafood - € 25.75. Massaman curry with coconut milk, potato, onions, and cherry tomatoes." },
    { section: "MAIN COURSES (CHOICE) *see prices in description*", name: "28. Keang Phed 🌶️Mild", price: "€ 0.00", details: "Vega of vlees: Choose between Tofu (Vegetarian) - € 17.00, Chicken - € 18.50, Squid - € 18.50, Beef - € 22.00, Fish - € 19.00, Shrimp - € 20.00, Duck - € 23.00, Vegetables - € 17.00, Mix Seafood - € 25.75. Red curry with coconut milk, Thai eggplant, long beans, bamboo shoots, sweet basil." },
    { section: "MAIN COURSES", name: "29. Neua Naam Tok 🌶️🌶️ Pittig", price: "€ 23.00", details: "Spicy beef salad in northeastern Thai style with Mexican coriander." },
    { section: "MAIN COURSES (CHOICE) *see prices in description*", name: "31. Pad Phed", price: "€ 0.00", details: "Vega of vlees: Choose between Tofu (Vegetarian) - € 17.00, Chicken - € 18.50, Squid - € 18.50, Beef - € 22.00, Fish - € 19.00, Shrimp - € 20.00, Duck - € 23.00, Vegetables - € 17.00, Mix Seafood - € 25.75. Stir-fry with red curry paste, Thai eggplant, yardlong beans, and bamboo shoots." },
    { section: "MAIN COURSES (CHOICE) *see prices in description*", name: "33. Sam Rod 🌶️ Mild", price: "€ 0.00", details: "Vega of vlees: Choose between Tofu (Vegetarian) - € 17.00, Chicken - € 18.50, Squid - € 18.50, Beef - € 22.00, Fish - € 19.00, Shrimp - € 20.00, Duck - € 23.00, Vegetables - € 17.00, Mix Seafood - € 25.75. Stir-fry with sweet and sour chili sauce, onion, baby corn, snow peas, and sweet basil." },
    { section: "MAIN COURSES (CHOICE) *see prices in description*", name: "34. Prik Ging", price: "€ 0.00", details: "Vega of vlees: Choose between Tofu (Vegetarian) - € 17.00, Chicken - € 18.50, Squid - € 18.50, Beef - € 22.00, Fish - € 19.00, Shrimp - € 20.00, Duck - € 23.00, Vegetables - € 17.00, Mix Seafood - € 25.75. Stir-fry with chili pepper sauce, yardlong beans, kaffir lime leaves, and sweet basil." },
    { section: "MAIN COURSES", name: "44. Poh Tek", price: "€ 21.95", details: "Stir-fry with seafood in red curry sauce, Thai eggplant, yardlong beans, and red pepper." },
    { section: "MAIN COURSES", name: "47. Keang Phed Ped Yaang 🌶️ Mild", price: "€ 23.00", details: "Grilled duck breast in red curry sauce with cherry tomatoes, pineapple, lychee, and grapes." },

    // FRIED RICE
    { section: "FRIED RICE", name: "60. Kao Pad Kai (Chicken) Halal", price: "€ 18.50", details: "Thai fried rice with broccoli, cabbage, and egg, chicken." },
    { section: "FRIED RICE", name: "61. Kao Pad Kung (Shrimps) Halal", price: "€ 20.00", details: "Thai fried rice with broccoli, cabbage, and egg, shrimps." },
    { section: "FRIED RICE", name: "62. Kao Pad Jee (Tofu)", price: "€ 17.00", details: "Thai fried rice with broccoli, cabbage, and egg, tofu (vegetarian)." },
    { section: "FRIED RICE", name: "59. Kao Pad Nuea (Beef)", price: "€ 22.00", details: "Thai fried rice with broccoli, cabbage, and egg, beef." },

    // FRIED NOODLES
    { section: "FRIED NOODLES", name: "63. Pad Thai Kai (Chicken)", price: "€ 19.00", details: "Thai stir-fried noodles with chicken." },
    { section: "FRIED NOODLES", name: "64. Pad Thai Kung (Shrimps)", price: "€ 20.75", details: "Thai stir-fried noodles with shrimps." },
    { section: "FRIED NOODLES", name: "65. Pad Thai Jee (Tofu)", price: "€ 17.00", details: "Thai stir-fried noodles with tofu (vegetarian)." },
    { section: "FRIED NOODLES", name: "69. Pad Thai Neua (Beef)", price: "€ 23.00", details: "Thai stir-fried noodles with beef." },

        // Extra
        { section: "EXTRA", name: "Extra Tofu (Vegetarian)", price: "€ 1.50", details: "" },
        { section: "EXTRA", name: "Extra Chicken", price: "€ 3.50", details: "" },
        { section: "EXTRA", name: "Extra Squid", price: "€ 3.50", details: "" },
        { section: "EXTRA", name: "Extra Beef", price: "€ 6.00", details: "" }, 
        { section: "EXTRA", name: "Extra Fish", price: "€ 5.00", details: "" },
        { section: "EXTRA", name: "Extra Shrimp", price: "€ 5.50", details: "" },
        { section: "EXTRA", name: "Extra Duck", price: "€ 6.00", details: "" },
        { section: "EXTRA", name: "Extra Vegetables", price: "€ 3.00", details: "" },
        { section: "EXTRA", name: "Extra Cashew Nuts", price: "€ 2.85", details: "" },

    // SIDE DISHES
    { section: "SIDE DISHES", name: "67. Kao Pad Ei", price: "€ 5.50", details: "Fried rice with vegetables and egg." },
    { section: "SIDE DISHES", name: "Rice", price: "€ 3.00", details: "Steamed rice." },
    { section: "SIDE DISHES", name: "Vegetables", price: "€ 3.00", details: "Steamed vegetables (Halal)." },
    { section: "SIDE DISHES", name: "Cashew Nuts", price: "€ 2.85", details: "Cashew nuts." },
    { section: "SIDE DISHES", name: "Prik Nam Pla", price: "€ 1.00", details: "Fish sauce with red pepper (spicy)." },
    { section: "SIDE DISHES", name: "Sate Sauce", price: "€ 3.20", details: "Peanut sauce (vegetarian) 250cc." },
    { section: "SIDE DISHES", name: "Khai Jeiw / Thai Omelette", price: "€ 12.00", details: "Thai omelette with egg." },
    { section: "SIDE DISHES", name: "Khai Daow", price: "€ 5.50", details: "Two fried eggs." },
    { section: "SIDE DISHES", name: "Rice Noodles with Garlic Oil", price: "€ 3.50", details: "Rice noodles with garlic oil (vegan, gluten-free, no vegetables or egg)." },

    // DESSERT
    { section: "DESSERT", name: "Mango Sticky Rice", price: "€ 10.00", details: "Sticky rice steamed with coconut milk and served with fresh mango (Vegetarian, Vegan, Halal)." },
    { section: "DESSERT", name: "Thai Affogato", price: "€ 5.95", details: "Black Thai tea with vanilla ice cream." },
    { section: "DESSERT", name: "Vanilla Ice Cream", price: "€ 3.80", details: "Two scoops of vanilla ice cream (contains egg and milk)." },

    // DRINKS
    { section: "DRINKS", name: "Coffee", price: "€ 3.00", details: "Coffee." },
    { section: "DRINKS", name: "Espresso", price: "€ 3.00", details: "Espresso." },
    { section: "DRINKS", name: "Double Espresso", price: "€ 4.00", details: "Double espresso." },
    { section: "DRINKS", name: "Cappuccino / Latte", price: "€ 3.15", details: "Cappuccino." },
    { section: "DRINKS", name: "Tea", price: "€ 2.75", details: "Tea." },
    { section: "DRINKS", name: "Mint Tea", price: "€ 3.00", details: "Fresh mint tea." },
    { section: "DRINKS", name: "Thai Lemon Tea", price: "€ 4.75", details: "Homemade Thai sweet lemon tea (no take-away)." },
    { section: "DRINKS", name: "Thai Milk Tea", price: "€ 5.50", details: "Homemade Thai sweet tea with milk (no take-away)." },
    { section: "DRINKS", name: "Ginger Tea", price: "€ 3.10", details: "Ginger tea (Vegetarian)." },
    { section: "DRINKS", name: "Thai Latte Tea", price: "€ 5.00", details: "Homemade warm Thai tea with milk." },
    { section: "DRINKS", name: "Still Water", price: "€ 1.50", details: "Still water." },

    // BEER
    { section: "BEER", name: "Singha Beer", price: "€ 4.99", details: "Thai beer (available for take-away)." },
    { section: "BEER", name: "Jupiler 25cl", price: "€ 3.95", details: "Jupiler beer." },
    { section: "BEER", name: "Jupiler Non-Alcoholic (Bottle)", price: "€ 3.00", details: "Non-alcoholic Jupiler beer (bottle)." },
    { section: "BEER", name: "Chang Beer", price: "€ 4.99", details: "Thai beer (available for take-away)." },
    { section: "BEER", name: "Jupiler Big 0.5L Glass", price: "€ 7.00", details: "Large Jupiler beer (glass)." },

    // WINE
    { section: "WINE", name: "🍷 Chardonnay Glass", price: "€ 5.10", details: "Chardonnay wine (glass)." },
    { section: "WINE", name: "🍾 Chardonnay Bottle", price: "€ 23.90", details: "Chardonnay wine (bottle)." },
    { section: "WINE", name: "🍷 Pinot Grigio Glass", price: "€ 4.80", details: "Pinot Grigio wine (glass)." },
    { section: "WINE", name: "🍾 Pinot Grigio Bottle", price: "€ 22.50", details: "Pinot Grigio wine (bottle)." },
    { section: "WINE", name: "🍷 Merlot Glass", price: "€ 4.80", details: "Merlot wine (glass)." },
    { section: "WINE", name: "🍾 Merlot Bottle", price: "€ 22.50", details: "Merlot wine (bottle)." },

    // SOFT DRINKS
    { section: "SOFT DRINKS", name: "Cola, Cola Zero, Fanta, Sprite", price: "€ 3.15", details: "Soft drinks (only Coke Zero available for take-away)." },
    { section: "SOFT DRINKS", name: "Ice Tea, Tonic, Bitter Melon", price: "€ 3.10", details: "Various soft drinks." },
    { section: "SOFT DRINKS", name: "Spa Ros, Spa Blue Small", price: "€ 3.00", details: "Spa water." },
    { section: "SOFT DRINKS", name: "Ginger Ale", price: "€ 3.10", details: "Ginger ale." },
    { section: "SOFT DRINKS", name: "Apple Juice", price: "€ 3.10", details: "Apple juice." },
    { section: "SOFT DRINKS", name: "Spa Red, Spa Blue 75ml", price: "€ 6.99", details: "Large Spa water." },

    // SPIRITS
    { section: "SPIRITS", name: "Black Label", price: "€ 6.50", details: "Whiskey." },
    { section: "SPIRITS", name: "Jack Daniel's", price: "€ 7.00", details: "Whiskey." },
    { section: "SPIRITS", name: "Meakhong (Thai)", price: "€ 7.00", details: "Thai whiskey." },
    { section: "SPIRITS", name: "V.S.O.P Cognac", price: "€ 6.75", details: "Cognac." },
];

function displayMenu() {
    const menuDiv = document.getElementById('menu');
    const sections = [...new Set(menuItems.map(item => item.section))]; // Unique sections

    sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('menu-section');
        sectionDiv.innerHTML = `<h2>${section}</h2>`;
        
        menuItems
            .filter(item => item.section === section)
            .forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('menu-item');
                itemDiv.innerHTML = `
                    ${item.name} <span>${item.price}</span>
                    <div class="details"><p>${item.details}</p></div>
                `;
                itemDiv.onclick = () => {
                    const details = itemDiv.querySelector('.details');
                    details.style.display = details.style.display === 'block' ? 'none' : 'block';
                };
                sectionDiv.appendChild(itemDiv);
            });

        menuDiv.appendChild(sectionDiv);
    });
}

function searchMenu() {
    const query = document.getElementById('search').value.toLowerCase();
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        const itemName = item.textContent.toLowerCase();
        if (itemName.includes(query)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', displayMenu);
