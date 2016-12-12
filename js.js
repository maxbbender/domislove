

/**
 * Created by TH3M45T3R on 1/3/2015.
 */

$(document).ready(function(){
    /*
     Unicorn Setup
     */
    right = 0;
    frame = 0;
    unicornAnimated = setInterval(function(){
        right = right + 5;
        animateUnicorn(right, frame);
        if (frame == 5){
            frame = 1;
        } else {
            frame++;
        }
    }, 100);

    /*
     Deal With It Glasses
     */
    var elem = document.getElementById("deal");
    setTimeout(function(){
        numTop = 0;
        var dom1 = domLeft();
        elem.style.top = "0%";
        elem.style.display = "inline";
        var glasses = setInterval(function() {
            elem.style.top = numTop + "%";
            numTop++;
            if (numTop == 46){
                clearInterval(glasses);
                clearInterval(dom1);
            }
        }, 50);
        numTop++;
    }, 37975);

    /*
     Background Image
     */
    var randNumber = Math.floor((Math.random() * 3) + 1);
    var backURL = "images/backgrounds/";
    if (randNumber == 1) {
        backURL += "back1.gif";
    } else if (randNumber == 2) {
        backURL += "back2.gif";
    } else {
        backURL += "back3.gif";
    }
    document.body.style.backgroundImage = "url('" + backURL + "')";

    /*
     Wowzers Text
     */
    setTimeout(function() {
        document.getElementById("wowzerstxt").style.display = "inline";
        document.getElementById("omg").style.display = "inline";
        color(30, "wowzerstxt");
        imageColor(30, "omg");
    },40000);

    /*
     Title Text
     */
    color(200, "title");

    // $("#everything").mousedown( function(){
    //     $('body').css('background-image', 'url(images/background2.gif)');
    //     /*
    //      Show Satan
    //      */
    //     $('#demonLeft').css('display', 'inline');
    //     $('#demonRight').css('display', 'inline');
    //     $('#fireDiv').css('display', 'inline');
    //     $('#dom').attr("src", 'images/dom6.png');

    //     // -- Get Unicorn Current Position and Stop Timeout -- //
    //     var element = document.getElementById('unicorn');
    //      var style = window.getComputedStyle(element);
    //      unicornRight = style.getPropertyValue('right');
    //      stopUnicorn();

    // }).bind('mouseup', function(){
    //     $('body').css('background-image', 'url(images/background.gif)');
    //     /*
    //      Hide Satan
    //      */
    //     $('#demonLeft').css('display', 'none');
    //     $('#demonRight').css('display', 'none');
    //     $('#fireDiv').css('display', 'none');
    //     $('#dom').attr("src", 'images/dom5.png');

    //     /*
    //      Start Unicorn Running Again
    //      */
    //     //startUnicorn(unicornRight);


    // });

    /*
     Set random charity link
     */
    document.getElementById("charityLink").href = randomCharity();

    function color(interval, id){
        var elem2 = document.getElementById(id);
        var color2 = "";
        setInterval(function(){
            color2 = '#' + (function co(lor){   return (lor +=
                [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
            && (lor.length == 6) ?  lor : co(lor); })('');
            elem2.style.color = color2;
        }, interval);
    }

    function imageColor(interval, id){
        var elem2 = document.getElementById(id);
        var color2 = "";
        setInterval(function(){
            color2 = '#' + (function co(lor){   return (lor +=
                [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
            && (lor.length == 6) ?  lor : co(lor); })('');
            elem2.style.backgroundColor = color2;
        }, interval);
    }

    function domLeft(){
        var elem3 = document.getElementById("domLeft");
        var dom1 = setInterval(function(){
            elem3.style.display = "inline";
            setTimeout(function() {
                elem3.style.display = "none"
            }, 10);
            //elem3.style.display = "none";
        }, 10);
        return dom1;
    }

    function animateUnicorn (right, frame){
        var unicorn = document.getElementById("unicorn");
        var horse = document.getElementById("horse");
        unicorn.style.right = right + "px";
        // unicorn.src = "images/unicorn" + frame + ".gif";
        if (right == 720){
            horse.style.display = 'inline';
        } else {
            horse.style.display = 'none';
        }
    }

});

    function randomCharity(){
        var charity = [
            "http://www.blackcharities.net/",
            "https://www.aspca.org/secure/donate?ms=wb_sub_sitewide-donatelink-orangewhite&initialms=wb_sub_sitewide-donatelink-orangewhite",
            "https://www.unicefusa.org/donate/end-preventable-child-deaths/20281"
        ];
        var random = Math.floor((Math.random() * charity.length));
        return charity[random];
    }
