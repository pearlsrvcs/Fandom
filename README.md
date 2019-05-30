This programming challenge is intended to take about 4 hours of time to complete, and we’d like a
response back within a week unless you’ve discussed an alternate time frame with us. The exact
amount of time spent is not something we are measuring for this challenge.
I would like to be able to browse teams, see their logo, name and then navigate to a list of players.
I should be able to see the player's picture or avatar, name, and important statistics (You can make
up values, there is no need to look up statistics on Fandom for this challenge) in a detail view.
I should be able to add new teams and players and add players to a team.
I should be able to edit and remove teams and players and their statistics and avatars.
It is not a requirement to add authentication or security to the app.
It is not a requirement to persist information between app sessions.

In order to demo this application, you may do either of the following:
1) Download from github @ https://github.com/pearlsrvcs/Fandom
2) Assuming that you have node.js install, you should be able to change into the working directory and run "npm install"
3) Next, in order to run the app from Windows, type "react-native run-android"
4) In order to run the app from your Mac, type "react-native run-ios"

or assuming that you have java jdk installed, you can use the following commands to install on your android device
1) Download from github @ https://github.com/pearlsrvcs/Fandom
2) Change into the fandom directory
3) Change into the release android/app/release directory
4) Type "adb install Fandom.apk"
5) There will now be an icon on your phone that can be sued to start the app and test it

Per the directions, this uses in-memory data storage, initialize via a json file, stored in the src directory and called "teams.json"
