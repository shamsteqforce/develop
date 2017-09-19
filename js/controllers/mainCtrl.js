var MainController = angular.module('mainCtrl', [])

MainController.controller('MainController', function($rootScope, $location, Auth,$window,cfpLoadingBar) {
    var vm = this;
    vm.loggedIn = Auth.isLoggedIn();
    if(vm.loggedIn)
    {
        $location.path('/search');
    }
	//$('#side-menu').metisMenu();
	


/*

    vm.user="";
        vm.test="testing";
        vm.loggedIn = Auth.isLoggedIn();
//alert(vm.loggedIn);

    if(vm.loggedIn)
    {
        console.log(localStorage.getItem('userDetails'));
        // vm.userName=localStorage.getItem('user').token;
        // alert(vm.userName);
        // alert('test');
    }

*/

    /*
        $rootScope.$on('$routeChangeStart', function() {

            vm.loggedIn = Auth.isLoggedIn();



          /*  Auth.getUser()
                .then(function(data) {
                    vm.user = data.data;
                });

        });
*/

        vm.doLogin = function() {

            vm.processing = true;

            vm.error = '';
            cfpLoadingBar.start();
            Auth.login(vm.loginData.email, vm.loginData.password)
                .success(function(data) {
                    vm.processing = false;

                   /* Auth.getUser()
                        .then(function(data) {
                            vm.user = data.data;
                        });
                    */

                    cfpLoadingBar.complete();
                    if(data.token) {
                       // localStorage.setItem('userDetails', data.user.name);
                       //console.log(data.token);
                        //console.log(localStorage.getItem('userDetails'));

                        $location.path('/search');
                    }

                })
                .error(function (data) {

                    $location.path('/login');
                    vm.error = "Invalid Login Credentials. Plz try again";
                    cfpLoadingBar.complete();
                });


        }




    })

   //========side bar
   
  /*
    MainController.controller('sidebarCtrl',function($scope){
        var retrievedObject = localStorage.getItem('message');
        var obj= JSON.parse(retrievedObject)
        $scope.user=obj;
        // var count=0;

        $scope.openUserList= function()
        {
            if(document.getElementById('droplist').style.display=='none')
                document.getElementById('droplist').style.display='block';
            else
                document.getElementById('droplist').style.display='none';
            // code examples from abovefooterBar
        }

        $scope.openVendorList= function()
        {
            if(document.getElementById('vendorlist').style.display=='none')
                document.getElementById('vendorlist').style.display='block';
            else
                document.getElementById('vendorlist').style.display='none';
            // code examples from abovefooterBar
        }
        $scope.openIndentMenu= function()
        {
            if(document.getElementById('indentMenu').style.display=='none')
                document.getElementById('indentMenu').style.display='block';
            else
                document.getElementById('indentMenu').style.display='none';
            // code examples from abovefooterBar
        }
        $scope.openMaterialMenu= function()
        {
            if(document.getElementById('materialMenu').style.display=='none')
                document.getElementById('materialMenu').style.display='block';
            else
                document.getElementById('materialMenu').style.display='none';
            // code examples from abovefooterBar
        }
        $scope.openpurchaseIndentMenu= function()
        {
            if(document.getElementById('purchaseMenu').style.display=='none')
                document.getElementById('purchaseMenu').style.display='block';
            else
                document.getElementById('purchaseMenu').style.display='none';
            // code examples from abovefooterBar
        }
		
		
		
		$scope.toggleset=function(){

           
		   if ($("body").hasClass("nav-md")) {
                document.body.className=document.body.className.replace("nav-md","nav-sm");
                document.getElementById('footerBar').style.display='none';
            }
            else  if ($("body").hasClass("nav-sm")) {
                document.body.className=document.body.className.replace("nav-sm","nav-md");
                document.getElementById('footerBar').style.display='block';
            }
			
           // alert("body class");

        }


    });*/