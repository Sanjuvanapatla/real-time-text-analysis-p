# Real-Time Text Analysis and String Replacement

This is a React-based web application that allows users to input text and get real-time statistics, including the count of unique words, characters (excluding spaces and punctuation), and a string replacement functionality. The application also highlights replaced words dynamically.

#Project Netlify Link
https://gleeful-parfait-b8fbcc.netlify.app/

## Features
- **Unique Word Count**: Displays the number of unique words in the text (case-insensitive).
- **Character Count**: Displays the number of characters in the text excluding spaces and punctuation.
- **String Replacement**: Users can search for a string and replace it with another string. All occurrences of the search string will be replaced.
- **Text Highlighting (Bonus)**: Replaced words are highlighted in yellow within the text.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure that you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone this repository to your local machine using:
   ```bash
   https://github.com/Sanjuvanapatla/real-time-text-analysis-p.git
2.Navigate to the project directory:
cd text-analysis-replacement

3.Install the project dependencies:
npm install

Running the Project
Start the development server: npm start

Open your browser and visit http://localhost:3000 to access the application.
Project Structure
./src
   ./components
      -TextAnalyzer.js: The main component that handles text input, real-time analysis, and string replacement.
      -Statistics.js: Displays the unique word count and character count.
      -ReplaceSection.js: Handles the string replacement functionality.
      -index.css: Contains the CSS styles for the components.
index.js: Entry point of the React application.

#How to Use the Application
.Input Text: Start by typing text in the textarea. Real-time statistics will appear as you type.
.Unique Word Count: The number of unique words will update in real-time.
.Character Count: The count of characters (excluding spaces and punctuation) will update in real-time.
.String Replacement:Enter the string you want to search for in the first input field.
.Enter the string you want to replace it with in the second input field.
.Click the "Replace All" button to replace all occurrences of the search string.
.Bonus Feature: The replaced words will be highlighted in yellow in the textarea.

#Bonus Features

.Text Highlighting: Replaced words are wrapped in a <span> element with a yellow background to highlight them.

#Technologies Used
React (functional components with hooks)
CSS for styling and responsiveness
Responsive Design
The application is responsive and works well on different screen sizes. The textarea adjusts its size accordingly to provide a good user experience on both desktop and mobile devices.

#Future Improvements
Add options for case-insensitive string replacement.
Add more real-time text analysis features like sentence count, average word length, etc.
License
This project is licensed under the MIT License.

=>If you have any issues or want to contribute, feel free to submit a pull request or open an issue.
