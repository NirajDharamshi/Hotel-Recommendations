# CMPE256
# hotelrecommendations




***************************************************************
*Software installation instructions if not already installed:
***************************************************************
1) Install node from https://nodejs.org/en/
2) Install mongo database from https://docs.mongodb.com/master/administration/install-community/
  - Make sure you download the .msi version and not the zip version
  - Doubleclick on the msi version (I unclicked install as service)
  - Navigate to where the files are in the bin directory
	- mongod is the server
	- mongo is the shell
  - Add C:\Program Files\MongoDB\Server\4.0\bin to path (will make it easier to navigate
	  cause we can just type mongo and mongod from our command prompt)
  - Navigate to command prompt and do
	   - md \data
	   - md \data\db
  - Start database by typing mongod (if you set the path)
  ***************************************************************
  *Code download instructions:
  ***************************************************************
1) Download code into desired folder location
2) Navigate to server directory
3) run npm install command to get all npm modules required
4) run npm Start
5) To load the data type in http://localhost:5000/get_addHotels
6) Navigate to hotel search for hotels @ http://localhost:5000/hotel
