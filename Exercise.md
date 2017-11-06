

# Computational Lawyering Time

## Exercise Overview

* Postulate "On-the-Fly: Legal Data InquiryL (Imagine We Want to Know "Who Published [Consumer Complaints?](http://data.consumerfinance.gov/api/views.json))
* Copy & Paste First Code Snippet of [JavaScript Script](Complaints.js) and Repeat for Each Snippet
* Show How to Make Pull Requests and Check History to Keep Script Up to Date on GitHub

## Process Data With JavaScript in Your Browser


### Work With the JavaScript File

* Go to [Complaints.JS](https://github.com/CIVICS/GitLawNow/blob/master/Complaints.js).  It looks like the screenshot below.

<img width="600" alt="screen shot 2017-11-06 at 5 00 12 pm" src="https://user-images.githubusercontent.com/2357755/32466166-011ebb3c-c314-11e7-980b-21efcdc1e631.png">

---------

* Click the "History" button on upper right area of screen.  It looks like the screenshot below.

<img width="544" alt="screen shot 2017-11-06 at 4 49 08 pm" src="https://user-images.githubusercontent.com/2357755/32465742-7e960784-c312-11e7-90a8-01d401d6467d.png">

------------

* This displays the history of "commits" to this file (each "version" of the file has a hash digest as part of a unique URL).  It looks like the screenshot below.

<img width="600" alt="screen shot 2017-11-06 at 4 41 45 pm" src="https://user-images.githubusercontent.com/2357755/32465446-798fc2b2-c311-11e7-9cf9-f49a21e3dbec.png">

* Open Console on Browser (on Mac use "Alt-Cmd-J" on Windows use "Control-Shift-J")

* **get some json data from a url** Copy-paste the JavaScript from the earliest commit by [Christian Smith](https://github.com/christiansmith) (with commit comment "get some json data from a url") at: [https://github.com/CIVICS/GitLawNow/blob/55f3cf58674a050fab23f9b976b4a3ff4648b04f/Complaints.js](https://github.com/CIVICS/GitLawNow/blob/55f3cf58674a050fab23f9b976b4a3ff4648b04f/Complaints.js)

* **filter results** Then copy-paste the JavaScript from the next commit (with comment "filter results") at: [https://github.com/CIVICS/GitLawNow/blob/4954d16e0a8d07905630f458525119edc9453620/Complaints.js](https://github.com/CIVICS/GitLawNow/blob/4954d16e0a8d07905630f458525119edc9453620/Complaints.js)

* **get a list of owner names** Then copy-paste the JavaScript from the next commit (with comment "get a list of owner names") at: [https://github.com/CIVICS/GitLawNow/blob/1352d5bd3d0e5f0a2acaaf92723e39ec4e8fb2f2/Complaints.js](https://github.com/CIVICS/GitLawNow/blob/1352d5bd3d0e5f0a2acaaf92723e39ec4e8fb2f2/Complaints.js)

* **sort owner names** Then copy-paste the JavaScript from the next commit (with comment "sort owner names") at: [https://github.com/CIVICS/GitLawNow/blob/3e53abda134f803565cef375fa848e17d1b469bf/Complaints.js](https://github.com/CIVICS/GitLawNow/blob/3e53abda134f803565cef375fa848e17d1b469bf/Complaints.js)

* The final result should be an alphabetically sorted list of the names of all complaint "owners" who are *not* CFPB that looks like the screen shot below.

<img width="600" alt="screen shot 2017-11-06 at 5 02 41 pm" src="https://user-images.githubusercontent.com/2357755/32466275-5fe578d6-c314-11e7-9264-2a363ba64d83.png">
