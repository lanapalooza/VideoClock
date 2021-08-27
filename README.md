# VideoClock

I was trying to accomplish a couple of things with this project...

- Use one of the several RPi's I had kicking around
- Use one of the several LCD monitor's I had kicking around
- Make a clock for a room in the basement that didn't have one

I have ngnix running on a raspian install on the RPi, it auto log's in on boot and starts chromium in kiosk mode calling localhost. The files in this repository sit in var/www/html.

You need to also create a data directory and fill it with mp4 files named numerically starting at 1.mp4, 2.mp4, 3.mp4... etc.

You need to make one edit on line 12 of the index.html to include the number of mp4's you have in the \data directory.

There are a couple of spots in app.js (Lines 27 and 32) that you can change the fade time and how long to show a black screen between videos, default are 2 seconds and 2 seconds.

Video of the poc: https://youtu.be/kXKG3U2xc4A
