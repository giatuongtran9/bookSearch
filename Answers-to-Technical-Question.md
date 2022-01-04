1. How long did you spend on the coding assignment?
   \_I spent 2 days approximately 20 hours or more on this assigment

   a. What would you add to your solution if you had more time?
   \_I would add function to sort out the list of book by ISBN, create function to go back to the search list after users visted the book version by ISBN and create a 404 pages

   b. If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.
   \_I am new to testing so I would add a mock test for the API call and snapshot tests for all the components

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
   \_The most useful feature I added is the sort function in the `utilities.js` file

```

    export function sortAsc(arr, sortValue) {
        return arr.sort((a,b) => (a[sortValue] > b[sortValue]) ? 1 : (b[sortValue] > a[sortValue]) ? -1 : 0)
    }

    export function sortDesc(arr, sortValue) {
        return arr.sort((a,b) => (new Date(b[sortValue]) - new Date(a[sortValue])))
    }

```

3. How would you track down a performance issue in production? Have you ever had to do this?
   \_I have not had a chance for the perfromance testing in this project. I would read the log on the Heroku after pushing to check for issues and use GitHub Actions to track

4. How would you improve the API that you just used?
   \_I would redisgned the data to have the same format so it is easier to use

5. Please describe yourself using correctly formatted JSON.

```
{
"first_name": "Tuong",
"last_name": "Tran",
"age": 22,
"nationality": "Vietnamese",
"Livesin": "Canada",
"skills":
[
"Reactjs",
"Nodejs",
"ExpressJS",
"MongoDB",
"SQL",
"Redux",
"C/C++"
]
"interests":
[
"computer",
"programming",
"UI/UX",
"gaming"
],
"dreams":
[
"become a web developer",
"have ability to take care of family"
],
"believes":
[
"People all should have a chance in life, don't judge a book by its cover",
"Life is equal, people will be able to achieve their goals if they try their best"
]

}
```
