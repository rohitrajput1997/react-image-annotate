@ECHO OFF
REM change console screen
COLOR F0
REM source folder location
set Source_Folder=C:\Users\91865\Desktop\new\react-image-annotate\dist
REM destination folder location
set Dest_Folder=C:\Users\91865\Desktop\nsworkflow\frontend\dist


REM if destination folder not available, create
mkdir %Dest_Folder%
REM copy the files

Xcopy C:\Users\91865\Desktop\new\react-image-annotate\dist C:\Users\91865\Desktop\nsworkflow\frontend\dist /E /H /C /I