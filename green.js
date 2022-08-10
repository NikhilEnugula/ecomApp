var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  $scope.plants = [
    {
      image: "../ecomApp/img/Adenium.jpg",
      id: 1,
      section: "flwer|plants",
      name: "Adeniuam obesum",
      desc: "Desert rose plant, we can grow indoor and outdoor",
      price: "399",
    },
    {
      image: "../ecomApp/img/aglaonema.jpg",
      id: 2,
      section: "decorative|plants",
      name: "Golden Bay",
      desc: "This glowing ower sized chinese evergreen is tinged by sun",
      price: "699",
    },
    {
      id: 3,
      section: "decorative|plants",
      name: "Green Fills Syngonium Plant ",
      desc: "Syngonium plant type foliage it can grow indoor and outdoor",
      image: "../ecomApp/img/Arrowhead.jpg",
      price: "399",
    },
    {
      id: 4,
      section: "flower|plants",
      name: "Ixora Mini Dwarf(pink)",
      desc: "pink color plant it can grow indoor and outdoor",
      image: "../ecomApp/img/Chineseixora.jpg",
      price: "299",
    },
    {
      id: 5,
      section: "decorative|plants",
      name: "Chlorophytum comosum",
      desc: "Also kwon as Spyder plant ,its grow 60cm tall",
      image: "../ecomApp/img/Chlorophytum.jpg",
      price: "699",
    },
    {
      id: 6,
      section: "flower|plants",
      name: "Chalisa Crossandra,kanakambaram",
      desc: "Flower plant It can grow indoor and outdoor",
      image: "../ecomApp/img/Crossandra.jpg",
      price: "129",
    },
    {
      id: 7,
      section: "flower|plants",
      name: " Cymbidium Orchid",
      desc: "Silk butterfly flowers ,itcan grow Indoor and outdoor ",
      image: "../ecomApp/img/CymbidiumOrchidPlant.jpg",
      price: "599",
    },
    {
      id: 8,
      name: "Dragon tree",
      section: "decorative|plants",
      desc: "it is a house plant that has long elegant long",
      image: "../ecomApp/img/dracaena.jpg",
      price: "499",
    },
    {
      id: 9,
      name: "Weeping fig",
      section: "decorative|plants",
      desc: "Ficus benjamina is spacing of  plant",
      image: "../ecomApp/img/figtrees.jpg",
      price: "609",
    },
    {
      id: 10,
      section: "decorative|plants",
      name: "Jade plant",
      desc: "live jade plant  it look beautiful in the garden",
      image: "../ecomApp/img/gaachkalanchoe.jpg",
      price: "229",
    },
    {
      id: 11,
      section: "flower|plants",
      name: "Barberton daisy",
      desc: "It is species of flowering plant",
      image: "../ecomApp/img/Gerberapink.jpg",
      price: "450",
    },
    {
      id: 12,
      section: "flower|plants",
      name: "Impatients balsamina",
      desc: "it si commonly known as balsam ,rose balsam",
      image: "../ecomApp/img/impatiens.jpg",
      price: "150",
    },
    {
      id: 13,
      section: "decorative|plants",
      name: "Jade plant",
      desc: "live jade plant  it look beautiful in the garden",
      image: "../ecomApp/img/jadeplant.jpg",
      price: "249",
    },
    {
      id: 14,
      section: "flower|plants",
      name: "Orchid purple",
      desc: "Silk butterfly flowers ,itcan grow Indoor and outdoor",
      image: "../ecomApp/img/orchidpurple.jpg",
      price: "339",
    },
    {
      id: 15,
      section: "decorative|plants",
      name: "Spathiphyllum wallisii",
      desc: "Commonly known as pease lily white sails or spathe ",
      image: "../ecomApp/img/Peacelily.jpg",
      price: "449",
    },
    {
      id: 16,
      section: "flower|plants",
      name: "Doritaenopsis",
      desc: "artificial hybrids first formally pink flower plant",
      image: "../ecomApp/img/Orchi.jpg",
      price: "649",
    },
    {
      id: 17,
      section: "flower|plants",
      name: "Rose ",
      desc: "A rose is either a woody perennial flowering plant of the genus Rosa",
      image: "../ecomApp/img/rose.jpg",
      price: "150",
    },
    {
      id: 18,
      section: "flower|plants",
      name: "Shevanti,Chrysanthemum",
      desc: "Some times called mums or chrysanths,are flowering plants",
      image: "../ecomApp/img/shevantiplants.jpg",
      price: "129",
    },
    {
      id: 19,
      section: "decorative|plants",
      name: "Paiters-palette",
      desc: "Antherium andraenum is a  plant species in the family",
      image: "../ecomApp/img/sillopink.png",
      price: "449",
    },
    {
      id: 20,
      section: "decorative|plants",
      name: "thulasi/Stevia",
      desc: "Stevia rebaudiana is a plant species in the genus stevia of the family Asteraceae",
      image: "../ecomApp/img/stevia.jpg",
      price: "229",
    },
    {
      id: 21,
      section: "decorative|plants",
      name: "Dwarf umbrella tree",
      desc: "Schefflera arboricola is a  plant in the family",
      image: "../ecomApp/img/umbrella.jpg",
      price: "449",
    },
  ];
  $scope.cart = [];
  $scope.message = "";
  $scope.isShown = false;
  $scope.show = function (ite) {
    $scope.isShown = $scope.isVisible ? false : true;
  };
  $scope.store = function (item) {
    if (item) {
      $scope.cart.push({
        section: item.section,
        name: item.name,
        desc: item.desc,
        quntity: item.quntity,
        price: item.price,
      });
    }
    $scope.len = $scope.cart.length;
  };

  $scope.move = function (item) {
    if (item) {
      $scope.cart.push({
        name: item.name,
        desc: item.desc,
        price: item.price,
        image: item.image,
      });
      $scope.plants.splice($scope.buyItems.indexOf(item), 1);
    }
  };

  $scope.fil = { $: undefined };

  $scope.offData = false;

  $scope.flower = function () {
    $scope.offData = true;
    $scope.fil = "flower";
  };
  $scope.decorative = function () {
    $scope.offData = true;
    $scope.fil = "decorative";
  };
  $scope.setFilter = function () {
    if ($scope.plants != "") {
      $scope.offData = true;
      $scope.fil = $scope.plants;
    } else {
      $scope.offData = false;
    }
  };

  $scope.nikhil = false;

  $scope.openNikilP = function () {
    $scope.nikhil = true;
    $scope.logPage = false;
  };
  $scope.closeNikilP = function () {
    $scope.nikhil = false;
  };

  $scope.clearCart = function () {
    $scope.cart.length = 0;
  };

  $scope.removeItem = function (item) {
    var index = $scope.cart.indexOf(item);
    $scope.cart.splice(index, 1);
  };
  $scope.fav = function (event) {
    event.currentTarget.style.color =
      event.currentTarget.style.color == "red" ? "white" : "red";
  };
  //payment
  $scope.payment = "Proceed To Pay";
  $scope.displayPay = false;
  $scope.Payment = function () {
    if ($scope.displayPay == false) {
      $scope.displayPay = true;
      $scope.payment = "Close Payment";
      $scope.btnStyle = {
        "background-color": "red",
      };
    } else {
      $scope.displayPay = false;
      $scope.payment = "Proceed To Pay";
      $scope.btnStyle = {
        "background-color": "green",
      };
    }
  };
  $scope.cardis = false;

  $scope.openCartItems = function () {
    $scope.cartdis = true;
  };

  $scope.backToCart = function () {
    $scope.cartdis = false;
    $scope.bgStyle = {
      opacity: "1",
    };
  };
  $scope.finalAlert = "your payment is completed";
  $scope.alertSubmit = (finalAlert) => {
    $window.alert(finalAlert);
  };
  $scope.loginPage = false;

  $scope.logInEnter = function () {
    $scope.loginPage = true;
  };

  $scope.userForm = false;
  $scope.userLogin = function () {
    $scope.userForm = true;
    $scope.userphoneForm = false;
    $scope.newUser = false;
    $scope.userbtnstyle = {
      "background-color": "green",
      color: "white",
    };
    $scope.phnbtnstyle = {
      "background-color": "none",
      color: "black",
    };
  };

  $scope.userphoneForm = false;
  $scope.userPhoneLogin = function () {
    $scope.userphoneForm = true;
    $scope.userForm = false;
    $scope.newUser = false;
    $scope.phnbtnstyle = {
      "background-color": "green",
      color: "white",
    };
    $scope.userbtnstyle = {
      "background-color": "none",
      color: "black",
    };
  };

  $scope.logPage = false;
  $scope.openLog = function () {
    $scope.logPage = true;
    $scope.nikhil = false;
  };
  $scope.closeLog = function () {
    $scope.logPage = false;
  };
  $scope.contShow = false;
  $scope.openCont = function () {
    $scope.contShow = true;
  };
  $scope.closeCont = function () {
    $scope.contShow = false;
  };
});
