(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.products, function(product) {
                return (!filter.Name || product.Name.indexOf(filter.Name) > -1)
                    && (!filter.Category || product.Category === filter.Category)
                    && (filter.Price === undefined || product.Price === filter.Price)
                    && (filter.Quantity === undefined || product.Quantity === filter.Quantity)
                    && (filter.Status === undefined || product.Status === filter.Status);
            });
        },

        insertItem: function(insertingProduct) {
            this.products.push(insertingProduct);
        },

        updateItem: function(updatingProduct) { },

        deleteItem: function(deletingProduct) {
            var productIndex = $.inArray(deletingProduct, this.products);
            this.products.splice(productIndex, 1);
        }

    };

    window.db = db;

    db.categories = [
        { Name: "", Id: "" },
        { Name: "Áo", Id: "Áo" },
        { Name: "Quần", Id: "Quần" },
        { Name: "Phụ kiện", Id: "Phụ kiện" }
    ];

    db.products = [
        {
            "Name": "Áo thun nam",
            "Category": "Áo",
            "Price": 250000,
            "Quantity": 50,
            "Status": true
        },
        {
            "Name": "Quần jeans nữ",
            "Category": "Quần",
            "Price": 350000,
            "Quantity": 30,
            "Status": true
        },
        {
            "Name": "Áo sơ mi",
            "Category": "Áo",
            "Price": 280000,
            "Quantity": 20,
            "Status": false
        },
        {
            "Name": "Áo khoác bomber",
            "Category": "Áo",
            "Price": 450000,
            "Quantity": 15,
            "Status": true
        },
        {
            "Name": "Quần short kaki",
            "Category": "Quần",
            "Price": 220000,
            "Quantity": 40,
            "Status": true
        },
        {
            "Name": "Thắt lưng da",
            "Category": "Phụ kiện",
            "Price": 180000,
            "Quantity": 60,
            "Status": true
        },
        {
            "Name": "Áo hoodie nữ",
            "Category": "Áo",
            "Price": 320000,
            "Quantity": 25,
            "Status": true
        },
        {
            "Name": "Quần tây nam",
            "Category": "Quần",
            "Price": 400000,
            "Quantity": 18,
            "Status": false
        },
        {
            "Name": "Vớ cotton",
            "Category": "Phụ kiện",
            "Price": 50000,
            "Quantity": 100,
            "Status": true
        },
        {
            "Name": "Áo len cổ lọ",
            "Category": "Áo",
            "Price": 370000,
            "Quantity": 12,
            "Status": true
        }
    ];

}());