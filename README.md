# Explanation of excercise

The focus of the exercise has been on the componentization by making the components not too large and easily testable.

Additionally I have tried not to use external libraries (a requirement requested in the exercise statement) except for axios and a routing library (wouter).

## To the test reader.

Hello how are you, my name is Athos and I hope you can understand the exercise.

I wanted to ask you to read this readme to have a little more context, as well as to ask you for feedback on the test whether you consider it good or if you think it can be improved. So please give me that little bit of feedback if possible, so I can learn from it.

## Wouter library

I have used wouter library because it is a small library that allows me to perform sufficient routing operations for this project

Wouter library minimized is 1.6kb while occupies 3.8k

## Icons

I have used react icons because it allows me a large list of icons and saves me time.

## Errors

For app crash errors, I have implemented a react error boundary that prevent app to going to blank page, making better user experience.

For http calls errors, I would use Axios interceptors. This is useful because it allows to capture all the errors of the https calls, without filling the code with catches. It also prevents you from forgetting to catch any http call errors.

## Services

I have implemented a parameterized data collection system, so that the same method can request all the data of the categories requested by the exercise.

Surely, in a larger project, it could be a good idea to make a service for each category if it is foreseen that each of these services could change in the future.

## Filters

In the filter section, three components were requested. A search box, two icons for ascending and descending sorting, and a selector.

On the search box, I have made an implementation that launches the http call to the server a few seconds after the last key pressed. This is because otherwise, if you have in mind to search for "luke", this would make four calls to the server, which is completely unnecessary, I believe that it is better, to launch the http call when we detect that the user has stopped typing. This timeout is configurable through a constants configuration file (config/config.js).

About the ascending and descending order icons:

I have added a fourth temporary element for the following reason

Although in the api documentation, there is a link where it says how the implementation would have to be done (https://www.django-rest-framework.org/api-guide/filtering/#searchfilter), I get the feeling that in the api (https://swapi.dev/api/) does not have that functionality implemented.

I have put the checkbox so you can enable sorting on the client.

NOTE: As long as the client sort function is activated, the search field will not work

This operation does not seem very interesting to me because the results that are sorted are only those that are currently being displayed on the screen.

However, I have put that checkbox to be able to perform the ordering in the client, because I am not sure if that is what was requested in the exercise.

I have created a file called orderOptions to be able to configure the elements by which they can be ordered in each of the menu sections. In each of these orderOptions elements, I have added an "isNumberType" option because depending on the data type, the function in charge of ordering the data has to work in a different way

## Data fetching

Each time the data fetching is performed, for whatever reason, the axios interceptors, is responsible for transparently for us, show the spinner and remove it when appropriate, thus removing things to keep in mind, and possible errors by forgetting to remove a spinner, or that this is not removed because the http call gave an error, and we had not caught the error.

## Responsive

The system to make the page responsive has been through the use of the css display flex and flex wrap property. I have also added a media query that changes the side menu and puts it at the top of the page.

It is an extremely simple system, but it can make it work for this example project.

## Testing

To test the application, I used the react-testing-library and react testing-library/react-hooks libraries.

The idea behind the testing I have done, is to test it from a user's point of view, trying to make the tests durable in time, and trying to test functionality and not implementation.

It could be a good idea, to make some e2e test with some cypress type library or similar.

## Internalization

Although I have not implemented it, it would be a very good idea to implement a translation system. I think it would not cost much, even if the application only has to be in one language. It would not cost much to implement and maintain, and considering the globalization, I think it could be an interesting improvement.

## Paginator

I have made the pager in such a way that it has upper and lower limits so that it does not go out of the range of possible results (according to the information returned by the api).

## Look and feel

I followed the sketch provided to me in the exercise for the application of the styles.

## Storybook

I think, it could also be interesting to implement a storybook, especially if the application is expected to grow over time, and you want to have a control of all the available components.
