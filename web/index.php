<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">


<!--    <script data-main="./assets/mainOne" src="./assets/libs/require.js"></script>-->
    <script data-main="./built/tag/mainOne" src="./built/tag/libs/require.js"></script>
    <title></title>
</head>
<body>
<h1>Hello!</h1>
<div al-app="#lol popupCtrl">
    <div al-text="name"></div>
    <a href="#" al-click="alertTest()">Test</a>
</div>
<div class="tp"></div>
<div al-app="#lol">
    <div al-text="name"></div>
</div>
<div al-app="chatCtrl">
    <div al-text="room"></div>
</div>
</body>
</html>