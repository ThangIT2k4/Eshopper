/*price range*/

 $('#sl2').slider();

	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};	
		
/*scroll to top*/

$(document).ready(function(){
	$(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 300, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 300, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});
});

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

