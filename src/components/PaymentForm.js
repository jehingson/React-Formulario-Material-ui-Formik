import React from "react";
import {
  Grid,
  TextField,
  FormControlLabel,
  Typography,
  Checkbox,
} from "@material-ui/core";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gustteBottom>
        Metodos de pagos
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="Nombre de la Tarjeta"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="Numero de la Terjeta"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="Fecha de caducidad"
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required label="CVV" fullWidth autoComplete="cc-csc" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="guardar" value="yes" />}
            label="Recuerde los detalles de la terjeta de crédito para la próxima vez"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
