jQuery(document).ready(function () {

	jQuery('#send-form, #send-form-modal').click(function (e) {
		e.preventDefault()
		let form
		if (jQuery(this).is('#send-form')) {
			form = jQuery(this).closest('form');
		} else {
			form = $('.js-modal-form')
		}

		if (form.valid()) {
			//form.css('opacity', '.5');
			var actUrl = form.attr('action');

			jQuery.ajax({
				url: actUrl,
				type: 'post',
				dataType: 'html',
				data: form.serialize(),
				success: function (data) {
					//form.html(data);
					//form.css('opacity', '1');
					form.find('.form-validation').html('форма отправлена успешно');
					//$('#myModal').modal('show') // для бутстрапа
				},
				error: function () {
					form.find('.status').html('серверная ошибка');
				}
			});
		}
	});


});