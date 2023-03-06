  var ulang = confirm("Apakah anda mau mengulang?");
  var counter = 0;
  

  while(ulang){
      counter++;
      var bintang = "*". repeat(counter) + "<br>";
      document.write(counter + ": " + bintang);
      ulang =  confirm("Apakah Anda ingin mengulang ?");
  }