

# Impactful Scholar Map Based on Citation Network and Influence Numbers
- CSE6242 Final Project (22SPRING TEAM004)
- Authors: Haoting Chen, Chen Lin, Haojun Song, Zhaoyu Sun, Cheng Zhang

## PACKAGES
#### Front end:
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@material-ui/core": "^4.12.4",
    "@material-ui/icons": "^4.11.3",
    "@mui/icons-material": "^5.6.2",
    "@mui/material": "^5.6.2",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^12.1.4",
    "@testing-library/user-event": "^13.5.0",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "ag-grid-community": "^27.2.1",
    "ag-grid-react": "^27.2.1",
    "antd": "^4.19.5",
    "d3": "^4.13.0",
    "d3-svg-legend": "^2.25.6",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.0",
    "typescript": "latest",
    "web-vitals": "^2.1.4"

    1. React: our front-end framework
    2. Material UI: the library we will in the front end development
    3. AG Grid: package for data table
    4. d3: package for interactive visualization


#### Back end: 
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "sqlite3": "^5.0.4"

    1. express: our back-end framework
    2. cors: package that enable CORS(cross-origin resource sharing)
    3. sqlite3: API for node.js to manipulate sqlite3 database


## INSTALLATION
For the installation, you can change directory to '/front-end' and '/node-api' respectively, 
`npm install` to install all the packages in our package.json. If it doesn't work, please remove the 
node_modules folder and package-lock.json, and `npm install` again.


## EXECUTION
Our front end and back end use port 3000 and 5000.


For the quick start, please 
```
cd /node-api
node index.js     // install nodemon for better experience
```
to start the node.js back end, and 
```
cd /front-end
npm start
```
to start the react front end.

## DEMO VIDEO [Optional]



## Data
#### AI data:
Access the link and download the latest full dataset. 
https://api.semanticscholar.org/corpus/download/

Download the latest (2022-04-05) data from AI
```bash
wget https://s3-us-west-2.amazonaws.com/ai2-s2-research-public/open-corpus/2022-04-05/manifest.txt
wget -B https://s3-us-west-2.amazonaws.com/ai2-s2-research-public/open-corpus/2022-04-05/ -i manifest.txt
```
#### Springer data:
Download the latest springer articles dataset:  
http://scigraph.downloads.uberresearch.com/archives/current/articles.tar.gz  
  
Download the latest springer journals dataset:  
http://scigraph.downloads.uberresearch.com/archives/current/journals.tar.gz  
  
Download the latest GRID dataset:  
https://ndownloader.figshare.com/files/30895309

### Data cleaning:
Run AI_citationinfo_filter.py, Springer_paper_filter.py and journal_filter.py

### Data processing:
- Upload all the filtered data (for each research subfield) to AWS S3 and run data_processing.ipynb to get csv files of paper-to-paper and journal-to-journal relationships.  
  
- Run longest_path.py (input: paper-to-paper csv file; output: csv file of longest path for each paper).  
  
- Run journal_matrix.py (input: journal-to-journal csv file; output: csv file of adjacency matrix for journals).  
  
- Run journal_score.py (input: adjacency matrix file; output: csv file of journals' influence numbers for each subfield).  
  
- Merge all the csv files of journal scores.  
  
- Upload all the output files from the data processing part to AWS S3 and run author_final_score.ipynb to get csv files for each subfield to creat database. 
   
- Merge author.csv, author_publication.csv, articles.csv, articles.csv from all the subfields respectively and run remove_dup.py to delete duplicate entries in those merged files.  
## Database
To create database

```bash
python database.py
```
