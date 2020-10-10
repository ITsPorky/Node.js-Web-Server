:: Used to install all node.js dependencies for this project

@echo off

:: Go to batch file directory
echo %~dp0
cd /d %~dp0

echo %CD%

:: Install node modules
echo INSTALLING express.js ...
call npm install express --save
echo FINISHED ...
echo INSTALLING chalk.js ...
call npm i chalk
echo FINISHED ...
echo INSTALLING express-ip ...
call npm install express-ip
echo FINISHED ...
echo DONE!

:: Keep console open after complete
PAUSE
