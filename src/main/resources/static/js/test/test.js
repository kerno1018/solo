define(['knockout'],function(ko){
   function test(){
        var self = this;
        self.firstName=ko.observable("abc");
        self.lastName=ko.observable("def");
        self.fullName = ko.computed(function(){
            return self.firstName()+" " + self.lastName();
        },this);
        self.test = function(c){
            self.firstName("hello");
        }
    }
    return new test();
});