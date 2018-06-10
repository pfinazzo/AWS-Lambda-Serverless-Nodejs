# AWS Lambda with Node.js and Serverless
--- 
* Really useful way to create serverless AWS Lambda functions in node

* Great for creating RESTful API's

* Taken from [tutorial](https://www.youtube.com/watch?v=71cd5XerKss)

* To partake in this tutorial you must install serverless globally to your computer

- To do this in bash type the following command:

* $ npm i -g serverless
--- 

## Steps:
---
### Make an IAM User

- To start off with we need to make an IAM User (Identity and Access Management User) for your AWS account. Technically we could use the root user but its never a good idea because it will give anyone who signs in full access to everything in your AWS including your billing so its best to make separate authorized IAM users

- Note: If you already have an IAM User you can skip these first few steps and go straight to accessing the credentials

* First sign into the AWS [console](https://aws.amazon.com/console/). If you have never used AWS you will have to sign up for an account, where you'll have to put in credit card info: don't worry, you get 1 million requests and 400,000GB-seconds of compute time per month for free, so don't worry about being charged for now. 

* Then click on your account name in the top right and select "My Security Credentials"

 ![My Credentials](https://imgur.com/Ocrjtkc.png)

* Next when the modal comes up click "Get Started with IAM Users" which will take you to the Users Panel. Mine already has a user but if you don't have any none will show up here just yet.

![Get Started](https://imgur.com/PjFU44l.png)

* Add a user by clicking the blue "Add user" button in the top left hand corner

![Add User](https://imgur.com/Y89aLtC.png)

* From this screen we can add one user or multiple users at once, for now we will just add one user though

![Add User Page](https://imgur.com/YbOqJyR.png)

* After you name your user check the box that says "AWS Management Console Access" and then select "Custom Password" from the radio button style inputs, and then create a custom password

* If this is a user account for another person you can optionally set it so that they must reset their password at the next sign-in. Since this is just for me I am going to uncheck that box. 

It should look something like this now:

![Filled Data for User](https://imgur.com/xHq1ZIm.png)

* Once you have finished these steps hit the blue "Next: Permissions"  button at the bottom right

![next: permissions](https://imgur.com/MaqXR5L.png)

* Now you'll be taken to a page where your user must be added to a group, but you most likely haven't created any groups as of yet unless you have already created a user in the past, in which case you probably wouldn't be reading this tutorial. I already have one, but for the sake of demonstration, I will create another group

* To create a new group click the "Create Group" button in the top left

![create group](https://imgur.com/dZImLRH.png)

* Make sure you select the "AdministratorAccess" checkbox after you type in your new group name and then you can click the blue "Create Group" button in the bottom right of the modal. 

![group policy add admin access](https://imgur.com/6hiGPmd.png)

* After you hit "Create Group" it should have auto selected your newly formed group. Note that I have two admin type groups because I have already done this earlier, but you should have one group so far.

![add user to group](https://imgur.com/nlcgKZD.png)


* When you have finished checking the box at the far left to select which group you want to add your new user to click "Next: Review" in the bottom right hand corner. This will take you to this page:

![review user info page](https://imgur.com/ysbNzIU.png)

* Finally click "Create User" in the bottom right and your new IAM user will have been created. It will take you to this page:

![success created user](https://imgur.com/Jw2DsBz.png)

* In the browser you can hit "close" in the bottom left and it should take you to the users panel:

- I have two users and two groups because I already did this once, but if you haven't,you should only see one user with one group name

![users panel updated](https://imgur.com/PdhqRz9.png)
---

### Create an access key for your IAM User

- Now we need to create an access key

* Click on the username of the new user you have created and it should take you to this page

![user info page](https://imgur.com/gekaou0.png)

* Select the tab that says "Security Credentials" and scroll down to the part where it says "Access Keys". Click "Create Access Key". When the modal pops up make sure to hit "download CSV file" as this will allow you to keep these keys on your computer in an excel spreadsheet.

- Note: YOU CAN ONLY DOWNLOAD THIS FILE ONCE, IF YOU FORGET YOUR SECRET AND ACCESS KEY YOU WILL HAVE TO RECREATE YOUR ACCESS KEYS

![access keys on user](https://imgur.com/HplmWmw.png)

--- 
## Connect Node to AWS

* cd into the root directory of an empty directory and then in bash type the following (note this has already been done in this repo. This command creates the boilerplate code so this step is not neccesary if you are starting from cloning or downloading this repo, only perform this command if you are starting by creating and empty directory and cding into it):

- type: 

* $ mkdir whatever_you_want_to_call_this_project && cd whatever_you_want_to_call_this_project

- then inside the project type:

* $ serverless create -t aws-nodejs 

* the -t in this means that we are creating a template for serverless so that it knows we are working with AWS and Node.js

* In the serverless.yml file change the service name to whatever you would like it to be: in my case I made it lambda-test

![change service](https://imgur.com/PIQkMDU.png)

* If you don't plan on using every feature its wise to get rid of all the unnessecary commented out code just to make it clean. If you just want to work with some functions you can make it look like this:

![serverless.yml functions](https://imgur.com/VtlkAYK.png)

* Note that I have two functions that each return a message, my image resizer isn't actually resizing images its purely just for demonstrative purposes

- Now we need to configure the access credentials 

* We will be using the access key and secret from the csv file we downloaded earlier 

* in the root directory of your project type the following: 

$ serverless config credentials --provider aws --key MY_ACCESS_KEY --secret MY_SECRET

* make sure to replace "MY_ACCESS_KEY" and "MY_SECRET" with your actual access key and secret values found in your csv file

- Note if you are doing this for the second time you will have to overwrite your previous version using the "-o" flag 

* this will create a new hidden file on your computer located at ~/.aws/credentials

* to make sure it worked you can type the following: 

$ cat ~/.aws/credentials 

* it should list your access key and secret

* Finally in bash, still in the root directory of your project type the following:

- $ serverless deploy

---

AWESOME! Your terminal should have logged out your endpoints for each function! If you have a json viewer extension installed in your brower, navigate to these endpoints and you can view the json that is returned!

--- 
## Troubleshooting

If this didn't work, your terminal should display some errors that you can troubleshoot. 

I found that my most common source of errors was the indentation of my serverless.yml file. The indentation must be EXACTLY the same as it is in this repo or serverless will not understand it.

---
## Learn More

If you want to learn more about using Serverless checkout the [documentation](https://serverless.com/)!

--- 

Hope you enjoyed. Have fun creating your own RESTful API's and serverless code!








 




























