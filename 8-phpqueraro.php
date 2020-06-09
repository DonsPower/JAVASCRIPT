<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <script type="text/javascript">
  showCircle(150, 150, 100, div => {
div.classList.add('message-ball');
div.append("Hello, world!");
});
  </script>
  <body>
    <?php echo "Hola mundo";
    //  $cont=0;
      for ($i=0; $i < 5; $i++) {
        print "$i: Hola <br>";
        //$cont++;
        if ($i==3) {
          print ("Esto es un if <br>");
          //  break;
        }

      }

      print "Esto es una simple linea";
    ?>
  </body>
</html>
