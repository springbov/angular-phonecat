(function(){
  'use strict';

  // Register `phoneList` component, along with its associated controller and template
  angular
    .module('phoneList')
    .controller('phoneListCtrlr', PhoneListController)
    .directive('phoneList', phoneListDirective);

  PhoneListController.$inject = ["Phone"];
  function PhoneListController(Phone)
  {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }

  function phoneListDirective()
  {
    return {
      scope: {},
      templateUrl: 'phone-list/phone-list.template.html',
      controller: PhoneListController,
      controllerAs: '$ctrl',
      bindToController: true
    };
  }

})()
