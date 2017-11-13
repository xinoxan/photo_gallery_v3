 
// retrieve input search functionality

 $('#myInput').on('keyup change', function() {
      var input, col, img;
      input = document.getElementById('myInput');
      input = input.value.toUpperCase();
      col = document.getElementsByClassName('col');
      
// loop through all captions img alt

      for (var i = 0; i < col.length; i++) {
        img = col[i].getElementsByTagName('img')[0];
        if (img.alt.toUpperCase().indexOf(input) > -1) {
          col[i].style.display = '';
        } else {
          col[i].style.display = 'none';
        }
      }
    });