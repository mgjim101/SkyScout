[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/HWOPiRJG)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=16756066)

# The Project

The project provides you an opportunity to build upon the foundational knowledge acquired in this course. It is designed to help you develop an advanced understanding of software engineering principles, tools, and techniques using structured requirements gathering and analysis, software development process, design patterns, software architecture, and software testing.  You will also need to consider your development methodology (don’t use waterfall), software metrics, and software quality assurance.

As a team, you will select a project, develop a set of requirements, conduct a formal analysis of the project, develop an architecture, and then using TDD and an Agile workflow, iterate and develop your projects.  During your project, you MUST consider design patterns and anti-patterns, TDD, dockerization, and CI/CD.  The goal is not necessarily to build a complex system, but to practice and become comfortable with the techniques, be able to analyze and decompose a problem, and incrementally develop and deploy a solution using a branching workflow.  The systems needs to be properly planned, analyzed, modelled and implement.   

Internally, within your team, you are free to manage efforts and tasks with the understanding that everyone is expected to contribute equally in some fashion.  During the project, you will have the chance to confidentially conduct peer reviews using the credit-earned model (see document on Canvas regarding this) at a number of key points.   Your individual project grade will be impacted using the results of the peer evaluation.   The key point is that if you don’t contribute to the project, your mark will reflect this.  This will be discussed in class.

**You must have:**

* Unit tests and integration tests to ensure code quality and functionality
* A CI to automatically test
* Set of user requirements, identified user groups, and developed use-cases
* Identified what design patterns you are using and describe why
* Dockerized deployment
* Continual and ongoing work using TDD 
* A team between 3-5 people (no more, no less) - target for 4

**Stretch goals:**

* CD pipeline to deploy changes to the codebase
  
## Project Goals:

* To deepen the students' understanding of software engineering principles, tools, and techniques.
* To enable students to apply software engineering principles, tools, and techniques to the development of complex software systems.
* To introduce students to agile development methodologies, software metrics, and software quality assurance.
* To foster collaboration and teamwork among students in the development of software systems.

The goal is to be able to build good code quickly (using the proper processes).  Remember: **Perfect is the enemy of good**

Build incrementally with this in mind, making small and incremental improvements.   

## Project Objectives:

By the end of this project, students will be able to:

* Apply the software development process model, to the development of a software system
* Design software systems using appropriate design patterns and principles
* Develop software architectures for complex software systems
* Use software testing techniques to ensure the quality of software systems
* Apply agile development methodologies to the development of software systems
* Apply software metrics to evaluate the quality of software systems
* Develop software quality assurance plans to ensure the quality of software systems
* Apply and develop a CI/CD pipeline for automated testing and deployment
* Utilize dockerization to containerize your application
* Work collaboratively in teams to develop software systems

**Peer Evaluation:** see [Peer Evaluation](https://canvas.ubc.ca/courses/150415/pages/peer-evaluation?wrap=1)

## Evaluation: 

See Canvas for [details](https://canvas.ubc.ca/courses/150415/pages/the-project).

## The Projects (all are web apps):

**Your team MUST select one of the these projects.**  Please take the time to review the details for each.

**Todo App:**  Develop a basic to-do list app that allows users to manage tasks. Users can add, edit, delete tasks, and organize them by categories or due dates.  Users will also be able to share (view/edit) with other users.  The system needs to allow tasks to be organized into custom categories (e.g., Work, Personal) as well as support optional due dates with simple reminders or alerts.  Users will be able to ssign priority to tasks (e.g., High, Medium, Low) as well as view tasks based on categories, priorities, or due dates.  The platform should incorporate the Command Pattern to implement undo and redo functionalities for task actions, the Observer Pattern to update task lists dynamically when changes occur and the Strategy Pattern for sorting algorithms based on different criteria. Additionally, the platform should incorporate Continuous Integration (CI) and automated testing.

**Flashcard Study App:**  Create a simple flashcard application that allows users to create, edit, and review flashcards for studying. The app supports text-based cards and simple categorization into decks.  With the online system,  users will be able to create and organize flashcards into decks by subject or topic.  They will be able to create flashcards but adding questions and answers to flashcards.   The system will have a study mode that will allow flashcards to be reviewed in order or in a randomized fashion.   The system will also allow for progress tracking, allowing users to  mark flashcards as known or unknown so progress can be tracked.  Users will also allow their flashcards to be shared with other users or publicly as well as having the ability to share decks with others via simple file formats.  The platform should incorporate the Factory Pattern for creating different types of flashcards or decks, the Iterator Pattern to  navigate through flashcards efficiently and the Singleton Pattern to manage user settings or session data.  Additionally, the platform should incorporate Continuous Integration (CI) and automated testing.

**Weather Forecast Application:** Build a simple application that displays current weather information and a 5-day forecast for a user-selected location using a public weather API.  Users will need to create an account so they can access and edit  their dashboard as well as being able to share it with other users.  The system must support location search where users can search for weather information by city name as well as display the current weather showing temperature, weather conditions, and an icon representing the weather (with the user being able to select formats/options for how data is displayed).  The system will also show a 5-day forecast which will display basic forecast information for the next five days.  Users will also be able to save favourite locations for quick access on their dashboard as well as being able to save and share with other users.   The platform should incorporate the Adapter Pattern to interface with the external weather API. the Singleton Pattern to  manage a single instance of the API client and the Facade Pattern to simplify the interface for fetching and displaying weather data.   Additionally, the platform should incorporate Continuous Integration (CI) and automated testing.

**Discord Clone:** This project involves the development of a web-based platform for online communication and collaboration, similar to the popular chat app, Discord. The platform should incorporate the Observer design pattern to notify users of new messages, and the Mediator design pattern to manage communication between users and channels. The platform should also implement the Singleton design pattern to ensure that only one instance of the chat server is running at any given time, and the Command design pattern to enable users to execute commands (e.g. change username, join channel). Additionally, the platform should incorporate Continuous Integration (CI) and automated testing.

## Statement on the Use of GitHub Copilot and Generative AI Tools

Students are permitted and encouraged to utilize AI-powered tools such as GitHub Copilot and other generative AI assistants for coding, user interface (UI), and user experience (UX) design aspects of their projects. These tools can serve as valuable resources to enhance productivity, inspire creativity, and assist in overcoming technical challenges.  The focus of the project is to develop and improve skills surrounding the process of developing software BUT the team must observe the process and work in an iterative fashion using TDD.  

Please see further detals on Canvas in for [Guidelines for Responsible Use](https://canvas.ubc.ca/courses/150415/pages/the-project)

Weather Forecast Application

**Description** : The Weather Forecast Application will provide users with real-time weather and a 5-day forecast for the user’s preferred location. With the integration of a public weather API, the application will display information such as temperature, weather conditions and icons representing the weather condition. The app will allow users to create personal accounts, along with adding other users. They will be able to search for weather conditions by city, save favorite locations on their dashboard, customize their dashboard and share their dashboards with other users. Our team will be using software designs such as the Adapter Pattern, Singleton Pattern and Facade Pattern for efficient API interaction, data access and streamlined functionality. CI/CD and automated testing will be integrated in the build for quality, efficiency and reliability.

#### Requirements Analysis and Development

**User Requirements**

1. Account Management
	- Users must create an account
	- Users will be able to edit and delete their accounts
	- Users must be able to log in and log out securely
	- Users passwords must be protected
2. Weather Dashboard
	- Users should be able to search for weather conditions in any city
	- The dashboard will display current weather conditions, temperature and visual icons showing the conditions
	- The dashboard must be able to be customized to display different formats
		- Fahrenheit / Celsius
		- Date Format
		- Layout Customization (where they want their information to be displayed on dashboard)
3. Favorite Locations
	- Users must be able to save multiple locations to their dashboard
	- Users should be able to access favorite locations from their dashboard
4. Dashboard Sharing
	- Users must be able to share their dashboard and their locations to other users.

**Functional Requirements**
1. User Authentication and Authorization
	- Implement user registration, login and secure password management
	- Allow users to edit account information and manage shared dashboards
2. Weather Search and Display
	- Implement a search bar for users to search weather conditions based on the city
	- Display real time weather data such as temperature, condition and weather icons for visuals
	- Allow users to customize format of dashboard and information(Celsius/Fahrenheit, data format, time format)
3. 5-day forecast
	- After searching for a location, the application will display a summary of the weather forecast for the next 5 days
	- The basic information will be displayed(high/low temperatures, conditions)
4. Favorite locations management
	- Allow users to add, remove and view their saved locations
	- Display the saved locations on the user's dashboard for quick access.
5. Dashboard sharing
	- The application will allow users to share their dashboards (their customized dashboards and saved location ) with other users, allowing them to view

**Non-Functional Requirements**
1. Usability:
	- The UI should be intuitive and simple to navigate
	- Consistent weather icons, color schemas, good design principles and easy to read fonts should be used
2. Performance
	- The application should have a quick response time when users search for locations
	- As users and user data will grow, the database should be efficient
3. Reliability
	- Implement CI/CD and automated testing to ensure the launched product is reliable
	- Automated testing on primary functions such as account creation, data retrieval and searching.
4. Security
	- Secure user data such as passwords with encryption

#### Assumptions & Constraints

Assumptions:
- Users will mainly search for locations using city names
- The application will only support English for simplicity
- The weather API chosen will provide data in formats compatible with most systems(eg. JSON)
Constraints:
- The system will not support geographic coordinates or postal codes for location search
- Advanced customization options for weather data display( such as themes like dark or light theme) will not be included
- Shared dashboards will only be view-only 

#### Proto Personas & Journey Lines

User 1: Casual Weather Checker
● Demographics:
	○ Age: 25-40
	○ Occupation: Diverse range (office workers, students, remote workers)
	○ Tech-Savvy Level: Moderate, familiar with basic app usage
● Goals:
	○ Check current weather and daily forecast easily.
	○ Save a few favorite locations to quickly see weather in places they care about
	(e.g., home, work, vacation spot).
	○ Share a weather update or forecast occasionally, usually via social media or
	messaging apps.

● Pain Points:
	○ Wants an uncomplicated dashboard, where only the most relevant info is shown.
	○ Prefers low customization to avoid additional setup or configuration.
	○ Frustrated by overly complex navigation or unnecessary features.
● Journey:
	○ Opens the app, quickly views the weather at a saved location or current location.
	○ May do a quick search for another city if they’re traveling or curious about other
	places.
	○ Shares weather info on a social media platform or with a friend for fun or travel
	planning.
	○ Logs off after viewing; uses the app for short, targeted interactions.

User 2: Traveler / Commuter
● Demographics:
	○ Age: 20-50
	○ Occupation: May include roles like sales, consulting, or delivery, where travel is
	frequent
	○ Tech-Savvy Level: Moderate to advanced, open to customizing dashboards for
	specific needs

● Goals:
	○ Access reliable weather forecasts to plan routes, attire, and timing.
	○ Save multiple locations that change often (for example, hotels, client sites, or
	cities with planned layovers).
	○ Use detailed weather insights, such as rain likelihood, temperature fluctuations,
	and wind speeds.

● Pain Points:
	○ Frustrated by inaccurate or inconsistent weather information.
	○ Needs weather insights fast, without having to input locations repeatedly.
	○ Prefers flexibility in choosing displayed information (e.g., temperature vs. conditions).

● Journey:
	○ Logs into the app daily or multiple times a day.
	○ Reviews weather for saved locations and toggles between them.
	○ Searches for a specific city based on travel needs, bookmarking it temporarily.
	○ Reviews detailed conditions, such as rainfall percentages and high-low
	temperature ranges for the next few days.
	○ Uses the share feature to send location weather info to colleagues or travel companions.
	○ Appreciates the ability to tweak displayed data, turning on relevant details for the
	current trip.

User 3: Power User / Meteorology Enthusiast
● Demographics:
	○ Age: 30-60
	○ Occupation: Can vary but includes meteorology enthusiasts, outdoor activity
	planners, and weather hobbyists.
	○ Tech-Savvy Level: High, prefers to configure and customize the dashboard
	heavily.
● Goals:
	○ Set up a personalized weather dashboard with preferred data points (e.g., UV
	index, air quality, or sunrise/sunset times).
	○ Follow weather patterns across multiple cities or regions of interest.
	○ Utilize advanced filtering to toggle between specific formats and indicators.
● Pain Points:
	○ Limited options for advanced data like humidity, dew points, or air quality.
	○ Lacks fine-grained display preferences for data and formats.
	○ Frustrated by any delays in data updates or inaccuracies in forecast information.
● Journey:
	○ Logs in regularly and adjusts dashboard settings frequently.
	○ Uses search to compare locations and examine weather trends, including
	long-term patterns if available.
	○ Sets favorite locations in various categories (e.g., personal vs. work-related) and
	frequently toggles through saved lists.
	○ Shares weather data with a niche community or group, often using screenshots
	or detailed charts.
	○ Expects integration with other data services (e.g., historical weather trends, alert notifications for specific weather conditions).

Potential Journey Lines for Each User Category
1. Casual Weather Checker:
	○ Initial Log-in ➔ Dashboard Review ➔ Quick Search (If needed) ➔ View Weather
	Info ➔ Optional Share ➔ Log Out

2. Traveler / Commuter:
	○ Log-in ➔ View Saved Locations ➔ Search/Add Temporary Location ➔ Review
	5-day Forecast for Key Insights ➔ Modify Dashboard View ➔ Optional Share
	with Contacts ➔ Log Out
3. Power User / Meteorology Enthusiast:
	○ Log-in ➔ Adjust Dashboard Filters/Settings ➔ Review Detailed Forecast and
	Specific Indicators ➔ Explore & Add New Locations to Favorites ➔ Search
	Additional Data (e.g., air quality, UV) ➔ Share with Enthusiast Group or
	Community ➔ Log Out


#### UML Diagram 
![[Pictures\Blank diagram.jpeg]] 

##### Use case descriptions

### Use Case 1. Register Account

- **Primary Actor:** User
- **Description:** Allows a new user to create an account for the application
- **Pre-condition:** The user has access to the application’s registration page.
- **Post-condition:** A new account is created, and the user is logged in.

#### Main Scenario:

1. User navigates to the registration page.
2. User enters required information, such as username, password, and email.
3. User submits the registration form.
4. System verifies that the username and email are unique.
5. System stores the user’s information in the database.
6. System creates a new user account and confirms successful registration.
7. User is automatically logged into their new account and redirected to the dashboard.

#### Extensions:

- **E1:** Username or email is already in use.
    - System notifies the user and asks them to choose a different username or email.
- **E2:** Password does not meet complexity requirements.
    - System displays an error message, prompting the user to choose a stronger password.

---

### Use Case 2. Login

- **Primary Actor:** User, Database
- **Description:** Allows the user to log into the application to access their saved data and dashboard.
- **Pre-condition:** The user has already registered and has an account.
- **Post-condition:** The user is authenticated and redirected to their dashboard.

#### Main Scenario:

1. User navigates to the login page.
2. User enters their username and password.
3. User submits the login form.
4. System verifies the credentials against stored data.
5. System grants access and redirects the user to their personalized dashboard.

#### Extensions:

- **E1:** Incorrect username or password.
    - System displays an error message and prompts the user to try again.
- **E2:** User forgets password
    - System provides a "Reset Password" option, guiding the user through password recovery/change.

---

### Use Case 3. Search Weather by City

- **Primary Actor:** User, Weather API
- **Description:** Allows the user to search for current weather data in a specific city.
- **Pre-condition:** The user is logged in and on the dashboard page.
- **Post-condition:** Weather information for the selected city is displayed on the dashboard.

#### Main Scenario:

1. User enters the name of a city in the search bar on the dashboard.
2. User submits the search query.
3. System sends a request to the weather API to fetch weather data for the specified city.
4. System receives and processes the response from the API.
5. System displays current weather information for the city on the user’s dashboard.

#### Extensions:

- **E1:** City not found.
    - System displays an error message, suggesting that the user check the city name.
- **E2:** Weather API is temporarily unavailable.
    - System displays a message indicating a delay in retrieving weather data.

---

### Use Case 4. View 5-Day Forecast

- **Primary Actor:** User, Weather Forecast
- **Description:** Allows the user to view a 5-day weather forecast for a selected city.
- **Pre-condition:** The user has searched for a city or selected a favorite location.
- **Post-condition:** A 5-day weather forecast for the selected city is displayed on the dashboard.

#### Main Scenario:

1. User selects a city (either a recently searched city or a favorite location).
2. System sends a request to the weather API for a 5-day forecast for that city.
3. System receives forecast data for the upcoming five days.
4. System displays the 5-day forecast on the user’s dashboard with essential details (daily high/low temperatures, weather icons).

#### Extensions:

- **E1:** Weather API returns incomplete data.
    - System displays an error message and suggests the user try again later.
- **E2:** User selects a different city during data retrieval.
    - System cancels the current request and fetches data for the newly selected city.

---

### Use Case 5. Save Favorite Location

- **Primary Actor:** User, Database
- **Description:** Allows the user to save a city as a favorite for easy access on their dashboard.
- **Pre-condition:** The user is logged in and has searched for a city.
- **Post-condition:** The city is saved as a favorite in the user’s profile.

#### Main Scenario:

1. User searches for a city or views current weather in a city.
2. User clicks the “Add to Favorites” button.
3. System checks if the city is already a favorite.
4. System saves the city as a favorite location in the user’s profile and database.
5. The favorite city is now displayed in the favorites section of the dashboard for quick access.

#### Extensions:

- **E1:** City is already in the user’s favorites.
    - System displays a message indicating the city is already a favorite.
- **E2:** Maximum number of favorite locations reached.
    - System informs the user they cannot add more favorites and suggests removing one.

---

### Use Case 6. Share Dashboard

- **Primary Actor:** User
- **Description:** Allows the user to share their weather dashboard with another user, providing  view-only access.
- **Pre-condition:** The user is logged in and has configured their dashboard.
- **Post-condition:** A link or access is shared with another user.

#### Main Scenario:

1. User navigates to the dashboard-sharing options..
2. User enters the email or username of the person they want to share with.
3. System generates a unique access link or grants permission to the specified user.
4. System sends a notification to the recipient with the shared dashboard link or permission.

#### Extensions:

- **E1:** Invalid email or username.
    - System displays an error and prompts the user to enter a valid email or username.
- **E2:** User attempts to share with someone not registered.
    - System displays a message suggesting the recipient create an account.

---

### Use Case 7. Customize Display Options

- **Primary Actor:** User,Database
- **Description:** Allows the user to customize how weather data is displayed on their dashboard, such as temperature units, time format, and theme.
- **Pre-condition:** The user is logged in and on the settings page.
- **Post-condition:** User preferences are saved and applied to the dashboard display.

#### Main Scenario:

1. User navigates to the settings or customization page.
2. User selects preferred options (temperature units, time format, theme).
3. User saves the new settings which is stored in the database.
4. System applies the changes and updates the display format on the dashboard.
5. System saves user preferences in their profile for future sessions.

#### Extensions:

- **E1:** User cancels changes.
    - System discards unsaved changes and retains the previous settings.
- **E2:** System fails to save settings.
    - System notifies the user of a temporary error and suggests trying again later.


