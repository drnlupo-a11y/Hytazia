CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE,
  password_hash TEXT,
  created_at TIMESTAMP DEFAULT now(),
  is_admin BOOLEAN DEFAULT false
);

CREATE TABLE minecraft_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  minecraft_uuid VARCHAR(36) UNIQUE,
  xuid TEXT,
  display_name TEXT,
  linked_at TIMESTAMP DEFAULT now()
);

CREATE TABLE shop_items (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE,
  name TEXT,
  description TEXT,
  price_cents INT,
  currency TEXT DEFAULT 'EUR',
  stock INT NULL,
  metadata JSONB,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  item_id INT REFERENCES shop_items(id),
  amount_cents INT,
  currency TEXT,
  status TEXT,
  provider TEXT,
  provider_payment_id TEXT,
  payload JSONB,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id UUID,
  action TEXT,
  target JSONB,
  created_at TIMESTAMP DEFAULT now()
);
