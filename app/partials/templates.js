angular.module("wrapApp").run(["$templateCache", function($templateCache) {$templateCache.put("/partials/buy.html","\n<div style=\"margin-top: 60px;\" class=\"container-narrow\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"featured\"><a id=\"placeholder\" href=\"#\" class=\"zoom\"><img src=\"/img/buy/images/layer.png\"/></a></div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div id=\"product-details\">\n        <h1 id=\"title\">WrapIt</h1>\n        <form id=\"buySelectionForm\" name=\"buySelectionForm\" novalidate=\"novalidate\" class=\"form-horizontal\">\n          <section id=\"size-section\">\n            <div class=\"form-group\">\n              <label for=\"size-control\" class=\"control-label col-sm-3\">Size</label>\n              <div class=\"col-sm-9\">\n                <select id=\"size-control\" ng-model=\"selected.size\" ng-options=\"size.name as size.name for size in options.size\" ng-change=\"changeSize()\" class=\"form-control\"></select>\n              </div>\n            </div>\n          </section>\n          <section id=\"price-section\">\n            <div class=\"form-group\">\n              <label class=\"control-label col-sm-3\">\n                <div class=\"tableCell\">Price</div>\n              </label>\n              <div class=\"col-sm-9\">\n                <p id=\"price\" class=\"form-control-static tableCell\">{{selected.price | currency}}</p>\n              </div>\n            </div>\n          </section>\n          <section>\n            <div id=\"swatch\">\n              <div ng-repeat=\"color in options.color\" class=\"swatch-element\">\n                <label for=\"{{color.name}}\" style=\"background-color: {{color.hex}}\">\n                  <input id=\"{{color.name}}\" type=\"radio\" ng-model=\"selected.color\" value=\"{{color.name}}\" name=\"color\"/>\n                </label>\n              </div>\n            </div>\n          </section>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>");
$templateCache.put("/partials/contact.html","\n<div id=\"contact\">\n  <div id=\"banner\"><img src=\"/img/banner1.jpg\"/></div>\n  <section class=\"message\">\n    <div class=\"container\">\n      <h1>Thank you for your interest in the wraps.</h1>\n      <p><b>phone:</b> (787) 484-0377</p>\n      <p><b>email:</b> tish@wrapitbytish.com</p>\n    </div>\n  </section>\n  <div id=\"form\">\n    <div class=\"container\">\n      <h1>Contact Form</h1>\n      <div class=\"contact\"></div>\n    </div>\n  </div>\n</div>");
$templateCache.put("/partials/footer.html","\n<footer>\n  <div class=\"container\"><a href=\"/\"><img id=\"logo-footer\" src=\"/img/logo-black-letters-100w.png\"/></a>\n    <div class=\"copyright\">\n      <p><b>phone:</b> (787) 484-0377</p>\n      <p><b>email:</b> tish@wrapitbytish.com</p>All rights reserved.Copyright &copy; 2014 Wrap It By Tish\n    </div>\n  </div>\n</footer>");
$templateCache.put("/partials/index.html","\n<div id=\"home-hd\" class=\"toggle-nav-in-ad\">\n  <nav role=\"navigation\" class=\"navbar\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" class=\"navbar-toggle\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"/\" class=\"navbar-brand\"><span></span></a>\n      </div>\n      <div id=\"navbar-collapse\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"/instructional-videos\">Instructional Videos</a></li>\n          <li><a href=\"/my-story\">My Story</a></li>\n          <li><a href=\"/contact\">Contact</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div class=\"banner-text\">\n    <div class=\"headline\"><img src=\"/img/one-wrap-8-ways.png\" class=\"hidden-xs\"/>\n      <p class=\"visible-xs\">ONE WRAP<span>8 WAYS TO WEAR</span></p>\n    </div>\n    <div class=\"scroll-down\">\n      <p>LEARN MORE</p><img src=\"/img/scroll-down-arrow.png\"/>\n    </div>\n  </div>\n</div>\n<div id=\"home-body\">\n  <section id=\"welcome\">\n    <div class=\"container-narrow\">\n      <h1>The Wrap is a modern versatile dress that can be converted into many fashionable styles</h1>\n      <p>\n        It can go from the beach to a cocktail party in an instant or from day to night. It travels well,\n        doesn\'t wrinkle and always looks fresh and chic.\n        The wrap has a variety of beautiful color fabrics to choose from. The fabric has a modern drape and a comfortable feel.\n        It can be converted into a multitude of styles depending on your mood, body shape or social occasion.\n        Dress it up; dress it down....\n        we know you\'ll have fun discovering your own unique ways to Wrap it!\n      </p>\n    </div>\n  </section>\n  <section id=\"models\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-xs-4\"><img src=\"/img/models/colleen-knotted.jpg\"/></div>\n        <div class=\"col-xs-4\"><img src=\"/img/models/cyinda-knotted.jpg\"/></div>\n        <div class=\"col-xs-4\"><img src=\"/img/models/colleen-one-shoulder-black.jpg\"/></div>\n      </div>\n    </div>\n  </section>\n  <section id=\"eight-styles\">\n    <div class=\"container-narrow\">\n      <h1>the 8 most popular styles</h1>\n      <div class=\"row\">\n        <div class=\"col col-md-4 col-sm-4\"><img src=\"/img/dress-styles/halter.png\"/>\n          <h2>HALTER DRESS</h2>\n          <p>Slip wrap over your arms and neck, halter style.  Grab left side & push through hole under right arm.  Grab right side & wrap around     waist to tie in back.</p>\n        </div>\n        <div class=\"col col-md-4 col-sm-4\"><img src=\"/img/dress-styles/one-shoulder.png\"/>\n          <h2>ONE SHOULDER DRESS</h2>\n          <p>Slip wrap over right arm and neck.  Grab left side & push through hole. Grab right side & wrap around to tie in back.</p>\n        </div>\n        <div class=\"col col-md-4 col-sm-4\"><img src=\"/img/dress-styles/one-shoulder-twist.png\"/>\n          <h2>ONE SHOULDER TWIST</h2>\n          <p>Slip wrap over your arms and neck, halter-style. Grab the shorter corner of fabric on your right. Cross over your body; slip it   underneath the fabric on your left shoulder and twist it around 3 times; pull up a bit to tighten.</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col col-md-4 col-sm-4\"><img src=\"/img/dress-styles/layer.png\"/>\n          <h2>LAYER</h2>\n          <p>Slip wrap over arms and neck, halter style.  Allow to drape loosely and adjust.</p>\n        </div>\n        <div class=\"col col-md-4 col-sm-4\"><img src=\"/img/dress-styles/belted.png\"/>\n          <h2>BELTED</h2>\n          <p>Slip wrap over arms and neck, halter style. Grab both sides in front. Gather and belt.</p>\n        </div>\n        <div class=\"col col-md-4 col-sm-4\"><img src=\"/img/dress-styles/mini-knot.png\"/>\n          <h2>MINI KNOT</h2>\n          <p>Slip wrap over arms and neck, halter style. Grab about 2\" of fabric in each hand at your bust line, and tie ends together into a small knot.</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col col-md-4 col-sm-4 col-md-offset-2\"><img src=\"/img/dress-styles/knotted.png\"/>\n          <h2>KNOTTED</h2>\n          <p>Slip wrap over arms and neck, halter style.  Grab both sides together in front.  Fold over and knot once or twice.</p>\n        </div>\n        <div class=\"col col-md-4 col-sm-4\"><img src=\"/img/dress-styles/shirt.png\"/>\n          <h2>SHIRT</h2>\n          <p>Slip wrap over arms and neck, halter style.  Grab both sides together in front.  Lift up around hips and knot.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section id=\"models\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-xs-4\"><img src=\"/img/models/cyinda-halter.jpg\"/></div>\n        <div class=\"col-xs-4\"><img src=\"/img/models/colleen-knotted-blue.jpg\"/></div>\n        <div class=\"col-xs-4\"><img src=\"/img/models/cyinda-layer.jpg\"/></div>\n      </div>\n    </div>\n  </section>\n  <section id=\"colors\">\n    <div class=\"container-narrow\">\n      <h1>The wrap comes in 11 colors</h1>\n    </div>\n    <div class=\"container-fluid\">\n      <div class=\"row colors\">\n        <div class=\"black col-md-1\">\n          <div class=\"block\"></div>\n          <p>black</p>\n        </div>\n        <div class=\"grey col-md-1\">\n          <div class=\"block\"></div>\n          <p>grey</p>\n        </div>\n        <div class=\"ivory col-md-1\">\n          <div class=\"block\"></div>\n          <p>ivory</p>\n        </div>\n        <div class=\"navy col-md-1\">\n          <div class=\"block\"></div>\n          <p>navy</p>\n        </div>\n        <div class=\"chocolate col-md-1\">\n          <div class=\"block\"></div>\n          <p>chocolate</p>\n        </div>\n        <div class=\"turquoise col-md-1\">\n          <div class=\"block\"></div>\n          <p>turquoise</p>\n        </div>\n        <div class=\"pink col-md-1\">\n          <div class=\"block\"></div>\n          <p>pink</p>\n        </div>\n        <div class=\"green col-md-1\">\n          <div class=\"block\"></div>\n          <p>green</p>\n        </div>\n        <div class=\"yellow col-md-1\">\n          <div class=\"block\"></div>\n          <p>yellow</p>\n        </div>\n        <div class=\"red col-md-1\">\n          <div class=\"block\"></div>\n          <p>red</p>\n        </div>\n        <div class=\"purple col-md-1\">\n          <div class=\"block\"></div>\n          <p>purple</p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section id=\"models\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-xs-4\"><img src=\"/img/models/colleen-one-shoulder-twist.jpg\"/></div>\n        <div class=\"col-xs-4\"><img src=\"/img/models/cyinda-one-shoulder-back.jpg\"/></div>\n        <div class=\"col-xs-4\"><img src=\"/img/models/cyinda-one-shoulder-twist.jpg\"/></div>\n      </div>\n    </div>\n  </section>\n  <section id=\"testimonials\">\n    <div class=\"container-fluid\">\n      <h1>What Customers are Saying</h1>\n      <div id=\"owl-carousel\" class=\"owl-carousel owl-theme\">\n        <div class=\"item\">\n          <p>\n            &ldquo;I love my wrap! It\'s awesome! I have the maxi in black, which I like to wear either \n            as a layer or belted.  I\'ve worn it out to art gallery openings, and as a beach cover-up.  \n            The fabric is comfy and easy... I\'ve taken it with me on several trips, and it doesn\'t wrinkle!&rdquo;\n          </p>\n          <h2>Nina, Kingston, PA</h2>\n        </div>\n        <div class=\"item\">\n          <p>\n            &ldquo;I LOVE my \"wrap-it-by-Tish!\"  It is so versatile and easy to wear and wash.  Plus, the color \n            selection is awesome.  It\'s great for travel since you can use it in various ways which makes it possible \n            for one to take less clothing on the trip.&rdquo;\n          </p>\n          <h2>Brenda, Guaynabo, Puerto Rico</h2>\n        </div>\n        <div class=\"item\">\n          <p>\n            Love my wraps. Recently went to a wedding in the Dominican Republic and had three wraps with me. \n            I wore one to the beach ceremony, a maxi out to dinner, and the other over my bathing suit.  \n            Everyone asked about it and loved it.  Easy to travel with and simple to care for.   \n          </p>\n          <h2>Karen, Atlantic Beach, NY</h2>\n        </div>\n        <div class=\"item\">\n          <p>My \"wrap-it\" was the best thing I wore all summer! The fabric is fabulous!   </p>\n          <h2>Jamie, Wyomissing, PA</h2>\n        </div>\n        <div class=\"item\">\n          <p>\n            Awesome concept. Tish\'s wraps are fun!  You can give it a creative twist and wear it \n            poolside, or you might prefer to use it long and one shouldered for a nice dinner date.  \n            Great for travel, no wrinkles.  I chose mine in bright aqua, and the quality and color are top notch.  \n          </p>\n          <h2>Ileana, Guaynabo, Puerto Rico</h2>\n        </div>\n        <div class=\"item\">\n          <p>Very versatile and comfortable piece.  Love the colors it comes in!  </p>\n          <h2>Noemi, San Juan, Puerto Rico</h2>\n        </div>\n        <div class=\"item\">\n          <p>\n            These wraps are a must-have in any wardrobe, for all body types and all ages.  \n            They are versatile, easy,  travel extremely well and so fun to wear!  The colors and fabric are wonderful.  \n            Thanks, Tish, for a fabulous item! I love my wrapitbytish.  \n          </p>\n          <h2>Hilary, Vermont</h2>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>");
$templateCache.put("/partials/instructionalVideos.html","\n<div id=\"instructionalVideo\">\n  <div class=\"hd\">\n    <div class=\"container\">\n      <h1>Instructional Videos</h1>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\"><a data-fancybox-type=\"iframe\" href=\"http://www.youtube.com/embed/p_STIMywonc\" class=\"fancybox\"><img src=\"/img/video-thumbnails/1-dress.png\"/><span>Dress</span></a></div>\n      <div class=\"col-md-3\"><a data-fancybox-type=\"iframe\" href=\"http://www.youtube.com/embed/0VEDKYcgmDw\" class=\"fancybox\"><img src=\"/img/video-thumbnails/2-one-shoulder.png\"/><span>One Shoulder</span></a></div>\n      <div class=\"col-md-3\"><a data-fancybox-type=\"iframe\" href=\"http://www.youtube.com/embed/FngobwyLpsY\" class=\"fancybox\"><img src=\"/img/video-thumbnails/3-one-shoulder-twist.png\"/><span>One Shoulder Twist</span></a></div>\n      <div class=\"col-md-3\"><a data-fancybox-type=\"iframe\" href=\"http://www.youtube.com/embed/ziHTKqwuyg4\" class=\"fancybox\"><img src=\"/img/video-thumbnails/4-layer.png\"/><span>Layer</span></a></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\"><a data-fancybox-type=\"iframe\" href=\"http://www.youtube.com/embed/70hWLsQMTsM\" class=\"fancybox\"><img src=\"/img/video-thumbnails/5-belted.png\"/><span>Belted</span></a></div>\n      <div class=\"col-md-3\"><a data-fancybox-type=\"iframe\" href=\"http://www.youtube.com/embed/Ii2wmq_vqIY\" class=\"fancybox\"><img src=\"/img/video-thumbnails/6-knotted.png\"/><span>Knotted</span></a></div>\n      <div class=\"col-md-3\"><a data-fancybox-type=\"iframe\" href=\"http://www.youtube.com/embed/xDhfCBDryQ8\" class=\"fancybox\"><img src=\"/img/video-thumbnails/7-mini-knot.png\"/><span>Mini Knot</span></a></div>\n      <div class=\"col-md-3\"><a data-fancybox-type=\"iframe\" href=\"http://www.youtube.com/embed/l81CyqZNOlM\" class=\"fancybox\"><img src=\"/img/video-thumbnails/8-shirt.png\"/><span>Shirt</span></a></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\"><a data-fancybox-type=\"iframe\" href=\"http://www.youtube.com/embed/nzDLpDdQyFw\" class=\"fancybox\"><img src=\"/img/video-thumbnails/9-buckle.png\"/><span>Buckle</span></a></div>\n    </div>\n  </div>\n  <script src=\"http://www.youtube.com/player_api\"></script>\n</div>");
$templateCache.put("/partials/nav.html","\n<nav role=\"navigation\" class=\"navbar\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" class=\"navbar-toggle\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"/\" class=\"navbar-brand\"><span></span></a>\n    </div>\n    <div id=\"navbar-collapse\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"/instructional-videos\">Instructional Videos</a></li>\n        <li><a href=\"/my-story\">My Story</a></li>\n        <li><a href=\"/contact\">Contact</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>");
$templateCache.put("/partials/story.html","\n<div id=\"story\">\n  <div class=\"banner\"><img src=\"/img/red-one-shoulder.jpg\"/></div>\n  <div class=\"bd\">\n    <div class=\"container\">\n      <h1>My Story</h1><img src=\"/img/tish_headshot-copy2.jpg\" class=\"tish\"/>\n      <p>\n        Tish Grosek, businesswoman, designer, and mother, embarked on an unexpected and arduous \n        journey toward reinvention, self- discovery, and entrepreneurship. During this time Tish \n        created a versatile wrap dress that, with a sleek and comfortable look, caters to women everywhere.\n      </p>\n      <p>\n        Her Wrap is a unique concept for a dress that can go from day to night, or beach cover up to \n        cocktail dress, with the ease and versatility consistent with the lifestyle of today’s modern \n        day woman.  It’s poolside posh and evening elegant all wrapped up in one!  It comes in both \n        conservative and vibrant colors and is made from a high quality fabric that travels well.\n      </p>\n      <p>\n        Inspired by an Italian design concept, Tish converted her dining room table into a makeshift \n        cutting board and work studio in San Juan, Puerto Rico. After weeks of hand cutting fabric on her \n        dining room table, community recognition and acclaim through rapid word of mouth, persistent sales \n        in boutiques and bazaars, and a virtually instant sale of over two hundred wraps, Tish soon found a \n        mainland manufacturer and preceded to trademark her name and incorporate her company. “Wrap it by Tish” \n        was officially in business.\n      </p>\n      <p>\n        This year, Tish has been an exhibitor at four major fashion apparel shows, two international swimwear \n        trade shows and currently sells to over 25 boutiques in St Barthes, Aruba, Dominican Republic, Puerto Rico, \n        Jamaica, Mexico, Florida, Canada, Pennsylvania, online with opensky.com, and plans to continue with her \n        expansion. Visit her website, www.wrapitbytish.com\n      </p>\n      <p>\n        Tish is a native of Kingston, Pennsylvania, has lived in New York City and New Jersey, raised her two \n        children in San Juan, Puerto Rico, and currently resides in the suburbs of Philadelphia.\n      </p>\n      <p>Annual proceeds of the wrap dress will be donated to the alumni scholarship fund for Clearbrook Manor in Wilkes-Barre Pa.</p>\n    </div>\n  </div>\n</div>");}]);