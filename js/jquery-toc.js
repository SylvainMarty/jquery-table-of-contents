/**
 * Jquery Table of content
 * Minified
 * @author Loïc Rey
 * @author Sylvain Marty
 * v1.0
 */
(function ($, root, undefined) {
  $(document).ready(function(){
    // Global variables
    var tableSelector = '#table-des-matieres';
        headingSelector = 'h2',
        mainContentParent = '.content-body',
        animationSpeed = 500,
        fadingIn = true;
    if($(tableSelector).length > 0) {
      /**
       * Créé une table des matières dynamique
       * Basé sur le code de
       * @author Loïc Rey
       * @author Sylvain Marty
       */
      var contenu = $(mainContentParent),
          $tabMatiere = $(tableSelector),
          listeOrdonnee = $tabMatiere.find('ol'),
          heading = contenu.children(headingSelector);
      if(fadingIn) {
        $tabMatiere.fadeIn(400);
      }
      heading.each(function(ind, el){
        var anchor;
        anchor = $(el).text().toLowerCase().replace(/ /g,"-");
        $(el).attr('id',anchor);
        $(listeOrdonnee).append('<li><a href="#'+anchor+'">'+$(el).text()+'</a></li>');
      });
      /**
       * @author CSS Trick
       * https://css-tricks.com/snippets/jquery/smooth-scrolling/
       */
      $(mainContentParent).find('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, animationSpeed);
            return false;
          }
        }
      });
    }
  });
})(jQuery, this);
