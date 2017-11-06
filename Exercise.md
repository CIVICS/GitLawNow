

# Computational Lawyering Time

**Exercise Overview**

* Postulate "On-the-Fly: Legal Data InquiryL (Imagine We Want to Know "Who Published [Consumer Complaints?](http://data.consumerfinance.gov/api/views.json))
* Copy & Paste First Code Snippet of [JavaScript Script](Complaints.js) and Repeat for Each Snippet
* See/Copy the Real-Time Web-Based Data API Query Results in Your Browser Console
* Maintain and Share Your Script on GitHub so You Can Re-Use and Improve it Over Time
* Show How to Make Pull Requests and Check History to Maintain Script on GitHub Over Time

## Process Data With JavaScript in Your Browser


**Work With the JavaScript File**

* Go to [Complaints.JS](https://github.com/CIVICS/GitLawNow/blob/master/Complaints.js).  It looks like the screenshot below.

<img width="600" alt="screen shot 2017-11-06 at 5 00 12 pm" src="https://user-images.githubusercontent.com/2357755/32466166-011ebb3c-c314-11e7-980b-21efcdc1e631.png">

---------

* Click the "History" button on upper right area of screen.  It looks like the screenshot below.

<img width="544" alt="screen shot 2017-11-06 at 4 49 08 pm" src="https://user-images.githubusercontent.com/2357755/32465742-7e960784-c312-11e7-90a8-01d401d6467d.png">

------------

* This displays the history of "commits" to this file (each "version" of the file has a hash digest as part of a unique URL).  It looks like the screenshot below.

<img width="600" alt="screen shot 2017-11-06 at 4 41 45 pm" src="https://user-images.githubusercontent.com/2357755/32465446-798fc2b2-c311-11e7-9cf9-f49a21e3dbec.png">

**Go to a Web Page** 

* Go to a web page at an "http" (not an "https") address to do this exercise.  A new security policy restricting different types of content on web pages may make this exercise impossible on some webpages.  It appears that pages addressed at https prohibit this use of JavaScript due to the mixed types of data introduced by the script.  You can go to http://MITLegalForum.org to use the JavaScript for this exercise because the page is accessible at http not https.  Alternatively, you could pull up the console directly from the data.gov page where your raw data results used for this exercise are displayed, here: [http://data.consumerfinance.gov/api/views.json](http://data.consumerfinance.gov/api/views.json).

**Open the Console** 

* Open the Colsole on your browser (in Chrome on Mac use "Alt-Cmd-J" on Windows use "Control-Shift-J").  

* You will see something like the screenshot below:

<img width="600" alt="screen shot 2017-11-06 at 5 06 19 pm" src="https://user-images.githubusercontent.com/2357755/32466628-8f820b1c-c315-11e7-9f90-175d0cbf1e28.png">


**Get Some JSON Data from a URL** 

* To get some JSON data from a url you can use a simple REST API like this: [http://data.consumerfinance.gov/api/views.json](http://data.consumerfinance.gov/api/views.json).  However, this wall of data is difficult to work with, get answers out of or gain insight from in raw form.  The data needs some wrangling and JavaScript is one great way to access and process data from, through and on the web.  

* Copy-paste the JavaScript from the earliest commit by [Christian Smith](https://github.com/christiansmith) (with commit comment "get some json data from a url") at: [https://github.com/CIVICS/GitLawNow/blob/55f3cf58674a050fab23f9b976b4a3ff4648b04f/Complaints.js](https://github.com/CIVICS/GitLawNow/blob/55f3cf58674a050fab23f9b976b4a3ff4648b04f/Complaints.js).  You can resize the cosole winder to get more room for typing and checking out the web-based data fetched from your JavaScrip.  When you paste the JavaScript into the console, it should look something like the screenshot below.

<img width="600" alt="screen shot 2017-11-06 at 5 07 32 pm" src="https://user-images.githubusercontent.com/2357755/32466467-0cd5cc76-c315-11e7-8943-e2f404874c3d.png">

**Filter Results** 

* To filter the results, copy-paste the JavaScript from the next commit (with comment "filter results") at: [https://github.com/CIVICS/GitLawNow/blob/4954d16e0a8d07905630f458525119edc9453620/Complaints.js](https://github.com/CIVICS/GitLawNow/blob/4954d16e0a8d07905630f458525119edc9453620/Complaints.js)

**Get a List of Owner Names** 

* Let's say you want to get a list of "owner" names from this data dump.  You can achieve this with the slightly modified script in the next commit.  Copy-paste the JavaScript from the next commit (with comment "get a list of owner names") at: [https://github.com/CIVICS/GitLawNow/blob/1352d5bd3d0e5f0a2acaaf92723e39ec4e8fb2f2/Complaints.js](https://github.com/CIVICS/GitLawNow/blob/1352d5bd3d0e5f0a2acaaf92723e39ec4e8fb2f2/Complaints.js)

* **Sort Owner Names** 

* Let's say you want to sort the list of owner names names returned from the prior script.  You can achieve this with the slightly further modified script in the next commit.  opy-paste the JavaScript from the next commit (with comment "sort owner names") at: [https://github.com/CIVICS/GitLawNow/blob/3e53abda134f803565cef375fa848e17d1b469bf/Complaints.js](https://github.com/CIVICS/GitLawNow/blob/3e53abda134f803565cef375fa848e17d1b469bf/Complaints.js)

* The final result from using JavaScript to get this government data and alphabetically sort the list of names of all complaint "owners" who are *not* CFPB that looks like the screen shot below.

<img width="600" alt="screen shot 2017-11-06 at 5 02 41 pm" src="https://user-images.githubusercontent.com/2357755/32466275-5fe578d6-c314-11e7-9264-2a363ba64d83.png">

## Use GitGHub to Maintain, Share and Improve Your JavaScript

* Coming Soon!
