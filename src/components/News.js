import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import{Grid}  from '@material-ui/core';
import {Card} from '@material-ui/core';
import {CardContent} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {CardActions} from '@material-ui/core';
import {Button} from '@material-ui/core';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import './News.css';
function News() {
    const [jsonData, setJsonData] = useState([]);
    const [newsData, setNewsData] = useState([]);
    const [compOptions, setCompOptions] = useState([]);
    const getPathColor = (percentage)=>{
      if(percentage > 50)
      return 'rgba(0, 255, 18, 0.8)'
      else
      return 'rgba(255, 0, 21, 0.8)'
    }
    const getCompanyName = (abb)=>{
        for(var i =0; i<jsonData.length;i++)
        {
            if(jsonData[i].Abbreivation === abb)
            {
                let name = jsonData[i].Name;
                if(name.substring(0,2) === '"')
                name = name.substring(2);
                if(name.substring(name.length-2,name.length) === '"')
                name = name.substring(0,name.length-2);
                //setCompanyName(name);
                //console.log(value);
                
                return name.replace(/['"]+/g, '');
            }
        }

    }
    const getScore = (abb)=>{
      for(var i = 0;i<compOptions.length; i++){
        if(compOptions[i].Name === abb){
          return compOptions[i].Score;
        }
      }
    }
    const getNewsData= async()=>{
        if(value!== '')
        fetch(`https://newsapi.org/v2/everything?q=${getCompanyName(value)}&from=2023-03-16&sortBy=popularity&pageSize=9&page=1&apiKey=3c1b9d325d4f485abe07705e1db0f6c3`)
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          console.log(value);
          if(data.articles.length>9)
          setNewsData(data.articles.slice(0,6));
          else
          setNewsData(data.articles)
          console.log(newsData)
        });
    }
      const fetchData = async () => {
        const response = await fetch('https://raw.githubusercontent.com/GaneshDev2003/arcana/main/symbol-entity-names.csv');
        const res2 = await fetch('https://raw.githubusercontent.com/GaneshDev2003/arcana/main/Sentiment_Score.csv');
        const text2 = await res2.text();
        const result2 = Papa.parse(text2, { header: true });
        setCompOptions(result2.data);
        
        const text = await response.text();
        const result = Papa.parse(text, { header: true });
        setJsonData(result.data);
      };
      useEffect(()=>{
        fetchData();
      })
    
    let companyOptions = [];
    for(var i =0; i<compOptions.length;i++)
    {
        companyOptions.push(compOptions[i].Name);
    }
    const [value, setValue]= useState('AA');
    const [inputValue, setInputValue]= useState('');
    
  return (
    <div className = 'main'>
    <Autocomplete
      
      style={{ width: 500}}
      value = {value}
      onChange={async (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
        getNewsData();
      }}
      inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
        }}
      freeSolo
      autoComplete
      autoHighlight
      options={companyOptions}
      renderInput={(params) => (
        <TextField {...params}
          style = {{backgroundColor:'white'}}
          variant="outlined"
          label="Search Box"
        />
      )}
    />
    <div >
    <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    <h3 style = {{color:'white'}}>{getCompanyName(value)}</h3>
    
    <p style={{padding: 15, color:'white'}}>Sentiment score for last quarter</p>
    <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar
                value={Math.round(getScore(value)*100)}
                text={`${Math.round(getScore(value)*100)}%`}
                style = {{display: 'inline-block'}}
                styles={buildStyles({
                  textSize: '20px',
                  pathColor: getPathColor(Math.round(getScore(value)*100)),
                  textColor: '#f88',
                  trailColor: '#f88',
                  
                })}
              />
            </div>
    </Grid>  
    <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {newsData.map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
       <Card sx={{ minWidth: 275 }} style = {{padding:10}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {newsData[index].author}
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">
        {newsData[index].title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href = {newsData[index].url}>Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
  ))}
</Grid>
    </div>
   
  </div>
  );
}

export default News