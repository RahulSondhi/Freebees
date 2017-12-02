<html>

<head>
  <title>Freebees</title>
  <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="../css/sky.css">
  <link rel="stylesheet" href="../css/animations.css">
  <link rel="stylesheet" href="../css/style.css">
  <script src="../js/resize.js"></script>
  <script src="../js/script.js"></script>
</head>

<body>

  <div id="stage" class="screen">

    <div id="header">
      <div id="menuButtonContainer" class="button">
        <div id="menuButton">&#9776;</div>
      </div>

      <div id="menuContainer"></div>
    </div>

    <div id="sky">

      <div id="skyContainer">
      <div id="logoContainer" class="button">
        <img src="../assets/logo.svg" id="logo">
      </div>
      <div id="logoText"></div>
    </div>

    <div id="contentContainer">
      <div id="contentTitle"></div>
      <div id="content">

        <form action="/connect/facebook" method="POST">
          <input type="hidden" name="scope" value="user_posts" />
          <div class="formInfo">
            <p>You aren't connected to Facebook yet. Click the button to connect this application with your Facebook account.</p>
          </div>
          <p><button type="submit">Connect to Facebook</button></p>
        </form>

      </div>
    </div>

    </div>

    <div id="pageBackground">
      <img src="../assets/background.svg" id="citySkyline" class="stageSet0">
    </div>
  </div>
</body>

</html>
