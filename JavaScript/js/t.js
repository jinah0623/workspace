'use strict';

/* function abc(){
    let a='bbb';
    console.log(a)
    function c(){
       console.log(a);
       (function(){
           console.log(a);
           a='ccc';
       })();
       var a;
       console.log(a);
    }
    function d(){
        console.log(a);
    }
    c();
    a='ddd';
    d();
};
abc();
*/
/* let obj = {
    a:console.log(this),
    fn:function(){
        console.log(this);
        function fn(){
            console.log(this);
        }
        fn();
    }
}
obj.a;
obj.fn();

*/

/* let a = 'g';
function fn(){
    console.log(a);
    var a = 'l';
    console.log(a);
}
fn(); */

var say ='hello';

function print(){
    console.log(say);
    var say = 'world';
    console.log(say);
    
    function inner_print(){
        console.log(say);
        var say = 'Good';
        console.log(say);
        say = 'Bye';
        console.log(say);
    }
    inner_print();
}
print();