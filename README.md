redux:
Concat (add)
Map (change)
Filter (delete)


**Functionalities**

Layout
•	Login
•	Dashboard
  o	Profile Page (top right)
  o	List of Threads you’re following (left side bar)
  o	Main part with list of Genres and
•	Genres
  o	Forum Topics


**Backend**

Threads (nested comments – 3 layers)
•	Each post will contain
  o	user Id
  o	username
  o	comment
  o	time-stamp
•	Main post including link
  o	Table will also include the Thread it is related to
•	Questions
•	Replies to questions


Tables

1. Genre 
  - id (default)
  - Array of Topics
2. Topic (in the array)
  - genre
  - id (default)
  - title (brief description of topic)
  - username
  - userid
  - time stamp
  - Array of Questions
3. Questions (in the array)
  - id (default)
  - foriegn id
  - question (the question - string)
  - username
  - userid
  - timestamp

4. Replies
  - id (default)
  - reply (the reply - string)
  - username
  - userid
  - timestamp