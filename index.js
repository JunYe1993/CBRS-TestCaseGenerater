$(document).ready(function() {
     function getTestCases(){
          $("#testcaelist").html("");
          $("#testcaelist").html(getTestCasesTable());
     }
     function getTestCasesTable(){
          var tablehtml = '<table class="table">';
          tablehtml += '<thead><tr>';
          tablehtml += '<th>Id</th>';
          tablehtml += '<th>Condition</th>';
          tablehtml += '<th>Title</th>';
          tablehtml += '<th>Content</th>';
          tablehtml += '</tr></thead>';
     
          tablehtml += '<tbody>';
          $.each(data, function(i, item){
               if(testplanCheck(item) || cpiCheck(item) || optionalCheck(item) || conditionCheck(item))return;
               tablehtml += '<tr>';
               tablehtml += '<td><label>'+ item.Id +'</label></td>';
               tablehtml += '<td><label>'+ item.Condition +'</label></td>';
               tablehtml += '<td><label>'+ item.Title +'</label></td>';
               tablehtml += '<td><label>'+ item.Content +'</label></td>';
               tablehtml += '</tr>';
          });
          tablehtml += '</tbody>';
          tablehtml += '</table>';
          return tablehtml;
     }
     function testplanCheck(item){
          var type = $("input[name=\"testplan\"]:checked").val();
          switch(type){
               case undefined:   
                    return false;
               case "CBSD":
                    return (item.CBSD == "O") ? false:true;
               default:
                    return (item.DP == "O") ? false:true;
          }
     }
     function cpiCheck(item){
          // return false;
          var type = $("input[name=\"cpi\"]:checked").val();
          if(item.Title == "WINNF.FT.C.REG.20")
               console.log(item.Title + " : " + (type == "X" || item.CPI == "O"))
          return (type == "X" || item.CPI == "O") ? false : true;
     }
     function optionalCheck(item){
          var response = false
          var type = $("input[name=\"optional\"]:checked").val();
          if(item.Condition == "O" && type == "X")response = true;
          return response;
     }
     function conditionCheck(item){
          var response = true;
          var conditions = $(".condition");
          if(item.Condition == "M" || item.Condition == "O"){
               response = false;
          }else{
               conditions.each(function(){
                    if($(this).prop('checked') == true)
                         if(item.Condition == $(this).next().html())
                              response = false;
               });
          }
          return response;
     }
     $("#testcaelist").html(getTestCasesTable());

     $("input[name=\"testplan\"]").change(function(){
          getTestCases();
     });
     $("input[name=\"cpi\"]").change(function(){
          getTestCases();
     });
     $("input[name=\"optional\"]").change(function(){
          getTestCases();
     });
     $(".condition").click(function(){
          getTestCases();
     });
});
