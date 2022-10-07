jQuery(document).ready(function () {

	jQuery('#send-form').click(function (e) {
		e.preventDefault()
		var form = jQuery(this).closest('form');

		if (form.valid()) {
			//form.css('opacity', '.5');
			var actUrl = form.attr('action');
			console.log(actUrl);

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