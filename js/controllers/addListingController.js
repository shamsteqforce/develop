var addListCtrl = angular.module('addListingCtrl', []);
addListCtrl.controller('AddListingController', function ($scope,$location,$http,Auth,$location) {
    
	$scope.loggedIn = Auth.isLoggedIn();

    if(!$scope.loggedIn)
        $location.path('/');
		
$scope.image_source1="views/assets/img/noImage.png";
$scope.image_source2="views/assets/img/noImage.png";	
$scope.image_source3="views/assets/img/noImage.png";	

 $scope.setFirstFile = function(element) {
  $scope.currentFile = element.files[0];
   var reader = new FileReader();

  reader.onload = function(event) {
    $scope.image_source1 = event.target.result
    $scope.$apply()

  }
  // when the file is read it triggers the onload event above.
  reader.readAsDataURL(element.files[0]);
}

 $scope.setSecondFile = function(element) {
  $scope.currentFile = element.files[0];
   var reader = new FileReader();

  reader.onload = function(event) {
    $scope.image_source2 = event.target.result
    $scope.$apply()

  }
  // when the file is read it triggers the onload event above.
  reader.readAsDataURL(element.files[0]);
}

 $scope.setThirdFile = function(element) {
  $scope.currentFile = element.files[0];
   var reader = new FileReader();

  reader.onload = function(event) {
    $scope.image_source3 = event.target.result
    $scope.$apply()

  }
  // when the file is read it triggers the onload event above.
  reader.readAsDataURL(element.files[0]);
}

	
 var category = [
      { name: 'Bed and Breakfast', sub: 'Bed and Breakfast' },
      { name: 'Brewery, Distillery', sub: 'Beer, Wine and Cocktails' },
      { name: 'Wine', sub: 'Beer, Wine and Cocktails' },
      { name: 'Cocktails', sub: 'Beer, Wine and Cocktails' },
      { name: 'Chef, Caterer and Meal Delivery', sub: 'Chef, Caterer and Meal Delivery' },
      { name: 'All', sub: 'Farm' },
      { name: 'CSA', sub: 'Farm' },
      { name: 'Coffee/Tea', sub: 'Farm' },
      { name: ' Dairy', sub: 'Farm' },
      { name: 'Eggs', sub: 'Farm' },
      { name: ' Maple/Honey/Herbs and Spices', sub: 'Farm' },
      { name: 'Meat', sub: 'Farm' },
      { name: 'Poultry', sub: 'Farm' },
      { name: ' Produce - Vegetables', sub: 'Farm' },
      { name: 'Produce - Fruit and Berries', sub: 'Farm' },
      { name: ' Produce - Preserves', sub: 'Farm' },
      { name: 'Seafood', sub: 'Farm' },
      { name: 'Tofu, Nuts, Mushrooms', sub: 'Farm' },
      { name: 'Other', sub: 'Farm' },
      { name: 'Farmers Market', sub: 'Farmers Market' },
      { name: 'All', sub: 'Organizations' },
      { name: 'Education', sub: 'Organizations' },
      { name: 'Community Garden', sub: 'Organizations' },
      { name: 'Mobile Market', sub: 'Organizations' },
      { name: 'All', sub: 'Restaurant' },
      { name: 'Bakery', sub: 'Restaurant' },
      { name: 'Coffee Shops', sub: 'Restaurant' },
      { name: 'Dessert', sub: 'Restaurant' },
      { name: 'Food Truck', sub: 'Restaurant' },
      { name: 'Kosher/Halal', sub: 'Restaurant' },
      { name: 'Vegan/Vegetarian', sub: 'Restaurant' },
      { name: 'All', sub: 'Stores' },
      { name: 'Bakery', sub: 'Stores' },
      { name: 'Butcher shop', sub: 'Stores' },
      { name: 'Cheese shop', sub: 'Stores' },
      { name: 'Co-op', sub: 'Stores' },
      { name: 'Fish Market', sub: 'Stores' },
      { name: 'Online shop', sub: 'Stores' },
      { name: 'Specialty Shop', sub: 'Stores' },
    ];
    $scope.category = category;
  
    $scope.data = {
        select: null,
        availableOptions: [{id: '1', name: 'CAN'},
      {id: '2', name: 'UK'},
      {id: '3', name: 'US'}]
    }
    $scope.data2 = {
        select: null,
        availableOptions2: [{ id: '1', name: 'lb' },
      { id: '2', name: 'bunch' },
      { id: '3', name: 'kg' }]
    }
    var formData=[{
        "title": "Test Title",
        "description": "test description",
        "accountId": "sdfadf2414341234s",
        "images": {
            "image_data_1": "image_data_1",
            "image_data_2": "image_data_2",
            "image_data_3": "image_data_3"
        },
        "price": {
            "base_price": "25",
            "currency": "dollar",
            "unit": "bunch",
            "quantity": "5",
            "min_quantity": "5",
            "max_quantity": "10"
        }
    }]
	
	 var userDetailsData = localStorage.getItem('userDetails');
     var jsonUserData = JSON.parse(userDetailsData);
     var accountId = jsonUserData.user.accountId;
		 
	
	$scope.form={};
	$scope.form.images={};
$scope.form["accountId"] = accountId;



if($scope.form.images.image_data_1=='' || typeof $scope.form.images.image_data_1==='undefined')
		{
		delete $scope.form.images["image_data_1"];
		//alert($scope.form.images.image_data_1);
		}
$scope.files={};		
$scope.files=$scope.form.images;



    $scope.save = function () {
        formData = $scope.form;
    };

    $scope.submitForm = function () {
        console.log("saving json data....");
        formData = $scope.form;
        console.log(formData);
    };

    //$scope.mainImageUrl = data.images[0];
    //$scope.setImage = function (imageUrl) {
    //    $scope.mainImageUrl = imageUrl;
    //};


    $scope.step = 1;
    $scope.nextStep = function () {
        $scope.step++;
    }

    $scope.prevStep = function () {
        $scope.step--;
    }


    $(document).ready(function () {
        // Basic
        $('.dropify').dropify();

        // Translated
        $('.dropify-fr').dropify({
            messages: {
                default: 'Glissez-déposez un fichier ici ou cliquez',
                replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
                remove: 'Supprimer',
                error: 'Désolé, le fichier trop volumineux'
            }
        });

        // Used events
        var drEvent = $('.dropify-event').dropify();

        drEvent.on('dropify.beforeClear', function (event, element) {
            return confirm("Do you really want to delete \"" + element.filename + "\" ?");
        });

        drEvent.on('dropify.afterClear', function (event, element) {
            alert('File deleted');
        });
    });
    //$scope.next = function (path) {
    //    $location.path(path);
    //};
    //$scope.prev = function (path) {
    //    $location.path(path);
    //};
});


