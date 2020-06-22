     
    jQuery( document ).ready(function() {        
        jQuery("#accordion").accordion({
            heightStyle: "fill"
        });

	var glassman_js_data = {"image_path_kuhni":"images/kuhni/","image_path_backs":"images/prints\/"};

        jQuery('.glassman-kitchen-img-selection').on('click', function () {

            var el = jQuery(this);
            var Ez = el.clone();
            Ez.find('img').removeClass('glassman-kitchen-img-thumb');
            Ez.html(function(index, html) {
                return html.replace("thumbs/", "");
            });
            jQuery('.glassman-kitchen-kitchen-background').html(Ez.html());
        });

        jQuery('.glassman-kitchen-circle').on('click', function () {

            var self = this;
            var selector = jQuery(self);
            var color = selector.attr('data-color')
            var kitchen = jQuery('.glassman-kitchen-kitchen-wrapper');
            var kitchenImg = kitchen.find('img').attr('src');
            var ksrc = kitchenImg.split('/k/');
            var completeSrc = glassman_js_data.image_path_kuhni + 'kitchen-' + color + '.png';

            kitchen.find('img').attr('src', completeSrc);
        });

        //Gradove
        jQuery('#ui-id-3').on('click', function() {
            var image_number = 1;
            for (var i = 29; i <= 34; i++) {
                jQuery("#img-" + i).attr("src", glassman_js_data.image_path_backs + '/gradove/thumbs/kitchen-city-glassprint_' + image_number++ + '.png');
                console.log(glassman_js_data.image_path_backs + '/gradove/thumbs/kitchen-city-glassprint_' + image_number + '.png');
            }
        });
		
		

        //Cvetq
        jQuery('#ui-id-1').on('click', function() {
            var image_number = 1;
            for (var i = 1; i <= 28; i++) {
                jQuery("#img-" + i).attr("src", glassman_js_data.image_path_backs + '/cvetq/thumbs/kitchen-flower-glassprint_' + image_number++ + '.png');
            }
        });

        //Morski Motivi
        jQuery('#ui-id-7').on('click', function() {
            var image_number = 1;
            for (var i = 38; i <= 44; i++) {
                jQuery("#img-" + i).attr("src", glassman_js_data.image_path_backs + '/morski-motivi/thumbs/kitchen-sea-elements-glassprint_' + image_number++ + '.png');
            }
        });

        // Napitki
        jQuery('#ui-id-9').on('click', function() {
            var image_number = 1;
            for (var i = 45; i <= 48; i++) {
                jQuery("#img-" + i).attr("src", glassman_js_data.image_path_backs + '/napitki/thumbs/kitchen-beverages-glassprint_' + image_number++ + '.png');
            }
        });

        // Pejzazhi
        jQuery('#ui-id-9').on('click', function() {
            var image_number = 1;
            for (var i = 49; i <= 58; i++) {
                jQuery("#img-" + i).attr("src", glassman_js_data.image_path_backs + '/pejzazhi/thumbs/kitchen-landscapes-glassprints_' + image_number++ + '.png');
            }
        });
		
		  // New
        jQuery('#ui-id-9').on('click', function() {
            var image_number = 1;
            for (var i = 80; i <= 87; i++) {
                jQuery("#img-" + i).attr("src", glassman_js_data.image_path_backs + '/new/thumbs/kitchen-new-glassprints_' + image_number++ + '.png');
            }
        });

        // Teksturi
        jQuery('#ui-id-13').on('click', function() {
            var image_number = 1;
            for (var i = 59; i <= 81; i++) {
                jQuery("#img-" + i).attr("src", glassman_js_data.image_path_backs + '/teksturi/thumbs/kitchen-textures-glassprint_' + image_number++ + '.png');
            }
        });

        jQuery('.glassman-kitchen-themeColor').on('click', function(){
            jQuery('.glassman-kitchen-themeColor').empty();
            var currColor = jQuery(this).attr("data-color");

            if(currColor !== 'bl') {
                jQuery(this).html('<div style="text-align: center; margin-top: 4px; font-size: 22px;">✔</div>');
            } else {
                jQuery(this).html('<div style="text-align: center; margin-top: 4px; font-size: 22px; color: #fff;">✔</div>');
            }

            jQuery(".glassman-kitchen-img-thumb").each(function(){
                var imgAlt = jQuery(this).attr('alt');
                imgAlt = imgAlt.split(" ");
                var currImg = jQuery(this);

                if(jQuery.inArray(currColor, imgAlt) !== -1) {
                    currImg.show();
                } else {
                    currImg.hide();
                }
            });
        });

        jQuery('#clearThemeColor').on('click', function(){
            jQuery(".glassman-kitchen-img-thumb").each(function(){
                jQuery(this).show();
            });
        });


    });
// TO the future maintainer, I am sorry. X money, x work (sob) (sob)