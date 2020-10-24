import React from "react";
import {
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

export default function AddresFrom() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
				Dirección de Envío
      </Typography>
      <Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField 
						required
						name="name"
						label="Nombres"
						fullWidth
						autoComplete="given-name"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField 
						required
						name="apellido"
						label="Apellidos"
						fullWidth
						autoComplete="family-name"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField 
						required
						name="linea1"
						label="Linea de direccion 1"
						fullWidth
						autoComplete="shipping address-line1"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField 
						required
						name="linea2"
						label="Linea de direccion 2"
						fullWidth
						autoComplete="shipping address-line2"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField 
						required
						name="ciudad"
						label="ciudad"
						fullWidth
						autoComplete="shipping address-level2"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						name="estado"
						label="Estado/Provincia/Region"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField 
						required
						name="codigo"
						label="Codigo postal"
						fullWidth
						autoComplete="shipping codigo-postal"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField 
						required
						name="pais"
						label="país"
						fullWidth
						autoComplete="shipping pais"
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel 
						required
						control={<Checkbox color="secondary" name="guardar" value="yes" />}
						label="Linea de direccion Utilice esta dirección para obtener detalles de pago"
						fullWidth
						autoComplete="shipping address-line2"
					/>
				</Grid>
			</Grid>
    </React.Fragment>
  );
}
