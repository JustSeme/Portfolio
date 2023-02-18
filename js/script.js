jQuery(document).ready(function () {

	jQuery('#send-form, #send-form-modal').click(async function (e) {
		e.preventDefault()
		let form
		if (jQuery(this).is('#send-form')) {
			form = jQuery(this).closest('form');
		} else {
			form = $('.js-modal-form')
		}

		if (form.valid()) {
			//form.css('opacity', '.5');
			const data = await fetch('https://email-sender-kappa.vercel.app/portfolio-api')
			console.log(data);
			/* var actUrl = form.attr('action');

			jQuery.ajax({
				url: actUrl,
				type: 'get',
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
			}); */
		}
	});


});