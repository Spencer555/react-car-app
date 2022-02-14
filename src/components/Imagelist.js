import React, { useState, useEffect, useMemo } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { DataList } from './ImageDataList'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";




export default function ImageList() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const fetchData = useEffect(() => {
    setLoading(true)
    setData(DataList)
    setLoading(false)

  }, [])

   useMemo(() =>  fetchData, [fetchData])
  

  return (
    <Box sx={{ overflow: 'hidden' }}>

        {data ? <p>
          <Grid sx={{ flexGrow: 1 }} container spacing={3} justifyContent="center" style={{width:'90%', margin:'auto'}}>
              {data?.map(item => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                  

                  <Card sx={{ maxWidth: 345 }} style={{marginLeft:'1em'}}>
                  
          <CardMedia
            component="img"
            height="194"
            image={item.img}
            alt={item.car}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {item.car}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.name}
            </Typography>
          </CardContent>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography >
                More Information
              </Typography>
              </AccordionSummary>
              <AccordionDetails style={{display:'flex', flexDirection:'column'}}>
              <Typography paragraph style={{padding:'0.5em'}}>
                {item.info}
              </Typography>
              <br/>
              <CardActions disableSpacing>
              <Button variant='outline'  onClick={() => {
              setData(data?.filter(car => car.id !==item.id))
            }} style={{backgroundColor:'#000', color:'#fff', padding:'0.5em', borderRadius:'0.5em'}} fullWidth>
              Delete<DeleteForeverIcon />
              </Button>
          
          </CardActions>

              </AccordionDetails>
            </Accordion>
          </Card>

                </Grid>

              ))}
            
          </Grid></p> : <p>

        </p>
        }
        {loading ? <p>
          <Grid sx={{ flexGrow: 1 }} container spacing={3} justifyContent="center" style={{width:'90%', margin:'auto'}}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(item => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  

                  <Card sx={{ maxWidth: 345 }} style={{marginLeft:'1em'}}>
                  
          <Skeleton
            variant="rectangular"
            height={194}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            <Skeleton
            style={{marginBottom:'1em'}}
            variant="rectangular"
            height={20}
            width={110}
          />
           </Typography>
            <Typography variant="body2" color="text.secondary">
            <Skeleton
            style={{marginBottom:'1em'}}
            variant="rectangular"
            height={20}
            width={150}
          />            </Typography>
          </CardContent>
          <CardActions disableSpacing>
          <Skeleton
            variant="circular"
            height={30}
            width={30}
          />         
          
            <Skeleton
            variant="circular"
            height={30}
            width={30}
          />   

           
            
          </CardActions>
           
          </Card>
                </Grid>

              ))}
            
          </Grid></p> : <p>

        </p>
        }
    
    </Box>
  );
}





  

