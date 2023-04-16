import React from 'react'
import { Button } from '@material-ui/core'
function Home() {
  return (
    <div style = {{marginTop:'15%', padding:10}}>
        <h style = {{fontSize: 32, color:'white'}}>
            Powerful Visualizations to kickstart your stock market analysis
        </h>
        <br></br>
        <Button color = "steelBlue" variant="contained" href = "/chart">Get Started</Button>
    </div>
  )
}

export default Home