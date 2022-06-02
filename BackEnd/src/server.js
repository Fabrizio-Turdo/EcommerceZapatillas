import express from 'express';
import morgan from 'morgan';
import zapatillasRoutes from './routes/zapatillas';
import cartRoutes from './routes/cart';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/zapatillas', zapatillasRoutes);
app.use('/cart', cartRoutes);




//Inicio Servidor
const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`Escuchando el puerto: ${PORT}`)
});