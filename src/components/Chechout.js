import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Link,
  Typography,
  Button
} from "@material-ui/core";
import AddressFrom from "./AddresFrom";
import PaymentForm from "./PaymentForm";
import Revision from "./Revision";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="https://www.google.com">
        Tu sitio web
      </Link>
      {""}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) =>({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },  
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['', '', ''];

function getStepContent(step){
  switch (step){
    case 0: 
      return <AddressFrom />
    case 1: 
      return <PaymentForm />
    case 2: 
      return <Revision />
  }
}

export default function Chechout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0)

  
  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  

  return (
    <React.Fragment>
      <CssBaseline>
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              ApisBay
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
           <Typography component="h1" variant="h4" align="center">
            Checkout
           </Typography>
           <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
           </Stepper>
           <React.Fragment>
             {activeStep === steps.length ? (
               <React.Fragment>
                 <Typography variant="h5" gutterBottom>
                  Gracias por su orden
                 </Typography>
                 <Typography variant="subtitle1">
                  Su número de pedido es #2001539. Hemos enviado la confirmación a du pedido por correo electrónico
                 </Typography>
               </React.Fragment>
             ): (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.button}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Antras
                    </Button>
                  )}
                  <Button 
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Realizar Pedido' : 'Siguiente'}

                  </Button>
                </div>
              </React.Fragment>
             )}
           </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </CssBaseline>
    </React.Fragment>
  );
}
