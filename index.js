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
               if(typeCheck(item) || conditionCheck(item))return;
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
     function typeCheck(item){
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
     function conditionCheck(item){
          var response = true;
          var conditions = $(".condition");
          if(item.Condition == "M" || item.Condition == "O")return false;
          conditions.each(function(){
               if($(this).prop('checked') == true)
                    if(item.Condition == $(this).next().html())
                         response = false;
          });
          return response;
     }
     $("#testcaelist").html(getTestCasesTable());
     $("input[name=\"testplan\"]").change(function(){
          getTestCases();
     });
     $(".condition").click(function(){
          getTestCases();
     });
});
