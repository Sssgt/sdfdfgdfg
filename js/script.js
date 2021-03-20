$(document).ready(function(){
	$('.sliders').slick({
		dots: true, // показывает точки снизу ( false по умолчанию)
		adaptiveHeight: true, // адаптирует высоту слайдера под конкретный слайд ( false по умолчанию)
		slidesToShow: 3, // количество показываемых слайдов  ( 1 по умолчанию)
		slidesToScroll: 1, // кол-во прокручевымых слайдов ( 1 по умолчанию)
		speed: 1000, // скорость переключения слайдов
		initialSlide: 1, // опция стартового слайда
		autoplay: true, // автопроигрывание слайдов ( false по умолчанию)
		autoplaySpeed: 5000, // время автопроигрывания
		pauseOnFocus: true, // при наведении на слайдер, слйды не переключаются
		touchThreshold: 10, // отвечате за сложность свайпа на телеофне ( 5 по умолчанию)
		centerMode: true , // главный слайдер по центру (false по у молчанию)
		variableWidth: false, // отключаешт автомотическое дополнение ширены у слайдов (false по умолчанию);
		

		
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
	  		}
		] // отвечает за адаптивность. Настроки изменяются взависимости от разрешения.

	});
});	  	  	