import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@material-ui/core";

const PRODUCTO = [
  { name: "Producto 1", desc: "A nice thing", price: "$9.99" },
  { name: "Producto 2", desc: "A nice thing", price: "$3.99" },
];

const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "9999",
  "USA",
];

const payments = [
  { name: "Card type", detail: "visa" },
  { name: "Card Holder", detail: "Mr John Smith" },
  { name: "Card Number", detail: "xxxx-xxx-xxxx-123" },
];

const useStyles = makeStyles((theme) => ({
  ListItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Revision() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>Order summary</Typography>
      <List disablePadding>
        {PRODUCTO.map((producto) => (
          <ListItem className={classes.listItem} key={producto.name}>
            <ListItemText
              primary={producto.name}
              primary={producto.name}
              secondary={producto.desc}
            />
            <Typography variant="body2">{producto.price}</Typography>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Detalles de Pagos
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detailt}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
