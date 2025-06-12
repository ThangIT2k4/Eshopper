(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.orders, function(order) {
                return (!filter.OrderId || order.OrderId.toString().indexOf(filter.OrderId) > -1)
                    && (!filter.Customer || order.Customer.indexOf(filter.Customer) > -1)
                    && (!filter.Status || order.Status === filter.Status)
                    && (filter.Total === undefined || order.Total == filter.Total)
                    && (!filter.Date || order.Date.indexOf(filter.Date) > -1);
            });
        },

        insertItem: function(insertingOrder) {
            this.orders.push(insertingOrder);
        },

        updateItem: function(updatingOrder) {
            // jsGrid sẽ tự cập nhật mảng orders
        },

        deleteItem: function(deletingOrder) {
            var orderIndex = $.inArray(deletingOrder, this.orders);
            this.orders.splice(orderIndex, 1);
        }
    };

    window.db = db;

    db.statuses = [
        { Name: "", Id: "" },
        { Name: "Chờ xử lý", Id: "Chờ xử lý" },
        { Name: "Đã xác nhận", Id: "Đã xác nhận" },
        { Name: "Đang giao", Id: "Đang giao" },
        { Name: "Hoàn thành", Id: "Hoàn thành" },
        { Name: "Đã hủy", Id: "Đã hủy" }
    ];

    db.orders = [
        {
            OrderId: 1001,
            Customer: "Nguyễn Văn A",
            Date: "2025-06-01",
            Total: 1200000,
            Status: "Hoàn thành"
        },
        {
            OrderId: 1002,
            Customer: "Trần Thị B",
            Date: "2025-06-02",
            Total: 850000,
            Status: "Đang giao"
        },
        {
            OrderId: 1003,
            Customer: "Lê Văn C",
            Date: "2025-06-03",
            Total: 450000,
            Status: "Chờ xử lý"
        },
        {
            OrderId: 1004,
            Customer: "Phạm Thị D",
            Date: "2025-06-04",
            Total: 990000,
            Status: "Đã xác nhận"
        },
        {
            OrderId: 1005,
            Customer: "Hoàng Văn E",
            Date: "2025-06-05",
            Total: 1500000,
            Status: "Đã hủy"
        }
    ];

}());