import * as React from 'react';
import { styled } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { DetailsStyled } from '../styles/detailsStyled';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ChevronRightIcon sx={{ fontSize: '1.3rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function TempDetails({scale}) {
  const [expanded, setExpanded] = React.useState(false);
  const celcuisDetails = {
    title: 'Quick and easy Fahrenheit to Celsius conversion',
    text: "There's a simple rule to convert Fahrenheit to Celsius that should be good enough for general use. Simply take 30 off the Fahrenheit value, and then half that number.",
    titleFormula: 'Fahrenheit to Celsius formula',
    textFormula: '°C =°F - 32 * (9/5)',
  };
  const fahrenheitDetails = {
    title: 'Quick and easy Celcuis to Fahrenheit conversion',
    text: "Celsius to Fahrenheit conversion is probably the most confusing conversion there is, but a simple °C to °F conversion is actually quite easy – just double the °C figure and add 30. This should be reasonably accurate for weather temperatures.",
    titleFormula: 'Celsius to Fahrenheit formula',
    textFormula: '°F =°C * (9/5) + 32',
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <DetailsStyled>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className='accordion__inner'
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Formula</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography className="temp-details__container" >
            <h2> {scale?celcuisDetails.title:fahrenheitDetails.title}</h2>
            {scale?celcuisDetails.text:fahrenheitDetails.text}
            <h3> {scale?celcuisDetails.titleFormula:fahrenheitDetails.titleFormula}</h3>
            {scale?celcuisDetails.textFormula:fahrenheitDetails.textFormula}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </DetailsStyled>
  );
}
