# gruntjs-requirejs
`npm install` then `grunt`

directory structure:

modules – модули
  - chat
    - chatMain.js
      > (require controllers + init controllers + require dependencies)
    - directives
      - chat.readMessage.js
      - chat.writeMessage.js
      - chat.popupWindow.js
      ...
    - controllers
      - chat.js
      - watcher.js
    - css
      - message.css
      - room.css
      ...
    - images
      - icons
      - backgrounds
      ...
    - models
      - Message.js
      - Room.js
      ...
  - search
  - center create
  - campaign create
  - profile
  
