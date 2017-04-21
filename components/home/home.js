angular.module('homeModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: 'components/home/home.html',
            controller:'homeCtrl',
            css:'components/home/home.css'
        })
})

//依赖注入
//.service('swiper',['$timeout',function($timeout){
//	$timeout(function(){
//		new Swiper ('.swiper-container', {
//		    loop: true,
//		    autoplay:500,
//		    // 如果需要分页器
//		    pagination: '.swiper-pagination',
//		  }) 
//	},10);
//}])

.controller('homeCtrl',['$scope','$http',function($scope,$http){
	$scope.isChang1=true
	$scope.isChang2=false
	$scope.isChang2=false
	$http.get('json/topContent.json').success(function(res){
		console.log(res.data);
		$scope.home_head=res.data[32377];
		$scope.home_up=res.data[5956];
		$scope.home_menu=res.data[13730];
	})
	$http.get('json/niuzaiku.json').success(function(res){
		console.log(res.data);
		$scope.home_menu_next=res.data
	})
	$http.get('json/moren.json').success(function(res){
		console.log(res.data);
		$scope.moren=res.data.list;
		$scope.home_tab_main=$scope.moren;
		
	})
	$http.get('json/jingxuan.json').success(function(res){
		console.log(res.data);
		$scope.jingxuan=res.data.list;
		
	})
	$http.get('json/zuixin.json').success(function(res){
		console.log(res.data);
		$scope.zuixin=res.data.list;
	
	})
	$scope.isClick=function(datas){
		$scope.home_tab_main=datas;	
	}
	
	
}])