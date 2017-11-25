var myModule = angular.module("myModule",[]);

myModule.controller("myController",['$scope',function($scope){
    $scope.numberOfItemInCart = 0;
    $scope.numberOfFavouriteItemInCart = 0;
    $scope.addToCart = function(){
          $scope.numberOfItemInCart++ ; 
          $( "div.success.succesAddCart" ).fadeIn( 300 ).fadeIn( 300 ).delay( 1000 ).fadeOut( 400 );
    };
    $scope.addFavouriteToCart = function(){
          $scope.numberOfFavouriteItemInCart++ ;
          $( "div.success.succesAddFav" ).fadeIn( 300 ).fadeIn( 300 ).delay( 1000 ).fadeOut( 400 );
    };
    $(function(){
  
    $('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});
        
    $(".shirtFav").click(function(){            
    var imageAddress = $(this).parent().parent().parent().find('.imageCss').attr('src'); 
    var imageName = $(this).parent().parent().parent().parent().find(".marginParaCss i").text();  
        
    $("#myCart").prepend('<li><div class="container-fluid"><div class="panel panel-default marginBtm"><div class="panel-body panelColorRed"><div class="row"><div class="col-md-4 col-sm-4 col-xs-4"><img src="'+imageAddress +'" width="100%" alt=""></div><div class="col-md-8 col-sm-8 col-xs-8">'+imageName + '<span class="closeBtnFav">X</span></div></div></div></div></div></li>');
    $(".closeBtnFav").unbind();
     $(".closeBtnFav").click(function(){
    $scope.$apply(function(){
         $scope.numberOfFavouriteItemInCart = $scope.numberOfFavouriteItemInCart - 1 ;
    });
    $(this).closest('li').remove();
    });    
   });
        
   $(".shirtBuy").click(function(){       
       var imageAddress = $(this).parent().parent().parent().find('.imageCss').attr('src'); 
       var imageName = $(this).parent().parent().parent().parent().find(".marginParaCss i").text();  
       
         $("#myCart").prepend('<li><div class="container-fluid"><div class="panel panel-default marginBtm"><div class="panel-body panelColorGreen"><div class="row"><div class="col-md-4 col-sm-4 col-xs-4"><img src="'+imageAddress +'" width="100%" alt=""></div><div class="col-md-8 col-sm-8 col-xs-8">'+imageName + '<span class="closeBtnBuy">X</span></div></div></div></div></div></li>');
    $(".closeBtnBuy").unbind();
     $(".closeBtnBuy").click(function(){
    $scope.$apply(function(){        
         $scope.numberOfItemInCart = $scope.numberOfItemInCart - 1 ;
    });
    $(this).closest('li').remove();
    });  
   });
});
}]);

