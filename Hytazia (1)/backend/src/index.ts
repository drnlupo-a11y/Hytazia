import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import Redis from 'ioredis';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

app.use(express.json());

app.get('/health', (req,res)=> res.json({ok:true}));

// sample shop endpoint
app.get('/api/shop', async (req,res)=>{
  // replace with real DB calls
  res.json([
    { id:1, slug:'rank-vip', name:'Grade VIP', price_cents:499 },
    { id:2, slug:'crate-epic', name:'Coffre Epic', price_cents:129 }
  ]);
});

// Redis -> Socket bridge
redis.subscribe('shop:updates').catch(()=>{});
redis.on('message', (channel, message)=>{
  try{
    const payload = JSON.parse(message);
    io.emit('item_updated', payload);
  }catch(e){}
});

io.on('connection', (socket)=>{
  console.log('ws connected', socket.id);
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, ()=> console.log('backend listening on', PORT));
