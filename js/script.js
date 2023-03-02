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
			form.css('opacity', '.5');
			form.find('.site-btn').prop("disabled", true)
			setTimeout(() => {
				form.css('opacity', '1');
				form.trigger('reset')
				form.find('.request-message').html('');
			}, 5000)

			const currentValues = form.serializeArray()
			const message = `Привет от ${currentValues[0].value}. Он написал: ${currentValues[2].value}. Свяжись с ним через: ${currentValues[1].value}`

			const bot = '6098281339:AAGJ16BQ736dsxfg2889xql2492sVZJRZvE' //please dont still it
			const chatId = '-918377010'
			const actUrl = `https://api.telegram.org/bot${bot}/sendMessage?chat_id=${chatId}&text=${message}`

			jQuery.ajax({
				url: actUrl,
				type: 'post',
				dataType: 'html',
				data: currentValues,
				success: function () {
					form.css('opacity', '1');
					form.find('.request-message').html('форма отправлена успешно');
				},
				error: function () {
					form.find('.request-message').html('Произошла какая-то ошибка... Попробуйте связаться со мной через социальные сети!');
				}
			});
		}
	});


});