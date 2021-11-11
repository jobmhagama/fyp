$("document").ready(()=>{

    alert("Hellow")

    async function update(id) {
        await contract.tender(id).then((tender) => {
  
        
        })
  
      }
      async function publish(id) {
        await contractW.publish(id).then((receipt) => {
        })
  
        window.location.href = "/publishtender"
  
  
      }
      function refreshPage() {
  
        window.location.reload();
  
      }
    

 })


 $(document).ready(async () => {

    // user address 
    const acc = await signer.getAddress();
    contract.tenderCounts().then(async (data) => {
      //Nt number of tenders belongs to this user
      let nt = parseInt(data)
          $("#info").show()
          $("#data").hide()
      for (i = 1; i <= nt; i++) {
        
        contract.tender(i).then((tender) => {
          
          if (tender._address == acc) {
            $("#data").show()
            $("#info").hide()
       
            const tenderTemplate = `<tr style="text-align:center">
                                          <td>${tender[0]}</td>
                                          <td>${tender[1]}</td>
                                          <td>${tender[3]}</td>
                                          <td>${tender[2]}</td>
                                          <td>${tender[4]}</td>
                                          <td>${tender[5]}</td>
                                          <td><a href="#" onclick="update(${tender[0]});" class="btn btn-info">Update </a ></td>  
                                          <td><a href="#" onclick="publish(${tender[0]});" class="btn btn-primary">pulish</a ></td> >                           
                            </tr>`;
            $("#tenders").append(tenderTemplate);

          }
         

        })


      }


    })


  })