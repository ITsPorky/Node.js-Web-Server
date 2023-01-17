# Node.js-Web-Server

A simple Node.js and Express.js web server to host static files, such as a basic website.

## Setup Notes:

1. You must have node installed for this web server to work.
2. Then run the `setup.bat` file to install all node packages that the web server uses.
3. Once the node modules are installed, you can start the server using the `run_server.bat` file. (Note: This is a windows batch file so it will only work on windows)
4. If you wish to open a tunnel to your local host, this can be achieved with tools such as ngrok. If you wish to do this you will have to
   install `ngrok` and edit the `run_server.bat` file to point to the location of the `ngrok.exe` file. Uncomment the ngrok line in the `run_server.bat`, and update the ip address if needed.

## Hosting files

Any files you would like hosted should be added to the public directory.
