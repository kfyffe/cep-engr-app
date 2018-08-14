// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
//function buttons(firstName,lastName,jobTitle,homeOffice,tellMeMore) {
//  this.firstName = firstName;
//  this.lastName = lastName;
//  this.jobTitle = jobTitle;
//  this.homeOffice = homeOffice;
//  this.tellMeMore = tellMeMore;
//}

// var firstName = 'Kristen';
// var lastName = 'Fyffe';
// var jobTitle = 'Implementation Specialist';
// var homeOffice = 'Austin East';
// var tellMeMore = 'We already know that I want to be a web developer, but there are several other aspects to my life. I love to travel and tropical destinations are my favorite, even though I have a deep appreciation for places that offer history and arts. I also have a childhood desire of joining the circus, but instead of running away, I participate in the Austin aerial arts community.';
//var buttons = {
//  firstName: "First Name"
//  lastName: "Last Name"
//  jobTitle: "Job Title"
//  homeOffice: "Home Office"
//  tellMeMore: "Tell Me More"
//}
// var butn = { 'firstNameBtn':'firstName',
//              'lastNameBtn':'lastName',
//              'whatever':'firstName',
// };
//
// $(document).ready(function(){
//   for(var key in butn) {
//     // var blah = butn[key];
//     var blah = "" + butn[key];
//
//     // do something with "key" and "value" variables
//
//         $("#" + key).click(function(){
//             $("#" + blah).toggle();
//         });
//   }
// });

// using jQuery and the object above, display the information as the appropriate button is clicked
$(document).ready(function(){
        $("#firstName").hide();
  });
$(document).ready(function(){
            $("#lastName").hide();
   });
$(document).ready(function(){
            $("#jobTitle").hide();
   });
$(document).ready(function(){
           $("#homeOffice").hide();
   });
$(document).ready(function(){
           $("#tellMeMore").hide();
   });
$(document).ready(function(){
    $("#firstNameBtn").click(function(){
        $("#firstName").toggle();
    });
});
$(document).ready(function(){
    $("#lastNameBtn").click(function(){
        $("#lastName").toggle();
    });
});
$(document).ready(function(){
    $("#jobTitleBtn").click(function(){
        $("#jobTitle").toggle();
    });
});
$(document).ready(function(){
    $("#homeOfficeBtn").click(function(){
        $("#homeOffice").toggle();
    });
});
$(document).ready(function(){
    $("#tellMeMoreBtn").click(function(){
        $("#tellMeMore").toggle();
    });
});
//$(document).ready(function(){
//    $("button").click(function(){
  //      $("#firstName").toggle();
//        $("#lastName").toggle();
//        $("#title").toggle();
  //      $("#homeOffice").toggle();
  //      $("#tellMeMore").toggle();
//    });
//});
