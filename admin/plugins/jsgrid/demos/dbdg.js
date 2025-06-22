(function() {

    var db = {};

    // Danh sách sản phẩm để chọn khi đánh giá
    db.products = [
        { Id: "Áo thun nam", Name: "Áo thun nam" },
        { Id: "Quần jeans nữ", Name: "Quần jeans nữ" },
        { Id: "Áo sơ mi", Name: "Áo sơ mi" },
        { Id: "Áo khoác bomber", Name: "Áo khoác bomber" },
        { Id: "Quần short kaki", Name: "Quần short kaki" },
        { Id: "Thắt lưng da", Name: "Thắt lưng da" }
    ];

    // Danh sách đánh giá sản phẩm
    db.reviews = [
        { Id: 1, Product: "Áo thun nam", User: "Nguyễn Văn A", Rating: 5, Comment: "Chất lượng tốt!", Date: "2025-06-01", Status: true },
        { Id: 2, Product: "Quần jeans nữ", User: "Trần Thị B", Rating: 4, Comment: "Vải đẹp, giao nhanh.", Date: "2025-06-02", Status: true },
        { Id: 3, Product: "Áo sơ mi", User: "Lê Văn C", Rating: 3, Comment: "Tạm ổn.", Date: "2025-06-03", Status: false },
        { Id: 4, Product: "Áo khoác bomber", User: "Phạm Thị D", Rating: 5, Comment: "Rất ấm và đẹp!", Date: "2025-06-04", Status: true },
        { Id: 5, Product: "Thắt lưng da", User: "Hoàng Văn E", Rating: 4, Comment: "Đẹp, chắc chắn.", Date: "2025-06-05", Status: true }
    ];

    db.loadData = function(filter) {
        return $.grep(this.reviews, function(review) {
            return (!filter.Product || review.Product === filter.Product)
                && (!filter.User || review.User.indexOf(filter.User) > -1)
                && (filter.Rating === undefined || review.Rating == filter.Rating)
                && (!filter.Comment || review.Comment.indexOf(filter.Comment) > -1)
                && (!filter.Date || review.Date.indexOf(filter.Date) > -1)
                && (filter.Status === undefined || review.Status === filter.Status);
        });
    };

    db.insertItem = function(item) {
        this.reviews.push(item);
    };

    db.updateItem = function(item) {
        // jsGrid sẽ tự cập nhật mảng reviews
    };

    db.deleteItem = function(item) {
        var index = $.inArray(item, this.reviews);
        this.reviews.splice(index, 1);
    };

    window.db = db;

}());