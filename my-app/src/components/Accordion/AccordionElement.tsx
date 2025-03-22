import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface AccordionProps {
    title: string;
    ariaControls: string;
    id: string;
    details: String[];
}

export const AccordionElement = (props: AccordionProps) => {
    return (<Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={props.ariaControls}
            id={props.id}
        >
            {props.title}
        </AccordionSummary>
        <AccordionDetails>
            {props.details.map((detail, index) => <Typography key={index}>{detail}</Typography>)}
        </AccordionDetails>
    </Accordion>)
}