//Coupon giảm giá
$(document).ready(function () {
    $('#coupon').change(function () {
        if ($(this).is(':checked')) {
            $('.zip-field').slideDown(); // Hiện mượt
        } else {
            $('.zip-field').slideUp(); // Ẩn mượt
        }
    });
});
//
$(document).ready(function () {
    $('#check_coupon').click(function (e) {
        e.preventDefault();

        // 1. Kiểm tra checkbox có được chọn không
        var isCouponUsed = $('#coupon').is(':checked');

        // 2. Lấy phương thức thanh toán
        var paymentMethod = $('input[name="tt"]:checked').next('label').text();

        // 3. Lấy mã ZipCode
        var zipCode = $('#zipcode').val();

        // 4. Lấy thành phố
        var city = $('.single_field select').val();
        //lấy quận huyện
        var district = $('#quan_huyen').val();

        if (city === "" || district === "") {
            alert("Vui lòng chọn thành phố và quận/huyện.");
        }
        else {
            // Hiển thị các giá trị thu thập được
            let message = `<b>Sử dụng mã giảm giá: </b>${isCouponUsed ? 'Có' : 'Không'}
                       <br><b>Phương thức thanh toán: </b>${paymentMethod}
                       <br><b>Thành phố: </b>${city}
                       <br><b>Quận/Huyen: </b>${district}<br>`;

            // Nếu checkbox được chọn, kiểm tra mã giảm giá (ZipCode)
            if (isCouponUsed && zipCode !== "") {
                // Gửi ZipCode để kiểm tra server (AJAX)
                $.ajax({
                    url: '/Carts/CheckCoupon',
                    type: 'POST',
                    data: { code: zipCode },
                    success: function (res) {
                        if (res.valid) {
                            Swal.fire("Thông tin", message + `\n<b>Giảm giá: </b>${res.discount * 100}%`, "success");
                        } else {
                            Swal.fire("Thông tin", message + `\nMã giảm giá không hợp lệ`, "warning");
                        }
                    },
                    error: function () {
                        Swal.fire("Lỗi", "Không thể kiểm tra mã giảm giá", "error");
                    }
                });
            } else {
                Swal.fire("Thông tin", message, "info");
            }
        }
    });
});

//hieu ung add-to-cart
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            Swal.fire({
                icon: 'success',
                title: 'Đã thêm vào giỏ hàng!',
                text: 'Sản phẩm của bạn đã được thêm thành công.',
                showConfirmButton: false,
                timer: 1500
            });
        });
    });
});

//hieu ung add-to-wishlist
$(document).ready(function () {
    $('.add-to-wishlist').click(function (e) {
        e.preventDefault(); // Ngăn submit form nếu có

        Swal.fire({
            title: 'Thành công!',
            text: 'Sản phẩm đã được thêm vào yêu thích.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    });
});