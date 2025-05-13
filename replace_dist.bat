call del index.html
call del favicon.png
call del home-bg-1.jpg
call rmdir assets /S /Q

call xcopy dist\* . /E /H /C /I

@pause