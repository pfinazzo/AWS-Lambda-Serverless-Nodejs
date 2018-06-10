## AWS Lambda with Node.js and Serverless

* Really useful way to create serverless AWS Lambda functions in node

* Great for creating RESTful API's

* Taken from ![tutorial]('https://www.youtube.com/watch?v=71cd5XerKss')

* To partake in this tutorial you must install serverless globally to your computer

- to do this in bash type:

$ npm i -g serverless



## Steps:

- To start off with we need to make an IAM User (Identity and Access Management User) for your AWS account. Technically we could use the root user but its never a good idea because it will give anyone who signs in full access to everything in your AWS including your billing so its best to make separate authorized IAM users

- Note: If you already have an IAM User you ca skip these first few steps and go straight to accessing the credentials

* First go in to AWS sign into the console and create an IAM user. To do this click on your account at the top right and select "My Security Credentials"

 screenshot 1

* Next when the popup comes up click "Get Started with IAM Users" which will take you to the Users Panel, mine has my user but if you don't have any none will show up here just yet

screenshot 2

* Add a user by clicking the blue "Add user" button in the top left hand corner

screenshot 3

* From this screen we can add one user or multiple users at once, for now we will just add one user though

* After you name your user check the box that says "AWS Management Console Access" and then select "Custom Password" from the radio button inputs, and then create a custom password

* If this is a user account for another person you can optionally set it so that they must reset their password at the next sign-in. Since this is just for me I am going to uncheck that box. 

screenshot

* Once you have finished these steps hit the blue "Next: Permissions"  button at the bottom right

screenshot

* Now you'll be taken to a page where your user must be added to a group, but you most likely haven't created any groups as of yet unless you have already created a user in which case you probably wouldn't be reading this tutorial. I already have one but to demonstrate I will create another group

* To create a new group click the "Create Group" button in the top left

screenshot

* Here is an important part: Make sure you select the "AdministratorAccess" checkbox after you type in your new group name and then you can click the blue "Create Group" button in the bottom right of the modal

screenshot

* After you hit "Create Group" it should have auto selected your newly formed group. Note that I have two admin type groups because I have already done this earlier, but you should have one group so far. When you have finished checking the box at the far left to select which group you want to add your new user to click "Next: Review" in the bottom right hand corner. This will take you to this page:

screenshot

* Finally click "Create User" in the bottom right and your new IAM user will have been created. It will take you to this page:

screenshot

* In the browser you can hit "close" in the bottom left and it should take you to the users panel:

screenshot

- Now we need to create an access key

* Click on the username of the new user you have created and it should take you to this page

screenshot

* Select the tab that says "security credentials" and scroll down to the part where it says "Access Keys". Click "Create Access Key". When the modal pops up make sure to hit download CSV file as this will allow you to keep these keys on your computer. 

- Note: YOU CAN ONLY DOWNLOAD THIS FILE ONCE, IF YOU FORGET YOUR SECRET AND ACCESS KEY YOU WILL HAVE TO RECREATE YOUR ACCESS KEYS

* Now that we have our csv file with our ACCESS KEY and SECRET we can now connect to our lambda function with bash



- Now its time to connect our code to AWS with serverless

* cd into the root directory of this project and then in bash type the following:

* $ serverless create -t aws-nodejs 

- (note this has already been done in this repo, this creates the boilerplate code so this step is not neccesary if you are starting from cloning or downloading this repo)

* the -t in this means that we are creating a template for serverless so that it knows we are working with AWS and Node.js



* In the serverless.yml file change the service name to whatever you would like it to be

screenshot

* If you don't plan on using every feature its wise to get rid of all the unnessecary commented out code just to make it clean. If you just want to work with some functions you can make it look like this:

screenshot

* Note that I have two functions that each return a message, my image resizer isn't actually resizing images its purely just for demonstrative purposes



- Now we need to configure the access credentials 

* We will be using the access key and secret from the csv file we downloaded earlier 

* in the root directory of your project type the following: 

$ serverless config credentials --provider aws --key ACCESS_KEY --secret SECRET

* make sure to replace "ACCESS_KEY" and SECRET with your actual access key and secret values found in your csv file

- Note if you are doing this for the second time you will have to overwrite your previous version using the "-o" flag 

* this will create a new hidden file on your computer located at ~/.aws/credentials

* to make sure it worked you can type 

$ cat ~/.aws/credentials and it should list all your access keys


* Finally in bash, still in the root directory of your project type the following:

- $ serverless deploy

AWESOME! Your terminal should have logged out your endpoints for each function! If this didn't work your terminal should display some errors that you can troubleshoot. 

I found that my mosty common source of errors was indentation on my serverless.yml page, the indentation must be EXACTLY correct or it will not understand it.

Hope you enjoyed!





 




























