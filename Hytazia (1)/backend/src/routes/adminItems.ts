import { Router } from 'express';
const router = Router();

// placeholder - add auth middleware
router.post('/items', async (req,res)=>{
  // Insert item into DB, then publish update to Redis so clients update in real-time
  const item = req.body;
  // In production, validate and persist to DB
  // Publish to Redis (pseudo)
  // redis.publish('shop:updates', JSON.stringify({ type:'item', action:'create', item }));
  res.json({ ok:true, item });
});

export default router;
