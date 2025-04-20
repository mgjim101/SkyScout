| Owner | Task Description                                                                                                                          | Branch                  | Status               |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | -------------------- |
| Kyle  | Developed Login/Register pages(frontend) and styled them                                                                                  | React Development       | Merged & Tested      |
| Kyle  | Skeleton for weather dashboard frontend design, added logo, search and icons                                                              | React Development       | Merged & Tested      |
| Kyle  | Created Figma designs for the overall app UI/UX                                                                                           | FrontEnd Development    | Merged and completed |
| Parsa | Set up Docker for the application, including a PHP server and user database                                                               | Database and Deployment | Merged & Tested      |
| Mo    | Integrated OpenWeatherMap API, redesigned the dashboard, created the display for weather data, and developed the searching functionality. | Backend Development     | Merged & Tested      |
| Mo    | Developed the initial JWT Authentication code and endpoints: Register, Login, Logout, refresh                                             | Backend Development     | Error                |
|       |                                                                                                                                           |                         |                      |

## Progress Summary
#### Current Progress:
- Frontend:
	- Login/Register pages are complete, still need to be integrated with the backend.
	- OpenWeatherMap API Integration 
	- Weather dashboard frontend include only the display of the weather information with icons and weather information for the day from the API
	- Search functionality is done
	- App design finalized in Figma
- Backend:
	- Authentication endpoints (Register, Login, Logout) and JWT session management have errors with tokens
	- Dockerized backend server, including user database setup.
- Overall Status:
	- Phase 1 is partially completed, pending CI/CD Pipeline Setup, JWT Frontend Authentication, and Token Management. 
	- Phase 2 is partially completed with weather display for the current day only, pending 5 day display and unit conversion
#### Remaining Tasks:
- Finalize weather dashboard frontend(polish UI/UX and design it to look like the initial design of the app)
- Add 5 day weather information
- Fix token managament
- Unit conversion for weather information
- CI/CD Pipeline implementation
- Account Management and Dashboard Customization
- Favorite Locations and Dashboard Sharing
- Testing, Performance Optimization and Deployment
<hr>

### Reflection on Process
#### What's Working:
- The team has used branch-based development to isolate features, ensuring clear commit histories and reducing merge conflicts
- The team has properly used pull-requests before merging to the development
- Using Docker has streamlined the development environment setup.
#### Challenges:
- Testing all integrated features (frontend+backend) required additional time due to initial setup complexities
- Integrating frontend and backend required more time 
- Error with API Key but the code for the app works

#### Improvements Needed:
- Improve communication on team member duties 
- Establish a better-defined review process to make sure all features meet certain standards before merging.
<hr>

### Branches/Tasks Completed, Tested and Merged

| Branch                  | Feature Description                                                                                           | Owner   | Status             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- | ------- | ------------------ |
| FrontEndDevelopment     | Designed the UI/UX of the app                                                                                 | Kyle    | Merged             |
| ReactDevelopment        | Developed the login/register page (frontend)                                                                  | Kyle    | Tested/In progress |
| Database and Deployment | Dockerized PHP server and database setup                                                                      | Parsa   | Tested and Merged  |
| User Authentication     | Initial development of JWT authentication                                                                     | Mohamed | In Progress        |
| API integration         | redesgined weather dashboard, search functionality and display weather conditions based on city using the API | Mohamed | Merged and Tested  |
<hr>

### Testing Report
| Feature      | Status | Notes                                            |
| ------------ | ------ | ------------------------------------------------ |
| Weather API  | Passed | Weather data displays correctly, UI needs polish |
| Docker Setup | Passed | Setup complete                                   |
| JWT Auth     | Failed | Error with token generation and management       |
|              |        |                                                  |


<hr>

### Release Candidate
- A release candidate is available on the development branch which includes:
	- A fully functional database with Docker
	- A skeleton of the weather dashboard that displays the weather conditions using the OpenWeather Map Api
	- Dockerized application ready for deployment.
<hr>

### Next Steps
1. Finalize UI/UX for the weather dashboard
2. Work on test cases for the app
3. User Account Management
4. Dashboard Customization
5. Favorite locations


<hr>

### Burn-Up Chart
![[output.png]]