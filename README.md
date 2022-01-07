FreJun task -
The first page in a login page where user enters their username and password.
I made it using FormsModule and MatFormFieldModule I used validations in both the fields and the submit button remains disabled if the form is invalid.

 ![image](https://user-images.githubusercontent.com/42342400/148571909-1f80b889-281b-4822-8efb-ab23b9ced339.png)

Sample input to login is email - “eve.holt@reqres.in”, password – “1234”.

After login it saves a token in local storage which it receives as response from API call. This token is used to verify if the user is actually logged in while visiting other pages. After  Logging in the user is redirected to users list page where user data is displayed as MatCard.

 ![image](https://user-images.githubusercontent.com/42342400/148571970-49ac07bd-9de5-43a5-b60b-d0ea1b0426a0.png)

In resource list page the data is shown as MatTable.

 ![image](https://user-images.githubusercontent.com/42342400/148572002-166a4c78-96b5-4a3b-a2fb-bdc33bc23505.png)

If a user who is not logged in tries to visit any of these two pages then popup will appear telling him to login. I done it using MatDialog. After clicking on close the user is redirected to login page.

 ![image](https://user-images.githubusercontent.com/42342400/148572031-d504fcbc-937c-4950-a579-c9f90ca720e3.png)

If a logged in user tries to visit login page he will be redirected to users list page.

On clicking logout the token from local Storage is removed and user is redirected to login page.

