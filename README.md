# Hotel-Recommendations
Recommendation System for Hotels based on Luxury Hotels in Europe's dataset from Kaggle.

Dataset Link : https://www.kaggle.com/jiashenliu/515k-hotel-reviews-data-in-europe/home 

Approach 1 folder contains UI components developed in Node.js, MongoDB and HTML/CSS

Approach 2 folder contains UI & python script to run the application

256 Project Notebook contains complete code of project for both the approaches.


### Instructions for approach 1

1.	Install node from https://nodejs.org/en/ and mongo database from https://docs.mongodb.com/master/administration/install-community/
2.	Unzip the zip file we uploaded on Canvas to any folder
3.	Navigate to the folder you downloaded
4.	Run “npm install” to install all needed npm modules
5.	Run “npm start” command to start node server
6.	Start mongo database with the mongod command
7.	Add the hotel instances to the database by pasting below url into browser 
	http://localhost:3000/addcombined
  Note: If you accidentally add twice you can drop the database using the Mongo shell (use hotel DB and then db.dropDatabase()
8.	Access main screen on below URL
	http://localhost:3000
9.	Test by checking out various combinations


### Instructions for approach 2

1. Install hotelrecommendations/Approach2_UI/requirments.txt using below command
   pip install -r hotelrecommendations/Approach2_UI/requirements.txt
2. Modify the path to read the csv file in hotelrecommendations/Approach2_UI/app.py
   for example df = pd.read_csv(path where you have stored the csv file)
3. To run the app type command
   python app.py
   To view the webpage go to http://127.0.0.0:5000
