'use strict';

angular.module('wrapApp')

  .directive('productBrowser', function () {
    return {
      replace: true,
      template: multiline(function(){/*
        <div class="productbrowser content pb-opened">
          <div class="pb-slider">
            <div class="pb-slide">
              <ul ng-repeat="group in photoGroups" slide-group class="ul-slider" 
              id="slide-id-{{$index+1}}"
              page="{{$index+1}}">
              </ul>
            </div>
          </div>
          <div class="pb-pageindicator roundedbottom"><b class="caret"></b><a page="1" class="page active">Light </a><a page="2" class="page">Dark</a></div>
        </div>
      */}),
      link : function (scope, element, attrs) {

        ///scope.data = scope[attrs['photos']];
        scope.$on('LastElem', function(event) {
          var slide = $('.ul-slider')
          ,  navigationLinks = $('.pb-pageindicator a')
          ,  activeNavLink = $('.pb-pageindicator a.active')
          ,  navArrow = $('.caret')
          ,  productbrowser = $('.productbrowser');
          
          $(productbrowser).addClass('pb-dynamic'); 
          $(slide).not('.ul-slider:eq(0)').hide(); //hide all slides apart from 1st one
          $(slide).eq(0).addClass('active'); //add active class

          $(navigationLinks).click(function() {
            animateSlides(this);
          });


          //var products = $(".ul-slider.active li");
          //var tl = new TimelineLite();
          //tl.staggerFrom(products, 0.5, {css:{y:'-=150',x:'-30',opacity:'0'}, ease:Bounce.easeOut }, 0.05)

          var	context = navigationLinks[0];
          carotStart.call(context);




          



          /* Slides Animation */
          function animateSlides(e){
            
            $(navigationLinks).unbind('click');
            
            var pageID = $(e).attr('page'),
              pageIDactive = navigationLinks.filter('.active').attr('page'),
              slideIn = $(".ul-slider[page='" + pageID + "']"),
              slideOut = $('.ul-slider.active'),
              products = $($(slideOut).find('li').get()),
              slideInProducts = $($(slideIn).find('li').get()),
              tl = new TimelineLite({onStart:updateNav, onStartParams: [pageID], onStartScope: e, onComplete:resetStage, onCompleteScope: e});
            
            $(slideIn).show();
            $(navigationLinks).removeClass('active');
            $(e).addClass('active'); //add active to active nav item

            if(pageID > pageIDactive){
              tl
              .staggerTo(products, 0.6, {css:{x:'-=960'}, ease:Power4.easeOut }, 0.02)
              
              // Final animation with fixed delay
              .staggerFromTo(slideInProducts, 0.5, {css:{x:'960'}, ease:Power4.easeIn }, {css:{x:'30'}, ease:Power4.easeIn }, 0.05) //appends to the end of the timeline
              .staggerTo(slideInProducts, 0.5, {css:{x:'0'}, ease:Elastic.easeOut.config(2) }, 0.05, "-=0.25");  
              
              
            } else {
              var products = $($(slideOut).find('li').get().reverse()),
                slideInProducts = $($(slideIn).find('li').get().reverse());
              tl
              .staggerTo(products, 0.6, {css:{x:'960'}, ease:Power4.easeOut }, 0.02)
              
              // Final animation with fixed delay
              .staggerFromTo(slideInProducts, 0.5, {css:{x:'-=960'}, ease:Power4.easeIn }, {css:{x:'30'}, ease:Power4.easeIn }, 0.05) //appends to the end of the timeline
              .staggerTo(slideInProducts, 0.5, {css:{x:'0'}, ease:Elastic.easeOut.config(2) }, 0.05, "-=0.25");  
            }

            
          }

          function updateNav(e, pageID){
            
            $(".ul-slider[page='" + pageID + "']").addClass('active'); //add active to active slide
            
            var centerPoint = parseInt(($(this).width())/2) //center of new active item
            ,  oldOffset = parseInt($(this).offset().left - $(this).parent().offset().left) //old arrow offset
            ,	 newOffset = oldOffset + centerPoint + 1; //new arrow offset

            TweenMax.to(navArrow, .4, {x:newOffset, ease:'Linear.easeNone'});
          }

          function carotStart(context) {
            var centerPoint = parseInt(($(this).width())/2) //center of new active item
            ,  oldOffset = parseInt($(this).offset().left - $(this).parent().offset().left) //old arrow offset
            ,  newOffset = oldOffset + centerPoint + 1; //new arrow offset

            TweenMax.set(navArrow, {x:newOffset});
          }

          function resetStage(e){
            var pageID = $(this).attr('page'),
              currentSlide = $(".ul-slider[page='" + pageID + "']"),
              currentSlideItems = $(".ul-slider[page='" + pageID + "'] li");
            
            //remove active class and hide all slides apart from the current one
            slide.removeClass('active');
            slide.not(currentSlide).hide();
            
            //add class to the active nav item and current slide	
            $(this).add(currentSlide).addClass('active');
            
            $(navigationLinks).not($(this)).bind('click', function(){
              animateSlides(this);
            });
          }
          



        });
      }
    };
  })
                
  .directive('slideGroup', function () {
    return {
      template: '<li slide-element ng-repeat="photo in group.reduction"></li>',
      link: function(scope, element) {



      }
    };
  })
  .directive('slideElement', function () {
    return {
      template: '<a href="#" ng-click="activatePhoto(photo.name)"><img ng-src="/img/mannequin/{{photo.name}}-small.jpg" />',
      link: function(scope, element) {
        if (scope.$last){
          scope.$emit('LastElem');
        }

      }
    };
  });
