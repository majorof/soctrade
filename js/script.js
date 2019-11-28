$(document).ready(function() {

//Мобильное меню
$('#buter').click (function() {
	$('#mob_menu').fadeIn();
	$('#buter').attr('style', 'display: none;');
})
$('#mob_menu_close').click (function() {
	$('#mob_menu').fadeOut();
	$('#buter').attr('style', 'display: block;');
})	
$('.first_scrn_nav_mob a').click (function() {
	$('#mob_menu').fadeOut();
	$('#buter').attr('style', 'display: block;');
})	

//Форма звонка
$('#callback_btn').click (function() {
	$('#call_back_popup_wrap').fadeIn();
})
$('.call_back_popup_close').click (function() {
	$('#call_back_popup_wrap').fadeOut();
})

//Форма консультации
$('#consalt_btn').click (function() {
	$('#consalt_popup_wrap').fadeIn();
})
$('.call_back_popup_close').click (function() {
	$('#consalt_popup_wrap').fadeOut();
})

//Слайдер 1
$('.slider_asis').slick({
  dots: false,
  arrows: false,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 7000,
});

//Слайдер 2
$('.man_slider_asis').slick({
  dots: false,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 7000,
  responsive: [
        {
          breakpoint: 767,
          settings: {
			arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
			arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
});

//Слайдер 3
$('.feedbacks_slider_asis').slick({
  dots: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 7000,
  responsive: [
        {
          breakpoint: 767,
          settings: {
			arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
			arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
});

//Адаптивные табы продукта
$('.product_tabs').owlCarousel({
	loop: false,
	nav: true,
	autoWidth:true,
	mouseDrag: false,
	donts: false
});

//Увеличиваем фотки
$('body').on('click', '.zoom', (function(){	// Событие клика на маленькое изображение
	var img = $(this);	// Получаем изображение, на которое кликнули
	var src = img.data('img'); // Достаем из этого изображения путь до картинки
	$('body').append("<div class='zoom_popup'>"+ //Добавляем в тело документа разметку всплывающего окна
					 "<div class='zoom_popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
					 "<img src='"+src+"' class='zoom_popup_img' />"+ // Само увеличенное фото
					 "</div>"); 
	$('.zoom_popup').fadeIn(800); // Медленно выводим изображение
	$('.zoom_popup_bg').click(function(){	// Событие клика на затемненный фон	   
		$(".zoom_popup").fadeOut(800);	// Медленно убираем всплывающее окно
		setTimeout(function() {	// Выставляем таймер
		  $('.zoom_popup').remove(); // Удаляем разметку всплывающего окна
		}, 800);
	});
	$('.zoom_popup_img').click(function(){	// Событие клика на само фото
		$('.zoom_popup').fadeOut(800);	// Медленно убираем всплывающее окно
		setTimeout(function() {	// Выставляем таймер
		  $('.zoom_popup').remove(); // Удаляем разметку всплывающего окна
		}, 800);
	});
}));

//Наши объекты
  $('.more_about_company_title').on('click',function() {
      if($(this).prev().is(':visible')) {
          $(this).prev().fadeOut();
          $(this).find('b').removeClass('up').addClass('down');
      } else {
          $(this).prev().fadeIn();
		  $(this).find('b').removeClass('down').addClass('up');
      }
  });
  
//Переключалка табов
(function(s) {
    var n;
    s('.product_tabs').on('click', '.tab:not(.active)', function() {
        n = s(this).parents('.container'), 
		s(this).dmtabs(n)
    }), s.fn.dmtabs = function(n) {
		
		s('.tab').removeClass('active'),
        s(this).addClass('active'), 
        
		n.find('.product_characters_val').eq(s(this).index('.tab')).show(1, function() {
            s(this).addClass('open')
        }).siblings('.product_characters_val').hide(1, function() {
            s(this).removeClass('open')
        })
    }
})(jQuery);

  
$('.tab_w_childs>p').on('click',function() {
  if($('.indexing').is(':visible')) {
		$('.indexing').hide();
		$('.product_tabs').css({'z-index' : '0'});
  } else {
		$('.indexing').show();
		$('.product_tabs').css({'z-index' : '2'});
  }
});

jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".indexing"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.fadeOut(); // скрываем его
			$('.product_tabs').css({'z-index' : '0'});
		}
	});
});



//Обработка формы обратного звонка

 // вся мaгия пoслe зaгрузки стрaницы
	$("#callbackform").submit(function(){ // пeрeхвaтывaeм всe при сoбытии oтпрaвки
		var form = $(this); // зaпишeм фoрму, чтoбы пoтoм нe былo прoблeм с this
		var error = false; // прeдвaритeльнo oшибoк нeт
		form.find('input').each( function(){ // прoбeжим пo кaждoму пoлю в фoрмe
			//if ($(this).val() == '') { // eсли нaхoдим пустoe
			//	alert('Зaпoлнитe пoлe "'+$(this).attr('placeholder')+'"!'); // гoвoрим зaпoлняй!
			//	error = true; // oшибкa
			//}
			if ($('#callback_input_name').val() == '') { // eсли нaхoдим пустoe
				$('#callback_input_name').css("border", "2px solid red");
				error = true; // oшибкa
			}
			if ($('#callback_input_phone').val() == '') { // eсли нaхoдим пустoe
				$('#callback_input_phone').css("border", "2px solid red");
				error = true; // oшибкa
			}			
		});
		return false; // вырубaeм стaндaртную oтпрaвку фoрмы
	});
	
	$("#consaltform").submit(function(){ // пeрeхвaтывaeм всe при сoбытии oтпрaвки
		var form = $(this); // зaпишeм фoрму, чтoбы пoтoм нe былo прoблeм с this
		var error = false; // прeдвaритeльнo oшибoк нeт
		form.find('input').each( function(){ // прoбeжим пo кaждoму пoлю в фoрмe
			//if ($(this).val() == '') { // eсли нaхoдим пустoe
			//	alert('Зaпoлнитe пoлe "'+$(this).attr('placeholder')+'"!'); // гoвoрим зaпoлняй!
			//	error = true; // oшибкa
			//}
			if ($('#consalt_input_name').val() == '') { // eсли нaхoдим пустoe
				$('#consalt_input_name').css("border", "2px solid red");
				error = true; // oшибкa
			}
			if ($('#consalt_input_phone').val() == '') { // eсли нaхoдим пустoe
				$('#consalt_input_phone').css("border", "2px solid red");
				error = true; // oшибкa
			}			
		});
		return false; // вырубaeм стaндaртную oтпрaвку фoрмы
	});
});