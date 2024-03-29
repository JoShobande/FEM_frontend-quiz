# Frontend Mentor - Frontend quiz app solution

This is a solution to the [Frontend quiz app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
This project is a simple quiz app projects Where users are able to select from a particular set of categories of questions to be tested on. e.g HTML, Javascript etc. 
Users select a category and are directed to answer questions under that category. At the end of the questions, their scores are made visble to them and are given the option to play the quiz again choosing any category of their choice.

### The challenge

Users should be able to:

- Select a quiz subject
- Select a single answer from each question from a choice of four
- See an error message when trying to submit an answer without making a selection
- See if they have made a correct or incorrect choice when they submit an answer
- Move on to the next question after seeing the question result
- See a completed state with the score after the final question
- Play again to choose another subject
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app only using their keyboard
- Change the app's theme between light and dark

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
I built this project with Nextjs 14, a react framework
- Firstly, this project is responsive.
- I started by importing the fonts i need from next google font. This folder font can be found under app/ui/fonts
- I created the Header components which consists of the background switch and which should also consist of the title of the category of questions being answered in the moment.
- I implemented  functionality of the light and dark mode switch next. I made use of Tailwind dark and light mode. Link to how to implement that below under 'useful Resources'
- I also adjusted certain things on the page like, the background picture, the text colors based on the mode (light or dark). Snippet of code below
For the implementation of the actual logic/functionality:
- i put the question sets in a json file
- i created a component for the introduction part of the question where a user selects the catgory they want to be quized on.
- to display the categories, instead of manually hardcoding the categories, i mapped through the question set array i stored in a json file and rendered the title(category) of each question set in the array.
- i initially didn't realize that the path to the icon for each category was also part of the question set in the json file so inorder to render the correct icon corresponding to the category rendered, i renamed the category icons in my images folder to match the title of the catgory. code snippet shown below.
I made use of context api to manage states in the following ways:
- to keep track of the category title selected which is rendered in the header of the website, i created a context for it so it can be easiy accessible on any page or component without having to worry about passing props.
- to keep track of the question set under the selected category

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind CSS
- [Next.js](https://nextjs.org/) - React framework


### What I learned
JSX to switch background image, text color based on the mode(light or dark) and size of the screen.
```html
 <div 
    className={`
        bg-[url('/pattern-background-mobile-light.svg')] dark:bg-[url('/pattern-background-mobile-dark.svg')]
        lg:bg-[url('/pattern-background-desktop-light.svg')] lg:dark:bg-[url('/pattern-background-desktop-dark.svg')]  
        bg-no-repeat bg-cover bg-[#F4F6FA]  
        text-dark-navy dark:bg-dark-navy dark:text-[white] h-[100vh]
      `}
>
</div>
```
code snippet to map through question set to render the category title and corresponding icon
```jsx
<div className='space-y-4'>
    {
        quizes?.quizzes.map((quiz:QuizProps)=>{
            return(
                <div 
                    className='bg-[white] dark:bg-navy rounded-[10px] flex items-center p-[20px] w-[100%] lg:w-[500px] m-auto cursor-pointer '
                    onClick={()=>dispatch({
                        type: questionContextActionTypes.updateCategoryName,
                        payload: {key:'category', data:quiz.title}
                    })}
                >  
                    <Image
                        src={`/images/${quiz.title}.svg`}
                        alt='icon'
                        className='object-fit'
                        width={32}
                        height={32}
                    />
                    <p className='text-dark-navy dark:text-white ml-[10px] text-xl'>{quiz.title}</p>
                </div>
            )
        })
    }
</div>


```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually) - This helped me implement dark and light mode for the project in a very simple way. 

- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
